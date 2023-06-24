import { useState, useEffect } from 'react'
import { Col, Row, Table } from "react-bootstrap";
import { sendRequest } from "../../../../utils/sendRequest";
import { useToast } from "../../../../store/toast-context";
import { useChartData } from "../../../../store/chart-context";

import DataPoint from './DataPoint.jsx'

const DataList = () => {
    const toast = useToast();
    const chartData = useChartData();

    const [dataArr, setDataArr] = useState([])

    useEffect(() => {
      if (chartData.data && chartData.data.length) {
            let temp = []
            for (let i = 0; i < chartData.data.length; i++) {
              temp.push(<DataPoint object={chartData.data[i]} key={chartData.data[i].id} />)
            }
            setDataArr(temp)
        }
    }, [chartData.data])

    return (
        <>
            {dataArr
            ? <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th>Data Point Name</th>
                          <th>{chartData.labelY}</th>
                          <th>{chartData.labelX}</th>
                          <th>Delete Point</th>
                      </tr>
                  </thead>
                  <tbody>
                      {dataArr}
                  </tbody>
              </Table>
            : null }
        </>
    )
}

export default DataList