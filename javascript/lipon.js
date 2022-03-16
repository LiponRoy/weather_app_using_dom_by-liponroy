const myData = () => {
	const Search_input = document.getElementById('search-input-me').value;

	const API_KEY = '3796807274d6fb0086c149dac022a368';
	// const country = 'dhaka';

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search_input}&appid=${API_KEY}`)
		.then(response => response.json())
		.then(data => ShowData(data));
};

const ShowData = data => {
	const kacu = (document.getElementById('dataOne').innerText = data.main.temp);

	console.log(data);
};
