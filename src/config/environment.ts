export const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
};
