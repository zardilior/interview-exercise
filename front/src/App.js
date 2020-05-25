import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <div className="annotations">
          <hr/>
          <h3 className="title">Get to market faster with rapid deployment</h3>
          <p>Leverage MK's existing integrations with credit bureaus and core processors.</p>
          <hr/>
        </div>
        <footer className="footer">
          © 2020 MK Decision
        </footer>
      </div>
    );
  }
}

export default App;
