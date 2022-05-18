import ConsoleLogger from "./ConsoleLogger";
import IDatabase from "./Database.interface";
import ILogger from "./Logger.interface";

export default class ExampleDatabase implements IDatabase {
  constructor(public logger: ConsoleLogger) {
  }
  save(key: string, value: string) {
    return this.logger.log(key);
  }
}
