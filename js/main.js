const colorPickerEl = document.getElementById("color-picker");

const mode = "complement";
const count = 7;
let colors = [];
let colorNames = [];



function getColorScheme() {
    
    colors = [];
    colorNames = [];
    const cleanHex = colorPickerEl.value.split('#')[1];

    const url = `https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=${mode}&count=${count}`;
    fetch(url, { method: "GET" })
        .then(res => res.json())
        .then(data => {
            data.colors.forEach(element => {
                colors.push(element.hex.value);
                colorNames.push(element.name.value);
            });
        });
    
    console.log(colors, colorNames);
}

colorPickerEl.addEventListener("change", getColorScheme);

