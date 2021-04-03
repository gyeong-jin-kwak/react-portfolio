import React, { useEffect } from "react";

interface Props {
	result: {
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
	};
}

const DetailPresenter = ({ result }: Props): JSX.Element => {
	useEffect(() => {
		console.log(result);
	}, [result]);

	return (
		<div>
			<span>{result.id}</span>
			<span>{result.category}</span>
			<span>{result.title}</span>
			<div>
				<img src={result.src} alt={result.title} />
			</div>
			<span>{result.content}</span>
			<span>
				{result.tags.map((tag) => (
					<span>{tag}</span>
				))}
			</span>
		</div>
	);
};

export default DetailPresenter;
