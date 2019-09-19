import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import GlobalStyle from './styles/global'



ReactDOM.render(

    <Router>
        <ThemeProvider theme={theme}>
            <Route path={"/"} component={App} />
        </ThemeProvider>
        <GlobalStyle />
    </Router>,

    document.getElementById('root')
);


