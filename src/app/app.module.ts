import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
    IgxActionStripModule,
    IgxGridModule,
    IgxIconModule,
    IgxDialogModule,
    IgxDividerModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxToastModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxProgressBarModule,
    IgxComboModule,
    IgxNavigationDrawerModule, IgxNavbarModule, IgxTooltipModule, IgxAvatarModule, IgxLayoutModule, IgxCarouselModule, IgxCardModule
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
  IgxPieChartModule,
  IgxScatterSeriesModule} from 'igniteui-angular-charts';
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IgxToggleModule } from 'igniteui-angular';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavigationComponent,
    UserNavigationComponent
  ],
    imports: [
        BrowserModule,
        HammerModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        IgxActionStripModule,
        CommonModule,
        IgxToggleModule,
        FormsModule,
        IgxDropDownModule,
        IgxGridModule,
        IgxProgressBarModule,
        IgxDialogModule,
        IgxInputGroupModule,
        IgxToastModule,
        IgxIconModule,
            IgxBadgeModule,
    IgxButtonGroupModule,
        IgxComboModule,
        IgxDividerModule,
        IgxNavigationDrawerModule,
        IgxNavbarModule,
        IgxTooltipModule,
        IgxAvatarModule,
        IgxLayoutModule,
        IgxCarouselModule,
        IgxCardModule,
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
        IgxScatterSeriesModule,
        IgxLinearGaugeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
