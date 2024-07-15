/*
1 meter = 3.281 feet \ 1 feet = 0.3048 meters
1 liter = 0.264 gallon \ 1 liter = 3.785 gallon
1 kilogram = 2.204 pound \ 1 pound = 0.454 kg
*/



const inputArea = document.getElementById("input-area")
const convertButton = document.getElementById("convert-btn")
const metersToFeet = document.getElementById("meters-feet")
const litersToGallons = document.getElementById("liters-gallons")
const kilosToPounds = document.getElementById("kilos-pounds")



convertButton.addEventListener("click", function() {
 const inputParse = parseInt(inputArea.value)
 let metersFeet = inputParse * 3.281;
 let feetMeters = inputParse * 0.3048;
 let litersGallons = inputParse * 0.264;
 let gallonsLiters = inputParse * 3.785;
 let kilosPounds = inputParse * 2.20462;
 let poundsKilos = inputParse * 0.453592;

    metersToFeet.innerHTML = `${inputParse} meters = ${metersFeet.toPrecision(5)} feet | ${inputParse} feet = ${feetMeters.toFixed(3)} meters`;
    litersToGallons.innerHTML = `${inputParse} liters = ${litersGallons.toFixed(3)} gallons | ${inputParse} gallons = ${gallonsLiters.toFixed(3)} liters`;
    kilosToPounds.innerHTML = `${inputParse} kilos = ${kilosPounds.toFixed(3)} pounds | ${inputParse} pounds = ${poundsKilos.toFixed(3)} kilos`;
})