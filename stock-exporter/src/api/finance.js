import axios from "axios";

const BASE_URL = "http://localhost:4000/api/chart"; // 백엔드 프록시 주소로 변경

export async function fetchDaily(symbol, startDate, endDate) {
  const params = {
    interval: "1d",
    period1: Math.floor(new Date(startDate).getTime() / 1000),
    period2: Math.floor(new Date(endDate).getTime() / 1000),
  };
  const url = `${BASE_URL}/${symbol}`;
  const response = await axios.get(url, { params });
  const result = response.data.chart.result[0];
  const timestamps = result.timestamp;
  const quotes = result.indicators.quote[0];
  return timestamps.map((ts, idx) => ({
    date: new Date(ts * 1000).toISOString().slice(0, 10),
    open: quotes.open[idx],
    high: quotes.high[idx],
    low: quotes.low[idx],
    close: quotes.close[idx],
    volume: quotes.volume[idx],
  }));
}
