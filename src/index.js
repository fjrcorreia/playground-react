import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Intro from './components/Intro';
import Body from './components/Body';
import Section from './components/Section';
import './style/index.css';

ReactDOM.render(
    <App >
        <Header type="example"/>
        <Intro message="My message"/>
        <Body>
            <Section title="Whats Up">
                <p>This is a very long explanation about nothing, a TL;DR;</p>
            </Section>
        </Body>
    </App>,
    document.getElementById('root')
);
