import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import format from 'number-format.js';
import request from 'request';

class App extends Component {
  constructor() {
    super();
    const feed = [
      {
        "title": "Storj Deflates < $1; Siacoin in Recovery?",
        "url": "https://www.cryptocoinsnews.com/storj-deflates-1-siacoin-recovery/",
        "source": "cryptocoinsnews.com"
      },
      {
        "title": "Ethereum-Based Invoice Finance Platform Hive Raises Over US$8 Million",
        "url": "https://coinjournal.net/ethereum-invoice-finance-platform-hive-us8-million/",
        "source": "coinjournal.net"
      },
      {
        "title": "Could blockchain startups change our everyday routine in big ways?",
        "url": "https://cryptoinsider.com/could-blockchain-startups-change-our-routine/",
        "source": "cryptoinsider.com"
      },
      {
        "title": "Daily Roundup – August 23, 2017",
        "url": "https://cryptoinsider.com/daily-roundup-august-23-2017/",
        "source": "cryptoinsider.com"
      },
      {
        "title": "Blockchain's 4 Biggest Assumptions                                        ",
        "url": "https://www.coindesk.com/blockchains-4-biggest-assumptions/",
        "source": "coindesk.com"
      },
      {
        "title": "Ethereum's 'Metropolis' Upgrade Could Still Be Months Away",
        "url": "https://www.coindesk.com/ethereums-metropolis-upgrade-still-months-away/",
        "source": "coindesk.com"
      },
      {
        "title": "From Tiigrihüpe to Estcoin – The digital evolution of “Europe’s Silicon Valley”",
        "url": "https://cryptoinsider.com/estcoin-the-digital-evolution-of-europe-silicon-valley/",
        "source": "cryptoinsider.com"
      },
      {
        "title": "Major domestic conglomerates match Japan’s blockchain drive",
        "url": "https://cryptoinsider.com/major-domestic-conglomerates-matching-japanese-governments-blockchain-drive/",
        "source": "cryptoinsider.com"
      },
      {
        "title": "China's New Fundraising Rules Could Lead to ICO Investigations",
        "url": "https://www.coindesk.com/chinas-new-fundraising-rules-lead-ico-investigations/",
        "source": "coindesk.com"
      },
      {
        "title": "$44 Million in Ethereum Moved With $0.13 Fee, How Can Bitcoin...",
        "url": "https://coinjournal.net/44-million-ethereum-moved-0-13-fee-can-bitcoin-reach-similar-scalability/",
        "source": "coinjournal.net"
      },
      {
        "title": "Bitcoin, Ether Prices Rise Pushes Crypto Market Cap Above US$150B",
        "url": "https://coinjournal.net/bitcoin-ether-prices-rise-pushes-crypto-market-cap-us150b/",
        "source": "coinjournal.net"
      },
      {
        "title": "Op-Ed: Bitcoin Passed $4,000, but What’s the Real Reason Why?",
        "url": "https://coinjournal.net/price-watch-bitcoin-passed-4000-whats-real-reason/",
        "source": "coinjournal.net"
      },
      {
        "title": "First Bitcoin Capital Responds to SEC Suspension",
        "url": "https://www.cryptocoinsnews.com/first-bitcoin-capital-responds-sec-suspension/",
        "source": "cryptocoinsnews.com"
      },
      {
        "title": "Viberate bringing live music to the blockchain",
        "url": "https://cryptoinsider.com/viberate-bringing-live-music-to-the-blockchain/",
        "source": "cryptoinsider.com"
      },
      {
        "title": "Monero, Dash Prices Soar as Bitcoin Slips Below $4,300",
        "url": "https://www.cryptocoinsnews.com/monero-dash-prices-soar-bitcoin-slips-4300/",
        "source": "cryptocoinsnews.com"
      },
      {
        "title": "Replay attacks explained",
        "url": "https://cryptoinsider.com/replay-attacks-explained/",
        "source": "cryptoinsider.com"
      },
      {
        "title": "BitTorrent Creator Bram Cohen: Bitcoin Miners are Butthurt Over SegWit",
        "url": "https://coinjournal.net/bittorrent-creator-bram-cohen-bitcoin-miners-butthurt-segwit/",
        "source": "coinjournal.net"
      },
      {
        "title": "Risk or Reward: What It Takes for an Exchange to Cash In on a New Currency?",
        "url": "https://www.coindesk.com/risk-reward-takes-exchange-cash-new-currency/",
        "source": "coindesk.com"
      },
      {
        "title": "Bitcoin ETF Now More Likelier than Ever, Says Bloomberg Analyst",
        "url": "https://www.cryptocoinsnews.com/bitcoin-etf-now-likely-bloomberg-analyst-says/",
        "source": "cryptocoinsnews.com"
      },
      {
        "title": "India Continues to Ponder Bitcoin Regulations as Cybercrime Soars",
        "url": "https://coinjournal.net/india-continues-ponder-bitcoin-regulations-cybercrime-soars/",
        "source": "coinjournal.net"
      }
    ];

    this.state = {
      feed: feed,
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
                                <a href={'http://' + item.source}>
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
                {this.state.prices.map((coin, index) => {
                  return (
                    <p key={index} style={{color: 'white', textAlign: 'left', fontSize: 10}}>{coin.name}: ${format('#,###.00', coin.price_usd)} - (${format('#,###.', coin.market_cap_usd)}) - <a style={{color: (coin.percent_change_24h[0] == '-') ? 'red' : 'green'}} >{(coin.percent_change_24h[0] == '-') ? '↓' + coin.percent_change_24h : '↑+' + coin.percent_change_24h}%</a> 24H</p>
                  );
                })}
                <p className='powered-by' style={{fontSize: 10, textAlign: 'left'}}>
                  powered by <a target='_blank' style={{color: 'gray'}} href='https://coinmarketcap.com/'>CoinMarketCap.com</a>
                </p>
              </div>
              <div style={{marginTop: 25, marginLeft: 25, display: 'inline-block'}}>
                <p className='powered-by' style={{fontSize: 10}}>
                  send me feedback <a target='_blank' style={{color: 'gray'}} href='https://twitter.com/adarbutel'>@adarbutel</a> or <a target='_blank' style={{color: 'gray'}} href='mailto:a@cryptofeatures.com'>a@cryptofeatures.com</a>
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
