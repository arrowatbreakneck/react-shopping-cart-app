import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NaviBar } from "./components/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";

function App() {

  const [datas,setDatas]= useState([
    {
      name: "bluetooth earphone",
      rate: "$18.00",
      pics: "https://wonderfulengineering.com/wp-content/uploads/2015/12/10-Best-Bluetooth-Headsets-5.jpg",
      id:"1"
    },
    {
      name: "chapatti maker",
      rate: "$10.00-$15.00",
      pics: "https://rukminim1.flixcart.com/image/1408/1408/roti-khakra-maker/r/q/w/go-ezzee-chapati-maker-c-03-new-bajaj-vacco-original-imaejygst3zswbqh.jpeg?q=90",
        id:"2"
    },
    {
      name: "hotwater kettle",
      rate: "$20.00",
      pics: "https://images-na.ssl-images-amazon.com/images/I/61L4DrXIPKL._SL1440_.jpg",
        id:"3"
    },
    {
      name: "vaccum cleaner",
      rate: "$120.00",
      bfrate: "$160.00",
      pics: "https://www.thespruce.com/thmb/kV8yFvkO7Cj9BQuHcFQmPrL0DCo=/fit-in/1500x1442/filters:no_upscale():max_bytes(150000):strip_icc()/download-2-5b37b3131b7d40b99981e1fb04c5a137.jpg",
        id:"4"
    },
    {
      name: "microwave Oven",
      rate: "$115.00",
      bfrate: "$145.00",
      pics: "https://assets.ajmadison.com/image/upload/f_jpg/v1/products/mc11h6033ct_front_a7097.jpg",
        id:"5"
    },
    {
      name: "trimmer",
      rate: "$40.00",
      bfrate: "$95.00",
      pics: "https://images-na.ssl-images-amazon.com/images/I/61bKzaqwM+L.jpg",
        id:"6"
    },
    {
      name: "blinder",
      rate: "$50.00",
      bfrate: "$70.00",
      pics: "https://www.bhphotovideo.com/images/images2000x2000/elation_professional_dtw_blinder_700_ip_1270069.jpg",
        id:"7"
    },
    {
      name: "printer",
      rate: "$155.00",
      bfrate: "$170.00",
      pics: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290017_sd.jpg",
        id:"8"
    },
  ]);
 const [cart,setCart]=useState([])
  return (
    
    <div>
      <div className="row">
        <NaviBar count={cart.length} />
    </div>

      <div className="cdds">
        <div className="row">
          {datas.map((dts) => (
            <div className="col-md-4 col-lg-6">
              <div className="carDz">
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src={dts.pics} />
                <Card.Body>
                  <Card.Title>{dts.name}</Card.Title>
                  <Card.Text>
                    <s>{dts.bfrate}</s>
                    {dts.rate}
                  </Card.Text>
                 {cart.includes(dts)?<button onClick = {()=>{
                  setCart(cart.filter((item)=>{item.id!==dts.id}))
                 }}>remove from cart</button>:<button onClick = {()=>{
                  setCart([...cart,dts])}}>addto cart</button>}
                </Card.Body>
              </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}



export default App;
