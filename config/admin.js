module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7c465797119f79f38f929d0207751500'),
  },
});
