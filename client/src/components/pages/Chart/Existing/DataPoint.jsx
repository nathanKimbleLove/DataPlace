import { useState, useEffect } from 'react'
import { Col, Form, Row, Button } from "react-bootstrap";
import { sendRequest } from "../../../../utils/sendRequest";
import { useToast } from "../../../../store/toast-context";
import { useChartData } from "../../../../store/chart-context";

const DataPoint = ({ object }) => {
    const toast = useToast();
    const chartData = useChartData();

    const [modObj, setModObj] = useState({
        chart_id: chartData.chartId,
        name: object.name,
        variable_1: object.variable_1,
        variable_2: object.variable_2
    })

    const handleUpdate = () => {
        console.log('update was called on datapoint with id', object.id)

        // sendRequest(`/datum/${object.id}`, "PUT", body) // body not defined
        // .then(res => {
        //     if (!res.err) toast.open("Successfully created point", "success")
        //     if (res.err) toast.open("Error creating point", "error")
        // })
        // .then(() => sendRequest(`/chart/${chartData.chartId}`, "GET"))
        // .then(res => chartData.setData(res.data.data_points))
    }

    const handleDelete = () => {
        sendRequest(`/datum/${object.id}`, "DELETE")
            .then(res => {
                if (!res.err) toast.open("Successfully created point", "success")
                if (res.err) toast.open("Error creating point", "error")
            })
            .then(() => sendRequest(`/chart/${chartData.chartId}`, "GET"))
            .then(res => chartData.setData(res.data.data_points))
    }

    return (
        <tr>
            {/* <td><input value={object.name} /></td> */}
            <td><input value={object.variable_1} /> {chartData.unitY}</td>
            <td><input value={object.variable_2} /> {chartData.unitX}</td>
            <td><Button onClick={handleDelete}>X</Button></td>
        </tr>
    )
}

export default DataPoint