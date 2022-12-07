import React from 'react'
import './About.css'
import Team from './team/Team'
function About() {
  return (
    <div className='about-us'>
        <div className='about-detail'>
            <h3>
                Who we are
            </h3>
            <p>
            Hidden Hills came to fruition under the oddest circumstances. It was Easter break, April, 2022 and as a Ghanain, you know the only place to be was Kwahu. 
            <br/>A very good friend had touched down from New York in anticipation of a memorable celebration when it all took a sudden left turn; our reservation was double-booked and a late arrival had us stranded.

            </p>
            <br/>
            <p>
            It was a stressful experience scrambling about to find extra spaces in apartments or houses around since there wasn’t a centralized database to find them. <br/>It was a long night of random calls and enquiries from strangers to find accommodation.

            </p>
            <br/> 
            <p>
            Eventually we did, but we also recognized a gap in the market and considered how we could solve a huge problem tackling it head-on. 
            <br/>We went through a couple of possible solutions like a good old Yellow Pages book for possible BnB’s and 
            apartments in and around Kwahu.<br/> ALX-Holberton came calling and we decided to develop the idea into the 
            Hidden Hills app as our portfolio project submission, which in turn killed two birds with one stone.
            </p>
        </div>
        <div className='team'>
            <Team/>
        </div>
        
    </div>
  )
}

export default About