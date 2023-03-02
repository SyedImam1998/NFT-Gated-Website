import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import {UserContext} from '../App';
import EliteContract from '../EliteContract.json';
import '../App.css';

export default function Homepage() {
    const[account,setAccount]=React.useState('');
    const{value1}=React.useContext(UserContext);
    const[pass,setPass]=value1;
    const [contract,setcontract]=React.useState()
    const navigate=useNavigate();

    const loadFunction=async()=>{
        if(typeof window.ethereum!=='undefined'){
          const web3= new Web3(window.ethereum);
        //   setweb3(web3);
          window.ethereum.enable().catch(error=>{
            console.log(error);
            alert("please login with MetaMask");
          })
          const netId= await web3.eth.net.getId();
          const accounts= await web3.eth.getAccounts();
          // const accountBalance= await web3.eth.getBalance(accounts[0]);
          // const etherAmount= web3.utils.fromWei(accountBalance,'ether');
          setAccount(accounts[0]);
          const Elite= new web3.eth.Contract(EliteContract.abi,'0x153f4A026373dC47699ae6273c415F68dC438dFf')
          setcontract(Elite);
        }else{
          alert("MetaMask Not Found!!!")
        }
      }

     const verifyPass=async()=>{
        const res=await contract.methods.hasElitePass(account).call();
        if(res){
          setPass(true);
          navigate('/Dashboard');
        }else{
          setPass(false)
          navigate('/Dashboard');
        }
     }
     const mintElite=async()=>{
      await contract.methods.mintPass().send({from:account})
     }
  return (
    <div className='parent'>
        {
            account==="" &&<button className="ConnectBtn" onClick={loadFunction}>Connect Wallet</button>
        
        }
        {
            account!=="" &&
            <div>
                <button onClick={mintElite} className="ConnectBtn">Get Elite NFT</button>
                <p  onClick={verifyPass} className='dashboardlink'>Go to DashBoard</p>
            </div>
        }
        
    </div>
  )
}
