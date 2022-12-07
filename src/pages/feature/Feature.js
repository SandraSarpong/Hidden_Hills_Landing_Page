import React from 'react'
import "./Feature.css"
import { Image } from 'antd';

function Feature() {
  return (
    <div className='features-us'>
        <div className='features-left'>
            <img
            width={200}
            src="https://images.unsplash.com/photo-1525883405167-fc4e76c7713a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxob3VzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=90"
          />
        </div>
        <div className='features-right'>
            <h3>Search hotels near you</h3>
            <p>Access to accommodation with high quality service has been a challenge in this part of the world as a result of various contributing factors.
              Hidden Hills makes this super easy as our platform members are presented with a plethora of options providing top notch services at the highest standards. 
              </p>
            <br/>
            <p>Users have access to carefully curated rooms, apartments and hotels with comfort as a top priority.
              Sign up to enjoy access to the warmth and services on Hidden Hills. 
              Hidden Hills, quench your wanderlust.</p>
        </div>
    </div>
  )
}

export default Feature