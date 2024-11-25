import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { StaticProvider } from '@angular/core';
import { RouteConsts } from './app/route-consts';

const providers: StaticProvider[] = [
  {
    provide: 'BASE_URL',
    useFactory: () => RouteConsts.base
  }
];

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule)
  .catch(console.log);
