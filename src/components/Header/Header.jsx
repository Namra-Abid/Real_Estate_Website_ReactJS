import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth  h-container">
          <img src="./logo.png" alt="" width={100} />
          <div className="flexCenter h-menu">
            <a href="">About - Resedencies</a>
            <a href="">Our Story</a>
            <a href="">Contact Us</a>
            <a href="">Get Sarted</a>
            <button className='button'>
            <a href="">Contact </a>
            </button>
            
          </div>

        </div>
      </section>
    </>
  )
}

export default Header