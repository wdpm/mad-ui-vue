module.exports = {
  configureWebpack: {
    //  https://vue-loader.vuejs.org/guide/css-modules.html
    module: {
      rules: [
        // opt in CSS modules
        {
          test: /\.css$/,
          oneOf: [
            // match `<style module>`
            {
              resourceQuery: /module/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[local]_[hash:base64:5]',
                  },
                },
              ],
            }, // match `<style>` or `<style scoped>`
            {
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  // options: {
                  //   modules: false,
                  // },
                },
              ],
            },
          ],
        },
      ],
    },
  },
}
