import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const CampaignIcon: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Define opacity animation primitive
	const progress = spring({
		frame,
		fps,
	});

	// Define transform animation primitive
	const moveProgress = spring({
		frame: frame - 5,
		fps,
		config: {
			damping: 200,
		},
	});

	// Set range of value for opacity property to animate
	const opacity = interpolate(progress, [0, 1], [0, 1]);
	// Set range of value for transform in x axis property to animate
	const move = interpolate(moveProgress, [0, 1], [250, 0]);

	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 32 32"
			style={{
				enableBackground: 'new 0 0 32 32',
				width: '460px',
				opacity,
				transform: ` translateY(${move}px)`,
			}}
			xmlSpace="preserve"
		>
			<path
				id="rank_1_"
				fill="#ffffff"
				d="M31,31.36H13v-0.72h18V31.36z M4,29.86c-1.025,0-1.86-0.835-1.86-1.86c0-0.902,0.646-1.657,1.5-1.825v-7.59
	C2.371,18.409,1.39,17.317,1.39,16s0.98-2.409,2.25-2.585V7.341c-1.684-0.18-3-1.61-3-3.341c0-1.853,1.507-3.36,3.36-3.36
	S7.36,2.147,7.36,4c0,1.731-1.316,3.161-3,3.341v6.074c1.266,0.18,2.25,1.281,2.25,2.585c0,1.317-0.98,2.409-2.25,2.585v7.591
	c0.852,0.171,1.5,0.931,1.5,1.824C5.86,29.025,5.025,29.86,4,29.86z M4,26.86c-0.628,0-1.14,0.511-1.14,1.14S3.372,29.14,4,29.14
	S5.14,28.629,5.14,28c0-0.613-0.5-1.124-1.114-1.14H4z M4,14.11c-1.042,0-1.89,0.848-1.89,1.89S2.958,17.89,4,17.89
	S5.89,17.042,5.89,16c0-1.018-0.829-1.865-1.85-1.89H4z M4,1.36C2.544,1.36,1.36,2.544,1.36,4S2.544,6.64,4,6.64S6.64,5.456,6.64,4
	S5.456,1.36,4,1.36z M31,28.36H13v-0.72h18V28.36z M31,25.36H13v-0.72h18V25.36z M31,19.36H13v-0.72h18V19.36z M31,16.36H13v-0.72
	h18V16.36z M31,13.36H13v-0.72h18V13.36z M31,7.36H13V6.64h18V7.36z M31,4.36H13V3.64h18V4.36z M31,1.36H13V0.64h18V1.36z"
			/>
			<rect
				id="_Transparent_Rectangle"
				style={{fill: 'none'}}
				width="32"
				height="32"
			/>
		</svg>
	);
};
