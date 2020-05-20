// We gaan onze code afschermen van andere code op onze website.
(function () {
	const showBikeData = (bikeArray) => {
		for (const bikeData of bikeArray) {
			document.querySelector(`.js-${bikeData.attributeName}`).innerHTML = bikeData.value;
		}
	};

	const getData = (url) => {
		return fetch(url).then((r) => r.json());
	};

	const getBikes = async () => {
		const data = await getData('https://datatank.stad.gent/4/mobiliteit/bluebikedeelfietsensintpieters2');
		showBikeData(data.properties.attributes);
	};

	document.addEventListener('DOMContentLoaded', function () {
		// Do some cool stuff.
		getBikes();
	});

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(function (reg) {
			console.log('Service worker is registered!');
		});
	}
})();
