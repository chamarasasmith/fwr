import { React } from "react";
import Switch from "../utils/Switch";

const DeviceControlTab = ({ userDetails }) => {



  return (<div className="row g-4" style={{ paddingTop: 60 }}>

    <div className="col-sm-12">
      <form>
        <div className="row">
          {
            userDetails?.Device && userDetails?.Device?.length > 0 &&

            userDetails?.Device?.map((data) => {

              return (<div key={data.id} className="col-sm-12 mb-5">

                <div className="card">
                  <div className="card-body">
                    <div className="row">

                      <div className="col-sm-12 mb-5 ">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-8 align-self-center">
                                <h5 className="text-start">Device ID : {data?.deviceid} </h5>
                                <h6 className="text-start">Serial No : {data?.serialno} </h6>
                                <h6 className="text-start">Address : {data?.address} </h6>
                              </div>
                              <div className="col-sm-4 text-end align-self-center">
                                <span className={data?.status === "ONLINE" ? "badge rounded-pill bg-info p-3 fs-5" : "badge rounded-pill bg-danger p-3 fs-5"}>{data?.status}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {
                        data?.Component && data?.Component?.length > 0 && data?.Component.map((com) => {
                          return (<div key={com.id} className="col-sm-3 mb-5 text-center">
                            {/* <Switch name={com?.componentname} isSensor={com?.issensor === 'YES' || false} status={(com?.status === "ONLINE" || com?.status === "on") ? true : false} click={() => { toggleSwitch(com?.deviceId, com?.componentid, (com?.status === "on" ? "off" : "on")) }}></Switch> */}
                            <Switch userID={userDetails.id} deviceID={com?.deviceId} componentid={com?.componentid} name={com?.componentname} isSensor={com?.issensor === 'YES' || false} status={(com?.status === "ONLINE" || com?.status === "on") ? true : false}></Switch>
                          </div>);
                        })
                      }

                    </div>
                  </div>
                </div>
              </div>);

            })

          }


        </div>
      </form>
    </div>
  </div>);
};


export default DeviceControlTab;
