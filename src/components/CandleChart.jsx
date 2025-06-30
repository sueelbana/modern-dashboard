import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const CandleChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: {
        background: { color: 'transparent' },
        textColor: 'gray',
      },
      grid: {
        vertLines: { color: '#eee' },
        horzLines: { color: '#eee' },
      },
      crosshair: {
        mode: 1,
      },
      timeScale: {
        borderColor: '#ccc',
        timeVisible: true,
        lockVisibleTimeRangeOnResize: true,
        fixLeftEdge: true,
        fixRightEdge: true,
        rightOffset: 0,
      },
      rightPriceScale: {
        borderColor: '#ccc',
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#f28b82',
      downColor: '#6366f1',
      borderVisible: false,
      wickUpColor: '#f28b82',
      wickDownColor: '#6366f1',
    });

    const baseTime = Math.floor(new Date('2024-06-30T10:00:00').getTime() / 1000);
    const data = [];
    let lastClose = 1.35;

    for (let i = 0; i < 24; i++) {
      const open = lastClose;
      const close = +(open + (Math.random() - 0.5) * 0.2).toFixed(3);
      const high = Math.max(open, close) + Math.random() * 0.1;
      const low = Math.min(open, close) - Math.random() * 0.1;

      data.push({
        time: baseTime + i * 3600,
        open,
        high,
        low,
        close,
      });

      lastClose = close;
    }

    candleSeries.setData(data);

    chart.timeScale().setVisibleRange({
      from: data[0].time,
      to: data[data.length - 1].time,
    });

    const resizeObserver = new ResizeObserver(() => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    });
    resizeObserver.observe(chartContainerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return <div className="w-full rounded-lg border" ref={chartContainerRef} />;
};

export default CandleChart;
