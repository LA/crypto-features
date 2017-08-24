import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const feed = [
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
      {
        title: 'Ex-lottery worker who rigged winnings gets 25 years in prison',
        source: 'cnn.com',
        author: 'Marky Mark',
        timeAgo: '25min',
      },
    ];

    this.state = {
      feed: feed,
    };

    document.title = 'News'
  }

  render() {
    return (
      <center style={{backgroundColor: 'black'}}>
        <table className='site-container' style={{paddingTop: 10}} width='100%' height='100%'>
          <tbody>
            <tr>

              <td>
                <table style={{backgroundColor: 'black', justifyContent: 'center'}} width='100%'>
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
                      <td style={{textAlign: 'right', paddingRight: 4}}>
                        <span className='powered-by'>
                          powered by <a target='_blank' style={{color: 'gray'}} href='https://newsapi.org/'>NewsAPI.org</a>
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
                              <a href='./'>
                                {item.title}
                              </a>
                            </td>
                            <td style={{width: 5}}></td>
                            <td className='source' style={{paddingRight: 15}}>
                              <span>
                                (
                                <a href='./'>
                                  {item.source}
                                </a>
                                )
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan='2'></td>
                            <td>
                              <span style={{color: 'gray', fontSize: 10}}>
                                {item.author}
                              </span>
                            </td>
                          </tr>
                          <tr style={{height: 5}}></tr>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>

            </tr>
          </tbody>
        </table>
      </center>
    );
  }
}

export default App;
