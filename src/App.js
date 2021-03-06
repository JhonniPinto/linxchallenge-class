import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './screens/Landing'

function App() {
    return (
        <Router>
            <Route exact path='/' component={Landing} />
        </Router>
    )
}

export default App