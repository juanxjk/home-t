import React, { Component } from 'react';

import Sidebar from './Sidebar'
import Footer from './Footer';
import Content from './Content';

class App extends Component {
	render() {
		return (
			<div id="wrapper">
				<Sidebar />
				<div id="content-wrapper" className="d-flex flex-column">
					<Content />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;