import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    ISelectionEventArgs,
    NoOpScrollStrategy,
    VerticalAlignment
} from '@infragistics/igniteui-angular';
import { ITheme, IThemeStyleSelectedEventArgs } from '../common/interfaces';
import {
    MATERIAL_LIGHT,
    MATERIAL_DARK,
    FLUENT_LIGHT,
    FLUENT_DARK,
    BOOTSTRAP_LIGHT,
    BOOTSTRAP_DARK,
    INDIGO_LIGHT,
    INDIGO_DARK
} from '../common/default-themes-config';

import { Theme } from '../common/theme';
import { ThemeService } from '../services/theme.service';
import { environment } from '../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    providers: [ThemeService],
    selector: 'app-user-navigation',
    templateUrl: './user-navigation.component.html',
    styleUrls: ['./user-navigation.component.scss']
})
export class UserNavigationComponent implements OnInit {

    @ViewChild('dropDown', { static: true }) public dropDown: IgxDropDownComponent;
    @Input()
    public theme: Theme;
    public title = "Products";

    public themes: Array<any> = [
        {
            globalTheme: 'igx-theme',
            name: 'Material Light',
            colors: MATERIAL_LIGHT.colors,
            typeface: MATERIAL_LIGHT.typeface
        },
        {
            globalTheme: 'igx-dark-theme',
            name: 'Material Dark',
            colors: MATERIAL_DARK.colors,
            typeface: MATERIAL_DARK.typeface
        },
        {
            globalTheme: 'igx-fluent-theme',
            name: 'Fluent Light',
            colors: FLUENT_LIGHT.colors,
            typeface: FLUENT_LIGHT.typeface
        },
        {
            globalTheme: 'igx-fluent-dark-theme',
            name: 'Fluent Dark',
            colors: FLUENT_DARK.colors,
            typeface: FLUENT_DARK.typeface
        },
        {
            globalTheme: 'igx-bootstrap-theme',
            name: 'Bootstrap Light',
            colors: BOOTSTRAP_LIGHT.colors,
            typeface: BOOTSTRAP_LIGHT.typeface
        },
        {
            globalTheme: 'igx-bootstrap-dark-theme',
            name: 'Bootstrap Dark',
            colors: BOOTSTRAP_DARK.colors,
            typeface: BOOTSTRAP_DARK.typeface
        },
        {
            globalTheme: 'igx-indigo-light-theme',
            name: 'Indigo Light',
            colors: INDIGO_LIGHT.colors,
            typeface: INDIGO_LIGHT.typeface
        },
        {
            globalTheme: 'igx-indigo-dark-theme',
            name: 'Indigo Dark',
            colors: INDIGO_DARK.colors,
            typeface: INDIGO_DARK.typeface
        }
    ];

    @Output()
    public themeStyleSelected = new EventEmitter<IThemeStyleSelectedEventArgs>();

    public isLoading = false;

    protected defaultConfigs = new Map<string, any>([
        ['igx-theme', MATERIAL_LIGHT],
        ['igx-dark-theme', MATERIAL_DARK],
        ['igx-fluent-theme', FLUENT_LIGHT],
        ['igx-fluent-dark-theme', FLUENT_DARK],
        ['igx-bootstrap-theme', BOOTSTRAP_LIGHT],
        ['igx-bootstrap-dark-theme', BOOTSTRAP_DARK],
        ['igx-indigo-light-theme', INDIGO_LIGHT],
        ['igx-indigo-dark-theme', INDIGO_DARK]
    ]);

    public themeUrl = environment.themeStylesheetEndpoint;

    @Output()
    public themeChange = new EventEmitter<string>();


    constructor(private router:  Router, private themeService: ThemeService, private cdr: ChangeDetectorRef) {
        router.events.subscribe((event) => (event instanceof NavigationEnd) && this.handleRouteChange())
    }

    private handleRouteChange() {
        let routerPath = this.router.url.substring(1);
        this.title = routerPath.charAt(0).toUpperCase() + routerPath.slice(1);
      };

    public overlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy({
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalStartPoint: VerticalAlignment.Bottom
        }),
        scrollStrategy: new NoOpScrollStrategy(),
        closeOnOutsideClick: false
    };

    public onThemeSelectionHandler(event: ISelectionEventArgs): void {
        const newSelection = event.newSelection.value;
        this.themeStyleSelected.emit({newValue: newSelection});
        this.resetTheme(newSelection);
    }

    public onDropDownClosing(event: any): void {
        event.cancel = this.isLoading ? true : false;
    }

    ngOnInit(): void {
        // this.resetTheme('igx-indigo-light-theme');
        document.body.classList.add('igx-indigo-light-theme');
    }

    get globalTheme(): string {
        return this.theme ? this.theme.globalTheme : '';
    }

    public getCurrentPrimaryColor(theme: string): string {
        if (theme === '') {
            return;
        } else if (theme === this.globalTheme) {
            return this.theme.colors.primary;
        } else {
            return this.themes.find(x => x.globalTheme === theme).colors.primary;
        }
    }

    public getCurrentSecondaryColor(theme: string): string {
        if (theme === '') {
            return;
        } else if (theme === this.globalTheme) {
            return this.theme.colors.secondary;
        } else {
            return this.themes.find(x => x.globalTheme === theme).colors.secondary;
        }
    }

    public resetTheme(theme: string): void {
        this.setDefaultThemeConfig(theme);
        this.getTheme();
        this.cdr.detectChanges();
    }

    protected getDefaultThemeConfig(theme: string): Theme {
        const config = this.defaultConfigs.get(theme);
        return new Theme(theme,
            Object.assign({}, config.colors),
            config.typeface,
            null,
            null
        );
    }

    protected setDefaultThemeConfig(theme: string): void {
        this.theme = this.getDefaultThemeConfig(theme);
    }

    private getTheme(): void {
        this.isLoading = true;
        this.cdr.detectChanges();
        this.themeService.getTheme(this.theme, this.themeUrl)
            .subscribe({
                next: (data) => {
                    this.isLoading = false;
                    this.themeChange.emit(data);
                    this.dropDown.close();
                    this.cdr.detectChanges();

                    //Set body's class attribute
                    let bodyClasses = document.body.classList;
                    bodyClasses.forEach(el => { if(el.startsWith('igx') && el.includes('theme')) {
                        bodyClasses.remove(el)}});
                    bodyClasses.add(this.theme.globalTheme);

                    document.querySelectorAll('style').forEach(element => { if(element.getAttribute('id') === "igniteui-theme") {
                        element.remove()}});
                    const style = document.createElement('style');
                    style.setAttribute('id','igniteui-theme');
                    style.textContent = data;
                    document.head.insertBefore(style, document.head.lastElementChild);
                },
                error: () => {
                    this.isLoading = false;
                    this.cdr.detectChanges();
                    if (!this.themeUrl) {
                        throw new Error('Please set \'theme-url\' property in order for the widget to get new theme styles!');
                    }
                }
            });
    }
}
