
showCarnivores = (carnivores) => {
// I want to write predator's carnivore array to the DOM.
	let outputArea = document.getElementById("carnivore-area");
	let animals = "";
	for (item in carnivores){
		animals += "<h3>";
		animals += carnivores[item].animal + ": " + carnivores[item].name + "</h3>";
	};
	outputArea.innerHTML = animals;
	console.log("carnivores is firing");
}

showHerbivores = (herbivores) => {
	let outputDiv = document.getElementById("herbivore-area");
	let animals = "";
	for (item in herbivores){
		animals += "<h3>";
		animals += herbivores[item].animal + ": " + herbivores[item].name + "</h3>";
	};
	console.log(animals);
	outputDiv.innerHTML = animals;
	console.log("herbivores is firing");
}

Predator.setCarnivore(showCarnivores);
Predator.setHerbivore(showHerbivores);

