class Dato{
    constructor(descripcion, valor){
        this._decripcion = descripcion;
        this._valor = valor;
    }
    get descripcion(){
        return this._decripcion;
    }

    set descripcion(descripcion){
        this._decripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}