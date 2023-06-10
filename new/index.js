//Tạo hàm chứa nhiều giá trị nhập vào
function Result() {
    this.arrValue = []

    this.themValue = function(number) {
    this.arrValue.push(number)
    }
}

var result = new Result()
console.log('result:', result)

function getElement(selector) {
    return document.querySelector(selector)
}


//Lấy input từ user
getElement('#btn').onclick = function() {
    var NumberInput = +getElement('#number').value 
    var number = new Number (
        NumberInput
    )
    result.themValue(number)
    renderNumber()
}


function Number (
    _numberinput
) {
    ;(this.NumberInput = _numberinput)
}

//Render number ra UI
function renderNumber() {
    var content = ''
    for (var i = 0; i < result.arrValue.length; i++) {
    var total = result.arrValue[i]
    content += `<span>${total.NumberInput}</span>,`

    getElement('#check').innerHTML = content
}
}


//Tính tổng số dương
getElement('#btn2').onclick = function() {
    var sum = 0
    for (var i = 0; i < result.arrValue.length; i++) {
           sum +=+ `${result.arrValue[i].NumberInput}` 
        }
    getElement('#check2').innerHTML = sum
    
}


//Đếm có bao nhiêu số dương
getElement('#btn3').onclick = function() {
    var sum = 0
    for (var i = 0; i < result.arrValue.length; i++) {
        if (result.arrValue[i].NumberInput >= 0) {
            sum ++
     } else  (result.arrValue[i].NumberInput < 0) 

     }
     getElement('#check3').innerHTML = sum
    }


//Tìm số nhỏ nhất
getElement('#btn4').onclick = function() {
    debugger
    var min = 0
    for (let i = 0; i < result.arrValue.length; i++) {
        var value = result.arrValue[i].NumberInput
        if (value < min) {
           min = value;
           
    }
}
  getElement('#check4').innerHTML = min
}


//Tìm số dương nhỏ nhất
getElement('#btn5').onclick = function() {
    var min = result.arrValue[0].NumberInput
    for (let i = 0; i < result.arrValue.length; i++) {
        if (result.arrValue[i].NumberInput < min) {
           min = result.arrValue[i].NumberInput
}
    }
getElement('#check5').innerHTML = min
}


//Tìm số số chẵn cuối cùng trong mảng
getElement('#btn6').onclick = function() {
var LastEvent = -1

for (let i = 0; i < result.arrValue.length; i++) {
    var value = result.arrValue[i].NumberInput
    if (value % 2 === 0) {
       LastEvent = value
    } else if(value %! 2)
     value = LastEvent
    
getElement('#check6').innerHTML = LastEvent
}
}


//Sắp xếp theo thứ tự tăng dần
// getElement('#btn8').onclick = function() {
//     debugger
//     var content = ''
//     for (var i = 0; i < result.arrValue.length - 1; i++) {
//         for(var j = i + 1; j < result.arrValue.length; j++){
//             var number2 = result.arrValue[i]
//              var tmp = result.arrValue[i].NumberInput
//              var tmp2 = result.arrValue[j].NumberInput
//             if (result.arrValue[i].NumberInput > result.arrValue[j].NumberInput) {
//                 result.arrValue[i].NumberInput = result.arrValue[j].NumberInput
//                 content = `${tmp2}`
//             }else
//             result.arrValue[j].NumberInput = tmp
            
//             }

//         getElement('#check8').innerHTML = content
//     }
// }


//Bài 7: Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("btn7").onclick = function () {
    var NumberInput = [
        +document.getElementById("number43").value,
        +document.getElementById("number44").value,
        +document.getElementById("number45").value,
        +document.getElementById("number46").value,
        +document.getElementById("number47").value,
        +document.getElementById("number48").value,
    ]
        for( var i = 0; i < NumberInput.length - 1; i++){
            for(var j = i + 1; j < NumberInput.length; j++){
                if(NumberInput[i] > NumberInput[j]){
                    var tmp = NumberInput[i]
    
                    NumberInput[i] = NumberInput[j]
                    NumberInput[j] = tmp
                }
            }
        }
        document.getElementById('check7').innerHTML = NumberInput
    }


    //Bai 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
document.getElementById("btn10").onclick = function () {
    var NumberInput = [
        +document.getElementById("number64").value,
        +document.getElementById("number65").value,
        +document.getElementById("number66").value,
        +document.getElementById("number67").value,
        +document.getElementById("number68").value,
        +document.getElementById("number69").value,
    ]
    var sum = 0
    var total = 0
    for (let i = 0; i < NumberInput.length; i++) {
        if (NumberInput[i] > 0) {
           sum ++
    } else if (NumberInput[i] < 0) {
        total ++
    }
    for (let j = 0; j < NumberInput.length; j++) {
     if (sum > total) {
        document.getElementById('check10').innerHTML = "Số lượng số dương nhiều hơn"
    }else if (sum < total) {
        document.getElementById('check10').innerHTML = "Số lượng số âm nhiều hơn"
    }
}
}
}

