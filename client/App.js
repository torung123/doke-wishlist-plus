import React, {Component} from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import {
  AppProvider,
} from '@shopify/polaris';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const apiKey = '38bcec038cb8c7ab097fef7002580f79';
    const shopOrigin = 'https://torung.myharavan.com';
    const shopName = 'torung';
    return (
      <AppProvider>
        <BrowserRouter>
          <div className="App-container">
            <Sidebar />
            <MainContent apiKey={ apiKey } shopName={ shopName }/>
          </div>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;