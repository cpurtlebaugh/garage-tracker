### SETUP
Install babel
```
    npm install -g babel-cli
```

Install packages
```
    yarn install
```

Run script
```
    babel-node test.js
```

### DIRECTIONS
Implement a Car factory which generates cars, each with a random:
    - id (string)
    - color (string)
    - target floor (number)
    - speed (number, time between changing floors) 

Each car should move between the first floor and the max number of floors without going outside of the range. 
Each car should move between the floors at a random interval based on that car's speed. 
Each car should come to rest when it reaches it's target floor.


Implement a Garage factory which has a number of floors and creates and stores a number of cars.

Implement a Tracker factory which receives a garage, and reports which cars are on each floor any time there is a change.

Ex. If there is one car with a target floor of 2, then the tracker should log out the garage showing the car on the first floor, then log when the car moves to the second floor in the garage and stop since all cars have reached their target floor.
