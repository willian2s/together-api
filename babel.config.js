module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/modules',
        '@controllers': './src/core',
        '@view': './src/shared',
        '@config': './src/config'
      }
    }]
  ],
  ignore: [
    '**/*.spec.js'
  ]
}
