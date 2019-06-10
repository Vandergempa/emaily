import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
	render() {
		const options = {
			animationEnabled: false,
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				// showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 13,
				indexLabel: "{label} - {y}",
				dataPoints: [
					{ y: this.props.yes, label: "Yes", color: "#66bb6a" },
					{ y: this.props.no, label: "No" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;