import React, { useEffect } from "react";
import { useChartData } from "../../../../store/chart-context";
import { sendRequest } from "../../../../utils/sendRequest";
import { useParams } from "react-router";
import { useToast } from "../../../../store/toast-context";
import { Col, Row } from "react-bootstrap";

import DataForm from "./DataForm.jsx"
import DataList from "./DataList.jsx"

import Scatter from "./ChartTypes/Scatter.jsx"
import Line from "./ChartTypes/Line.jsx"
import Pie from "./ChartTypes/Pie.jsx"
import Bar from "./ChartTypes/Bar.jsx"

const ExistingChart = () => {
    const chartData = useChartData();
    const toast = useToast();
    let { chartId } = useParams();

    useEffect(() => {
        if (!chartData.chartId) {
            sendRequest(`/chart/${chartId}`, "GET").then((response) => {
                if (response.data) {
                    chartData.setChartTitle(response.data.chart.table_name);
                    chartData.setChartType("bar");
                    chartData.setLabelY(response.data.chart.data_type_1);
                    chartData.setUnitY(response.data.chart.data_type_1_units);
                    chartData.setLabelX(response.data.chart.data_type_2);
                    chartData.setUnitX(response.data.chart.data_type_2_units);
                    chartData.setChartId(chartId);
                    chartData.setData(response.data.data_points);
                }
                if (response.error) {
                    console.log(response.error);
                    toast.open("Error loading chart data", "error")
                }
            })
        }
    }, [])

    return (
        <>
            <h4>Chart Builder</h4>

            <Row>
                <Col xs={12} md={8}>

                    <Scatter />
                    <Line />
                    <Pie />
                    <Bar />

                    {/* <p>Chart here</p>
                    <p>Might need to have separate components for the different types of charts (bar, line, etc.) and dynamically only display the one that matches the chart the user picked</p>
                    <p>Would also be super cool to have a dropdown that allowed you to switch between the different chart types</p>
                    <p>Documentation for all of the charts is at <a href="https://www.chartjs.org/docs/latest/charts/bar.html">https://www.chartjs.org/docs/latest/charts/bar.html</a></p> */}
                </Col>
                <Col xs={12} md={4}>
                    <DataForm />
                    <DataList />
                    <p>Side panel where the user can enter new data points and edit/delete previously added ones</p>
                </Col>
            </Row>



        </>
    )
}

export default ExistingChart;