import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from '@infragistics/igniteui-angular';
import { mainNavItems } from '../app-routing.module';

@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
    public mainNavItems = mainNavItems;

    public drawerState = {
        miniTemplate: true,
        open: true,
        pin: false
    };

    @ViewChild(IgxNavigationDrawerComponent, {static: true})
    public drawer: IgxNavigationDrawerComponent;

    constructor() {
    }

    ngOnInit(): void {
    }
}
