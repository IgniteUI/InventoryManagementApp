import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { mainNavItems } from '../app-routing.module';

@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
    public mainNavItems = mainNavItems;

    public selected = 'Avatar';

    @ViewChild(IgxNavigationDrawerComponent, {static: true})
    public drawer: IgxNavigationDrawerComponent;

    public navigate(item): void {
        this.selected = item.text;
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
