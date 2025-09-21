function cal() {
    let principle = document.getElementById('Principle').value;
    let Rate = document.getElementById('Rate').value;
    let Year = document.getElementById('year').value;
    let ans = (principle * Rate * Year) / 100;
    let str = "Simple Interest: ₹" + ans.toLocaleString();
    document.getElementById('resultDisplay').innerText = str;
}

function updatePrinciple(val) {
    document.getElementById('PrincipleValue').innerText = val;
}

function updateRate(val) {
    document.getElementById('RateValue').innerText = val;
}

