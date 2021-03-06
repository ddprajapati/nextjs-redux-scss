import App from 'next/app';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store  from '../store/store';

import '../scss/main.scss';

class MyApp extends App {
    render() {
        console.log(this.props);
        const { Component, pageProps}= this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps}></Component>
            </Provider>
        )
    }       
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);