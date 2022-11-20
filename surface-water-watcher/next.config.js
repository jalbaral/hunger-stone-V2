/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          // options: pluginOptions.options,
        },
      ],
      // experiments: {
      //   outputModule: true,
      //   syncWebAssembly: true,
      //   topLevelAwait: true,
      //   asyncWebAssembly: true,
      //   layers: true,
      //   lazyCompilation: true,
      // },
    });

    return config;
  },
};
