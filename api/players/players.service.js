import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';
import { Parser } from 'json2csv';

const playerCsvPath = path.join('./', 'player-csv-files')

if (!fs.existsSync(playerCsvPath)) {
  fs.mkdirSync(playerCsvPath)
}

export const parsePlayerCsv = async (csvFilePath) => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    return [jsonArray, null]
  } catch (error) {
    console.log("🚀 ~ file: players.service.js ~ line 18 ~ parsePlayerCsv ~ error", error)
    return [null, error]
  }
}
export const objectToCsv = async (playerData) => {
  try {
    // const fields = ['field1', 'field2', 'field3'];
    // const opts = { fields };
    const opts = { fields: Object.keys(playerData[0]) };
    const parser = new Parser(opts);
    const csv = parser.parse(playerData);
    console.log(csv);
    return [csv, null]
  } catch (error) {
    console.log("🚀 ~ file: players.service.js ~ line 34 ~ objectToCsv ~ error", error)
    return [null, error]
  }
}