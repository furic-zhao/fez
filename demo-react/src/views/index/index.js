import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'public/module/common/header';
import Jumbotron from './module/jumbotron/index';
import Fezdesc from './module/fezdesc/index';
import Footer from 'public/module/common/footer';


var Page = React.createClass({
	render() {
		return (
			<div>
        <Header />
        <Jumbotron />
        <Fezdesc />
        <Footer />
        </div>
		);
	}
});

ReactDOM.render(
	<Page />,
	document.getElementById('app')
);