import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import Nav from './modules/nav'

const themeMode="light"
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7268A6'
        },
    },

    overrides: {

        MuiTypography: {

            fontFamily: 'Roboto',
            h1: {
                fontSize: 24,
                fontWeight: 500,
                flexGrow: 1
            },
            h2: {
                fontSize: 30,
                fontWeight: 600,
                textAlign: "center"
            },
            caption: {
                frontSize:10,
                frontWeight:200,
                color: 'white'
            }

        }
    }
});


class App extends Component {

    render() {
        const timeout = {enter: 800, exit: 400};
        return (
            <TransitionGroup component="div" className="App">
                <CSSTransition timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
                    <MuiThemeProvider theme={theme}>
                        <Router>
                            <Switch>
                                <Route path={'/'} exact component={Nav}/>
                            </Switch>
                        </Router>
                    </MuiThemeProvider>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export default App;
