import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import Store from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: {
            main: '#0091ea',
        },
    },
    typography: {
        useNextVariants: true
    },
});

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #0091ea;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;


const { persistor, store } = Store();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle />
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);


$(document).bind("DOMNodeRemoved", function (e) {
    console.log("Removed: " + e.target.nodeName);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
