import React, { Component } from 'react';
import { render } from 'react-dom';
import { RhythmContainer } from './containers/RhythmContainer';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

class Home extends Component {
    render(){
        return <RhythmContainer/>;
    }
}

render(<Home />, document.getElementById('app'));
