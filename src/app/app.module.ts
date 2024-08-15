import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppShellModule } from '@iapps/ng-dhis2-shell';
import { environment } from '../environments/environment';
import { AppWrapperComponent } from './app-wrapper.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';
import {
  ButtonModule,
  OrganisationUnitSelectorModule,
  PeriodSelectorModule,
  ReactWrapperModule,
} from '@iapps/ng-dhis2-ui';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppShellModule.forRoot({
      pwaEnabled: false,
      isDevMode: !environment.production,
    }),

    NgxDhis2HttpClientModule.forRoot({
      namespace: 'facility-search',
      version: 1,
      models: [],
    }),
    ButtonModule,
    OrganisationUnitSelectorModule,
    PeriodSelectorModule,
    ReactWrapperModule,
  ],
  declarations: [AppComponent, AppWrapperComponent],
  bootstrap: [AppWrapperComponent],
})
export class AppModule {}
