'use strict';
const createCar = (maxFloor) => {
	let colors = ["red", "blue", "green", "black", "white", "silver", "yellow", "orange"];
	let id = Math.random().toString(36).substring(7);
	let color = colors[Math.floor(Math.random()*colors.length)];
	let targetFloor = Math.floor(Math.random() * maxFloor) + 1;
	let speed = Math.floor(Math.random() * 30) + 1;

	return {
		id,
		color,
		targetFloor,
		speed
	}
};

const createGarage = async (numFloors, numCars) => {
	try {
		let garage = {}, carCount = 0, cars = [];
	
		for (let i = 1; i <= numFloors; i++) {
			garage[i] = {};
		}
		
		while(carCount < numCars){
			cars.push(createCar(numFloors));
			carCount++;
		};

		return cars.map((car) => {
			return new Promise((resolve, reject) => {
				try {
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
								console.log(garage)
								moveCar();
							} else {
								resolve(car);
							}                       
						}, (car.speed * 100))
					};
					moveCar();
				} catch(err){
					reject(err)
				}
			});
		});
	} catch(e){
		throw new Error(e);
	}
}

(async () => {
	return await createGarage(3, 20);
})();
