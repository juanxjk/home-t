import React, { Component } from 'react'


export default class GaugeComponent extends Component {
    render() {
        return (
            <div className="text-center">
                <svg id="fillgauge" width="100%" height="250"></svg>
            </div>
        )
    }

    componentDidMount() {
        import('../js/gauge')
    }
}
