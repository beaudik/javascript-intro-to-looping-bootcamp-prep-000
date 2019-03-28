function forLoop(array){
  var arr = [];
  for (let i = 1; i <= 25; i++) {
  //if (i === 1){
    arr[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`
  //}else{
  //  arr[i] = `I am ${i} strange loops.`
  //  }
  }
  return arr
}
