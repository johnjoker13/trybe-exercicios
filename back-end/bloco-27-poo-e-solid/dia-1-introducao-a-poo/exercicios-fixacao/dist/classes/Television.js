"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tv {
    constructor(brand, size, resolution, connections, connectedTo) {
        console.log('Inicializando Tv');
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        this._connectedTo = connectedTo;
    }
    turnOn() {
        console.log(`Marca: ${this._brand},
       Polegadas: ${this._size},
       Resolução: ${this._resolution},
       Conexões: ${this._connections},
       Conectado a: ${this._connectedTo}
    `);
    }
    get getConnectedTo() {
        return this._connectedTo;
    }
    set setConnectedTo(switchConnection) {
        if (!this._connections.some((connection) => connection === switchConnection)) {
            console.log('Sorry, connection unavailable!');
        }
        this._connectedTo = switchConnection;
    }
}
exports.default = Tv;
;
