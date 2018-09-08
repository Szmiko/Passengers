var passengers = [  { name: "Anka Płutnicka", paid: true },
					{ name: "Dr Zlatan", paid: true },
					{ name: "Juliusz Cezar", paid: false },
					{ name: "Kleo Patra", paid: true } ];


function processPassengers(passengers, testFunction) {
	for (var i = 0; i < passengers.length; i++) {
		if (testFunction(passengers[i])) {
			return false;
		}
	}
	return true;
};

function checkNoFlyList(passsenger) {
	for (var i = 0; i < passengers.length; i++) {
		if (passengers[i].name === "Kleo Patra") {
			return false;
		}
	}
	return true;
};

function checkNotPaid(passenger) {
	for (var i = 0; i < passengers.length; i++) {
		if (!passengers[i].paid) {
			return false;
		}
	}
	return true;
};

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log("Samolot nie może wystartować, terrorysta na pokładzie!")
};

var allPaid = processPassengers(passengers, checkNotPaid)
if (!allPaid) {
	console.log("Samolot nie może wystartować, ktoś nie opłacił lotu!")
};

processPassengers(passengers, printPassenger);

function printPassenger(passenger) {
	var message = passenger.name;
	if (passenger.paid === true) {
		message = message + " zapłacił(a).";
	} else {
		message = message + " nie zapłacił(a).";
	}
	console.log(message);
};