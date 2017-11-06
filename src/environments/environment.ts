// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  aboutServiceEndpoint: 'api/about',
  contactServiceEndpoint: 'api/contacts',
  companyServiceEndpoint: 'api/company',
  countryServiceEndpoint: 'api/country',
  loggerServiceEndpoint: 'api/logger',
  questionServiceEndpoint: 'api/formQuestions',
  vatServiceEndpoint: 'api/vat',
  cacheExpiryMilliseconds: 5 * 60 * 1000,  // 5 minutes
  cacheableEndpoints: [
    'api/about',
    'api/contacts',
    'api/country',
    'api/vat',
    'api/formQuestions'
  ]
};

