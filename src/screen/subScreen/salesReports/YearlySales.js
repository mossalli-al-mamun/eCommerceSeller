import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart, LineChart, BarChart } from "react-native-chart-kit";

const Bar = require("paths-js/bar");

var scwidth = Dimensions.get("window").width;

const data = {
  labels: ["2014", "2015", "2016", "2017", "2018"],
  datasets: [
    {
      data: [70000, 65000, 62000, 80000, 68000]
    }
  ]
};

const chartConfig = {
  backgroundColor: "#fff",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: () => "black"
  //   color: (opacity = 1) => "black"
  // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};
const style = {
  // marginVertical: 8,
  // borderRadius: 10
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.yearlySales}>Last 5 Years Sales Report</Text>
        <BarChart
          style={style}
          data={data}
          width={scwidth * 0.98}
          height={200}
          chartConfig={chartConfig}
          renderVerticalLabels={{ paddingRight: 10 }}
        />

        {/* <Chart
          style={styles.chart}
          data={data1}
          verticalGridStep={5}
          type="line"
          showDataPoint={true}
          color={["#e1cd00"]}
        /> */}
        {/* <Bar data={data1} options={options} accessorKey="v" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  chart: {
    width: 200,
    height: 200
  },
  yearlySales: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
