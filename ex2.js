let diemtoan = parseFloat(prompt("Mời bạn nhập điểm toán"));  
let diemvan = parseFloat(prompt("Mời bạn nhập điểm văn"));  
let diemanh = parseFloat(prompt("Mời bạn nhập điểm anh"));  
let sum = (diemanh + diemtoan + diemvan) / 3;  
if (sum >= 8.0) {  
    document.write("Học lực giỏi");  
} else if (sum >= 6.5 && sum < 8.0) {  
    document.write("Học lực khá");  
} else if (sum >= 5.0 && sum < 6.5) {  
    document.write("Học lực trung bình");  
} else if(sum < 5.0) {  
    document.write("Học lực yếu");  
}  