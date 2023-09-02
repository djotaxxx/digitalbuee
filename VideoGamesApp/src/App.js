  
import fetchData from './fetchData';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';

function App() {
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   setData(fetchData)
  //   console.log('data de la app',data)
  // },[])
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
