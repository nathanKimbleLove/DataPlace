import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import bar from "../../../../assets/img/bar.png"
import doughnut from "../../../../assets/img/doughnut.png"
import line from "../../../../assets/img/line.png"
import pie from "../../../../assets/img/pie.png"
import scatter from "../../../../assets/img/scatter.png"
import { sendRequest } from "../../../../utils/sendRequest";
import { useToast } from "../../../../store/toast-context";
import { useChartData } from "../../../../store/chart-context";
import { useNavigate } from "react-router-dom"

const NewChart = () => {
    const toast = useToast();
    const chartData = useChartData();
    const navigate = useNavigate();

    const [chartTitle, setChartTitle] = useState("")
    const [chartType, setChartType] = useState("bar");
    const [labelY, setLabelY] = useState("");
    const [unitY, setUnitY] = useState("");
    const [labelX, setLabelX] = useState("");
    const [unitX, setUnitX] = useState("");

    const getImgSrc = () => {
        switch (chartType) {
            case "Bar":
                return bar;
            case "Pie":
                return pie;
            case "Doughnut":
                return doughnut;
            case "Line":
                return line;
            case "Scatter":
                return scatter;
        }
    }

    const handleSubmit = () => {
        const body = {
            table_name: chartTitle,
            data_type_1: labelY,
            data_type_1_units: unitY,
            data_type_2: labelX,
            data_type_2_units: unitX
        }

        sendRequest("/chart", "POST", body).then((response) => {
            if (response.data) {
                toast.open("Successfully created chart", "success")
                chartData.setChartTitle(chartTitle);
                chartData.setChartType(chartType);
                chartData.setLabelY(labelY);
                chartData.setUnitY(unitY);
                chartData.setLabelX(labelX);
                chartData.setUnitX(unitX);
                chartData.setChartId(response.data.id)
                chartData.setData(response.data.data_points)

                navigate(`${response.data.id}`)
            }
            if (response.error) {
                toast.open("Error creating chart", "error")
            }
        })
    }

    return (
        <>
            <div className="mb-4">
                <h4>New Chart</h4>
                <p>Welcome to our chart generation page! Let's get started.</p>
                <p>Select the <b>type</b> of visualization you would like to create using the dropdown, and enter a name for your chart (Example: <i>"Average Yearly Air Travel Statistics"</i>).</p>
                <p>Next, specify the <b>label</b> and <b>units</b> you would like to use for the X and Y axes.</p>
            </div>
            <hr></hr>

            <Form className="my-4">
                <Form.Group className="mb-3" controlId="formChartName">
                    <Form.Label><b>Chart Title</b></Form.Label>
                    <Form.Control placeholder="ex: Mississippi River Yearly Statistics" value={chartTitle} onChange={(event) => {setChartTitle(event.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formChartType">
                    <Row>
                        <Col sm={12} lg={4} className="mb-3">
                            <Form.Label><b>Chart Type</b></Form.Label>
                            <Form.Select onChange={(event) => {setChartType(event.target.value)}}>
                                <option value="Bar">Bar</option>
                                <option value="Pie">Pie</option>
                                <option value="Line">Line</option>
                                <option value="Scatter">Scatter</option>
                            </Form.Select>
                        </Col>
                        <Col sm={12} lg={8} className="mb-3">
                            <p>Example:</p>
                            <img src={getImgSrc()} style={{height:305, maxWidth:650}}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="formYAxisLabel" className="mb-3">
                            <Form.Label><b>Y-Axis Label</b></Form.Label>
                            <Form.Control value={labelY} placeholder="ex: Year" onChange={(event) => {setLabelY(event.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formYAxisUnit" className="mb-3">
                            <Form.Label><b>Y-Axis Unit</b></Form.Label>
                            <Form.Control value={unitY} onChange={(event) => {setUnitY(event.target.value)}}/>
                            <Form.Text className="text-muted">
                                Leave blank if no unit is applicable
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formXAxisLabel" className="mb-3">
                            <Form.Label><b>X-Axis Label</b></Form.Label>
                            <Form.Control value={labelX} placeholder="ex: Flow Rate" onChange={(event) => {setLabelX(event.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formXAxisUnit" className="mb-3">
                            <Form.Label ><b>X-Axis Unit</b></Form.Label>
                            <Form.Control value={unitX} placeholder="ex: gal/min" onChange={(event) => {setUnitX(event.target.value)}}/>
                            <Form.Text className="text-muted">
                                Leave blank if no unit is applicable
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="secondary" onClick={handleSubmit}>
                    Create Chart
                </Button>
            </Form>

        </>
    )
}

export default NewChart;