'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nav = [];

    // Add future links lowercase with hyphens
    ['atx-plays', 'leagues', 'charities', 'how-it-works', 'about-Us']
    .forEach((item, index) => {
      nav.push(<li className='text-capitalize' key={index}><Link to={`/${item}`}>{item.replace('-', ' ')}</Link></li>);
    });

    return (
      <div className='header'>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              {nav}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PageHeader;
