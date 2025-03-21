module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'adminJwtSecretKey'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'apiTokenSaltKey'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'transferTokenSaltKey'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
