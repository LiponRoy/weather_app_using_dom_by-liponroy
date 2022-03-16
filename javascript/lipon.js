const myData = () => {
	const API_KEY = '3796807274d6fb0086c149dac022a368';
	const country = 'dhaka';

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`)
		.then(response => response.json())
		.then(data => ShowData(data));
};

myData();

const ShowData = data => {
	console.log(data);
};
