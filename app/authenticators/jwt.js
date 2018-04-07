import JWTAuthenticator from 'ember-simple-auth-jwt/authenticators/jwt';

export default JWTAuthenticator.extend({
  serverTokenEndpoint: 'http://corujasdev-001-site4.etempurl.com/api/usuario/autenticar',
  identificationAttributeName: 'email',
  passwordAttributeName: 'senha',
});