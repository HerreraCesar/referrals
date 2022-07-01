import { FiCopy, FiSend, FiTwitter } from "react-icons/fi";

import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <h3>Do you have a question or suggestion? <strong>Contact us</strong></h3>
      <div className="email">
        <h2>whybit.referidos@gmail.com</h2>
        <div className="copy">
          <FiCopy/>
        </div>
      </div>
      <div className='networks'>
        <div><a href="https://twitter.com/" target='_blank' rel="noreferrer"><FiTwitter/></a></div>
        <div><a href="https://web.telegram.org/" target='_blank' rel="noreferrer"><FiSend/></a></div>
      </div>
      <p className="copyright">Copyright 2022 <strong>WhyBit Incorporated</strong>. All rights reserved.</p>
    </div>
  )
}

export default Contact