import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';

import  localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DecimalPipeComponent } from './decimal-pipe/decimal-pipe.component';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ObsComObjetoComponent } from './async-pipe/components/obs-com-objeto/obs-com-objeto.component';
import { HttpClientModule } from '@angular/common/http';
import { ObsComArrayComponent } from './async-pipe/components/obs-com-array/obs-com-array.component';

const datePipeConfig: DatePipeConfig = {
      dateFormat: "'Data: 'dd/MM/YYYY",
      timezone: '+0000'
}

registerLocaleData(localePt, 'pt-BR' );

@NgModule({
  declarations: [
    AppComponent,
    DecimalPipeComponent,
    CurrencyPipeComponent,
    AsyncPipeComponent,
    ObsComObjetoComponent,
    ObsComArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt_BR' },

    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },

    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: datePipeConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
