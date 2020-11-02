export class Product {

    get Product(): string {
        return this.product;
    }

    set Product(val) {
        this.product = val;
    }

    get SKU(): string {
        return this.sku;
    }

    set SKU(val) {
        this.sku = val;
    }

    get Supplier(): string {
        return this.supplier;
    }

    set Supplier(val) {
        this.supplier = val;
    }

    get Weight(): string {
        return this.weight;
    }

    set Weight(val) {
        this.weight = val;
    }

    get PkgDims(): string {
        return this.pkgDims;
    }

    set PkgDims(val) {
        this.pkgDims = val;
    }

    get PhysOnHand(): number {
        return this.physOnHand;
    }

    set PhysOnHand(val) {
        this.physOnHand = val;
    }

    get Available(): number {
        return this.available;
    }

    set Available(val) {
        this.available = val;
    }

    get Commited(): number  {
        return this.commited;
    }

    set Commited(val) {
        this.commited = val;
    }

    get Dropship(): boolean  {
        return this.dropship;
    }

    set Dropship(val) {
        this.dropship = val;
    }

    get Archived(): boolean  {
        return this.archived;
    }

    set Archived(val) {
        this.archived = val;
    }

    private product: string;
    private sku: string;
    private supplier: string;
    private weight: string;
    private pkgDims: string;
    private physOnHand: number;
    private available: number;
    private commited: number;
    private dropship: boolean;
    private archived: boolean;

    constructor() {
        this.product = '';
        this.sku = '';
        this.supplier = '';
        this.weight = '';
        this.pkgDims = '';
        this.physOnHand = 0;
        this.available = 0;
        this.commited = 0;
        this.dropship = false;
        this.archived = false;
    }
}
