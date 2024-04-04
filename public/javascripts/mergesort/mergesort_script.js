// let city = ["ahmedabad", "gandhinagar", "junagadh", "rajkot", "gir somnath", "surat", "bhavnagar", "jamnagar"];

// let arr = [25,45,36,7,20,1,63,8];

function sort(arr) {
  try {

    arr = arr.split(',')

    let arr2 = []
    let sorted_arr = [];

    if (parseInt(arr[0])) {
      arr.forEach(element => {
        arr2.push(parseInt(element));
      });

      sorted_arr = mergesort(arr2);
    }
    else {

      sorted_arr = mergesort(arr);
    }

    document.getElementById('answer').innerHTML = sorted_arr;

  } catch (e) { console.log(e); }
}

function mergesort(arr) {
  try {

    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const leftarr = arr.slice(0, mid);
    const rightarr = arr.slice(mid);

    return merge(mergesort(leftarr), mergesort(rightarr));

  } catch (e) { console.log(e); }
}

function merge(leftarr, rightarr) {
  try {

    let leftindex = 0;
    let rightindex = 0;
    let resultarr = [];

    while ((leftindex < leftarr.length) && (rightindex < rightarr.length)) {

      if (leftarr[leftindex] < rightarr[rightindex]) {
        resultarr.push(leftarr[leftindex]);
        leftindex++;
      }
      else {
        resultarr.push(rightarr[rightindex]);
        rightindex++;
      }
    }

    return resultarr.concat(leftarr.slice(leftindex), rightarr.slice(rightindex));

  } catch (e) { console.log(e); }
}