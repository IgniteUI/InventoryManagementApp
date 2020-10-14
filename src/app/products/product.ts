export class Product {

    get Product() {
        return this.product;
    }
    set Product(val) {
        this.product = val;
    }
    get SKU() {
        return this.sku;
    }
    set SKU(val) {
        this.sku = val;
    }    
    get Supplier() {
        return this.supplier;
    }
    set Supplier(val) {
        this.supplier = val;
    }
    get Weight() {
        return this.weight;
    }
    set Weight(val) {
        this.weight = val;
    }
    get PkgDims() {
        return this.pkgDims;
    }
    set PkgDims(val) {
        this.pkgDims = val;
    }
    get PhysOnHand() {
        return this.physOnHand;
    }
    set PhysOnHand(val) {
        this.physOnHand = val;
    }
    get Available() {
        return this.available;
    }
    set Available(val) {
        this.available = val;
    }
    get Commited() {
        return this.commited;
    }
    set Commited(val) {
        this.commited = val;
    }

    private product: string;
    private sku: string;
    private supplier: string;
    private weight: string;
    private pkgDims: string;
    private physOnHand: number;
    private available: number;
    private commited: number;

    constructor() {
        this.product = "";
        this.sku = "";
        this.supplier = "";
        this.weight = "";
        this.pkgDims = "";
        this.physOnHand = 0;
        this.available = 0;
        this.commited = 0;
    }
}
