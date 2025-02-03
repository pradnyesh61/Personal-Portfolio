import React from 'react'
import "../Styles/CP_Profile.css"
import p1 from "../assets/1.jpg"
import leetcode from "../assets/LeetCode.png"
import hackerrank from "../assets/HackerRank.png"
import geeksforgeeks from "../assets/geeksforgeeks.jpg"
import codechef from "../assets/CodeChef.jpg"


function CP_Profile() {
  return (
    <div className='cp_profile'>
       
       <div className='cprofile'>
       {/* <div style={{backgroundImage:`url(${hackerrank}`}} className="bgImage"/> */}
       <div>
       <img src={hackerrank} alt="Logo" className='images' />
       </div>
        <h2>Hacker - Rank</h2>
        <a href="https://www.hackerrank.com/salunkepradnyes1" target="_blank">Profile</a>
       </div>


       <div className='cprofile'>
       {/* <div style={{backgroundImage:`url(${codechef}` ,width:200 }} className="bgImage"/> */}

       <div>
       <img src={codechef} alt="Logo" className='images' />
       </div>
        <h2>Code - Chef</h2>
        <a href="https://www.codechef.com/users/pradnyesh_61"target="_blank">Profile</a>
       </div>

       <div className='cprofile'>
       {/* <div style={{backgroundImage:`url(${leetcode}` ,width:200 }} className="bgImage"/> */}
       <div>
       <img src={leetcode} alt="Logo" className='images' />
       </div>
        <h2>LeetCode</h2>
        <a href="https://leetcode.com/Pradnyesh_Salunke/" target="_blank">Profile</a>
       </div>

       <div className='cprofile'>
       {/* <div style={{backgroundImage:`url(${geeksforgeeks}` ,width:200 }} className="bgImage"/> */}
       <div>
       <img src={geeksforgeeks} alt="Logo" className='images' />
       </div>
        <h2>Geeks For Geeks</h2>
        <a href="https://auth.geeksforgeeks.org/user/pradnyeshsalunke/" target="_blank">Profile</a>
       </div>

    </div>
  )
}

export default CP_Profile
