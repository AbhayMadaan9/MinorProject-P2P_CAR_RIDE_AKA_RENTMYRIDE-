// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract CarRental {
    // Car details
    struct Car {
        uint256 id;
        string name;
        string model;
        uint256 pricePerHour;
        bool available;
        address currentRenter;
    }

    // Rental transaction
    struct Rental {
        address renter;
        uint256 rentalStartTime;
        uint256 rentalEndTime;
        uint256 duration;
        uint256 totalCost;
    }

    // Car inventory
    mapping (uint => Car) public cars;

    // Rental transactions
    mapping (address => Rental) public rentals;

    // Add a new car to the inventory
    function addCar(uint256 _id, string memory name, string memory model, uint256 pricePerHour) public  {
        require(bytes(name).length > 0, "Car make is required.");
        require(bytes(model).length > 0, "Car model is required.");
        require(pricePerHour > 0, "Car rental price per hour must be greater than 0.");
        require(cars[_id].id != _id, "Car with this ID already exists.");
        cars[_id] = Car(_id, name, model, pricePerHour, true, address(0));
    }

    // Rent a car
    function rentCar(uint256 _id, uint256 rentalHours) public payable {
        Car storage car = cars[_id];
        require(car.available, "Car is not available.");
        require(msg.value >= car.pricePerHour * rentalHours, "Insufficient funds.");

        uint256 rentalStartTime = block.timestamp;
        uint256 rentalEndTime = rentalStartTime + (rentalHours * 1 hours);
        uint256 totalCost = car.pricePerHour * rentalHours;

        rentals[msg.sender] = Rental(msg.sender, rentalStartTime, rentalEndTime, rentalHours, totalCost);
        car.available = false;
        car.currentRenter = msg.sender;
    }

    // Return a rented car
    function returnCar(uint256 _id) public {
        Rental storage rental = rentals[msg.sender];
        Car storage car = cars[_id];

        require(rental.rentalEndTime <= block.timestamp, "Rental time not over yet.");
        require(!car.available, "Car is not rented.");
        require(car.currentRenter == msg.sender, "Not the current renter of the car.");

        car.available = true;
        car.currentRenter = address(0);

        payable(msg.sender).transfer(rental.totalCost);

        delete rentals[msg.sender];
    }

    // Get car details
    function getCar(uint256 _id) public view returns (string memory, string memory, uint256, bool, address) {
        Car storage car = cars[_id];
        return (car.name, car.model, car.pricePerHour, car.available, car.currentRenter);
    } 

    // Get rental details
    function getRental(address renter) public view returns (address,  uint256,uint256, uint256, uint256) {
        Rental storage rental = rentals[renter];
        return (rental.renter,rental.rentalStartTime, rental.rentalEndTime, rental.duration, rental.totalCost);
    }
}