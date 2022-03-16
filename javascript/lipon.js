const myData = () => {
	const Search_input = document.getElementById('search-input-me').value;

	const API_KEY = '3796807274d6fb0086c149dac022a368';
	// const country = 'dhaka';

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search_input}&appid=${API_KEY}&units=metric`)
		.then(response => response.json())
		.then(data => {
			if (data.main === undefined || data === undefined) {
				// console.log('data not found');
				document.getElementById('dataNotFound').style.display = 'block';
				document.getElementById('allData').style.display = 'none';
			} else {
				document.getElementById('dataNotFound').style.display = 'none';
				document.getElementById('allData').style.display = 'show';
				ShowData(data);
			}
		});
};

const ShowData = data => {
	// clear privious data
	document.getElementById('dataCon').innerText = '';
	document.getElementById('dataOne').innerText = '';
	document.getElementById('dataTwo').innerText = '';
	document.getElementById('dataThree').innerText = '';
	// show data
	document.getElementById('dataCon').innerText = data.sys.country;
	document.getElementById('dataOne').innerText = data.name;
	document.getElementById('dataTwo').innerText = data.main.temp;
	document.getElementById('dataThree').innerText = data.weather[0].description;
	console.log(data);
};
