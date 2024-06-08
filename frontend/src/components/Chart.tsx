import { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { MovesDto } from "../pages/dashboard/Dashboard";

interface ChartProps {
  movements: MovesDto[];
}

export default class Chart extends PureComponent<ChartProps> {
  render() {
    const { movements } = this.props;
    const reversedMovements = movements ? [...movements].reverse() : [];

    return (
      <div style={{ width: "100%" }}>
        <h4>Your annual expenses</h4>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={reversedMovements}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
