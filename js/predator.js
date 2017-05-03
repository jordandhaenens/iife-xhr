
let Predator = (function(){
	let carnivores = [];
	let herbivores = [];

	return {

		setCarnivore: (callbackToInvoke) => {
			let loader = new XMLHttpRequest();

			let loadCarnivores = (event) => {
				carnivores = JSON.parse(event.target.responseText);
				console.log("carnivores", carnivores);
				callbackToInvoke(carnivores);
			}
			let errorCarnivores = (event) => {
				console.log("carnivores.json failed to load");
			}
			// Load carnivores.json
			loader.addEventListener("load", loadCarnivores);
			// Listen for error in loading carnivores.json
			loader.addEventListener("error", errorCarnivores);
			// Call loader
			loader.open("GET", "./js/carnivores.json");
			loader.send();

		},

		setHerbivore: function(callbackToInvoke){
			let loadMe = new XMLHttpRequest();

			let loadHerbivores = (event) => {
				herbivores = JSON.parse(event.target.responseText);
				console.log("herbivores", herbivores);
				callbackToInvoke(herbivores);
			}
			let errorHerbivores = (event) => {
				console.log("error loading herbivores");
			}

			loadMe.addEventListener("load", loadHerbivores);
			loadMe.addEventListener("error", errorHerbivores);

			loadMe.open("GET", "./js/herbivores.json");
			loadMe.send();
		}



	}
})();





