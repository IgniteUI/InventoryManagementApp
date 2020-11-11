import { Colors, ITheme, IFontContainer } from './interfaces';
import { NON_MATERIAL_THEMES } from './default-themes-config';

export class Theme implements ITheme {
    globalTheme: string;
    colors: Colors;
    typeface: IFontContainer;
    roundness?: number;
    elevation?: boolean;

    constructor(globalTheme, colors, typeface, roundness = null, elevation = null) {
        this.globalTheme = globalTheme;
        this.colors = colors;
        this.typeface = typeface;
        this.roundness = roundness;
        this.elevation = elevation;
    }

    private get nonMaterialKey(): string {
        let nmk = null;
        NON_MATERIAL_THEMES.forEach(t => {
            if (this.globalTheme.indexOf(t) >= 0) {
                nmk = t;
            }
        });
        return nmk;
    }

    private get schemaKey(): string {
        const nmk = this.nonMaterialKey;
        return nmk ? `-${nmk}` : '';
    }

    private get shade(): string {
        return this.globalTheme.indexOf('dark') < 0 ? 'light' : 'dark';
    }

    /* Returns the schema for the igx-theme mixing based on global theme
        Valid values look like this:
        light-schema
        dark-schema
        light-fluent-schema
        dark-fluent-schema
        light-bootstrap-schema
        dark-bootstrap-schema
    */
    public get schema(): string {
        return `${this.shade}${this.schemaKey}-schema`;
    }

    /* Returns the typescale for the global theme
        Valid values look like this
        default-type-scale
        fluent-type-scale
        bootstrap-type-scale
    */
    public get scale(): string {
        return `${this.nonMaterialKey || 'default'}-type-scale`;
    }

    generatePalette(): string {
        return `igx-palette(
    $primary: ${this.colors.primary},
    $secondary: ${this.colors.secondary},
    $surface: ${this.colors.surface},
    $error: ${this.colors.error},
    $success: ${this.colors.success},
    $warn: ${this.colors.warn},
    $info: ${this.colors.info},
    $grays: ${this.colors.grays}
)`;
    }

    generateThemeContent(): string {
        return `~@import '@infragistics/igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
$custom-palette: ${this.generatePalette()};
@include igx-theme($palette: $custom-palette, $schema: $${this.schema}, $roundness: ${this.roundness}, $elevation: ${this.elevation});
@include igx-typography($font-family: "${this.typeface.family.replace(/"/g, '\\"')}", $type-scale: $${this.scale});
`;
    }
}
