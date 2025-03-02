let kinhnghiem = parseFloat(prompt("Mời bạn nhập số năm kinh nghiệm của nhân viên"));  
if (kinhnghiem > 6.0) {  
    document.write("Quản lý");  
} else if (kinhnghiem >= 4.0 && kinhnghiem < 6.0) {  
    document.write("Chuyên viên");  
} else if (kinhnghiem >= 1.0 && kinhnghiem < 3.0) {  
    document.write("Nhân viên có kinh nghiệm");  
} else if(sum < 1.0) {  
    document.write("Mới vào nghề");  
}  