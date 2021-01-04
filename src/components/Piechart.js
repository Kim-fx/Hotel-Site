import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const PChart = () => {
    return (
        <PieChart
            data={[
                { title: 'One', value: 100, color: '#00aeff' },
                { title: 'Two', value: 50, color: '#006eff' },
                { title: 'Three', value: 20, color: '#06326b' },
                { title: 'Four', value: 50, color: '#0414fd' },
                { title: 'Five', value: 20, color: '#070f83' },
                { title: 'Six', value: 60, color: '#5208ff' },
            ]}
        />
    )
}
export default PChart