import { render } from 'preact';
import { html } from 'htm/preact';
import App from './components/App';
import '@picocss/pico/css/pico.min.css';

// Render the main App component
render(html`<${App} />`, document.getElementById('app'));