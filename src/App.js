import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import format from 'number-format.js';
import request from 'request';

class App extends Component {
  constructor() {
    super();

    this.state = {
      feed: [],
      prices: [],
    };

    document.title = 'News'
  }

  componentDidMount() {
    let prices = [];
    const qs = {limit: 10};
    request({url: 'https://api.coinmarketcap.com/v1/ticker/', qs: qs}, (err, response, body) => {
      if (err) { console.error(err); return; }
      const json = JSON.parse(body);
      json.forEach((coin) => prices.push(coin));
      this.setState({prices});
    });

    request({url: 'https://api.cryptofeatures.com'}, (err, response, body) => {
      if (err) { console.error(err); return; }
      const json = JSON.parse(body);
      this.setState({feed: json});
    });
  }

  render() {
    const poweredbyNewsAPI =
    (
      <td style={{textAlign: 'right', paddingRight: 4}}>
        <span className='powered-by'>
          semi-powered by <a target='_blank' style={{color: 'gray'}} href='https://newsapi.org/'>NewsAPI.org</a>
        </span>
      </td>
    );

    return (
      <center style={{backgroundColor: '#1B1B1B'}}>
        <table className='table' style={{paddingTop: 10}}>
          <tbody>
            <tr>

              <td>
                <table style={{justifyContent: 'center'}} width='100%'>
                  <tbody>
                    <tr>
                      <td style={{width: 25}}>
                        <a href='./'>
                          <img src={logo} alt='logo' style={{width: 20, height: 20}} />
                        </a>
                      </td>
                      <td>
                        <span className='site-title'>
                          Crypto Features News
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <table style={{borderCollapse: 'collapse', borderSpacing: 0}}>
                  <tbody>
                    {this.state.feed.map((item, index) => {
                      return (
                        <tr key={index}>
                          <tr>
                            <td style={{textAlign: 'right', width: 20}}>
                              <span className='index'>
                                {index + 1}.
                              </span>
                            </td>
                            <td style={{width: 5}}></td>
                            <td className='title'>
                              <a className='title-link' href={item.url}>
                                {item.title}
                              </a>

                              <span className='source' style={{color: 'gray'}}>
                                {' ' + '('}
                                <a href={'https://' + item.source}>
                                  {item.source}
                                </a>
                                {')'}
                              </span>
                            </td>
                            <td></td>
                          </tr>
                          <tr style={{height: 5}}></tr>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
            </tr>

            <div style={{marginLeft: 'auto'}}>
              <div style={{marginTop: 25, marginLeft: 25, display: 'inline-block'}}>
                <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>
                  Name: BTC Equiv ($USD) - $USD MKT Cap - % Change 24H
                </p>
                {this.state.prices.map((coin, index) => {
                  return (
                    <p key={index} style={{color: 'white', textAlign: 'left', fontSize: 10}}>{coin.name}: {format('#.00000000', coin.price_btc)} (${format('#,###.00', coin.price_usd)}) - ${format('#,###.', coin.market_cap_usd)} - <a style={{color: (coin.percent_change_24h[0] == '-') ? 'red' : 'green'}} >{(coin.percent_change_24h[0] == '-') ? '↓' + coin.percent_change_24h : '↑+' + coin.percent_change_24h}%</a> 24H</p>
                  );
                })}
                <p className='powered-by' style={{fontSize: 10, textAlign: 'left'}}>
                  powered by <a target='_blank' style={{color: 'gray'}} href='https://coinmarketcap.com/'>CoinMarketCap.com</a>
                </p>
              </div>
              <div style={{marginTop: 25, marginLeft: 25, display: 'inline-block'}}>
                <p className='powered-by' style={{fontSize: 10}}>
                  send me feedback <a target='_blank' style={{color: 'gray'}} href='https://twitter.com/adarbutel'>@adarbutel</a>
                </p>
              </div>
            </div>
          </tbody>
        </table>
      </center>
    );
  }
}

export default App;
