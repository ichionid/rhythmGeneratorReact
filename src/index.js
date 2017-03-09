import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { RhythmContainer } from './containers/RhythmContainer';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
const store = configureStore();

render(
  <Provider store={store}>
    <RhythmContainer store={store} rhythm={store.getState().rhythm}/>
  </Provider>, document.getElementById('app'));
