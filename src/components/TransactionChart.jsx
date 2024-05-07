import React from "react";
import Chart from "react-apexcharts";



const TransactionChart = () => {
    return (
        <div className=' bg-white rounded-sm border border-gray-200 flex flex-col flex-1'>
           
    <React.Fragment>
      <div className="container-fluid">
        <h3 className="text-center">Bar Chart in ReactJS</h3>

        <Chart
          type="bar"
          width={550}
          height={700}
          series={[
            {
              name: "Social Media Subscriber",
              data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
            },
          ]}
          options={{
        

            colors: ["#9381ff"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "Facebook",
                "Twitter",
                "Linkedin",
                "Instagram",
                "GitHub",
                "Stackoverflow",
                "Youtube",
              ],
              title: {
                text: "Restruant",
                style: { color: "#f90000", fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#9381ff"] },
              },
              title: {
                text: "User In (K)",
                style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#9381ff"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
    </div>
  );
}


export default TransactionChart;


