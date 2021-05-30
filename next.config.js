module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://clever-admin.vercel.app/:path*',
      },
    ]
  },
  env: {
    MONGO_URI:
      'mongodb+srv://usertest:usertest@cluster0.uvl5l.mongodb.net/cleverping?retryWrites=true&w=majority',
  },
  exportTrailingSlash: true,
};
