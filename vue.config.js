module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://182.92.128.116/',
          ws: true,
          changeOrigin: true
        }
      }
    },
    lintOnSave:'warning'
  }