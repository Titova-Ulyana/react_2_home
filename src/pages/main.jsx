import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Naiden from "../components/naiden";
import Podpiska from "../components/podpiska";

const Main = () => {
    return (
<div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Slider/>
      <Naiden/>
      <Podpiska/>
      </main>
      <Footer/>
</div>
  );
};

export default Main;