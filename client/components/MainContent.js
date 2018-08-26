import React, { Component } from 'react';
import {
    Layout,
    ProgressBar
} from '@shopify/polaris';
import Thongke from './Thongke';
import Wishlist from './Wishlist';
import { Route, Switch } from 'react-router-dom';

export default class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {shopName} = this.props;
        return (
      
            <div className="App-content">
                <div className="App-contentMain">
        
                    <Switch>
                        <Route path="/" exact component={(props) => <Thongke {...props} shopName={shopName} />} />
                        <Route path="/wishlist" exact component={(props) => <Wishlist {...props} shopName={shopName} />} />
                    </Switch>
            
                </div>
            </div>
         
        )   
    }
}
