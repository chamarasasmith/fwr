import { Chart } from "react-google-charts";
const Chart1 = ({ hTitle, vTitle, data }) => {

  return <div className="row g-4" style={{ paddingTop: 60 }}>

    <div className="col-sm-12">

      <div className="card" style={{ borderRadius: 20 }}>
        <div className="card-body">
          <Chart
            width={'100%'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              hAxis: {
                title: hTitle,
              },
              vAxis: {
                title: vTitle,
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>

      </div>
    </div>

  </div>;
};


export default Chart1;
