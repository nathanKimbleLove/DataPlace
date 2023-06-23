import React, { useEffect } from "react";
import { sendRequest } from "../../../utils/sendRequest";

const Charts = () => {
    useEffect(() => {
        // let sampleBody = {
        //     table_name: "Katy's sample table",
        //     data_type_1: "Month",
        //     data_type_1_units: null,
        //     data_type_2: "Coffee",
        //     data_type_2_units: "cups"
        // }

        sendRequest("/chart/2", "GET")
    }, [])

    return (
        <>
            <h4>New Chart</h4>
            <p>Welcome to our chart generation page! Let's get started.</p>
            <p>Select the <b>type</b> of visualization you would like to create using the dropdown, and enter a name for your chart (Example: <i>"Average Yearly Air Travel Statistics"</i>).</p>
            <p>Next, specify the <b>label</b> and <b>units</b> you would like to use for the X and Y axes. Don't worry - you will be able to edit this later.</p>
            <hr></hr>


        </>
    )
}

export default Charts;