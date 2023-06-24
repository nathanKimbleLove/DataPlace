import { useState, useEffect, useRef } from 'react'
import { useChartData } from "../../../../../store/chart-context";
import Chart from 'chart.js/auto'

const Line = () => {
    const chartData = useChartData();
    const lineRef = useRef(null)

    useEffect(() => {
        if (lineRef.current) {
            if (lineRef.current.chart) {
                lineRef.current.chart.destroy();
            }

            let labels = [];
            let values = []
            for (let i = 0; i < chartData.data.length; i++) {
                labels.push(chartData.data[i].variable_1)
                values.push(chartData.data[i].variable_2)
            }

            const ctx = lineRef.current.getContext('2d');
            lineRef.current.chart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'temp label value',
                        data: values,
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        tension: 0.1
                    }]
                }
            });
        }

    }, [chartData.data])

    return (
        <>
            <canvas ref={lineRef} id="myChart" />
        </>
    )
}

export default Line