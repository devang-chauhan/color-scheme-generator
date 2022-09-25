const colorPickerEl = document.getElementById("color-picker");
const getColorSchemeBtn = document.getElementById("get-color-scheme");
const mainEl = document.getElementById("container");


const color0El = document.getElementById("color-0");
const color1El = document.getElementById("color-1");
const color2El = document.getElementById("color-2");
const color3El = document.getElementById("color-3");
const color4El = document.getElementById("color-4");

const color0NameEl = document.getElementById("color-name-0");
const color1NameEl = document.getElementById("color-name-1");
const color2NameEl = document.getElementById("color-name-2");
const color3NameEl = document.getElementById("color-name-3");
const color4NameEl = document.getElementById("color-name-4");

function fetchColors() {

    const mode = document.getElementById("mode").value;
    const cleanHex = colorPickerEl.value.split('#')[1];
    const url = `https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=${mode.toLowerCase()}`;

    fetch(url, { method: "GET" })
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.colors.length; i++){
                const color = data.colors[i].hex.value;
                
                const colorEl = document.getElementById(`color-${i}`);
                colorEl.style.backgroundColor = color;

                const colorNameEl = document.getElementById(`color-name-${i}`);
                colorNameEl.textContent = color;
            }
        });
}

function copy(color) {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard`);
}

function copyColorfromContainer(event) {
    const color = event.target.style.backgroundColor;
    console.log(color);
    copy(color);
}

function copyColorfromName(event) {
    const color = event.target.textContent;
    copy(color);
}


color0El.addEventListener("click", (e) => { copyColorfromContainer(e); });
color1El.addEventListener("click", (e) => { copyColorfromContainer(e); });
color2El.addEventListener("click", (e) => { copyColorfromContainer(e); });
color3El.addEventListener("click", (e) => { copyColorfromContainer(e); });
color4El.addEventListener("click", (e) => { copyColorfromContainer(e); });

color0NameEl.addEventListener("click", (e) => { copyColorfromName(e); });
color1NameEl.addEventListener("click", (e) => { copyColorfromName(e); });
color2NameEl.addEventListener("click", (e) => { copyColorfromName(e); });
color3NameEl.addEventListener("click", (e) => { copyColorfromName(e); });
color4NameEl.addEventListener("click", (e) => { copyColorfromName(e); });

getColorSchemeBtn.addEventListener("click", fetchColors);
fetchColors();