import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';

import  localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

const datePipeConfig: DatePipeConfig = {
      dateFormat: "'Data: 'dd/MM/YYYY",
      timezone: '+0000'
}

registerLocaleData(localePt, 'pt-BR' );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt_BR' 
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: datePipeConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
