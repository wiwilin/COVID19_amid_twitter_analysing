import React, {Component} from 'react';

class innerMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: ""
        };
        this.onScriptLoad = this.onScriptLoad.bind(this)

    }


    onScriptLoad() {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        this.props.onMapLoad(map)
        this.setState({map: map})
    }


    componentDidUpdate() {

    }

    componentDidMount() {
        if (!window.google) {
            var scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript';
            scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCJPcKqhriy5E0q16U9uvbkKLLP4QwrLmI`;
            var tagNameElement = document.getElementsByTagName('script')[0];
            tagNameElement.parentNode.insertBefore(scriptElement, tagNameElement);
            scriptElement.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
        }
    }

    render() {
        return (
            <div style={{width: "100%", height: "100%"}} id={this.props.id}/>
        );
    }
}

export default innerMap