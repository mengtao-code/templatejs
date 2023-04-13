import App from 'App'
import {createElement} from 'react'
import {createRoot} from 'react-dom/client'

const app = document.getElementById('app')
if (app) {
    const root = createRoot(app)
    root.render(createElement(App))
}
