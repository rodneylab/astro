import { useState } from 'react';
import type { FC } from 'react';

export const ReactExample: FC<{}> = function ReactExample() {
	const [altColours, setAltColours] = useState<boolean>(false);

	return (
		<section className={`react-container${altColours ? ' react-container-alt' : ''}`}>
			<h2>Example React Component</h2>
			<div className="video-container">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/PJ0QSJpJn2U"
					title="Should you Stop Using React"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<button
				className={`react-button${altColours ? ' react-button-alt' : ''}`}
				onClick={() => {
					setAltColours(!altColours);
				}}
			>
				<span className="screen-reader-text">Toggle colours</span>
			</button>
		</section>
	);
};

export default ReactExample;
