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

{image:"https://www.cleverping.com/_next/image?url=%2Fwomanstanding.svg&w=3840&q=75"}