import React from 'react'

function Test1({ cen }) {
    let sess = cen.sessions;

    return (
        <div>
            {window.innerWidth > 500 ?
                (<div>
                    {
                        sess.map((xxx, i) => (
                            <div key={i} >
                                {xxx.min_age_limit === 18 &&
                                    <div style={{ display: "flex", backgroundColor: xxx.available_capacity_dose1 > 0 ? "yellow" : "black", color: xxx.available_capacity_dose1 > 0 ? "black" : "white", marginBottom: "20px" }}>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {cen.district_name}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {cen.address}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {xxx.date}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            TO: {cen.from}  FROM:{cen.to}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {xxx.min_age_limit}
                                        </div>
                                         <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {xxx.vaccine}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {cen.fee_type}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {xxx.available_capacity_dose1}
                                        </div>
                                    </div>
                                }

                            </div>
                        ))
                    }
                </div>)
                :
                (<div>
                    {
                        sess.map((xxx, i) => (
                            <div>
                                {xxx.min_age_limit === 18 &&
                                    <div key={i} style={{ display: "flex", backgroundColor: xxx.available_capacity_dose1 > 0 ? "yellow" : "black", color: xxx.available_capacity_dose1 > 0 ? "black" : "white", marginBottom: "20px" }}                    
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {cen.address}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {xxx.date}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {cen.fee_type}
                                        </div>
                                        <div style={{ width: "200px", marginBottom: "20px", paddingTop: "20px", textAlign: "center" }}>
                                            {xxx.available_capacity_dose1}
                                        </div>
                                    </div>
                                }

                            </div>
                        ))
                    }
                </div>)}
        </div>
    )
}

export default Test1

