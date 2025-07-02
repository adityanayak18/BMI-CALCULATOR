
document.getElementById("calculate").addEventListener("click", calculateBMI);
document.getElementById("reset").addEventListener("click", resetFields);
function calculateBMI() {
    
    const userage = document.getElementById("age").value.trim();
    const userweight = parseFloat(document.getElementById("weight").value);
    const userheight = parseFloat(document.getElementById("height").value);

    if(!userage || isNaN(userheight)|| isNaN(userweight) ){
        alert("Please fill all the fields");
    }
    else{
        let bmi = userweight / ((userheight / 100) ** 2);
        document.querySelector("#result").value = "Your BMI is: " + bmi.toFixed(2);
    }
}
function resetFields() {
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.querySelector("#result").value = "";
}
