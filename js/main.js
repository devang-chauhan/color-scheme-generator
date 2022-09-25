const colorPickerEl = document.getElementById("color-picker");
const getColorSchemeBtn = document.getElementById("get-color-scheme");
const mainEl = document.getElementById("container");


function fetchColors() {

    let mainHTML = '';
    const mode = document.getElementById("mode").value;
    const cleanHex = colorPickerEl.value.split('#')[1];
    const url = `https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=${mode.toLowerCase()}`;

    fetch(url, { method: "GET" })
        .then(res => res.json())
        .then(data => {
            data.colors.forEach(element => {
                const color = element.hex.value;
                mainHTML += `
                <div style="background-color: ${color};">
                    <p>${color}</p>
                </div>
                `;
            });
            mainEl.innerHTML = mainHTML;
        });
}


getColorSchemeBtn.addEventListener("click", fetchColors);

fetchColors();