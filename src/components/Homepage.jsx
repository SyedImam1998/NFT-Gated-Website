import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import {UserContext} from '../App';

export default function Homepage() {
    const[account,setAccount]=React.useState('');
    const{value1}=React.useContext(UserContext);
    const[pass,setPass]=value1;
    const navigate=useNavigate();

    const loadFunction=async()=>{
        if(typeof window.ethereum!=='undefined'){
          const web3= new Web3(window.ethereum);
          window.ethereum.enable().catch(error=>{
            console.log(error);
            alert("please login with MetaMask");
          })
          const netId= await web3.eth.net.getId();
          const accounts= await web3.eth.getAccounts();
          // const accountBalance= await web3.eth.getBalance(accounts[0]);
          // const etherAmount= web3.utils.fromWei(accountBalance,'ether');
          setAccount(accounts[0]);
        }else{
          alert("MetaMask Not Found!!!")
        }
      }

     const verifyPass=()=>{
        navigate('/Dashboard');
     }
  return (
    <div>
        {
            account==="" &&<button onClick={loadFunction}>Connect Wallet</button>
        
        }
        {
            account!=="" &&
            <div>
                <button>Get Elite NFT</button>
                <p  onClick={verifyPass} className='dashboardlink'>Go to DashBoard</p>
            </div>
        }
        
    </div>
  )
}