import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { PieChart, LineChart, BarChart } from "react-native-chart-kit";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { withNavigation } from "react-navigation";

const Bar = require("paths-js/bar");

var scwidth = Dimensions.get("window").width;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [70000, 65000, 55000, 60000, 80000, 68000]
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

class MonthlySales extends React.Component {
  static navigationOptions = {
    headerStyle: {
      // backgroundColor: "#DFC890",
      // padding: 20,
      // marginVertical: 20,
      height: 30
    },
    headerTitleStyle: {
      fontWeight: "bold",
      alignItems: "center"
    }
    // headerLeft: (
    //   <TouchableOpacity onPress={() => navigation.goBack()}>
    //     <MaterialIcons name="chevron-left" size={30} color={"black"} />
    //   </TouchableOpacity>
    // )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.monthlySales}>Last 6 Months Sales Report</Text>
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

export default MonthlySales;

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
  monthlySales: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
