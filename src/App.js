import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ZoomDomain from "./charts/zoom-domain/zoom-domain";
import CyclesChart from "./charts/cycles-chart/cycles-chart";
import ScrubCharts from "./charts/scrub-charts/scrub-charts";
import ScrubChartsCustom from "./charts/scrub-charts-custom/scrub-charts-custom";

const useStyles = makeStyles(() => ({
  page: {
    margin: 16,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <h3>Recharts</h3>
      <a href="https://recharts.org/en-US/" target="_blank">
        https://recharts.org/en-US/
      </a>
      <ZoomDomain />
      <CyclesChart />
      <ScrubCharts />
      <ScrubChartsCustom />
    </div>
  );
};

export default App;
