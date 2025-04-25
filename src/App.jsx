import React from 'react'
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import Footer from './components/footer';
const App = () => {
  return (
    <div className='App'>

      <Navbar/>
      <Weather/>
      <Footer />
    </div>
  )
}

export default App
