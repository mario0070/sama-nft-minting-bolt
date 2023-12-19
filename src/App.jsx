import { useState } from 'react'
import './App.css'
import Nav from './components/nav';
import heroImg from "../public/img/hero_bg.jpeg"
import spin from "../public/img/spin.png"
import sama from "../public/img/sama1.svg"
import frog from "../public/img/frog.png"

function App() {
  
  function connect() {
      if (window.ethereum) {
      
        window.ethereum.request({ method: "eth_requestAccounts" });
        window.web3 = new Web3(window.ethereum);
        const account = web3.eth.accounts;
        //Get the current MetaMask selected/active wallet
        const walletAddress = account.givenProvider.selectedAddress;
        console.log(`Wallet: ${walletAddress}`);
      
      } 
      else {
        console.log("No wallet");
      }
  }

  const alert = (icon, msg) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background : "#0a2540",
      color: "white",
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: icon,
      title: msg
    });
  }

  return (
      <>
       
        <div className="hero mb-5">
            <div className="text">
              <Nav connect={connect}/>
               <div className="d-flex flex">
                  <div className="mt-4">
                    <h5 className='fw-bold'>0 / 725  Minted</h5>
                    <h1>Discover & Collect NFT Artwork</h1>
                    <div className="d-flex btns mt-3 mb-3">
                        <button className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Mint Now</button>
                        <button className="btn" onClick={() => alert("info", "Coming Soon!!")}>Join the Waitlist</button>
                    </div>
                    <p className="fw-bold">Max 3 NFTs Per Wallet. Price 0.02 ETH Mint is Live Until 22 July</p>
                  </div>
                  <div className="img">
                    <img className='logo' src="https://aenft-minting.netlify.app/images/hero_img.svg" alt="" />
                    <img src={spin} alt=""  className='spin'/>
                  </div>
               </div>
            </div>
            <img src={heroImg} alt="" className='bg' />
        </div>

        <div className="section1">
            <div className="d-flex">
              <div className="img">
                <img src="https://aenft-minting.netlify.app/images/product1.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://aenft-minting.netlify.app/images/product6.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://aenft-minting.netlify.app/images/product1.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://aenft-minting.netlify.app/images/product6.svg" alt="" />
              </div>
            </div>
        </div>

        <div className="section2">
          <h1 className='easy'>EASY STEPS</h1>
          <h1 className='how mb-5'>HOW TO MINT</h1>
          <div className="d-flex flex">
            <div className="d-flex mb-4">
                <h1>1</h1>
                <h4 className="mx-2">Connect Your Wallet</h4>
            </div>
            <div className="d-flex mb-4">
                <h1>2</h1>
                <h4 className="mx-2">Select Your Quantity</h4>
            </div>
            <div className="d-flex mb-4">
                <h1>3</h1>
                <h4 className="mx-2">Confirm the Transaction</h4>
            </div>
            <div className="d-flex mb-4">
                <h1>4</h1>
                <h4 className="mx-2">Receive Your NFTs</h4>
            </div>
          </div>
        </div>

        <div class="modal fade" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-header">
                <h4 class="modal-title">Mint NFT</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">
                <h5 className="text-center mt-3">COLLECT YOUR NFT BEFORE THE DEADLINE.</h5>
                <div className="img text-center">
                  <img src={spin} alt="" />
                </div>
                <div className="d-flex">
                  <p className="mb-0">Quantity / 0.25 ETH</p>
                  <div className="d-flex actions">
                    <i class="fa-solid fa-plus"></i>
                    <p className="mb-0 mx-4">1</p>
                    <i class="fa-solid fa-minus"></i>
                  </div>
                </div>
                <div className="d-flex">
                    <p className="mb-0">Total Price</p>
                    <p className="mb-0">0.001 SepoliaETH</p>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </>
  )
}

export default App
