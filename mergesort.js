function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  const halfLen = Math.floor(wholeArray.length/2)

  const firstHalf = wholeArray.slice(0, halfLen);
  const secondHalf = wholeArray.slice(halfLen);

  return [firstHalf, secondHalf];
}

function merge(sortedLeftArr, sortedRightArr){
  const sortedArr = [];
  let sortedArrIndex = 0;
  const expectedSortedArrayLength = sortedLeftArr.length + sortedRightArr.length;
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  //we want to loop through the length of the expected sorted array
  // we want to compare the values in the left array with the right array
  // we'll push in the left array value if it is less than all the right array values
  // otherwise we push in the right array value.
  // we need to use the index to keep track of where we are to prevent repeat comparisons.


  for(let i = sortedArrIndex; i < expectedSortedArrayLength; i++){
    if(sortedLeftArr[leftArrIndex] < sortedRightArr[rightArrIndex]){
      sortedArr.push(sortedLeftArr[leftArrIndex]);
      leftArrIndex++
    }else if(sortedLeftArr[leftArrIndex] > sortedRightArr[rightArrIndex]){
      sortedArr.push(sortedRightArr[rightArrIndex]);
      rightArrIndex++
    }
  }
  //if(leftArrIndex !== sortedLeftArr.length){
    while(leftArrIndex !== sortedLeftArr.length){
      sortedArr.push(sortedLeftArr[leftArrIndex])
      leftArrIndex++;
    }
  //}else if(rightArrIndex !== sortedRightArr.length){
    while(rightArrIndex !== sortedRightArr.length){
      sortedArr.push(sortedRightArr[rightArrIndex])
      rightArrIndex++;
    }
  //console.log(leftArrIndex);
  return sortedArr;
}



function mergeSort(array) {

  /* your code here */
  //Base case
  if(array.length === 0 || array.length === 1) return array

  let [left, right] = split(array);

  let sortedLeft = mergeSort(left);

  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);

}


