import {fork} from 'redux-saga/effects';
import watchSearchMedia from './watcher';

// here is to register our watcher saga(s) and export as a single generator
// function(startForman) as our root Saga.

export default function *startForman(){
    yield fork(watchSearchMedia);
};