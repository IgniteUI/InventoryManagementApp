import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { PRODUCTS } from './localData';
import { Product } from "./product";
import { IgxActionStripComponent, ConnectedPositioningStrategy, IgxColumnComponent, IgxDialogComponent, IgxGridComponent, IgxGridTransaction, IgxTransactionService, Transaction,
  IgxSummaryResult, HorizontalAlignment, GridSummaryCalculationMode, GridSummaryPosition, IgxNumberSummaryOperand,
  IgxToastComponent, IgxToastPositionEnum, IgxNumberFilteringOperand, ISelectionEventArgs, NoOpScrollStrategy, VerticalAlignment } from 'igniteui-angular';
import {
    MATERIAL_LIGHT, MATERIAL_DARK, FLUENT_LIGHT, FLUENT_DARK, BOOTSTRAP_LIGHT,
    BOOTSTRAP_DARK, INDIGO_LIGHT, INDIGO_DARK
} from '../common/default-themes-config';
import { Theme } from '../common/theme';
import { IThemeStyleSelectedEventArgs } from '../common/interfaces';
import { ThemeService } from '../services/theme.service';
import { environment } from '../../environments/environment';

  class NumberSummary {
    public operate(data: any[]): IgxSummaryResult[] {
      const result = [];
      result.push({
        key: "min",
        label: "Min",
        summaryResult: IgxNumberSummaryOperand.min(data)
        });
      result.push({
          key: "max",
          label: "Max",
          summaryResult:  IgxNumberSummaryOperand.max(data)
        });
      result.push({
          key: "sum",
          label: "Sum",
          summaryResult: IgxNumberSummaryOperand.sum(data)
        });
      return result;
    }
  }

@Component({
  providers: [ThemeService, { provide: IgxGridTransaction, useClass: IgxTransactionService }],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @ViewChild("grid", { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
  @ViewChild('actionstrip') actionStrip: IgxActionStripComponent;
  @ViewChild("dialogAdd", { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;
  @ViewChild("toast", { read: IgxToastComponent, static: false })
  public toast: IgxToastComponent;
  public data: any[];
  public product;
  public numSummary = NumberSummary;
  public position = IgxToastPositionEnum.middle;
  title = 'grid';
  public selectionMode = "multiple";
  public transactionsData: Transaction[] = [];
  public searchText: string = "";
  public caseSensitive: boolean = false;
  public exactMatch: boolean = false;
  public density = "cosy";

  @Input()
  public sku: string;
  @Input()
    public theme: Theme;
  public overlaySettings = {
    positionStrategy: new ConnectedPositioningStrategy({
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    }),
    scrollStrategy: new NoOpScrollStrategy(),
    closeOnOutsideClick: false
  };
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
      ['igx-indigo-dark-theme', INDIGO_DARK],
  ]);

  public themeUrl = environment.themeStylesheetEndpoint;

  @Output()
  public themeChange = new EventEmitter<string>();


  constructor(private themeService: ThemeService, private cdr: ChangeDetectorRef) { 
    this.data = PRODUCTS;
  }

  ngOnInit() {
    this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        this.grid.transactions.onStateUpdate.subscribe(() => {
            this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        });
    this.product = new Product();
    this.grid.summaryCalculationMode = GridSummaryCalculationMode.childLevelsOnly;
    this.grid.summaryPosition = GridSummaryPosition.top;
    this.grid.showSummaryOnCollapse = true;
  }

  onMouseOver(event, grid, actionStrip) {
    if (event.target.nodeName.toLowerCase() === 'igx-grid-cell') {
        const rowIndex = parseInt(event.target.attributes['data-rowindex'].value, 10);
        const row = grid.getRowByIndex(rowIndex);
        actionStrip.show(row);
    }
  }

  onMouseLeave(actionstrip, event?) {
      if (!event || event.relatedTarget.nodeName.toLowerCase() !== 'igx-drop-down-item') {
          actionstrip.hide();
      }
  }

  public clearSearch() {
    this.searchText = "";
    this.grid.clearSearch();
  }

  public searchKeyDown(ev) {
      if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
          ev.preventDefault();
          this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
      } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
          ev.preventDefault();
          this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
      }
  }

  public updateSearch() {
      this.caseSensitive = !this.caseSensitive;
      this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  public updateExactSearch() {
      this.exactMatch = !this.exactMatch;
      this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }

  public undo() {
    /* exit edit mode */
    this.grid.endEdit(/* commit the edit transaction */ false);
    this.grid.transactions.undo();
  }

  public redo() {
      this.grid.transactions.redo();
  }

  public commit() {
      this.grid.transactions.commit(this.data);
  }

  public get undoEnabled(): boolean {
    return this.grid.transactions.canUndo;
  }

  public get redoEnabled(): boolean {
      return this.grid.transactions.canRedo;
  }

  public get hasTransactions(): boolean {
      return this.grid.transactions.getAggregatedChanges(false).length > 0;
  }

  public addProduct() {
    const sku = this.product.SKU;
    this.grid.addRow(this.product);
    this.grid.cdr.detectChanges();
    this.cancel();
    this.grid.cdr.detectChanges();
    let row;
    requestAnimationFrame(() => {
        const index = this.grid.filteredSortedData ? this.grid.filteredSortedData.map(rec => rec['SKU']).indexOf(sku) :
            (row = this.grid.getRowByKey(sku) ? row.index : undefined);
        this.grid.navigateTo(index, -1);
    });
  }

  public cancel() {
      this.dialog.close();
      this.product = new Product();
  }

  public filterLowInventory()
  {
    //this.grid.clearFilter();
    //this.grid.filter("UnitsInStock", 13, IgxNumberFilteringOperand.instance().condition('lessThan'));
  }

  get globalTheme() {
    return this.theme ? this.theme.globalTheme : '';
  }

  public getCurrentPrimaryColor(theme: string) {
    if (theme === '') {
        return;
    } else if (theme === this.globalTheme) {
        return this.theme.colors.primary;
    } else {
        return this.themes.find(x => x.globalTheme === theme).colors.primary;
    }
  }

  public getCurrentSecondaryColor(theme: string) {
    if (theme === '') {
        return;
    } else if (theme === this.globalTheme) {
        return this.theme.colors.secondary;
    } else {
        return this.themes.find(x => x.globalTheme === theme).colors.secondary;
    }
  }

  public onThemeSelectionHandler(event: ISelectionEventArgs) {
    const newSelection = event.newSelection.value;
    this.themeStyleSelected.emit({ newValue: newSelection });
    this.resetTheme(newSelection);
  }

  public resetTheme(theme: string) {
    this.setDefaultThemeConfig(theme);
    this.getTheme();
    this.cdr.detectChanges();
  }

  protected getDefaultThemeConfig(theme: string) {
      const config = this.defaultConfigs.get(theme);
      return new Theme(theme,
          Object.assign({}, config.colors),
          config.typeface,
          null,
          null
      );
  }

  protected setDefaultThemeConfig(theme: string) {
      this.theme = this.getDefaultThemeConfig(theme);
  }

  private getTheme() {
    this.isLoading = true;
    this.cdr.detectChanges();
    this.themeService.getTheme(this.theme, this.themeUrl)
        .subscribe({
            next: (data) => {
                this.isLoading = false;
                this.themeChange.emit(data);
                this.cdr.detectChanges();

                //document.querySelectorAll('style').forEach(element => element.remove());

                var style = document.createElement('style');
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
