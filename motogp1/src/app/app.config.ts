import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};



// stiliziranje vozac component CSS
// ramka, shadowing, stilce...

// node modules nemj da prakjam 

// git ignore probaj

// 9 jan.