function forLoop(array){
  var arr = [];
  for (let i = 0; i < 25; i++) {
  //if (i === 1){
    arr[i] = `"I am ${i+1} strange loop${i === 0 ? '' : 's'}."`
  //}else{
  //  arr[i] = `I am ${i} strange loops.`
  //  }
  }
  return arr
}
