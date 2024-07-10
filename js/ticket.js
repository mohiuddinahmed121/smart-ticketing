function scrollWin() {
    window.scrollBy(0, 1530);
}

const allBtn = document.getElementsByClassName("bg-gray-100 rounded-xl lg:w-[110px] h-[56px]");

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {

        const leftSeat = getConvertedValue("seat-left");
        document.getElementById("seat-left").innerText = leftSeat - 1;

        const seatCountNum = getConvertedValue("seat-count");
        if (seatCountNum + 1 > 4) {
            alert("Not more than four tickets can be booked");
            return;
        }

        e.target.style.backgroundColor = "MediumSeaGreen";
        e.target.style.color = "White";
        e.target.setAttribute("disabled", false);

        const seatCount = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText = seatCount + 1;

        const selectSeatContainer = document.getElementById("seatClassPrice");
        const div = document.createElement("div");

        div.classList.add("flex");
        div.classList.add("justify-between");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        const seatName = e.target.innerText;
        p1.innerText = seatName;
        p2.innerText = "Economoy";
        p3.innerText = "550";

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectSeatContainer.appendChild(div);
        totalCost();
        grandTotal();

        if (seatCountNum === 3) {
            const butnColor = document.getElementById("apply-btn");
            butnColor.style.backgroundColor = "MediumSeaGreen";
        }

        const inputValue = document.getElementById("inputNum").value;

        if ((seatCountNum == 0 || seatCountNum == 1 || seatCountNum == 2 || seatCountNum == 3) && inputValue !== '') {
            const butnColor = document.getElementById("nextBtn");
            butnColor.style.backgroundColor = "MediumSeaGreen";
        }
    });
}


function grandTotal(status, e) {

    const cost = getConvertedValue("total-cost");
    if (status == undefined) {

        document.getElementById("grand-total").innerText = cost;
    } else {
        const seatCountNum = getConvertedValue("seat-count");
        if (seatCountNum < 4) {
            e.target.setAttribute("disabled", false);
        }
        else {
            const couponCode = document.getElementById("coupon-code").value;
            if (couponCode == "NEW15") {
                const discount = cost * 0.15;
                document.getElementById("grand-total").innerText = cost - parseInt(discount);

                const couponSection = document.getElementById("coupon-section");
                couponSection.style.display = "none";
                showDiscountNum(discount);

            }
            else if (couponCode == "Couple20") {
                const discount = cost * 0.2;
                document.getElementById("grand-total").innerText = cost - parseInt(discount);
                const couponSection = document.getElementById("coupon-section");
                couponSection.style.display = "none";
                showDiscountNum(discount);
            }
            else {
                alert("please enter valid coupon code");
            }
        }

    }
}



function totalCost() {
    const cost = getConvertedValue("total-cost");
    const sum = cost + 550;
    document.getElementById("total-cost").innerText = sum;
}
function getConvertedValue(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

// nex button


function btnNext() {
    hideElementById('header-section');
    hideElementById('main-section');
    hideElementById('footeer-section');
    showElementById('success-msg');
}