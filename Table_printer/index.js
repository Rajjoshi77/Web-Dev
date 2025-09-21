function print() {
    let num = document.getElementById('val').value;
    let str = "";
    for (let i = 1; i <= 10; i++) {
        str += `${num} x ${i} = ${num * i}<br>`;
    }
    document.getElementById('tableResult').innerHTML = str;
}


document.addEventListener('DOMContentLoaded', function() {
    print(); 
});
