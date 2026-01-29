import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import DropdownIcon from "../assets/icons/graphs/DropdownIcon.jsx";

const chartData = [
  { day: "Mon", value: 46 },
  { day: "Tue", value: 63 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 72 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 55 },
];

const chartConfig = {
  value: {
    color: "#3b82f6",
  },
};

const Graph = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [range, setRange] = useState("This Week");
  return (
    <Card
      className={
           " md:min-w-full max-h-106.5 bg-[#0F172B50] border border-[#2B7FFF20] "
      }
    >
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle className={"mb-1"}>Call Trends - This Week</CardTitle>
            <CardDescription>Total: 472 calls</CardDescription>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={'bg-[#1D293D] border border-[#2B7FFF20] text-white'}>
                  {range} <DropdownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-[#0F172B] border border-[#2B7FFF20] text-white ">
                <DropdownMenuGroup>
                  <DropdownMenuLabel></DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={range === "This Week"}
                    onCheckedChange={setShowStatusBar}
                    onSelect={() => setRange("This Week")}
                  >
                    This Week
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={range === "This Month"}
                    onCheckedChange={setShowActivityBar}
                    onSelect={() => setRange("This Month")}
                  >
                    This Month
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={range === "This Year"}
                    onCheckedChange={setShowPanel}
                    onSelect={() => setRange("This Year")}
                  >
                    This Year
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent className={"min-w-full max-h-75 "}>
        <ChartContainer
          className={"min-w-full max-h-75 "}
          config={chartConfig}
        >
          <AreaChart
            data={chartData}
            responsive
            margin={{ left: -20, right: 12 }}
          >
            <CartesianGrid strokeOpacity={0.2} strokeDasharray="4 4" />

            <XAxis
              dataKey="day"
              tickLine={true}
              tickMargin={8}
              tick={{ fill: "#fff", opacity: 1 }}
              axisLine={{ stroke: "#64748B" }}
            />

            <YAxis
              tickLine={true}
              tickMargin={8}
              tickCount={5}
              tick={{ fill: "#fff", opacity: 1 }}
              axisLine={{ stroke: "#64748B" }}
            />

            <ChartTooltip
              className="text-primary"
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <defs>
              <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={1} />
                <stop offset="95%" stopColor="#3b82f600" stopOpacity={1} />
              </linearGradient>
            </defs>

            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillBlue)"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Graph;