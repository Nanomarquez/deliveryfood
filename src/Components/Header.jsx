import React, { useEffect } from 'react';
import {SearchRounded,ShoppingCartRounded,BarChart} from '@mui/icons-material';

function Header() {

    useEffect(()=>{
      const toggleMenu = document.querySelector('.toggleMenu');
      toggleMenu.addEventListener('click',()=>{
        document.querySelector('.rightMenu').classList.toggle('active');
        console.log('open meneuuu')
      })
    },[])

  return (
    <header>
      <img src="https://i.pinimg.com/originals/9c/d5/e9/9cd5e92c1ac8597870168b98a82b0256.png" alt="" className='logo'/>
      <div className="inputBox">
        <SearchRounded className='searchIcon'/>
        <input type="text" placeholder='Search...'/>
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className='cart'/>
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img src="https://avatars.githubusercontent.com/u/101282140?s=400&u=bc3bd8d2090a27580527a3784fb4fe14144d99d8&v=4" alt="" className='profilePic'/>
        </div>
        <h2 className="userName">Nano Marquez</h2>
      </div>
      <div className="toggleMenu">
        <BarChart className='toggleIcon'/>
      </div>
    </header>
  )
}

export default Header