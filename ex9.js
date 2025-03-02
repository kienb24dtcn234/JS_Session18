let hour = Number(prompt("Nhập vào giờ:"));
let minute = Number(prompt("Nhập vào phút :"));
let second = Number(prompt("Nhập vào giây:"));
if (hour <= 12 && hour < 24) {
    alert(hour + ":" + minute + ":" + second + " AM");
} else if (hour > 12 && hour < 24) {
    alert(hour - 12 + ":" + minute + ":" + second + " PM");
} else {
    alert("Giờ không hợp lệ");
}