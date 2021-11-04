
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = () => {
  const [center] = useState({ lat: 6.957685, lng: 80.00625 });
  const [zoom] = useState(10);
  const [device, setdevice] = useState([]);

  useEffect(() => {
    fetch(global.config.baseURL + "/api/v1/users/customers").then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    }).then((data) => {

      let devices = [];

      data?.map((item1) => {
        return (
          item1?.Device?.map((item2) => {
            devices.push(item2);
            return item2;
          })
        )
      });

      setdevice(devices);
    }).catch((error) => {
      console.log(error);
    });
  }, [])


  return (
    <div className="row g-4" style={{ paddingTop: 60 }}>
      <div className="col-12">
        <div className="card" style={{ height: "80vh" }}>
          <div className="card-body">
            <GoogleMapReact
              bootstrapURLKeys={{ key: global.config.apiKey }}
              defaultCenter={center}
              defaultZoom={zoom}
            >
              {
                device?.map((item, index) => {
                  return <Marker key={index}
                    lat={item?.lat}
                    lng={item?.lon}
                    name={item?.deviceid}
                    color="red"
                  />
                })
              }

              {/* <Marker
                lat={6.847983}
                lng={79.9752205}
                name="My Marker"
                color="red"
              /> */}
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Map;
