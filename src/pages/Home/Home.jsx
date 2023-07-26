import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../Posts/Posts'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
        <>
          <Header />
          <div className="homeContainer">
            <Posts />
            <Sidebar />
          </div>
        </>

    </div>
  )
}
