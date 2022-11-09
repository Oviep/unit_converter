let input = document.querySelector("#input")
let length_Txt = document.querySelector(".length_txt")
let volume_Txt = document.querySelector(".volume_txt")
let mass_Txt = document.querySelector(".mass_txt")
const input_btn = document.querySelector("#input-btn")
let unit_value = ""
let typedValue = ""

input_btn.addEventListener("click", function () {
  unit_value = input.value
  typedValue = input.value
  // render(unit_value)
  lengthCalc(typedValue, unit_value)
  volumeCalc(typedValue, unit_value)
  massCalc(typedValue, unit_value)
})

function renderLength(input, fig, meters) {
  let length = `<p class="length_txt"> ${input} meters = ${fig} feet <br> ${input} feet = ${meters} meters </p>`
  length_Txt.innerHTML = length
}

function renderVolume(input, fig, liters) {
  let volume = `<p class="length_txt"> ${input} liters = ${fig} gallons <br> ${input} gallons = ${liters} liters </p>`;
  volume_Txt.innerHTML = volume;
}

function renderMass(input, fig, kilos) {
  let mass = `<p class="length_txt"> ${input} kilos = ${fig} pounds <br> ${input} pounds = ${kilos} kilos </p>`;
  mass_Txt.innerHTML = mass;
}

function lengthCalc(input, fig) {
  let calculation = Number(fig) * 3.281
  let calc_feet = Number(fig) / 3.281
  renderLength(input, calculation.toFixed(3), calc_feet.toFixed(3))

}

function volumeCalc(input, fig) {
  let calculation = Number(fig) * 0.264;
  let calc_liters = Number(fig) / 0.264
  renderVolume(input, calculation.toFixed(3), calc_liters.toFixed(3));
}

function massCalc(input, fig) {
  let calculation = Number(fig) * 2.204;
  let calc_kilos = Number(fig) / 2.204
  renderMass(input, calculation.toFixed(3), calc_kilos.toFixed(3));
}

