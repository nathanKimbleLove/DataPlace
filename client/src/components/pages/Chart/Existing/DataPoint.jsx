import { useState, useEffect } from 'react'
import { Col, Form, Row, Button } from "react-bootstrap";
import { sendRequest } from "../../../../utils/sendRequest";
import { useToast } from "../../../../store/toast-context";
import { useChartData } from "../../../../store/chart-context";

import Trash from "../../../../assets/icons/trash.svg";
import Check from "../../../../assets/icons/check.svg";

import Classes from './DataPoint.module.css'

const DataPoint = ({ object }) => {
    const toast = useToast();
    const chartData = useChartData();

    const [variable_1, setVariable_1] = useState(object.variable_1 || null)
    const [variable_2, setVariable_2] = useState(object.variable_2 || null)
    const [isChanged, setIsChanged] = useState(false)

    const handleUpdate = () => {
        console.log('update was called on datapoint with id', object.id)

        sendRequest(`/datum/${object.id}`, "PUT", {chart_id:chartData.chartId, variable_1: variable_1, variable_2: variable_2}) // body not defined
        .then(res => {
            if (!res.err) toast.open("Successfully updated point", "success")
            if (res.err) toast.open("Error updating point", "error")
        })
        .then(() => sendRequest(`/chart/${chartData.chartId}`, "GET"))
        .then(res => chartData.setData(res.data.data_points))
    }

    const handleDelete = () => {
        sendRequest(`/datum/${object.id}`, "DELETE")
            .then(res => {
                if (!res.err) toast.open("Successfully deleted point", "success")
                if (res.err) toast.open("Error deleting point", "error")
            })
            .then(() => sendRequest(`/chart/${chartData.chartId}`, "GET"))
            .then(res => chartData.setData(res.data.data_points))
    }

    const checkIsChanged = () => {
        console.log('check is runing? epicly?', variable_1, object.variable_1, variable_2, object.variable_2)
        return (`${variable_1}` === `${object.variable_1}` && `${variable_2}` === `${object.variable_2}`) ? false : true;
    }

    return (
        <div style={{display: "flex", marginBottom: "10px"}}>
            <div style={{display: "flex", width: "40%"}}>
                <input
                    className={(chartData.unitY && chartData.unitY.length ? Classes.hasUnit : Classes.hasNoUnit) + " form-control"}
                    value={variable_1}
                    onChange={(e) => {
                        setVariable_1(e.target.value);
                    }}
                />
                <p>{chartData.unitY}</p>
            </div>
            <div style={{display: "flex", width: "40%"}}>
                <input
                    className={(chartData.unitX && chartData.unitX.length ? Classes.hasUnit : Classes.hasNoUnit) + " form-control"}
                    value={variable_2}
                    onChange={(e) => {
                      setVariable_2(e.target.value);
                  }}
                />
                <p style={{margin: "auto"}}>{chartData.unitX}</p>
            </div>
            <div style={{display: "flex", width: "20%"}}>
                {checkIsChanged()
                ? <img
                      className={Classes.clickable}
                      style={{margin: "auto" }}
                      src={Check}
                      height={20}
                      width={20}
                      onClick={handleUpdate}
                  />
                : <img
                      className={Classes.clickable}
                      style={{margin: "auto" }}
                      src={Trash}
                      height={20}
                      width={20}
                      onClick={handleDelete}
                  />}
            </div>
        </div>
    )
}

export default DataPoint