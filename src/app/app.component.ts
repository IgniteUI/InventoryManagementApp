import { Component, OnInit } from '@angular/core';
import { IgxIconService } from '@infragistics/igniteui-angular';
import { finance } from '@igniteui/material-icons-extended';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    constructor(private iconService: IgxIconService) {
    }

    addIcons(): void {
        for (const icon of [...finance]) {
            this.iconService.addSvgIconFromText(icon.name, icon.value, 'imx-icons');
        }
    }

    ngOnInit(): void {
        this.addIcons();
    }
}

