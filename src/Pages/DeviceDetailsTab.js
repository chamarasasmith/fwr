import { useEffect, useState } from "react";
import Chart1 from "./Chart1";

const DeviceDetailsTab = ({ userDetails }) => {


  const [monthlyData, setMonthlyData] = useState([]);


  useEffect(() => {
    const loadData1 = () => {
      fetch(global.config.baseURL + "/api/v1/device/weightsummary/monthlytotal")
        .then((res) => { return res.json() })
        .then((data) => {
          let d1 = [];

          d1.push(["Month", "Input(kg)", "Output(kg)"]);

          setMonthlyData(d1);

          data?.filter(a => a.userid === userDetails?.id)?.map((item) => {
            return (
              d1.push([(item?.collectedyear?.toString() + "/" + item?.collectedmonth?.toString()), parseFloat(item?.totalinweight), parseFloat(item?.totaloutweight)])
            );
          });

        }).catch((error) => {
          console.log(error);
        });
    }
    loadData1();
  }, [userDetails]);

  return <div className="row g-4" style={{ paddingTop: 0 }}>
    <div className="col-sm-12">
      <form>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">


              {userDetails && monthlyData && monthlyData?.length > 0 &&
                <div className="col-12 col-sm-12 col-lg-12">
                  <Chart1 hTitle="Month (2021)" vTitle="Weight(kg)" data={monthlyData}></Chart1>
                </div>
              }


              {/* <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th className="text-center">Year</th>
                      <th className="text-center">Month</th>
                      <th className="text-center">Device ID</th>
                      <th className="text-center">Total Weight(In)</th>
                      <th className="text-center">Total Weight(Out)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      monthlyData?.map((data, index) => {

                        return (
                          <tr key={index}>
                            <td className="text-center">{data?.collectedyear || ''}</td>
                            <td className="text-center">{data?.collectedmonth || ''}</td>
                            <td className="text-center">{data?.deviceid || ''}</td>
                            <td className="text-end">{data?.totalinweight || ''}</td>
                            <td className="text-end">{data?.totaloutweight || ''}</td>
                          </tr>
                        );

                      })
                    }

                  </tbody>
                </table>
              </div> */}

            </div>
          </div>
        </div>
      </form>
    </div>
  </div>;
};


export default DeviceDetailsTab;
