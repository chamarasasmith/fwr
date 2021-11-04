import userImg from "../assets/user.png";
import { useEffect, useState } from "react";
import "../config";

const User = () => {

  const [isLoading, setisLoading] = useState(false);
  const [user, setuser] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(global.config.baseURL + "/api/v1/users/customers").then((res) => {
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

  }, []);

  return <div className="row g-4" style={{ paddingTop: 60 }}>
    <div className="col-sm-12">
      <h4>Device List</h4>
      <br></br>
      {
        isLoading ? <h6>Loading...</h6> :

          <div className="table-responsive">
            <table className="table table-sm table-bordered align-middle">
              <thead>
                <tr>
                  <th className="text-center p-3">Profile</th>
                  <th className="text-center p-3">Name</th>
                  <th className="text-center p-3">Device Count</th>
                  <th className="text-center p-3">Role</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-center p-3">Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  user.map((data) => {
                    return (<tr key={data.id}>
                      <td className="text-center">
                        <img src={userImg} className="rounded-circle" alt="..." style={{ width: 50, height: 50 }} />
                      </td>
                      <td>
                        <label className="fw-bold">{data?.firstname} {data?.lastname}</label>
                      </td>
                      <td className="text-center">
                        <label className="fw-bold">{data?.Device?.length}</label>
                      </td>
                      <td className="text-center">
                        <label className="fw-bold">{data?.Role?.rolename}</label>
                      </td>
                      <td className="text-center">
                        <span className={data?.status === "ACTIVE" ? "badge rounded-pill bg-info p-2 fs-6" : "badge rounded-pill bg-danger p-2 fs-6"}>{data?.status}</span>
                      </td>
                      <td className="text-center">
                        <a className="btn btn-outline-dark" href={"/userdetails/" + data?.id} style={{ borderRadius: 20 }}>Details</a>
                      </td>
                    </tr>);
                  })
                }

              </tbody>
            </table>
          </div>
      }

    </div>
  </div>;
};

export default User;
