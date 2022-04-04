import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, Legend, YAxis, BarChart, Bar, CartesianGrid } from 'recharts';
import './Chart.css'

const Chart = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }

    ];
    return (
        <div className='chart'>

            <div className='chart-style'>
                <h2>Month Wise Sell</h2>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <Line dataKey={'investment'}></Line>


                    <XAxis dataKey={'month'} ></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip />
                </LineChart>




            </div>



            <div className='chart-style'>
                <h2>Investment vs Revenue</h2>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey={'month'} scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey={'sell'} fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>

            </div>

            <div className='chart-style'>
                <h2>Investment vs Revenue</h2>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey={'investment'}
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />

                    <Tooltip />
                </PieChart>
            </div>

            <div className='chart-style'>
                <h2>Investment vs Revenue</h2>
                <BarChart width={400} height={400} data={data}>
                    <Bar dataKey={'investment'} fill="#8884d8" />
                    <Tooltip />

                </BarChart>

            </div>
        </div>
    );
};

export default Chart;