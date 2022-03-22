module.exports = {
  client: {
    service: {
      name: 'HTS API',
      url: 'http://hts.local/v1/graphql',
      headers: {
        'x-hasura-admin-secret': 'jopa',
      },
    },
  },
};
