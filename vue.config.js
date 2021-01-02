module.exports = {
  configureWebpack: {
    //  https://vue-loader.vuejs.org/guide/css-modules.html
    module: {
      rules: [
        // opt in CSS modules
        {
          test: /\.css$/,
          oneOf: [
            // 这里匹配 `<style module>`
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
            },
            // 这里匹配普通的 `<style>` 或 `<style scoped>`
            {
              use: ['vue-style-loader', 'css-loader'],
            },
          ],
        },
        // scss
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: { modules: true },
            },
            'sass-loader',
          ],
        },
      ],
    },
  },
}
