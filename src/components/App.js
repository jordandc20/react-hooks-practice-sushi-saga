import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {

  const [sushiList, setSushiList] = useState([])
  const [money, setMoney] = useState(50)
  //import data from DB using useEffect
  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        const sushiData = data.map(sushi => ({ ...sushi, isEaten: false }))
        setSushiList(sushiData)
      })
  }, [])


  const handleEatSushi = (eatenSushi) =>{
    if (money >= eatenSushi.price) {
      const updateSushi = sushiList.map(sushi => {
        if (sushi.id === eatenSushi.id) {
          return { ...sushi, isEaten: true }
        } else {
          return sushi
        }
      }
      )
      setSushiList(updateSushi)
      setMoney(money => money - eatenSushi.price)

    } else {
      alert('no mo money')
    }
  }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} onSushiClick={handleEatSushi} />
      <Table plates={sushiList.filter(sushi => sushi.isEaten)} money={money} />
    </div>
  );
}

export default App;
