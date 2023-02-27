import React from 'react'
import Slider from '../compontents/Slider'
import FeaturedProducts from '../compontents/FeaturedProducts'
import Categories from '../compontents/Categories'

function Home() {
  return (
    <div>
      <Slider/>
      <Categories/>
      <FeaturedProducts type="featured"/>

    </div>
  )
}

export default Home