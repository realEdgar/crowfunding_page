import Header from './containers/Header.js'
import Main from './containers/Main.js'

const App = () => {
    const view = `
        <div class="container">
            ${Header()}
            ${Main()}
        </div>
    `;
    return view;
}

export default App