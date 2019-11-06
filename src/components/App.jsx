import React from 'react';
import AppRoutes from './AppRoutes'
import {Provider} from 'react-redux'
import '../styles/styles.scss';
import store from '../redux/store'



//===========================================================================================
//Insertar el banner de EdTeam
const App = ()=> (
    <Provider store ={store}>
        <AppRoutes/>
    </Provider>

);

export default App;
