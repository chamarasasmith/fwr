import { useEffect, useState } from "react";
import { useParams } from "react-router";
import userImg from "../assets/user.png";
import DeviceControlTab from "./DeviceControlTab";
import DeviceDetailsTab from "./DeviceDetailsTab";
import UserDetailsTab from "./UserDetailsTab";
import "../config";

const UserDetails = () => {

  const { id } = useParams();

  const [selectedTab, setSelectedTab] = useState(1);

  const class1 = "nav-link fw-bold active";
  const class2 = "nav-link fw-bold";

  const [isLoading, setisLoading] = useState(false);
  const [user, setuser] = useState({});

  useEffect(() => {

    if (id) {
      setisLoading(true);
      fetch(global.config.baseURL + "/api/v1/users/customers/" + id).then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      }).then((data) => {
        setuser(data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setisLoading(false);
      });
    }

  }, [id]);

  // const loadUserDetails = () => {

  //   console.log(user);

  //   let devices = user?.Device?.map((item) => {
  //     if (item.id === 1) {
  //       return { ...item, deviceid: 'windana2' };
  //     } else {
  //       return item;
  //     }
  //   });

  //   console.log(user);



  //   setuser((user) => user.Device = devices);
  //   console.log(user);
  // }


  return isLoading ? <h6>Loading...</h6> : <div className="row g-4" style={{ paddingTop: 60 }}>

    <div className="col-sm-12 text-center">
      <img src={userImg} className="rounded-circle img-thumbnail" style={{ width: '10%', alignSelf: 'center' }} alt="..." />
    </div>

    <div className="col-sm-12">

      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button type="button" className={selectedTab === 1 ? class1 : class2} aria-current="page" onClick={() => setSelectedTab(1)}>User Details</button>
        </li>
        <li className="nav-item">
          <button type="button" className={selectedTab === 2 ? class1 : class2} aria-current="page" onClick={() => setSelectedTab(2)}>Device History</button>
        </li>
        <li className="nav-item">
          <button type="button" className={selectedTab === 3 ? class1 : class2} aria-current="page" onClick={() => setSelectedTab(3)}>Device Control</button>
        </li>
      </ul>


    </div>

    <div className="col-sm-12">
      {selectedTab === 1 && <UserDetailsTab userDetails={user} />}
      {selectedTab === 2 && <DeviceDetailsTab userDetails={user} />}
      {selectedTab === 3 && <DeviceControlTab userDetails={user} />}
    </div>

  </div>;
};


export default UserDetails;
