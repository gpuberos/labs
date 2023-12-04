
// Color Picker with Value Selected
let colorPicker = document.getElementById("color_picker");
let colorValue = document.getElementById("color_val");

colorPicker.oninput = function() {
    colorValue.innerHTML = colorPicker.value;
    colorValue.style.color = colorPicker.value;
}