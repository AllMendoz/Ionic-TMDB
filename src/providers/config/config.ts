import { InjectionToken } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface AppConfig {
  apiUrl: string;
  apiKey: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_DI_CONFIG: AppConfig = {
  apiUrl: 'https://api.themoviedb.org/3',
  apiKey: 'b4bb6820135b22a69e4558db7380ab43'
};
