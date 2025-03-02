function isLeapYear(year) {  
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {  
        return true; 
    } else {  
        return false; 
    }  
}   
const yearInput = parseInt(prompt("Nhập một năm bất kỳ:"));  
if (isNaN(yearInput) || yearInput <= 0) {  
    document.write("Đây không phải là một năm hợp lệ.");  
} else {  
    if (isLeapYear(yearInput)) {  
        document.write(yearInput + " là năm nhuận.");  
    } else {  
        document.write(yearInput + " không phải là năm nhuận.");  
    }  
}  