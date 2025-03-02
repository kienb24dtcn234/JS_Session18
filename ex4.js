const numberToWords = {
    0: "Số Không",
    1: "Số Một",
    2: "Số Hai",
    3: "Số Ba",
    4: "Số Bốn",
    5: "Số Năm",
    6: "Số Sáu",
    7: "Số Bảy",
    8: "Số Tám",
    9: "Số Chín"
};

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("numberInput");
    const resultDiv = document.getElementById("result");
    const button = document.getElementById("convertButton");

    button.addEventListener("click", function() {
        const number = inputField.value.trim();
        if (number in numberToWords) {
            resultDiv.textContent = numberToWords[number];
        } else {
            resultDiv.textContent = "Vui lòng nhập một số từ 0 đến 9";
        }
    });
});