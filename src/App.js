import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardDeck from './CardDeck'

function App() {
  return (
    <div>
      <h1 className="text-center display-1">
        Daily Bible Verses
      </h1>
      <div className="my-5">
        <div className="container">
          <div className="row">
            <CardDeck />
          </div>
        </div>
      </div>
      <footer className="footer text-center bg-dark position-absolute w-100">
        <p className="text-white my-auto py-3 display-5">José Dutra - Front-End Web Developer - 2019</p>
      </footer>
    </div>
  )
}

export default App
