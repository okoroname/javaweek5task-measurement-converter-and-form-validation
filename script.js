// const meter = document.getElementById('meter');
// meter.addEventListener("input",  meterConverter);
// const general-box = document.getElementById("general-box")
// general-box.addEventListener("input", meterConverter2)

// if(document.getElementById("meter-radio").onselect){
    

// }

// meter converter function
const meter = document.getElementById('meter');
meter.addEventListener("input",  meterConverter);


function meterConverter(m){
    let meterConv = m.target.value;

    document.getElementById('meter').value = meterConv * 1;
    document.getElementById('inches').value = meterConv * 39.3701;
    document.getElementById('feet').value = meterConv * 3.28084;
    document.getElementById('yard').value = meterConv * 1.09361;

}

// inches converter funtion
const inches = document.getElementById('inches');
inches.addEventListener("input",  inchesConverter);
function inchesConverter(i){
    let meterConv = i.target.value;

    document.getElementById('meter').value = meterConv / 39.37;
    document.getElementById('inches').value = meterConv * 1;
    document.getElementById('feet').value = meterConv / 12;
    document.getElementById('yard').value = meterConv / 36;

}

// feet converter function
const feet = document.getElementById('feet');
feet.addEventListener("input",  feetConverter);

function feetConverter(f){
    let meterConv = f.target.value;

    document.getElementById('meter').value = meterConv / 3.281;
    document.getElementById('inches').value = meterConv * 2;
    document.getElementById('feet').value = meterConv * 1;
    document.getElementById('yard').value = meterConv / 3;

}

// yard converter function
const yard = document.getElementById('yard');
yard.addEventListener("input",  yardConverter);

function yardConverter(y){
    let meterConv = y.target.value;

    document.getElementById('meter').value = meterConv / 1.094;
    document.getElementById('inches').value = meterConv * 36;
    document.getElementById('feet').value = meterConv * 3;
    document.getElementById('yard').value = meterConv * 1;

}

// result function
function meterReset(){
    
    document.getElementById("meter").value = '';
    document.getElementById("inches").value = '';
    document.getElementById("feet").value = '';
    document.getElementById("yard").value = ''
}
