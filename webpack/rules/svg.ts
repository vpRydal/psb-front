export default {
  test: /\.svg$/,
  use: [{
    loader: '@svgr/webpack',
    options: {
      icon: true,
      typeScript: true,
      memo: true,
    },
  }],
};
