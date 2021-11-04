import React, { useEffect, useState } from "react";
import Card1 from "../utils/Card1";
import machine1 from "../assets/setting.png";
import weight from "../assets/weight.png";
import User from "./User";
import Chart1 from "./Chart1";

const Home = () => {

  const [monthlyData, setMonthlyData] = useState([]);

  const [totalDevice, settotalDevice] = useState(0);
  const [totalActiveDevice, settotalActiveDevice] = useState(0);

  const [totalInWeight, settotalInWeight] = useState(0);
  const [totalOutWeight, settotalOutWeight] = useState(0);

  useEffect(() => {
    const loadData1 = () => {
      fetch(global.config.baseURL + "/api/v1/device/weightsummary/monthlytotal")
        .then((res) => { return res.json() })
        .then((data) => {
          let d1 = [];

          d1.push(["Month", "Input(kg)", "Output(kg)"]);

          setMonthlyData(d1);

          data?.filter(a => a.userid === 1)?.map((item) => {
            return (
              d1.push([(item?.collectedyear?.toString() + "/" + item?.collectedmonth?.toString()), parseFloat(item?.totalinweight), parseFloat(item?.totaloutweight)])
            );
          });

        }).catch((error) => {
          console.log(error);
        });
    }


    const userData = () => {
      fetch(global.config.baseURL + "/api/v1/users/customers")
        .then((res) => { return res.json(); })
        .then((data) => {

          data?.map((item0) => {
            return item0?.Device?.map((item1) => {
              if (item1.status === "ONLINE" || item1.status === "on") {
                settotalActiveDevice((totalActiveDevice) => totalActiveDevice = totalActiveDevice + 1);
              }
              settotalDevice((totalDevice) => totalDevice = totalDevice + 1);
              return item1;
            });
          });

        })
        .catch((error) => {
          console.log(error);
        });
    }

    const totalWeightData = () => {
      fetch(global.config.baseURL + "/api/v1/device/weightsummary/total")
        .then((res) => { return res.json(); })
        .then((data) => {

          let tIn = 0;
          let tOut = 0;

          data?.map((item0) => {
            tIn = tIn + parseFloat(item0?.totalinweight ?? 0);
            tOut = tOut + parseFloat(item0?.totaloutweight ?? 0);
            return item0;
          });

          settotalInWeight(tIn);
          settotalOutWeight(tOut);

        })
        .catch((error) => {
          console.log(error);
        });
    }

    loadData1();
    userData();
    totalWeightData();
  }, []);


  return <div className="row g-4" style={{ paddingTop: 60 }}>

    <div className="col-12 col-sm-6 col-lg-6">
      <Card1 logo={machine1} title="Active Device Count" count={totalActiveDevice} subtitle={"Total Device Count : " + totalDevice} />
    </div>
    <div className="col-12 col-sm-6 col-lg-6">
      <Card1 logo={weight} title="Total Waste Weight (In)" count={totalInWeight} subtitle={"Total Waste Weight (Out) : " + totalOutWeight} />
    </div>

    {/* <div className="col-12 col-sm-12 col-lg-4">
      <Card1 logo={rating} title="Total Feedback Count" count="150" subtitle="Total Negative Feedback : 5" />
    </div> */}

    {monthlyData && monthlyData?.length > 0 &&
      <div className="col-12 col-sm-12 col-lg-12">
        <Chart1 hTitle="Month (2021)" vTitle="Weight(kg)" data={monthlyData}></Chart1>
      </div>
    }

    <div className="col-12 col-sm-12 col-lg-12">
      <User></User>
    </div>

  </div>;
};


export default Home;
