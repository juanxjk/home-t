import React, { Component } from 'react';

import Sidebar from './Sidebar'
import Footer from './Footer';
import Content from './Content';

class App extends Component {
	render() {
		return (
			<div>
				{/* <!-- Begin of Sidebar --> */}
				<Sidebar></Sidebar>
				{/* <!-- End of Sidebar --> */}
				<div id="content-wrapper" className="d-flex flex-column">
					{/* <!-- Main Content --> */}
					<Content></Content>
					{/* <!-- End of Main Content --> */}
					{/* <!-- Footer --> */}
					<Footer></Footer>
					{/* <!-- End of Footer --> */}
				</div>
			</div>
		);
	}
}

export default App;