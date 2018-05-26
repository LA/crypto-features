import React, { Component } from 'react';
import logo from './logo.svg';
import btcQR from './btcQR.png';
import ethQR from './ethQR.png';
import ltcQR from './ltcQR.png';
import xmrQR from './xmrQR.png';
import steemQR from './steemQR.png';

import './App.css';
import format from 'number-format.js';
import request from 'request';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-89193904-2');

class App extends Component {
  constructor() {
    super();

    this.state = {
      feed: [],
      prices: [],
      globalData: {},
      contributeOpen: false,
      contributeButtonText: 'contribute'
    };

    document.title = 'Crypto Features -  Cryptocurrency Prices & Cryptocurrency News'

    ReactGA.set({ page: window.location.pathname + window.location.search });

    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidMount() {
    let prices = [];
    const qs = {limit: 50};
    request({url: 'https://api.coinmarketcap.com/v1/ticker/', qs: qs}, (err, response, body) => {
      if (err) { console.error(err); return; }
      const json = JSON.parse(body);
      json.forEach((coin) => prices.push(coin));
      this.setState({prices});
    });

    request({url: 'https://api.coinmarketcap.com/v1/global/'}, (err, res, body) => {
      if (err) { return console.error(err); }
      const json = JSON.parse(body);
      const totalMarketCap = json['total_market_cap_usd'];
      const total24HVolume = json['total_24h_volume_usd'];
      const btcPercentage = json['bitcoin_percentage_of_market_cap'];
      const activeCurrencies = json['active_currencies'];
      const globalData = {
        totalMarketCap,
        total24HVolume,
        btcPercentage,
        activeCurrencies,
      };
      this.setState({globalData});
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
          semi-powered by <a target='_blank' rel="noopener noreferrer" style={{color: 'gray'}} href='https://newsapi.org/'>NewsAPI.org</a>
        </span>
      </td>
    );

    return (
      <center style={{backgroundColor: '#1B1B1B', width: '100%', height: '100%'}}>
        <table className='table' style={{paddingTop: 10, backgroundColor: '#1B1B1B'}}>
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
                        <span>
                          <h1 className='site-title'>Crypto Features News</h1>
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
                                {' ('}
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
              <div style={{marginTop: 50, marginLeft: 25, display: 'inline-block'}}>
                <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>
                  Global Data
                </p>
                <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>
                  {
                    'Total Market Cap (USD): '
                    + '$'
                    + format('#,###.', this.state.globalData.totalMarketCap)
                  }
                </p>
                <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>
                  {
                    '24 Hour Volume (USD): '
                    + '$'
                    + format('#,###.', this.state.globalData.total24HVolume)
                  }
                </p>
                <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>
                  {
                    'BTC Percentage of Market Cap: '
                    + this.state.globalData.btcPercentage
                    + '%'
                  }
                </p>
                <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>
                  {
                    'Active Currencies: '
                    + this.state.globalData.activeCurrencies
                  }
                </p>
              </div>
            </div>

            <div style={{marginLeft: 'auto'}}>
              <div style={{marginTop: 15, marginLeft: 25, display: 'inline-block'}}>
                <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>
                  Name: ₿BTC ($USD) - $USD MKT Cap - % Change 24H
                </p>
                {this.state.prices.map((coin, index) => {
                  const price = Number(coin.price_usd);
                  console.log(coin.name, ':', '$'+coin.price_usd, '₿'+coin.price_btc);
                  const coinPrice = (price > 1) ? format('#,###.00', price) : price;

                  const coinMarketCap = format('#,###.', coin.market_cap_usd);

                  const btcEquiv = '₿'+coin.price_btc;

                  const pctChange = coin.percent_change_24h || '?';
                  let color = (pctChange[0] === '-') ? 'red' : 'green';
                  color = (pctChange[0] === '?') ? 'white' : color;
                  let arrow = (pctChange[0] === '-') ? '↓' + pctChange : '↑+' + pctChange;
                  arrow = (pctChange[0] === '?') ? '🤷‍♂️ ' : arrow;


                  return (
                    <p key={index} style={{color: 'white', textAlign: 'left', fontSize: 10}}>{index+1}. {coin.name}: {btcEquiv} (${coinPrice}) - ${coinMarketCap} - <a style={{color: color}} >{arrow}%</a> 24H</p>
                  );
                })}
                <p style={{fontSize: 10, textAlign: 'left'}}>
                  powered by <a target='_blank' rel="noopener noreferrer" style={{color: 'gray'}} href='https://coinmarketcap.com/'>CoinMarketCap.com</a>
                </p>
                <p style={{fontSize: 10, textAlign: 'left'}}>
                  <a target='_blank' rel="noopener noreferrer" style={{color: 'gray', textDecoration: 'underline', cursor: 'pointer'}}
                  onClick={() => {
                    this.setState({ contributeOpen: !this.state.contributeOpen });
                    this.setState({
                      contributeButtonText: (!this.state.contributeOpen) ? 'hide contribute' : 'contribute'
                    })
                  }}>{this.state.contributeButtonText}</a>
                </p>
              </div>
              <div style={{marginTop: 25, marginLeft: 25, display: 'inline-block'}}>
                <p style={{fontSize: 10}}>
                  send me feedback <a target='_blank' rel="noopener noreferrer" style={{color: 'gray'}} href='https://twitter.com/adarbutel'>@adarbutel</a>
                </p>
              </div>
              {
                this.state.contributeOpen
                ?
                  <div style={{margin: '45px auto', textAlign: 'center'}}>
                    <p style={{fontSize: 10}}>
                      <a>Buy more crypto :)</a>
                    </p>
                  </div>
                  /*<div>
                  <div style={{marginTop: 45, textAlign: 'left'}}>
                    <p style={{fontSize: 10}}>
                      <a target='_blank' rel='noopener noreferrer' style={{color: 'white'}}>Steem: @throne
                      </a>
                    </p>
                    <img style={{maxWidth: 200, backgroundColor: 'white', padding: 5}} src={steemQR} />
                  </div>
                  <div style={{marginTop: 45, textAlign: 'left'}}>
                    <p style={{fontSize: 10}}>
                      <a target='_blank' rel='noopener noreferrer' style={{color: 'white'}}>BTC: 18gqDMJQGR21AyR5FJ9wi6QofbD2CwpfPq
                      </a>
                    </p>
                    <img style={{maxWidth: 200, backgroundColor: 'white', padding: 5}} src={btcQR} />
                  </div>
                  <div style={{marginTop: 45, textAlign: 'left'}}>
                    <p style={{fontSize: 10}}>
                      <a target='_blank' rel='noopener noreferrer' style={{color: 'white'}}>ETH: 0xA1a79545df48860c475D8Df4A2C947920EC309e6
                      </a>
                    </p>
                    <img style={{backgroundColor: 'white', padding: 5}} src={ethQR} />
                  </div>
                  <div style={{marginTop: 45, textAlign: 'left'}}>
                    <p style={{fontSize: 10}}>
                      <a target='_blank' rel='noopener noreferrer' style={{color: 'white'}}>LTC: LN5WevGS9HmBdBpNWo9Mp9vGN2RAY2ZoPf
                      </a>
                    </p>
                    <img style={{backgroundColor: 'white', padding: 5}} src={ltcQR} />
                  </div>
                  <div style={{marginTop: 45, textAlign: 'left'}}>
                    <p style={{fontSize: 10}}>
                      <a className='xmr-ad' target='_blank' rel='noopener noreferrer' style={{color: 'white'}}>XMR: 47jyXhag5vNMZR6NcDmmifXK3AmMD6c3xYeAHXHSpM52gsisCbZfVpsgT5FFGADskffiQ68dwghUiC9mWGzT9aFZ1aFGLrr
                      </a>
                    </p>
                    <img style={{backgroundColor: 'white', padding: 5}} src={xmrQR} />
                  </div>
                </div>*/
                :
                null
              }
            </div>
          </tbody>
        </table>
      </center>
    );
  }
}

export default App;
