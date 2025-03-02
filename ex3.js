function loginSystem() {  
    const username = prompt("Nhập tên:");  
    if (username === null) {  
        console.log("Cancelled");  
        return;  
    } else if (username === "ADMIN") {  
        const password = prompt("Nhập mật khẩu:");  
        
        if (password === null) {  
            document.write("Cancelled");  
        } else if (password === "TheMaster") {  
            document.write("Welcome");  
        } else {  
            document.write("Wrong password");  
        }  
    } else {  
        document.write("I Don’t know you");  
    }  
}  
loginSystem();  