import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const getTicks = (array, num) => {
    const step = Math.floor(array.length / (num - 1));
    const result = [];

    for (let i = 0; i < num; i++) {
        const index = i * step;
        result.push(array[index]?.date);
    }

    return result;
}

function LineCharts({ data, xAxis, dataKey1, dataKey2, dataKey3 }) {

    const ticks = getTicks(data, 4)

    return (
        <div>
            <LineChart width={950} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxis} ticks={ticks} tick={{ fontSize: "13px" }} label={{ fontSize: "13px" }} />
                <YAxis tick={{ fontSize: "13px" }} label={{ fontSize: "13px" }} />
                <Legend wrapperStyle={{
                    fontSize: "13px"
                }} />
                <Tooltip contentStyle={{ fontSize: "13px" }} />
                {
                    dataKey1 && <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" />
                }
                {
                    dataKey2 && <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
                }
                {
                    dataKey3 && <Line type="monotone" dataKey={dataKey3} stroke="#FF9843" />
                }
            </LineChart>
        </div>
    )
}

export default LineCharts