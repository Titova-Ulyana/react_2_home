import React from 'react'
import Footer from "../components/footer";
import Add from "../components/add";
import Header from '../components/header';

function Add() {
  return (
    <div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Add/>
      </main>
      <Footer/>
    </div>
  )
}

export default Add