import React, {Component} from 'react';
import {Typography} from "@material-ui/core";


class Colorlegend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'cases'
        }
    }
    render() {
        return (
            <div>

                <Typography variant={'caption'}>{this.state.type}</Typography>

                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#b71c1c'}}></div>
                    <Typography variant={'caption'}>>1000</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#c62828'}}></div>
                    <Typography variant={'caption'}>500-1000</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#d32f2f'}}></div>
                    <Typography variant={'caption'}>200-500</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#e53935'}}></div>
                    <Typography variant={'caption'}>100-200</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#f44336'}}></div>
                    <Typography variant={'caption'}>50-100</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#ef5350'}}></div>
                    <Typography variant={'caption'}>20-50</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#e57373'}}></div>
                    <Typography variant={'caption'}>10-20</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#ef9a9a'}}></div>
                    <Typography variant={'caption'}>3-10</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#ffcdd2'}}></div>
                    <Typography variant={'caption'}>1-3</Typography></div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '10px', height: '10px', backgroundColor: '#ffebee'}}></div>
                    <Typography variant={'caption'}>0</Typography></div>

            </div>
        )
    }
}

export default Colorlegend;