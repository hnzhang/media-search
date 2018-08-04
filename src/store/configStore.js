import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configStore = ()=>{
    //+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const sagaMiddleware = createSagaMiddleware();
    return {
             ...createStore(rootReducer,
                compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__?  window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f
                )
            ),
            runSaga: sagaMiddleware.run(rootSaga),
    };
};

export default configStore;