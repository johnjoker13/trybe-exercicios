import ILogger from "./Logger.interface";

export default class ConsoleLogger implements ILogger {
  log(param: string): void {
    console.log(`${param} 1`);
  }
}
