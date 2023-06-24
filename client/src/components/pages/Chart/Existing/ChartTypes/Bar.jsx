import { useState, useEffect, useRef } from 'react'
import { useChartData } from "../../../../../store/chart-context";
import Chart from 'chart.js/auto'

const Line = () => {
    const chartData = useChartData();
    const barRef = useRef(null)

    useEffect(() => {
        if (barRef.current) {
            if (barRef.current.chart) {
                barRef.current.chart.destroy();
            }

            let labels = [];
            let values = [];
            let bkgrColors = [];
            let brdrColors = [];
            for (let i = 0; i < chartData.data.length; i++) {
                labels.push(chartData.data[i].variable_1)
                values.push(chartData.data[i].variable_2)
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)
                bkgrColors.push(`rgba(${r}, ${g}, ${b}, .6)`)
                brdrColors.push(`rgba(${r}, ${g}, ${b}, 1)`)
            }

            const ctx = barRef.current.getContext('2d');
            barRef.current.chart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'temp label value',
                        data: values,
                        fill: false,
                        backgroundColor: bkgrColors,
                        borderColor: brdrColors,
                        tension: 0.1
                    }]
                }
            });
        }

    }, [chartData.data])

    return (
        <>
            <canvas ref={barRef} id="myChart" />
        </>
    )
}

export default Line