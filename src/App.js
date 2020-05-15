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
      <div>
        <a href="https://recharts.org/en-US/" target="_blank">
          https://recharts.org/en-US/
        </a>
      </div>
      <div>
        <a href="https://github.com/recharts/recharts" target="_blank">
          Recharts Github
        </a>
      </div>
      <div>
        <a
          href="https://github.com/jsaelhof/recharts-chart-test"
          target="_blank"
        >
          Github for this test
        </a>
      </div>
      <ZoomDomain />
      <CyclesChart />
      <ScrubCharts />
      <ScrubChartsCustom />
    </div>
  );
};

export default App;
