// Set target datetime here:
let fut = new Date("Nov 23 2022 23:59:59 GMT-0600").getTime()

function digitSplit(i){
    let output = [];
    while (i) {
        output.push(i % 10)
        i = Math.floor(i/10)
    }
    return output
}
function drawTime(){
  let now = new Date().getTime(),
    dif = now<fut ? Math.floor( (fut-now)/1000) : 0
  let daysUntil = Math.floor(dif/60/60/24);
  let digits = digitSplit(daysUntil);

  for(let i=0; i<3; i++){
    $('#day'+i).css({backgroundPosition: -digits[i]*90});
  }
}

$(document).ready(function() {
  drawTime();
})
