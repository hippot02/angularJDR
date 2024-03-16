import { ApplicationConfig } from '@angular/core';
import { RouterLink, RouterOutlet, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  FormsModule,
  provideHttpClient()]
};
