// src/components/CryptoChart.jsx
import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";

const CandleChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "transparent" },
        textColor: "gray",
      },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderColor: "#ccc",
      },
      timeScale: {
        borderColor: "#ccc",
        timeVisible: true,
        secondsVisible: false,
      },
      height: 400,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#2962FF",
      downColor: "#D32F2F",
      borderVisible: false,
      wickUpColor: "#2962FF",
      wickDownColor: "#D32F2F",
    });

    const volumeSeries = chart.addHistogramSeries({
      color: "#888",
      priceFormat: { type: "volume" },
      priceScaleId: "", // set empty to overlay
      scaleMargins: { top: 0.8, bottom: 0 },
    });

    const lineSeries1 = chart.addLineSeries({
      color: "green",
      lineWidth: 1,
    });

    const lineSeries2 = chart.addLineSeries({
      color: "red",
      lineWidth: 1,
    });

    // Dummy data
    const now = Date.now() / 1000;
    const candleData = [];
    const volumeData = [];
    const lineData1 = [];
    const lineData2 = [];

    for (let i = 0; i < 30; i++) {
      const time = Math.floor(now) - (30 - i) * 60 * 5;

      const open = 1.2 + Math.random() * 0.4;
      const close = open + (Math.random() - 0.5) * 0.3;
      const high = Math.max(open, close) + Math.random() * 0.2;
      const low = Math.min(open, close) - Math.random() * 0.2;
      const volume = Math.floor(10 + Math.random() * 50);

      candleData.push({ time, open, high, low, close });
      volumeData.push({
        time,
        value: volume,
        color: close > open ? "#2962FF" : "#D32F2F",
      });
      lineData1.push({ time, value: open + 0.1 });
      lineData2.push({ time, value: open + 0.2 });
    }

    candlestickSeries.setData(candleData);
    volumeSeries.setData(volumeData);
    lineSeries1.setData(lineData1);
    lineSeries2.setData(lineData2);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} className="w-full h-[400px]" />;
};

export default CandleChart;
