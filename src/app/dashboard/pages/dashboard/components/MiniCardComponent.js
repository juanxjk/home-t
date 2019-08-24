import React, { Component } from 'react'

export default class MiniCardComponent extends Component {
    render() {
        return (
            <div className="col-xl-3 col-md-6 mb-4">
                <div className={`card ${this.props.left_border_color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold ${this.props.title_color} text-uppercase mb-1`}>
                                    {this.props.title}
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                            {this.props.content}
                                        </div>
                                    </div>
                                    {(() => {
                                        if (this.props.progress_bar)
                                            return (<div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${this.props.progress_bar}` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>)

                                    })()}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${this.props.fa_icon} fa-2x ${this.props.fa_icon_color}`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
