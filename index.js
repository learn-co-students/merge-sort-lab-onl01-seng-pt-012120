function findMinAndRemoveSorted(array) {
    return array.shift()
}

//let firstSubarray = [3, 4, 6, 7]
  //  let secondSubArray = [1, 2, 5, 8]
    //let sorted = merge(firstSubarray, secondSubArray)

function merge(firstSubarray, secondSubArray){
    let sorted = []
    while (firstSubarray.length != 0 && secondSubArray.length != 0){
        if(firstSubarray[0] < secondSubArray[0]){
            sorted.push(findMinAndRemoveSorted(firstSubarray))
        } else {
            sorted.push(findMinAndRemoveSorted(secondSubArray))
        }
    }
    return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2){
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}