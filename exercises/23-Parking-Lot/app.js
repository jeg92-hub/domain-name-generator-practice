let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState(current_state){
  var res = {totalSlots:0,availableSlots:0,occupiedSlots:0}
  var lines = current_state.length-1;
  for(var i = 0;i<=lines;i++){
    var col = current_state[i].length-1;
    for(var j=0;j<=col;j++){
      var state = parseInt(current_state[i][j]);
      if(state===2){
        res.availableSlots++;
        res.totalSlots++;
      }else if(state===1){
        res.occupiedSlots++;
        res.totalSlots++;
      }
    }
  }
  return res;
}
console.log(getParkingLotState(parking_state))