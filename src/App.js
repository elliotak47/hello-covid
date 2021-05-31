import { useEffect, useState } from 'react'
import axios from 'axios';
import Test1 from './components/Test1.js';
import { getCurrentDate } from './components/NewDate';

function App() {

  const [center, setCenter] = useState([])
  const [lanter, setLanter] = useState([])
  const [load, setLoad] = useState(false)
  const [xyz, setXyz] = useState([])
  const [audio] = useState(new Audio("https://cowinnn.s3.ap-south-1.amazonaws.com/notification_effects.mp3"));
  
  useEffect(() => {
    setInterval(() => {
      call()
    }, 7000);
  },[]);

  async function call() {
    setXyz([]);
    await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=505&date=' + getCurrentDate("-"))
      .then(res => {
        setCenter(res.data.centers)
      })
    await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=506&date=' + getCurrentDate("-"))
      .then(res => {
        setLanter(res.data.centers)
      })
    setLoad(false);
    callFun();
  }

  function callFun () {
    lanter.map(q => (
      q.sessions.map(w => {
        if (w.available_capacity_dose1 >= 0) {
          xyz.push(w.available_capacity_dose1)
        }
      })
    ))
    // xyz.push(1);//TO TEST THAT SOUND IS WORKING OR NOT...

    const exist = xyz.map(x => {
      return x > 0;
    })
    if (exist.includes(true)) {
        return callMethod();        
    }
  }

const callMethod=()=>{
  setTimeout(() => {
  audio.play();// TO PLAY SOUND...
  }, 100);
}

  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ textAlign: "right" }}>
        <button style={{ fontSize: "25px" }} onClick={() => call()} >R e f r e s h</button>
        {/* <button style={{ fontSize: "25px" }} onClick={callMethod} >B E L L</button> */}
      </div>
      {load && (
        <div style={{ color: "Red", textAlign: "center" }}>L O A D I N G...</div>
      )}
      {(center.length > 0) && (
        <div>
          {window.innerWidth > 500 ? (
            <div style={{ display: "flex", backgroundColor: "grey", marginBottom: "20px", paddingTop: "20px", color: "white" }}>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>District-Name</b> </div>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Address</b> </div>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Date</b> </div>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Time</b> </div>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Age-Limit</b> </div>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Vaccine</b> </div>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Type</b> </div>
              <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Available-capacity</b> </div>
            </div>) :
            (
              <div>
                <div style={{ display: "flex", backgroundColor: "grey", marginBottom: "20px", paddingTop: "20px", color: "white" }}>
                  <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Address</b> </div>
                  <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Date</b> </div>
                  <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Type</b> </div>
                  <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Available-capacity</b> </div>
                </div>
                <div style={{ color: "red", fontSize: "10px", textAlign: "center" }}> ROTATE YOUR DEVICE TO GET MORE INFO...& <b>Refresh...!</b> </div>
              </div>
            )
          }
          <div style={{ backgroundColor: "white", width: "100%", textAlign: "center" }}><b>JAIPUR-1</b></div>
          <div>
            {center.map((cen, i) => {
              return (
                <Test1 key={i} cen={cen} />
              )
            })
            }
          </div>
          <div style={{ backgroundColor: "white", textAlign: "center" }}><b>JAIPUR-2</b></div>
          <div>
            {lanter.map((cen, i) => {
              return (
                <Test1 key={i} cen={cen} />
              )
            })
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;



