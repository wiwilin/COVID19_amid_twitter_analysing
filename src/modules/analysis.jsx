import React, {useState, useEffect} from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, LineSeries, VerticalBarSeries, RadialChart} from 'react-vis';

import {
    searchSuburb,
    suburbCaseDate,
    stateCaseDate,
    suburbName,
    stateName,
    searchState,
    transState,
    twitterDate,
} from '../modules/scale'

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import {Line, Bar} from 'react-chartjs-2';

import {strFromDate} from '../methods/DateTransfer'


export default function Analysis(props) {

    const [scale, setScale] = useState('suburb')
    const [area, setArea] = useState('ballarat')
    const [casesData, setcasesData] = useState([])
    const [casesAxis, setcasesAxis] = useState([])
    const [avgAxis, setavgAxis] = useState([])
    const [avgData, setavgData] = useState([])


    const [barAxis, setbarAxis] = useState([])
    const [barData, setbarData] = useState([])

    const [bar2Axis, setbar2Axis] = useState([])
    const [bar2Data, setbar2Data] = useState([])


    const [date, setDate] = useState('0513')

    const clearState = () => {
        casesAxis.length = 0
        casesData.length = 0
        barAxis.length = 0
        barData.length = 0
        bar2Axis.length = 0
        bar2Data.length = 0
        avgData.length=0
    }

    useEffect(() => {


    });

    const upload = (name, date) => {

        clearState()


        if (scale === 'state') {

            try{
                var low = transState.get(name)

                Object.keys(props.statecases).forEach
                (
                    day => {
                        try {
                            var cases = props.statecases[day][name]
                            var avg = props.stateavg[day][low]
                            setavgData(avgData => [...avgData, avg]);
                            setcasesAxis(casesAxis => [...casesAxis, day])
                            setcasesData(casesData => [...casesData, cases]);
                        }catch (e) {

                        }
                    })

            }catch (e) {
            }

            try {

                var topic = props.statetopic[date][low]



                topic.map(
                    (t,index) => {

                            setbarAxis(barAxis => [...barAxis, t.word])
                            setbarData(barData => [...barData, t.num])

                    }
                )
            } catch (e) {
            }


            try {
                var emotion = props.stateemotion[date][low]

                emotion.map(
                    (t) => {
                        setbar2Axis(bar2Axis => [...bar2Axis, t.emotion])
                        setbar2Data(bar2Data => [...bar2Data, t.num])
                    }
                )
            } catch (e) {
            }


        } else if (scale === 'suburb') {


            try {

                var low = name.toLowerCase()

                Object.keys(props.suburbcases).forEach
                (
                    day => {
                        try {
                            var cases = props.suburbcases[day][name]
                            var avg = props.suburbavg[day][low]
                            setavgData(avgData => [...avgData, avg]);
                            setcasesAxis(casesAxis => [...casesAxis, day])
                            setcasesData(casesData => [...casesData, cases]);
                        }catch (e) {

                        }
                })

            } catch (e) {

            }

            try {

                var topic = props.suburbtopic[date][low]

                console.log("date"+date+"wordddd"+topic[0].word)

                topic.map(
                    (t,index) => {

                        setbarAxis(barAxis => [...barAxis, t.word])
                        setbarData(barData => [...barData, t.num])

                    }
                )
            } catch (e) {

            }


            try {
                var emotion = props.suburbemtion[date][low]

                emotion.map(
                    (t) => {
                        setbar2Axis(bar2Axis => [...bar2Axis, t.emotion])
                        setbar2Data(bar2Data => [...bar2Data, t.num])
                    }
                )
            } catch (e) {

            }

        }
    }


    const handleScaleChange = (event) => {
        setScale(event.target.value)
    };

    const handleAreaChange = (event) => {
        setArea(event.target.value)
        upload(event.target.value, date)
    };
    const handleDateChange = (event) => {
        setDate(event.target.value)
        upload(area, event.target.value)
    }

    const timestamp = new Date('April 4 2020').getTime();
    const ONE_DAY = 86400000;


    return (
        <div>
            <div style={{marginTop: '140px', marginLeft: '80px'}}>
                <div style={{display: 'flex'}}>
                    <div style={{width: '600px', height: '200px', marginRight: '200px'}}>
                        <Line data={{
                            labels: casesAxis, datasets: [{
                                data: casesData, borderColor:'rgba(229, 115, 115, 1)',fill: false, label: 'cases', yAxisID: 'cases'
                            },
                                {
                                    data: avgData, borderColor:'#b39ddb',fill: false, label: 'avg', yAxisID: 'emotion'
                                }
                                ]
                            }}  onElementsClick={elems => {
                            try {
                                var activePoint = elems[0];
                                var data = activePoint._chart.data;
                                var datasetIndex = activePoint._datasetIndex;
                                var labels = data.labels;
                                var index = activePoint._index;
                                setDate(labels[index])
                                upload(area, labels[index])

                            } catch (e) {

                            }
                        }}
                              options={{

                            scales: {
                            yAxes: [{
                                id: 'cases',
                                type: 'linear',
                                position: 'left',
                                scaleLabel: {
                                    display: false,
                                    labelString: 'cases'
                                }
                            }, {
                                id: 'emotion',
                                type: 'linear',
                                position: 'right',
                                ticks: {
                                    max: 1,
                                    min: -1
                                },
                                scaleLabel: {
                                    display: false,
                                    labelString: 'emotion_avg'
                                }

                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Date (M D)'
                                }
                            }]
                        }}}/>
                    </div>

                    <div>
                        <FormControl>
                            <InputLabel>Scale</InputLabel>
                            <Select
                                value={scale}
                                onChange={handleScaleChange}>
                                <MenuItem value={'suburb'}>suburb</MenuItem>
                                <MenuItem value={'state'}>state</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl>
                            <InputLabel>Area</InputLabel>
                            <Select
                                value={area}
                                onChange={handleAreaChange}>
                                {scale === 'state' &&
                                stateName.map((key, i) =>
                                    <MenuItem key={i} value={key}>{key}</MenuItem>)}

                                {scale === 'suburb' &&
                                suburbName.map((key, i) =>
                                    <MenuItem key={i} value={key}>{key}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl >
                            <InputLabel>Date</InputLabel>
                            <Select
                                value={date}
                                onChange={handleDateChange}>
                                {twitterDate.map(key =>
                                    <MenuItem value={key}>{key}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div style={{display:'flex', marginTop: '120px'}}>
                <div style={{width: '800px', height: '200px'}}>
                    <Bar data={{
                        labels: barAxis, datasets: [{
                            data: barData, backgroundColor: '#b39ddb',fill: false, label: 'twitter topic',
                        }]
                    }} options={{

                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0
                                },
                            }]

                        }}}/>
                </div>
                    <div style={{width: '600px', height: '200px',marginLeft:'20px'}}>
                        <Bar data={{
                            labels: bar2Axis, datasets: [{
                                data: bar2Data,backgroundColor: '#b39ddb', fill: false, label: 'twitter emotion',
                            }]
                        }}/>
                    </div>
                </div>
                <br/>


                {/*<div>
                        <XYPlot
                            width={1200}
                            height={200}
                            xType="ordinal"
                        >

                            <LineSeries data={casesData} animation damping={9} stiffness={300} color="#ffcdd2"/>
                            <VerticalBarSeries data={topicData} animation damping={9} stiffness={300} color="blue"/>
                            <XAxis title={'Date'} tickLabelAngle={40}/>
                            <YAxis title={'Cases'}/>
                        </XYPlot>

                        { !(casesData && casesData.length) && <Typography>Loading</Typography>}

                    <div style={{marginTop:'60px'}}>
                        <RadialChart
                            data={Data}
                            width={200}
                            height={200} />
                    </div>
                    </div>*/}


            </div>
        </div>
    );
}


