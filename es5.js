



var animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
]

const obj1 = { type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves', 'roots', 'children'] }
const obj2 = { type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat', 'children', 'corn flakes'] }
const animals = {...obj1, ... obj2}

// var {type, height, weight, name, top3Foods} = animals



// class Animals{
// 	constructor(animal){
// 		this.animal = [{
// 			this.type: type;,
// 			this.height: height,
// 			this.weight: weight,
// 			this.name: name,
// 			this.top3Foods: [

// 			]
// 		}]
// 	}
// }

animalListing(animals, true);


// function animalListing( animalArray, listFoods){
// 	if(listFoods===undefined){
// 		listFoods = true;
// 	}

const animalListing = (animalArray, listFoods) => listFoods


	var outputArray = [];
	for(let animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
		// var thisAnimal = animalArray[animalIndex];
		const thisAnimal = animalArray[animalIndex]
			const [
				name,
				height,
				weight,
				type,
				foods,
				food1,
				food2,
				food3
			] = thisAnimal
		// var name = thisAnimal.name;
		// var height = thisAnimal.height;
		// var weight = thisAnimal.weight;
		// var type = thisAnimal.type;
		// var foods = thisAnimal.top3Foods;
		var food1 = foods[0];
		var food2 = foods[1];
		var food3 = foods[2];
		var sentence = "Animal: "+name+" is a "+type+" and is "+height+" meters at "+(weight*2.2)+" lbs";
		console.log(sentence);
		if(listFoods){
			sentence += " and it likes to eat "+food1+", "+food2+", and "+food3;
			console.log(foodSentence)
		}
	}
	return outputArray;
}
