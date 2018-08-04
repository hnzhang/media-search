import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configStore from './store/configStore';

import App from './containers/App';

// from https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-1
const store = configStore();
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </Provider>,
    document.getElementById('root')
);