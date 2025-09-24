import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function jsonToWorksheet(data) {
  return XLSX.utils.json_to_sheet(data);
}

export function exportToExcel(data, fileName = "stock_data") {
  const ws = jsonToWorksheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const blob = new Blob([wbout], { type: "application/octet-stream" });
  saveAs(blob, `${fileName}.xlsx`);
}
