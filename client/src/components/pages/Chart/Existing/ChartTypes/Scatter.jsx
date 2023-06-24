import { useState, useEffect, useRef } from 'react'
import { useChartData } from "../../../../../store/chart-context";
import Chart from 'chart.js/auto'

const Scatter = () => {
    const chartData = useChartData();
    const scatterRef = useRef(null)

    useEffect(() => {
        if (scatterRef.current) {
            if (scatterRef.current.chart) {
                scatterRef.current.chart.destroy();
            }

            let temp = [];
            for (let i = 0; i < chartData.data.length; i++) {
                temp.push({ x: chartData.data[i].variable_1, y: chartData.data[i].variable_2}) // must be in this order
            }

            const ctx = scatterRef.current.getContext('2d');
            scatterRef.current.chart = new Chart(ctx, {
                type: "scatter",
                data: {
                    datasets: [{
                        label: 'temp label value',
                        data: temp,
                        backgroundColor: 'rgba(255, 99, 132, 1)'
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom'
                        }
                    }
                }
            });
        }

    }, [chartData.data])

    return (
        <>
            <canvas ref={scatterRef} id="myScatter" />
        </>
    )
}

export default Scatter