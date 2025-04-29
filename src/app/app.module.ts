import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth.interceptor';
import { CurrencyFormatPipe } from './shared/pipes/currency-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { DashboardModule } from './dashboard/dashboard.module';
import { InvestmentFormModule } from './investment-form/investment-form.module';
import { StoreService } from './store/store.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    InvestmentFormModule,
    CurrencyFormatPipe,
    HighlightDirective,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatIconModule
    
  ],
  // exports: [
  //   CurrencyFormatPipe,
  //   HighlightDirective
  // ],
  providers: [
    StoreService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
