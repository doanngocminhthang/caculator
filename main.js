const numbers = document.getElementsByClassName("btn");
const result = document.getElementById("result");

for (let number of numbers) {
    number.addEventListener('click', function(){
   result.innerHTML +=  this.value 
});
}

function clean() {
    result.innerHTML = " ";
}

function undo() {
    let res = result.innerHTML;
    result.innerHTML = res.substring(0, res.length - 1);
}

// Dark & Light Mode
let checkbox= document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

// Save calculation history
const logHistory = document.getElementById("history"); // Get element với id được chỉ định 
let history = []; //khai báo array empty
let expressionData = ""; // khai báo hàm để lưu biểu thức
let resultData = ""; // khai báo hàm để lưu kết quả tính toán

function equal() {
    let res = result.innerHTML;
    let output = eval(res);
    expressionData = res // gán biểu thức tính toán vào hàm đã được khai báo
    resultData = output // gán kết quả tính toán vào hàm đã được khai báo

    // push object gồm có key là expression, result lần lượt với những value được gán ở trên
    history.push({expression : expressionData, result: resultData});
    //gọi hàm showHistory
    showHistory()
    result.innerHTML = output 
}

function showHistory() {
    let log = "" // khai báo hàm log
    for(let key in history) {
        log += history[key].expression + "=" + history[key].result + "<br>" 
    }
    logHistory.innerHTML = log // Hiển thị ra view với element được gọi
}

// Index History
let indexHistory = document.getElementsByClassName("fa-history")
indexHistory[0].addEventListener("click", function() {
    logHistory.classList.toggle("indexHistory")
})