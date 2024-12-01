import React, { Component } from 'react'
import About from '../About/about'

 class Home extends Component {

    render() {
    return (
      <div>
        <h1 className='bg-info'>Home Component</h1>
        <About/>
      </div>
    )
  }
}
export default Home