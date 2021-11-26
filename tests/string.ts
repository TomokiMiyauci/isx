import { makeDefineTable } from "../tests/utils.ts";

const STRING_MAP = {
  "": "",
  "YYYYMMDD": "2021/1/1",
  "YYYYMMDD hhmmss": "2022/1/1 00:00:00",
  "ISO 8601": "2021-12-31T15:00:00.000Z",
  "Date string": "Fri Nov 26 2021",
};
const defineStringTable = makeDefineTable(STRING_MAP);

export { defineStringTable };
