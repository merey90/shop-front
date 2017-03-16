import { Angular2TokenOptions } from 'angular2-token/lib/angular2-token.model.d';

export class MockSessionService{
  apiBase: string;
  private _options :Angular2TokenOptions;
  init(options: Angular2TokenOptions):void{
    let defaultOptions = {
        apiPath: null,
        apiBase: null,
        signInPath: 'auth/sign_in',
        signInRedirect: null,
        signInStoredUrlStorageKey: null,
        signOutPath: 'auth/sign_out',
        validateTokenPath: 'auth/validate_token',
        signOutFailedValidate: false,
        registerAccountPath: 'auth',
        deleteAccountPath: 'auth',
        registerAccountCallback: window.location.href,
        updatePasswordPath: 'auth',
        resetPasswordPath: 'auth/password',
        resetPasswordCallback: window.location.href,
        userTypes: null,
        oAuthBase: window.location.origin,
        oAuthPaths: {
            github: 'auth/github'
        },
        oAuthCallbackPath: 'oauth_callback',
        oAuthWindowType: 'newWindow',
        oAuthWindowOptions: null,
        globalOptions: {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    };
    this._options = Object.assign(defaultOptions, options);
  }

  getApiBase():string{
    return this._options.apiBase;
  }
}
