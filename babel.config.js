module.exports = {
  // ATTENTION!!
  // Preset ordering is reversed, so `@babel/typescript` will called first
  // Do not put `@babel/typescript` before `@babel/env`, otherwise will cause a compile error
  // See https://github.com/babel/babel/issues/12066
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/transform-runtime',
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        '@babel/transform-typescript',
      ],
    },
  ],
  env: {
    utils: {
      ignore: [
        '**/*.test.ts',
        '**/*.spec.ts',
      ],
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['mad-ui'],
            alias: {
              '@mad-ui': 'mad-ui/lib',
            },
          },
        ],
      ],
    },
  },
}
