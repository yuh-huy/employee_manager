import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Home from "./component/home/index.jsx"

// Tạo component App
function App() {
    return (
        <div>
            <h1>lô</h1>
            <Home />
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

