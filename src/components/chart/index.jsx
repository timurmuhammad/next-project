import styles from './chart.module.scss'
import cn from 'classnames'
import { Pie, PieChart } from "recharts"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/ui/card"
import {
  ChartConfig,
  ChartContainer,
	ChartLegend,
	ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn/ui/chart"


const chartData = [
  { browser: "static", visitors: 275, fill: "#00b2c8" },
  { browser: "dinamic", visitors: 200, fill: "#b7f2f8" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  static: {
    label: "Static",
    color: "hsl(var(--chart-1))",
  },
  dinamic: {
    label: "Dinamic",
    color: "hsl(var(--chart-2))",
  },
}

export default function Chart() {
	return <Card className="w-full">
	<CardContent className={styles.chart}>
		<ChartContainer
			config={chartConfig}
			className="mx-[-50%] my-[-12%] aspect-square max-h-[100%]"
		>
			<PieChart>
				{/* <ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/> */}
				<Pie
					data={chartData}
					dataKey="visitors"
					nameKey="browser"
					innerRadius={65}
				/>
				{/* <ChartLegend
					content={<ChartLegendContent nameKey="browser" />}
					className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
				/> */}
			</PieChart>
		</ChartContainer>
	</CardContent>
</Card>
}