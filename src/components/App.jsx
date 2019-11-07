import React from 'react';
import AppRoutes from './AppRoutes'
import {Provider} from 'react-redux'
import store from '../redux/store'
import '../styles/styles.scss';

const App = ()=> (
    <Provider store ={store}>
        <AppRoutes/>
    </Provider>
);
export default App;
