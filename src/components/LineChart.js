import React from "react"
import LineGraph from 'react-line-graph'

const LineChart = () => {
    const data = [10,0,-2.5,540];
const props = {
  data,
  smoothing: 0.3,
  accent: 'palevioletred',
  fillBelow: 'rgba(200,67,23,0.1)',
  hover: true,
};

    return (
        <div>
            <LineGraph {...props}/>
        </div>
    )
}

export default LineChart