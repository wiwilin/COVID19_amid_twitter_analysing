import React, {  useEffect } from 'react';
import {Pie} from "react-chartjs-2";


export default function Piechart(props) {


    return(
        <div>
            <Pie data={{
                labels: props.pieAxis,
                datasets: [{
                    data: props.pieData,
                    backgroundColor: '#7268A6',
                    hoverBackgroundColor: 'white'
                }]
            }} options={{
                //responsive: false,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        boxWidth: 10,
                            fontColor: 'white' //set your desired color
                    }
                }
            }}/>

            </div>
    );

}

