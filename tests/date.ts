import { makeDefineTable } from "./utils.ts";

const DATE_MAP = {
  date: new Date("2000/1/1"),
  invalidDate: new Date("invalid"),
};

const defineDateTable = makeDefineTable(DATE_MAP);

export { DATE_MAP, defineDateTable };
