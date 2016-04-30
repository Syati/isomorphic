let settings = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  global: {
    isDevelopment: process.env.NODE_ENV !== 'production'
  }
};

export default settings;
