// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       let pickedPlanet = pickPlanet(result);
       addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoInput = document.querySelector("input[name=cargoMass]");

        if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else if ((validateInput(pilotInput.value) != "Not a Number") || (validateInput(copilotInput.value) != "Not a Number") || (validateInput(fuelInput.value) != "Is a Number") || (validateInput(cargoInput.value) != "Is a Number")) {
            window.alert("Please enter valid information for each field.");
            event.preventDefault();
        } else {
            formSubmission(window.document, listedPlanets, pilotInput.value, copilotInput.value, Number(fuelInput.value), Number(cargoInput.value))
            event.preventDefault();
        }
    })
   
});