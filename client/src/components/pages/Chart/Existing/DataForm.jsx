import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { sendRequest } from "../../../../utils/sendRequest";
import { useToast } from "../../../../store/toast-context";
import { useChartData } from "../../../../store/chart-context";

const DataForm = () => {
    const toast = useToast();
    const chartData = useChartData();

    const [name, setName] = useState("")
    const [variable1, setVariable1] = useState("");
    const [variable2, setVariable2] = useState("");

    const handleSubmit = () => {
        const body = {
            chart_id: chartData.chartId,
            name: name,
            variable_1: variable1,
            variable_2: variable2,
        }

        sendRequest("/datum", "POST", body)
            .then((response) => {
                if (response.data) {
                    toast.open("Successfully created point", "success")
                }
                if (response.error) {
                    toast.open("Error creating point", "error")
                }
            })
            .then(() => sendRequest(`/chart/${chartData.chartId}`, "GET"))
            .then(response => chartData.setData(response.data.data_points))
    }

    return (
        <>
            <Form className="my-4">
                <Row>
                    <Col>
                        <Form.Group controlId="formYAxisUnit" className="mb-3">
                            <Form.Label><b>{chartData.labelY}</b></Form.Label>
                            <Form.Control value={variable1} onChange={(event) => {setVariable1(event.target.value)}}/> {/* somehow add units to the end of the input? */}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formXAxisLabel" className="mb-3">
                            <Form.Label><b>{chartData.labelX}</b></Form.Label>
                            <Form.Control value={variable2} placeholder="ex: Flow Rate" onChange={(event) => {setVariable2(event.target.value)}}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="secondary" onClick={handleSubmit}>
                    Create Data Point
                </Button>
            </Form>

        </>
    )
}

export default DataForm;