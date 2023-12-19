import React from 'react'
import sama from "../../public/img/sama2.webp"

export default function Nav({connect}) {
  return (
    <div className='navbar d-flex'>
        <div className="logo d-flex">
            <h2 className='fw-bold'>SAMA</h2>
            <img src={sama} alt="" />
        </div>

        <div className="">
            <button onClick={connect} className='btn btn-primary text-white'><i class="fa-solid fa-wallet mx-2"></i>Connect Wallet</button>
        </div>
    </div>
  )
}
