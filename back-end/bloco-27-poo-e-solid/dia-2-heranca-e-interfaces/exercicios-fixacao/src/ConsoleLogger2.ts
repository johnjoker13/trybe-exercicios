import ConsoleLogger from "./ConsoleLogger";

export default class ConsoleLogger2 extends ConsoleLogger {
  override log(param: string): void {
    console.log(`${param} 2`)
  }
};
