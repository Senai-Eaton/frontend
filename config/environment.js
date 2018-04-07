'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'senai-front',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {

      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV.FB = {
    appId: '151236328889136',
    xfbml: true,
    version: 'v2.12'
  };
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://corujasdev-001-site4.etempurl.com/api/usuario/autenticar',
    identificationField: 'email',
    identificationAttributeName: 'email',
    passwordField: 'senha',
    tokenPropertyName: 'token',
    refreshTokenPropertyName: 'refresh_token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyI4IiwiOCJdLCJqdGkiOiI1MjFiOTYwNmFmM2Q0Y2U2ODViYzU5ZGYyZDkwZDgwZiIsIk5vbWUiOiJTaWdhIGJlbSBDYW1pbmhvbmVpcm8iLCJlbWFpbCI6ImV1MkBnbWFpbC5jb20iLCJyb2xlIjoiRW1wcmVzYSIsIlVzZXJJZCI6IjgiLCJuYmYiOjE1MjMwNTI2OTgsImV4cCI6MTUyMzA1NjI5OCwiaWF0IjoxNTIzMDUyNjk4LCJpc3MiOiJFeGVtcGxvSXNzdWVyIiwiYXVkIjoiRXhlbXBsb0F1ZGllbmNlIn0.lRqLpnfEMAqt7nS7BImu8dwXaA9sGRhkdFNwlfe4VtE5ZePmvWhOpteLz0SbIacQsQUuZmFM_KI4TgcN-Vuu9Sq2f-0PCAC4zbtE9eExyg2VSkfFTlF2BjcV9g4CHK89JHNqv0JXocdiZk9L5P64N0U6fvYnvaxGEABNMFc-vn-zu1j6jWA07qPJoGKFa8C5VFamfibx7HPYntJq33g-b1YmId2_vVUDuFH6o0fw9M_tnEa5au3QBZghq329tnlWeX6tkIDfSv27kU3CClC2tbhOzO9T5EfBNOxGqFTVtLod0S1sWgABa6jxPISSusjZXpuTwGXv9XEd9YijR9bNaQ'
    },
  };

return ENV;
};
