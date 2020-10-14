import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
//import { ThemingWidgetModule } from '@infragistics/igniteui-theming-widget/theming-widget-module';
import { IgxActionStripModule, IgxGridModule, IgxDialogModule, IgxDividerModule, IgxInputGroupModule, IgxToastModule, IgxComboModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxActionStripModule,
    IgxGridModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxToastModule,
    IgxComboModule,
    IgxDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
