import React, { useEffect, useRef } from "react";
import {
  createChart,
  CrosshairMode,
} from "lightweight-charts";

const CandleChart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 800,
      height: 300,
      layout: {
        background: { color: "#fff" },
        textColor: "#333",
      },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#ec6c5c",
      downColor: "#4b3f92",
      borderVisible: false,
      wickUpColor: "#ec6c5c",
      wickDownColor: "#4b3f92",
    });

    const lineSeriesRed = chart.addLineSeries({
      color: "#ec6c5c",
      lineWidth: 1,
    });

    const lineSeriesGreen = chart.addLineSeries({
      color: "#57b560",
      lineWidth: 1,
    });

    const lineSeriesBlack = chart.addLineSeries({
      color: "#111",
      lineWidth: 2,
    });

    const volumeSeries = chart.addHistogramSeries({
      color: "#26a69a",
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      },
    });

    // Sample intraday timestamp data (Unix time in seconds)
    const candles = [
      { time: 1718612400, open: 1.3, high: 1.45, low: 1.25, close: 1.35 },
      { time: 1718616000, open: 1.35, high: 1.42, low: 1.28, close: 1.31 },
      { time: 1718619600, open: 1.31, high: 1.37, low: 1.26, close: 1.36 },
      { time: 1718623200, open: 1.36, high: 1.38, low: 1.32, close: 1.34 },
      { time: 1718626800, open: 1.34, high: 1.4, low: 1.3, close: 1.33 },
      { time: 1718630400, open: 1.33, high: 1.36, low: 1.2, close: 1.22 },
      { time: 1718634000, open: 1.22, high: 1.25, low: 1.15, close: 1.18 },
      { time: 1718637600, open: 1.18, high: 1.3, low: 1.16, close: 1.29 },
    ];

    const redLine = candles.map((c) => ({
      time: c.time,
      value: c.high + 0.05,
    }));

    const greenLine = candles.map((c) => ({
      time: c.time,
      value: c.low - 0.05,
    }));

    const blackLine = candles.map((c) => ({
      time: c.time,
      value: 1.35,
    }));

    const volumes = candles.map((c, index) => ({
      time: c.time,
      value: Math.floor(Math.random() * 50 + 20),
      color: c.close > c.open ? "#ec6c5c" : "#4b3f92",
    }));

    candleSeries.setData(candles);
    lineSeriesRed.setData(redLine);
    lineSeriesGreen.setData(greenLine);
    lineSeriesBlack.setData(blackLine);
    volumeSeries.setData(volumes);

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} />;
};

export default CandleChart;
