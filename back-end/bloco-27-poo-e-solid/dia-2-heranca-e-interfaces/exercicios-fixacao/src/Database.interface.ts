import ILogger from "./Logger.interface";

export default interface IDatabase {
  logger: ILogger;
  save(key: string, value: string): void;
}
