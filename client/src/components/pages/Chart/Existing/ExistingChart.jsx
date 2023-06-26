import React, { useEffect } from "react";
import { useChartData } from "../../../../store/chart-context";
import { sendRequest } from "../../../../utils/sendRequest";
import { useParams } from "react-router";
import { useToast } from "../../../../store/toast-context";
import { Col, Row, Form } from "react-bootstrap";

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
                    chartData.setLabelY(response.data.chart.data_type_1);
                    chartData.setUnitY(response.data.chart.data_type_1_units);
                    chartData.setLabelX(response.data.chart.data_type_2);
                    chartData.setUnitX(response.data.chart.data_type_2_units);
                    chartData.setChartId(chartId);
                    chartData.setData(response.data.data_points);

                    if (!chartData.chartType) { 
                        chartData.setChartType("Scatter")
                    };
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
                    <Form.Label><b>Chart Type</b></Form.Label>
                        <Form.Select value={chartData.chartType} onChange={(event) => {chartData.setChartType(event.target.value)}}>
                              <option value="Scatter">Scatter</option>
                              <option value="Line">Line</option>
                              <option value="Pie">Pie</option>
                              <option value="Bar">Bar</option>
                        </Form.Select>

                    {chartData.chartType === "Scatter" && (<Scatter />)}
                    {chartData.chartType === "Line" && (<Line />)}
                    {chartData.chartType === "Pie" && (<Pie />)}
                    {chartData.chartType === "Bar" && (<Bar />)}

                </Col>
                <Col xs={12} md={4}>
                    <DataForm />
                    <DataList />
                </Col>
            </Row>

        </>
    )
}

export default ExistingChart;