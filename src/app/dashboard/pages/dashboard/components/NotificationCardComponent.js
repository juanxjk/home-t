import React, { Component } from 'react'

export default class NotificationCardComponent extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    {this.props.title}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-400">
                                    {this.props.message}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-water fa-2x text-warning"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
