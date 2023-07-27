export class Item {
    // private _id: number;
    // private _name: String;

    constructor(private _id: number, private _name: String, private _qty: number, private _uom: String)
    {
        this._id = _id;
        this._name = _name;
        this._qty = _qty;
        this._uom = _uom;
    }

    public get id(): number {
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }

    public get name(): String{
        return this._name;
    }
    public set name(name: String){
        this._name = name;
    }

    public get qty(): number{
        return this._qty;
    }
    public set qty(Qty: number){
        this._qty = Qty;
    }

    public get uom(): String{
        return this._uom;
    }
    public set uom(Uom: String){
        this._uom = Uom;
    }
}
