import { useEffect, useState } from 'react'
import axios from 'axios';
import Test1 from './components/Test1.js';

function App() {


  const [center, setCenter] = useState([])
  const [lanter, setLanter] = useState([])

  async function call() {
    await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=505&date=30-05-2021')
      .then(res => {
        setCenter(res.data.centers)
      })
    await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=506&date=30-05-2021')
      .then(res => {
        setLanter(res.data.centers)
      })

  }

  useEffect(() => {
    axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=505&date=30-05-2021')
      .then(res => {
        setCenter(res.data.centers)
      })
    axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=506&date=30-05-2021')
      .then(res => {
        setLanter(res.data.centers)
      })

  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <button onClick={() => call()} >Refresh</button>

      {(center.length > 0) && (
        <div>
          <div style={{ display: "flex", backgroundColor: "grey", marginBottom: "20px", paddingTop: "20px", color: "white" }}>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Block</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>District-Name</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Address</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Date</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Time</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Age-Limit</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Vaccine</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Type</b> </div>
            <div style={{ width: "200px", marginBottom: "20px", textAlign: "center" }}> <b>Available-capacity</b> </div>
          </div>
          <div style={{ backgroundColor: "white", width: "100%", textAlign: "center" }}><b>JAIPUR-1</b></div>
          <div>
            {center.map((cen, i) => {
              return (
                <Test1 key={i} cen={cen} count={i} />
              )
            })
            }
          </div>
          <div style={{ backgroundColor: "white", textAlign: "center" }}><b>JAIPUR-2</b></div>
          <div>
            {lanter.map((cen, i) => {
              return (
                <Test1 key={i} cen={cen} count={i} />
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



