module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5e51e37a9e49d839b69d94666d2c5c81'),
  },
});
