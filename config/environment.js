'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'evea-client',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: {
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:7010';
  }

  if (environment === 'test') {
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://evea-dsi.herokuapp.com';
  }

  return ENV;
};
