import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configStore from './store/configStore';

import App from './containers/App';

const store = configStore();
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </Provider>,
    document.getElementById('root')
);