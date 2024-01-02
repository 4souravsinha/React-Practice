// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 10]

// Array.prototype.customFlat = function () {
//   let len = this.length
//   let result = []
//   for (let i = 0; i < len; i++) {
//     if (this[i] instanceof Array) {
//       result = result.concat(this[i].customFlat())
//     } else {
//       result.push(this[i])
//     }

//   }
//   return result
// }

// let newarr=arr.customFlat();

Array.prototype.customSort = function customSort(){
  //this is the array
  //bubble sort ---> let's go
  let arr = this
  //now let's implement merge sort
  function merge(left, mid , right){
    let arr1Left = left;
    let arr1Right = mid - 1;
    let arr2Left = mid;
    let arr2Right = right;
    let sortedArray  = []
    while(arr1Left <= arr1Right && arr2Left <= arr2Right){
      if(arr[arr1Left] <= arr[arr2Left]){
        sortedArray.push(arr[arr1Left]);
        arr1Left++;
      }else{
        sortedArray.push(arr[arr2Left]);
        arr2Left++;
      }
    }
    while(arr1Left <= arr1Right){
      sortedArray.push(arr[arr1Left]);
      arr1Left++;
    }
    while(arr2Left <= arr2Right){
      sortedArray.push(arr[arr2Left]);
      arr2Left++;
    }
    for(let idx = left , i = 0 ; idx <= right ; idx++ , i++){
      arr[idx] = sortedArray[i]
    }
  }
  function mergeSort(left , right){
    if(left >= right) return;
    let mid = Math.floor((left + right) / 2);
    mergeSort(left , mid - 1);
    mergeSort(mid, right);
    merge(left , mid , right);
  }
  mergeSort(0 , arr.length - 1)
}

let arrayToSort = [23,3,64,32,5321,53,1,56,2,674,19];
arrayToSort.customSort();
console.log(arrayToSort)
