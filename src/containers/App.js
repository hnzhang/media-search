import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from '../common/Header';
import HomePage from '../components/HomePage';
import MediaGalleryPage from './MediaGallery';

class App extends Component {
    render() {
        return (
         <div>
            <div className="container-fluid text-center">
                <Header />
            </div>
            <div className="App-intro">
                <Switch>
                     <Route exact path="/" component={HomePage}/>
                     <Route path="/Search" component={MediaGalleryPage}/>
                     <Redirect to="/" />
                </Switch>
            </div>
        </div>
        );
    }
}

export default App;