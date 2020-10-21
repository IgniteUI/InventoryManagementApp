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
    IgxNavigationDrawerModule, IgxNavbarModule, IgxTooltipModule, IgxAvatarModule, IgxLayoutModule, IgxCarouselModule, IgxCardModule
} from 'igniteui-angular';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';

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
        IgxCarouselModule,
        IgxCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
