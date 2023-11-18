import React from "react";

interface Props {
	width: number;
	height: number;
	color: string;
	viewBox: string;
}

export default function MapMarkerSVG(props: Props) {
	return (
		<svg version="1" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={props.viewBox}>
			<path fill={props.color} stroke="#FFF" strokeWidth="6" strokeMiterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z" />
			<circle id="circle-bg" fill="#FFF" cx="74" cy="75" r="35" />
		</svg>
	)
}
