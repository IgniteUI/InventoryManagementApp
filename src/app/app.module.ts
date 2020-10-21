import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
    IgxActionStripModule,
    IgxGridModule,
    IgxDialogModule,
    IgxDividerModule,
    IgxInputGroupModule,
    IgxToastModule,
    IgxComboModule,
    IgxNavigationDrawerModule, IgxNavbarModule, IgxTooltipModule, IgxAvatarModule, IgxLayoutModule
} from 'igniteui-angular';
import { IgxBarSeriesModule,
  IgxCategoryChartModule,
  IgxCategoryXAxisModule,
  IgxCategoryYAxisModule,
  IgxColumnSeriesModule,
  IgxDataChartCategoryModule,
  IgxDataChartCoreModule,
  IgxItemLegendModule,
  IgxLegendModule,
  IgxNumericXAxisModule,
  IgxNumericYAxisModule,
  IgxPieChartModule } from 'igniteui-angular-charts';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavigationComponent
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
        IgxDividerModule,
        IgxNavigationDrawerModule,
        IgxNavbarModule,
        IgxTooltipModule,
        IgxAvatarModule,
        IgxLayoutModule,
        IgxPieChartModule,
        IgxLegendModule,
        IgxItemLegendModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxNumericXAxisModule,
        IgxNumericYAxisModule,
        IgxCategoryXAxisModule,
        IgxCategoryYAxisModule,
        IgxBarSeriesModule,
        IgxColumnSeriesModule,
        IgxCategoryChartModule,
        IgxLinearGaugeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
