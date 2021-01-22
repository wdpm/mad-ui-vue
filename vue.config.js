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
              use: ['vue-style-loader', 'css-loader'],
            },
          ],
        },
        // {
        //   test: /\.(png|jpe?g)$/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         // Here!!!
        //         esModule: false,
        //         outputPath: 'images',
        //         publicPath: 'images',
        //         name: '[name].[ext]',
        //       },
        //     },
        //   ],
        // },
      ],
    },
  },
}
