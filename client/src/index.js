import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
// import './index.css';§
import App from './src/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
