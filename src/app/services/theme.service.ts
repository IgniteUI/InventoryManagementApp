import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from '../common/theme';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ThemeService {

    constructor(private http: HttpClient) { }

    fontsApiUrl = 'https://www.googleapis.com/webfonts/v1/webfonts';

    public getTheme(theme: Theme, themeUrl: string): Observable<any> {
        const targetUrl = this.httpUrl(theme, themeUrl);
        sessionStorage.setItem('currentThemeModel', JSON.stringify(theme));
        return this.http.get(targetUrl, {
            responseType: 'text'
        });
    }

    private httpUrl(theme: Theme, themeUrl: string): string {
        return `${themeUrl}` +
            `?schema=${theme.schema}` +
            `&colors.Primary=${theme.colors.primary.replace('#', '%23')}` +
            `&colors.Secondary=${theme.colors.secondary.replace('#', '%23')}` +
            `&colors.Surface=${theme.colors.surface.replace('#', '%23')}` +
            `&colors.Error=${theme.colors.error.replace('#', '%23')}` +
            `&colors.Success=${theme.colors.success.replace('#', '%23')}` +
            `&colors.Warn=${theme.colors.warn.replace('#', '%23')}` +
            `&colors.Info=${theme.colors.info.replace('#', '%23')}` +
            `&colors.Grays=${theme.colors.grays.replace('#', '%23')}` +
            `&typeface=${theme.typeface.family}` +
            `&scale=${theme.scale}` +
            `&roundness=${theme.roundness}` +
            `&elevation=${theme.elevation}`;
    }

    getFonts() {
        return this.http.get(this.fontsApiUrl +
            '?key=' + environment.fontsApi +
            '&sort=alpha');
    }
}
