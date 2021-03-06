const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const merge = require('webpack-merge');
const parts = require('./libs/parts');


const TARGET = process.env.npm_lifecycle_event;
const pkg = require('./package.json');
process.env.BABEL_ENV = TARGET;


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  images: path.join(__dirname, 'app/assets/images')
};

const common = {
  entry: {
    app: PATHS.app,
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: PATHS.build,
    filename: '[name].[hash].js',
    chunkFilename: '[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: 'M A D E b y H U M A N',
      meta: {
        description: "Music for Cannibals",
      },
      links: [
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        }
      ],
      mobile: true,
      appMountId: 'root',
      inject: false
    })
  ],
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /(node_modules|bower_components)/,
        loaders: ["babel-loader"],
        include: PATHS.app
      },
      { test: /\.json$/, 
        loader: 'json' 
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: PATHS.images
      },
      {
        test: /\.svg$/,
        loader: 'file',
        include: PATHS.images
      },
      {
        test: /\.otf$/,
        loader: 'url?limit=50000',
        include: PATHS.fonts
      }
    ]
  }
};

var config; 

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common, 

      {
        devtool: 'source-map'
      }, 
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.minify(),
      parts.extractCSS(PATHS.app)
    );
    break;
  default:
    config = merge(
      common, 

      { 
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.app), 
      parts.devServer({
        host: process.env.HOST,
        port: 8000
      })
    );
}

module.exports = validate(config, {
  quiet: true
});
