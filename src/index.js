import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';


import configureStore from './js/store'

import rootSaga from './js/sagas'

import './css/less/antdCover.less'
import './css/scss/main.scss'

import HomePage from "./js/pages/HomePage";
import {LocaleProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';

const store = configureStore()
store.runSaga(rootSaga)

var app =
    <LocaleProvider locale={zhCN}>
        <Provider store={store}>
            <Router>
                <div style={{minWidth: '1260px'}}>
                    <Switch>
                        <Route path={'/'} component={HomePage}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    </LocaleProvider>

ReactDOM.render(app, document.getElementById('root'));
if (process.env.NODE_ENV === 'development') {
    registerServiceWorker();
}
