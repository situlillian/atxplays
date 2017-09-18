'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PageHeader = require('../shared/header/index.jsx');
const PageFooter = require('../shared/footer/index.jsx');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader />
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-3'>Welcome to ATX Plays</h1>
            <p>Blah blah blah some text here is some stuff.</p>
            <p><a className='btn btn-primary btn-lg' href='#' role='button'>Register now &raquo;</a></p>
          </div>
        </div>

        <div className='container'>

          <div className='row'>
            <div className='col-md-4'>
              <h2>News</h2>
              <p>News Img</p>
              <p><a className='btn btn-secondary' href='#' role='button'>View details &raquo;</a></p>
            </div>
            <div className='col-md-4'>
              <h2>Calendar</h2>
              <p>Calendar Img</p>
              <p><a className='btn btn-secondary' href='#' role='button'>View details &raquo;</a></p>
            </div>
            <div className='col-md-4'>
              <h2>Scoreboard</h2>
              <p>Scoreboard Img</p>
              <p><a className='btn btn-secondary' href='#' role='button'>View details &raquo;</a></p>
            </div>
          </div>
          <div className='row'>
            <div id='carouselExampleControls' className='carousel slide' data-ride='carousel'>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img className='d-block w-100' src='...' alt='First slide' />
                </div>
                <div className='carousel-item'>
                  <img className='d-block w-100' src='...' alt='Second slide' />
                </div>
                <div className='carousel-item'>
                  <img className='d-block w-100' src='...' alt='Third slide' />
                </div>
              </div>
              <a className='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>

        </div>
        <PageFooter />
      </div>
    );
  }
}

module.exports = Home;
