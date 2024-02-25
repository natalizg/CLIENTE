import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
  bootstrapApplication(AppComponent,{
    providers:[provideHttpClient(), ActivatedRoute]
  });