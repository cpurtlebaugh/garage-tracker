'use strict';
const createCar = (maxFloor) => {
	let colors = ["red", "blue", "green", "black", "white", "silver", "yellow", "orange"];
	let id = Math.random().toString(36).substring(7);
	let color = colors[Math.floor(Math.random()*colors.length)];
	let targetFloor = Math.round(Math.random() * (maxFloor - 0) + 0); // less than max garage floor #
	let speed = Math.round(Math.random() * (30 - 1) + 1);

	return {
		id,
		color,
		targetFloor,
		speed
	}
};

const createGarage = async (numFloors, numCars) => {
		let garage = {}, promises = [], carCount = 0, cars = [];
	
		for (let i = 1; i <= numFloors; i++) {
			garage[i] = {};
		}

		while(carCount < numCars){
			cars.push(createCar(numFloors));
			carCount++;
		};

		cars.forEach((car) => {
			promises.push(new Promise(function(resolve) {
				let currentFloor = 1;
				let finalFloor = car.targetFloor;
				const moveCar = () => { 
					setTimeout(() => {	
						let carInfo = {floor: car.targetFloor, color: car.color, speed: car.speed};
						if (currentFloor <= finalFloor) {
							if(currentFloor === 1){
								garage[currentFloor][car.id] = carInfo;
							} else {
								delete garage[currentFloor - 1][car.id]
								garage[currentFloor][car.id] = carInfo;
							}
							currentFloor++; 
							tracker(garage);
							moveCar();
						} else {
							resolve(car);
						}                       
					}, (car.speed * 100))
				}
				moveCar();
			}));
		});
		return garage;
}

const tracker = (garage) => {
	console.log("GARAGE UPDATE: ", garage);
	return;
}

(async function (){
	await createGarage(3,3);
})();
