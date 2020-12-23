const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '287e2e04',
			s: 'avengers'
		}
	});

	console.log(response.data);
};

fetchData();