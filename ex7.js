let numbera = Number(prompt("Nhập vào số a:"));
let numberb = Number(prompt("Nhập vào số b:"));
let pheptinh = prompt("Nhập vào phép tính:+,-,*,/");
if (pheptinh === "+") {
    alert(numbera + numberb);
} else if (pheptinh === "-") {
    alert(numbera - numberb);
} else if (pheptinh === "*") {
    alert(numbera * numberb);
} else if (pheptinh === "/") {
    if (numberb === 0) {
        alert("Không thể chia cho  0");
    } else {
        alert(numbera / numberb);
    }
} else {
    alert("Phép tính không hợp lệ");
    }    