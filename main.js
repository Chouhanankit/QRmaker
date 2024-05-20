let input = document.querySelector("input"),
    form = document.querySelector("form"),
    img = document.querySelector("img"),
    select = document.querySelector("#size");


const getQr = async (e) => {
    e.preventDefault();
    const respone = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`);
    img.setAttribute("src", respone.url);
    // img.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`)
    form.reset();
}
form.addEventListener("submit", getQr);