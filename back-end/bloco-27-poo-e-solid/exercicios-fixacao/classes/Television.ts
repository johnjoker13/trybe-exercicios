export default class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: Array<string>;
  private _connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: Array<string>,
    connectedTo?: string
  ) {
    console.log('Inicializando Tv');
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  }

  turnOn() {
    console.log(
      `Marca: ${this._brand},
       Polegadas: ${this._size},
       Resolução: ${this._resolution},
       Conexões: ${this._connections},
       Conectado a: ${this._connectedTo}
    `);
  }

  get getConnectedTo(): string | undefined {
    return this._connectedTo;
  }

  set setConnectedTo(switchConnection: string) {
    if (!this._connections.some((connection) => connection === switchConnection)) {
      console.log('Sorry, connection unavailable!');
    }
    this._connectedTo = switchConnection;
  }

};
