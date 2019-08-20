import React, {
	Component
} from 'react';

class Sidebar extends Component {
	render() {
		return (
			<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
				{ /* <!-- Sidebar - Brand --> */}
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
					<div className="sidebar-brand-icon rotate-n-15">
						<i className="fas fa-home"> </i>
					</div>
					<div className="sidebar-brand-text mx-3"> Dashboard Home - T </div>
				</a> { /* <!-- Divider --> */}
				<hr className="sidebar-divider my-0" />
				{ /* <!-- Nav Item - Dashboard --> */}
				<li className="nav-item active">
					<a className="nav-link" href="index.html">
						<i className="fas fa-fw fa-tachometer-alt">
						</i> <span> Dashboard </span>
					</a>
				</li>
				{ /* <!-- Divider --> */}
				<hr className="sidebar-divider" />
				{ /* <!-- Nav Item - Utilities Collapse Menu --> */}
				<li className="nav-item">
					<a className="nav-link collapsed" href="#"
						data-toggle="collapse"
						data-target="#collapseUtilities"
						aria-expanded="true"
						aria-controls="collapseUtilities">
						<i className="fas fa-fw fa-wrench">
						</i>
						<span> Utilities </span>
					</a> <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
						<div className="bg-white py-2 collapse-inner rounded">
							<h6 className="collapse-header">Custom Utilities:</h6>
							<a className="collapse-item" href="utilities-color.html">Colors</a>
							<a className="collapse-item" href="utilities-border.html">Borders</a>
							<a className="collapse-item" href="utilities-animation.html">Animations</a>
							<a className="collapse-item" href="utilities-other.html">Other</a>
						</div>
					</div>
				</li>
				{/* <!-- Divider --> */}
				<hr className="sidebar-divider" />
				{/* <!-- Heading --> */}
				<div className="sidebar-heading"> Addons </div> {/* <!-- Nav Item - Pages Collapse Menu --> */}
				<li className="nav-item"> <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages"> <i className="fas fa-fw fa-folder"></i> <span>Pages</span> </a> <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
					<div className="bg-white py-2 collapse-inner rounded"> <h6 className="collapse-header">Login Screens:</h6> <a className="collapse-item" href="login.html">Login</a>
						<a className="collapse-item" href="register.html">Register</a>
						<a className="collapse-item" href="forgot-password.html">Forgot Password</a>
						<div className="collapse-divider"></div> <h6 className="collapse-header">Other Pages:</h6>
						<a className="collapse-item" href="404.html">404 Page</a>
						<a className="collapse-item" href="blank.html">Blank Page</a>
					</div>
				</div>
				</li>
				{/* <!-- Nav Item - Charts --> */}
				<li className="nav-item"> <a className="nav-link" href="charts.html">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a> </li>
				{/* <!-- Nav Item - Settings --> */}
				<li className="nav-item"> <a className="nav-link" href="#">
					<i className="fas fa-fw fa-cog"></i> <span>Configurações</span></a> </li> {/* <!-- Divider --> */} <hr className="sidebar-divider d-none d-md-block" />
				{/* <!-- Sidebar Toggler (Sidebar) --> */}
				<div className="text-center d-none d-md-inline">
					<button className="rounded-circle border-0" id="sidebarToggle">
					</button>
				</div>
			</ul>
		);
	}
}
export default Sidebar;