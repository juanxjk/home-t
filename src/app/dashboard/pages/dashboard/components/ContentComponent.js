import React, { Component } from 'react'

import TopbarComponent from './TopbarComponent'
import GaugeComponent from '../../../modules/liquid_level/components/GaugeComponent';
import NotificationCardComponent from './NotificationCardComponent';
import MiniCardComponent from './MiniCardComponent';

export default class Content extends Component {
    render() {
        return (
            <div id="content">
                {/* <!-- Topbar --> */}
                <TopbarComponent></TopbarComponent>
                {/* <!-- End of Topbar --> */}
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Gerar Relatório </a>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">
                        {/* <!-- Acquired Modules --> */}
                        <MiniCardComponent
                            title="Módulos"
                            title_color="text-primary"
                            content="1/1"
                            left_border_color="border-left-primary"
                            fa_icon="fa-boxes"
                            fa_icon_color="text-gray-300"
                        />
                        {/* <!--  Electricity Consumed --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Consumo de Energia</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800"> 143 KWh </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-lightbulb fa-2x text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Water Consumed --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Consumo de Água</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800"> 1216 L </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-tint fa-2x text-info"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* <!-- Tasks --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-info shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tarefas</div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                </div>
                                                <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pending Requests Card --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pedidos de tarefa</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">

                        {/* <!-- Water Level Measurement --> */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Medidor de Nível</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body">
                                    <GaugeComponent></GaugeComponent>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pie Chart --> */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Notificações</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body">
                                    <NotificationCardComponent
                                        title="Caixa quase vazia"
                                        message="O nível de água está abaixo do nível mínimo."
                                    />
                                    <div className="mt-4 text-center small">
                                        <span className="mr-1">
                                            <i className="fas fa-circle text-danger"></i> Alerta
                                        </span>
                                        <span className="mr-1">
                                            <i className="fas fa-circle text-warning"></i> Aviso
                                        </span>
                                        <span className="mr-1">
                                            <i className="fas fa-circle text-success"></i> Ação concluída
                                        </span>
                                        <span className="mr-1">
                                            <i className="fas fa-circle text-info"></i> Informação
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* <!-- Content Row --> */}
                    <div className="row">

                        {/* <!-- Content Column --> */}
                        <div className="col-lg-6 mb-4">

                            {/* <!-- Project Card Example --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Estoque</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small font-weight-bold">Alimentos <span className="float-right">20%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Itens de limpeza <span className="float-right">40%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold"> Itens de limpeza pessoal <span className="float-right">60%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Roupas Sujas <span className="float-right">80%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold"> Lixo <span className="float-right">Cheio!</span></h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-lg-6 mb-4">

                            {/* <!-- About --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Sobre</h6>
                                </div>
                                <div className="card-body">
                                    <p>Universidade Federal Rural do Semi-Árido</p>
                                    <p>Projeto da disciplina Tópicos Especiais em Sistemas Digitais</p>
                                    <p>Autor: Juan Carlos</p>
                                </div>
                            </div>

                        </div>
                    </div>





                </div>
                {/* <!-- /.container-fluid --> */}
            </div>
        )
    }
}
