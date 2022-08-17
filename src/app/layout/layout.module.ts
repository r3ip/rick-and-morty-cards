import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MatCardModule } from '@angular/material/card';

import { CardsComponent } from './components/cards/cards.component';
import { LayoutComponent } from './layout.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    LayoutComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
      }
  })
  ]
})
export class LayoutModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http , './assets/i18n/', '.json');
}
