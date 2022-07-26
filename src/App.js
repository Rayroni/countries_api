import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <>
        <Header />
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<Country />}></Route>
      </>
    </Router>
  )
}

export default App