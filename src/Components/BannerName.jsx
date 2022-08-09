import React from 'react'

function BannerName({name,discount,link}) {
  return (
    <div className='bannerContent'>
      <h3>Hello {name}</h3>
      <p>
        Get free discount for every <span>${discount}</span> purchase
      </p>
      <a href={link}>Learn more</a>
    </div>
  )
}

export default BannerName