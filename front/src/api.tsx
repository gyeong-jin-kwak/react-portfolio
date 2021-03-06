const fetchData: () => Promise<Text> = async () => {
	try {
		const res = await fetch("https://api.kanye.rest/");
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

export default fetchData;
