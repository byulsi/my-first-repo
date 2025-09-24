import React, { useState } from "react";
import { fetchDaily } from "../api/finance";
import { exportToExcel } from "../utils/excel";

export default function StockExporter() {
  const [symbol, setSymbol] = useState("005930.KS");
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-09-15");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 데이터 조회
  const handleFetch = async () => {
    setLoading(true);
    try {
      const result = await fetchDaily(symbol, startDate, endDate);
      setData(result);
    } catch (err) {
      console.error(err);
      alert("데이터 조회 실패");
    } finally {
      setLoading(false);
    }
  };

  // 엑셀 내보내기
  const handleExport = () => {
    if (!data.length) {
      alert("먼저 데이터를 조회하세요");
      return;
    }
    exportToExcel(data, `${symbol}_daily`);
  };

  return (
    <div className="exporter">
      <h2>국내 증시 일봉 데이터 엑셀 추출</h2>
      <div className="inputs">
        <label>
          종목 코드:
          <input value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        </label>
        <label>
          시작일:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          종료일:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <div className="buttons">
        <button onClick={handleFetch} disabled={loading}>
          {loading ? "조회 중..." : "데이터 조회"}
        </button>
        <button onClick={handleExport}>엑셀 내보내기</button>
      </div>
    </div>
  );
}
