import { useState, createContext, useContext } from "react";

const ChartContext = createContext({
    chartId: 0,
    setChartId: () => {},
    chartTitle: "",
    setChartTitle: () => {},
    chartType: "",
    setChartType: () => {},
    labelY: "",
    setLabelY: () => {},
    unitY: "",
    setUnitY: () => {},
    labelX: "",
    setLabelX: () => {},
    unitX: "",
    setUnitX: () => {},
    data: [],
    setData: () => {},
});

export const ChartProvider = (props) => {
    const [chartId, setChartId] = useState(null);
    const [chartTitle, setChartTitle] = useState("")
    const [chartType, setChartType] = useState("");
    const [labelY, setLabelY] = useState("");
    const [unitY, setUnitY] = useState("");
    const [labelX, setLabelX] = useState("");
    const [unitX, setUnitX] = useState("");
    const [data, setData] = useState([])

    return (
        <ChartContext.Provider value={{
            chartId: chartId,
            setChartId: setChartId,
            chartTitle: chartTitle,
            setChartTitle: setChartTitle,
            chartType: chartType,
            setChartType: setChartType,
            labelY: labelY,
            setLabelY: setLabelY,
            unitY: unitY,
            setUnitY: setUnitY,
            labelX: labelX,
            setLabelX: setLabelX,
            unitX: unitX,
            setUnitX: setUnitX,
            data: data,
            setData: setData,
        }}>
            {props.children}
        </ChartContext.Provider>
    )
}

export const useChartData = () => useContext(ChartContext);