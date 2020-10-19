import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { PRODUCTS } from './localData';
import { Product } from './product';
import {
    IgxActionStripComponent,
    IgxCheckboxComponent,
    IgxDialogComponent,
    IgxGridComponent,
    IgxGridTransaction,
    IgxTransactionService,
    Transaction,
    IgxSummaryResult,
    GridSummaryCalculationMode,
    GridSummaryPosition,
    IgxNumberSummaryOperand,
    IgxToastComponent,
    IgxToastPosition,
} from 'igniteui-angular';


class NumberSummary {
    public operate(data: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        result.push({
            key: 'sum',
            label: 'Sum',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        return result;
    }
}

@Component({
    providers: [{provide: IgxGridTransaction, useClass: IgxTransactionService}],
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    @ViewChild('grid', {read: IgxGridComponent, static: true}) public grid: IgxGridComponent;
    @ViewChild('actionstrip') actionStrip: IgxActionStripComponent;
    @ViewChild('dialogAdd', {read: IgxDialogComponent, static: true})
    public dialog: IgxDialogComponent;
    @ViewChild('toast', {read: IgxToastComponent, static: false})
    public toast: IgxToastComponent;
    @ViewChild('checkbox', { static: true }) public checkbox: IgxCheckboxComponent;
    public data: any[];
    public product;
    public numSummary = NumberSummary;
    public position = IgxToastPosition.Middle;
    title = 'grid';
    public selectionMode = 'multiple';
    public transactionsData: Transaction[] = [];
    public searchText = '';
    public caseSensitive = false;
    public exactMatch = false;
    public density = 'cosy';

    @Input()
    public sku: string;

    constructor() {
        this.data = PRODUCTS;
    }

    ngOnInit(): void {
        this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        this.grid.transactions.onStateUpdate.subscribe(() => {
            this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        });
        this.product = new Product();
        this.grid.summaryCalculationMode = GridSummaryCalculationMode.rootLevelOnly;
        this.grid.summaryPosition = GridSummaryPosition.top;
        this.grid.showSummaryOnCollapse = false;
    }

    onMouseOver(event, grid, actionStrip): void {
        if (event.target.nodeName.toLowerCase() === 'igx-grid-cell') {
            const rowIndex = parseInt(event.target.attributes['data-rowindex'].value, 10);
            const row = grid.getRowByIndex(rowIndex);
            actionStrip.show(row);
        }
    }

    onMouseLeave(actionstrip, event?): void {
        if (!event || event.relatedTarget.nodeName.toLowerCase() !== 'igx-drop-down-item') {
            actionstrip.hide();
        }
    }

    public clearSearch(): void {
        this.searchText = '';
        this.grid.clearSearch();
    }

    public searchKeyDown(ev): void {
        if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
            ev.preventDefault();
            this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
            ev.preventDefault();
            this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public updateSearch(): void {
        this.caseSensitive = !this.caseSensitive;
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public updateExactSearch(): void {
        this.exactMatch = !this.exactMatch;
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public undo(): void {
        /* exit edit mode */
        this.grid.endEdit(/* commit the edit transaction */ false);
        this.grid.transactions.undo();
    }

    public redo(): void {
        this.grid.transactions.redo();
    }

    public commit(): void {
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

    public addProduct(): void {
        const sku = this.product.SKU;
        this.grid.addRow(this.product);
        this.grid.cdr.detectChanges();
        this.cancel();
        this.grid.cdr.detectChanges();
        let row;
        requestAnimationFrame(() => {
            const index = this.grid.filteredSortedData ? this.grid.filteredSortedData.map(rec => rec.SKU).indexOf(sku) :
                (row = this.grid.getRowByKey(sku) ? row.index : undefined);
            this.grid.navigateTo(index, -1);
        });
    }

    public cancel(): void {
        this.dialog.close();
        this.product = new Product();
    }

    public filterLowInventory(): void {
        // this.grid.clearFilter();
        // this.grid.filter("UnitsInStock", 13, IgxNumberFilteringOperand.instance().condition('lessThan'));
    }

    public toggleAll() {
        if (!this.checkbox.checked) {
            this.checkbox.checked = true;
            this.grid.selectAllRows(true);
        } else if (this.checkbox.checked) {
            this.checkbox.checked = false;
            this.grid.deselectAllRows(true);
        }
    }
}
