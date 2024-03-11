const config = {
  user: "sa",
  password: "qwerty@123",
  server: "localhost",
  database: "userdb",
  options: {
    trustedConnection: true,
    encrypt: true, // Use encryption
    trustServerCertificate: true, // Trust self-signed certificate
  },

  port: 1433,
};
module.exports = config;
