function checkTriangle(a, b, c) {  
    if (a + b > c && a + c > b && b + c > a) {  
        if (a === b && b === c) {  
            return "Tam giác đều";  
        } else if (a === b || a === c || b === c) {  
            return "Tam giác cân";  
        } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {  
            return "Tam giác vuông";  
        } else {  
            return "Tam giác thường";  
        }  
    } else {  
        return "Không tạo thành tam giác hợp lệ";  
    }  
}   
const sideA = parseFloat(prompt("Nhập độ dài cạnh a:"));  
const sideB = parseFloat(prompt("Nhập độ dài cạnh b:"));  
const sideC = parseFloat(prompt("Nhập độ dài cạnh c:"));  

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {  
    document.write("Cạnh của tam giác không hợp lệ. Vui lòng nhập lại các số dương.");  
} else {  
    const result = checkTriangle(sideA, sideB, sideC);  
    document.write(result);  
}  