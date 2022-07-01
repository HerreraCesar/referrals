import { HashLink as Link } from "react-router-hash-link";
import React from 'react'

const CoverPage = () => {
  return (
    <div id='cover-page'>
      <div className='container'>
        <img src="./assets/btc.png" alt="" />
        <div>
          <h1>Looking for a referral?</h1>
          <h2>We have it.</h2>
          <Link to="/#catalogue">
            <button className='button'>Take me there!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoverPage