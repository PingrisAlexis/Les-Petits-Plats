const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Configuration générée en partie depuis : https://createapp.dev/webpack/no-library--babel--copywebpackplugin--eslint--sass
 */

const config = (context, { mode }) => {
	const isProduction = mode === 'production';
	console.log({ mode });

	return {
		/**
		 * ENTRY
		 * ====
		 *
		 * Point d'entrée de l'application
		 *
		 * @doc https://webpack.js.org/configuration/entry-context/#entry
		 *
		 * On crée 2 points d'entrée ici, un pour le JS et un pour le SCSS, afin de traiter le SCSS -> CSS
		 */
		entry: ['./src/index.js', './src/scss/index.scss'],

		/**
		 * OUTPUT
		 * ====
		 *
		 * Définition du dossier et du fichier de sortie après compilation par Webpack
		 *
		 * @doc https://webpack.js.org/configuration/output/
		 */
		output: {
			/**
			 * A partir du dossier courant (racine du projet), on sélectionne (ou crée) un dossier "dist"
			 */
			path: path.resolve(__dirname, 'dist'),
			/**
			 * Notre fichier JS de sortie s'appellera "bundle.js"
			 */
			filename: 'bundle.js'
		},

		/**
		 * DEV SERVER
		 * ====
		 *
		 * Génère un live-sever local sur http://localhost:9000 qui dessert le dossier "dist"
		 *
		 * @doc https://webpack.js.org/configuration/dev-server/
		 */
		devServer: {
			static: {
				directory: path.join(__dirname, 'assets'),
			},
			port: 9000,
		},

		/**
		 * LOADERS
		 * ====
		 *
		 * Les loaders permettent d'interpréter et d'appliquer des transformations sur des types de fichiers spécifiques.
		 *
		 * Exemples :
		 * - Compiler du SCSS vers du CSS
		 * - Optimiser et compresser des images
		 * - Optimiser et minifier du CSS
		 * - Optimiser et minifier du SVG
		 * - etc.
		 *
		 * @doc https://webpack.js.org/concepts/loaders/#configuration
		 */
		module: {
			rules: [
				/**
				 * Pour tous les fichiers ".js", on appliquera des transformations avec Babel
				 * (afin notamment de transformer les classes et le JS moderne en JS compréhensible par les navigateurs)
				 *
				 * Les transformations utiliseront la config définie dans le fichier ".babelrc" à la racine du projet
				 */
				{
					test: /\.js$/,
					use: 'babel-loader',
					exclude: /node_modules/
				},

				/**
				 * Pour les fichiers ".scss", on applique d'autres transformations afin de compiler notre SCSS en CSS
				 */
				{
					test: /\.scss$/,
					/**
					 * Les loaders sont exécutés dans l'ordre inverse du tableau :
					 *
					 * Ici, on exécute d'abord 'sass-loader', puis 'css-loader', puis 'style-loader / MiniCssExtractPlugin.loader'
					 */
					use: [
						isProduction
							/** En production, on veut extraire un fichier CSS séparé */
							? MiniCssExtractPlugin.loader
							/** Pendant la phase de développement, on laisse Webpack gérer le CSS dynamiquement */
							: 'style-loader',
						{
							loader: 'css-loader',
							/**
							 * Les sourceMaps permettent d'avoir une référence vers la ligne du fichier SCSS source même si celui-ci est minifié et compilé en CSS
							 * Ainsi, dans les devtools de Chrome, lorsqu'on inspecte un élément, on pourra voir la ligne précise du CSS associé : "_colors.scss: 3".
							 *
							 * C'est super pratique pour debugger pendant le développement !
							 *
							 * On les active généralement seulement pendant la phase de développement, c'est pourquoi je les désactive pour la production
							 */
							options: {
								sourceMap: !isProduction
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: !isProduction
							}
						}
					]
				}
			]
		},

		/**
		 * PLUGINS
		 * ====
		 *
		 * On peut ajouter différents plugins Webpack
		 *
		 * @doc https://webpack.js.org/configuration/plugins/#plugins
		 */
		plugins: [
			/**
			 * Ici, le plugin "CopyPlugin" permet de copier des fichiers/dossiers vers le dossier "dist" lors de la phase de build
			 *
			 * @doc https://www.npmjs.com/package/copy-webpack-plugin
			 * @doc https://webpack.js.org/plugins/copy-webpack-plugin/
			 */
			new CopyPlugin({
				patterns: [
					/**
					 * On copie le contenu du dossier "assets" vers "dist"
					 */
					{ from: 'assets' },
				],
			}),
			/**
			 * Le plugin HtmlWebpackPlugin permet d'effectuer des transformations sur les fichiers HTML
			 *
			 * Ici, on l'utilise pour injecter les <link> et <script> dynamiquement
			 *
			 * @doc https://www.npmjs.com/package/html-webpack-plugins
			 */
			new HtmlWebpackPlugin({
				template: './src/index.html',
				inject: true,
				minify: false
			}),
		].concat(
			isProduction ? [
				/**
				 * Lorsque notre loader "MiniCssExtractPlugin" sera utilisé pour le build de production, on définit le nom du fichier CSS de sortie
				 */
				new MiniCssExtractPlugin({
					filename: 'css/styles.css',
					chunkFilename: '[id].css',
				}),
			] : []
		),

		devtool: isProduction ? 'source-map' : 'inline-source-map',
	}
};

module.exports = config;
