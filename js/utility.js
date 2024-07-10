function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function showDiscountNum(discount) {
    const discountPrice = document.getElementById("discountNum");
    const div = document.createElement("div");

    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("text-base");
    div.classList.add("font-semibold");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.innerText = "Discount Price";
    p2.innerText = "BDT" + parseInt(discount);

    div.appendChild(p1);
    div.appendChild(p2);

    discountPrice.appendChild(div);


}