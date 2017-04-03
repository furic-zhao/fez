import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'public/module/common/header';
import Jumbotron from './module/jumbotron/index';
import Listing from './module/listing/index';
import Footer from 'public/module/common/footer';


const Page = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Listing />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <Page />,
  document.getElementById('app')
);
