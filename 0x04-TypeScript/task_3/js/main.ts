// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";


const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${JSON.stringify(row)}`);
console.log();

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(newRowID, updatedRow);`);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);
console.log();

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});`);
console.log(`// Delete row id ${newRowID}`);
console.log();
