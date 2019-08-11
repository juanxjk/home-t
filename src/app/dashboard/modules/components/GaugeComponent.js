import React, { Component } from 'react'

import '../js/gauge'

export default class GaugeComponent extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="text-center">Medidor de Nível</h1>
                            <svg id="fillgauge" width="100%" height="250"></svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
