import React, {Component} from 'react';
import {AppBar, withStyles,Toolbar, Typography, Tabs, Tab} from '@material-ui/core'

import MapContainer from './mapcontainer'
import Analysis from './analysis'

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            statecases: false,
            suburbcases: false,
            statetopic:false,
            stateemotion: false,
            suburbtopic: false,
            suburbemotion : false,
            twitterday:[],
        }
        ;
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    componentWillMount() {
        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/state_cases.json')
            .then(res => res.json())
            .then(statedata => {
                this.setState({statecases: statedata})
            }).catch(console.log)

        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/confirmedAll.json')
            .then(res => res.json())
            .then(suburbdata => {
                this.setState({suburbcases: suburbdata})
            }).catch(console.log)

        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/state_hot_topics.json')
            .then(res => res.json())
            .then(statedata => {
                this.setState({statetopic: statedata.doc})
            }).catch(console.log)

        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/state_emotions.json')
            .then(res => res.json())
            .then(statedata => {
                this.setState({stateemotion: statedata.doc})
            }).catch(console.log)

        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/suburbAndHottopic.json')
            .then(res => res.json())
            .then(suburbdata => {
                this.setState({suburbtopic: suburbdata.doc})
            }).catch(console.log)

        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/suburbAndEmotion.json')
            .then(res => res.json())
            .then(suburbdata => {
                this.setState({suburbemotion: suburbdata.doc})
            }).catch(console.log)

        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/state_avg_emotion.json')
            .then(res => res.json())
            .then(statedata => {
                this.setState({stateavg: statedata.doc})
            }).catch(console.log)

        fetch('https://raw.githubusercontent.com/wiwilin/COVID19_amid_twitter_analysing/master/src/resources/json/suburb_avg_emotion.json')
            .then(res => res.json())
            .then(suburbdata => {
                this.setState({suburbavg: suburbdata.doc})
            }).catch(console.log)


    }

    render() {

        const {value} = this.state;

        return (
            <div>
                <AppBar color="primary">
                    <div style={{marginTop:'40px', marginLeft:'80px'}}>
                    <Typography variant={"h1"}>
                        Covid-19 Analyse
                    </Typography>
                    </div>
                    <Toolbar variant={"dense"} style={{marginLeft:'auto'}}>
                        <Tabs value={value}  style={{marginLeft:'auto'}} onChange={this.handleChange} indicatorColor={"white"}>
                            <Tab label="Overview"/>
                            <Tab label="Analyse"/>
                        </Tabs>
                    </Toolbar>
                </AppBar>

                {value === 0 && <MapContainer statecases={this.state.statecases} suburbcases={this.state.suburbcases} suburbtopic={this.state.suburbtopic} suburbemtion={this.state.suburbemotion} statetopic={this.state.statetopic} stateemotion={this.state.stateemotion} />}
                {value === 1 && <Analysis statecases={this.state.statecases} suburbcases={this.state.suburbcases} suburbtopic={this.state.suburbtopic} suburbemtion={this.state.suburbemotion} statetopic={this.state.statetopic} stateemotion={this.state.stateemotion} stateavg={this.state.stateavg} suburbavg={this.state.suburbavg}/>}
            </div>
        )

    }
}

export default Nav;
