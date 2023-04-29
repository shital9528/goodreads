import React from 'react'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import CategoryList from '../../Components/CategoryList'

const Home = (props) => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='container'>
      <CategoryList/>

      </div>
      
    </div>
  )
}

export default Home

