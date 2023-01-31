import React from 'react';
import './Charts.css';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

export default function Chart() {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      ></VictoryAxis>
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`}></VictoryAxis>
      <VictoryBar data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
}
