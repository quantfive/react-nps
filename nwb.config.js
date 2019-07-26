module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'nps',
      externals: {
        react: 'React'
      }
    }
  }
}
