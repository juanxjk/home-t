import React, { Component } from 'react'


export default class GaugeComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="text-center">Medidor de Nível</h1>
                            <svg id="fillgauge" width="100%" height="250"></svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        import('../js/gauge')
    }
}
