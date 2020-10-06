class SomeKindOfSort {
  constructor(origArray) {
    this.array = origArray;
    this.mid;
  }

  merge(sortedArray1, sortedArray2) {
    let result = [];
    let currInd1 = 0;
    let currInd2 = 0;

    while (currInd1 < sortedArray1.length || currInd2 < sortedArray2.length) {
      if (currInd1 === sortedArray1.length) {
        //
        for (let i = currInd2; i < sortedArray2.length; i++) {
          result.push(sortedArray2[currInd2]);
          currInd2++;
        }
        // reset both indexes
        currInd1 = 0;
        currInd2 = 0;
        break;
      } else if (currInd2 === sortedArray2.length) {
        for (let i = currInd1; i < sortedArray1.length; i++) {
          result.push(sortedArray1[currInd1]);
          currInd1++;
        }
        // reset both indexes
        currInd1 = 0;
        currInd2 = 0;
        break;
      }

      if (sortedArray1[currInd1] < sortedArray2[currInd2]) {
        result.push(sortedArray1[currInd1]);
        currInd1 += 1;
      } else if (sortedArray1[currInd1] > sortedArray2[currInd2]) {
        result.push(sortedArray2[currInd2]);
        currInd2 += 1;
      } else if (sortedArray1[currInd1] === sortedArray2[currInd2]) {
        result.push(sortedArray1[currInd1]);
        result.push(sortedArray2[currInd2]);
        currInd1 += 1;
        currInd2 += 1;
      }
    }
    console.log("actual result:", result);
    return result;
  }

  divideAndConquer(array) {
    if (array.length <= 1) {
      return array;
    }

    // define where to split the array
    const mid = Math.floor(array.length / 2);

    // split arrays first
    console.log("before split:", array, "this.mid: ", this.mid);

    const lowArray = array.slice(0, mid);
    const highArray = array.slice(mid);

    console.log("arraylow: ", lowArray, "arrayHigh: ", highArray);

    const lowSolution = this.divideAndConquer(lowArray);
    const highSolution = this.divideAndConquer(highArray);

    console.log("solution low: ", lowSolution, "solution high: ", highSolution);
    // merge the solution of recursion down both paths
    return this.merge(lowSolution, highSolution);
  }

  returnValue(value) {
    return value;
  }
}

let tester = new SomeKindOfSort([5, 8, 3, 1, 2, 6, 4, 7]);
console.log("tester array:", tester.array);
console.log("tester method: ", tester.divideAndConquer);
let sortedArr = tester.divideAndConquer(tester.array);
console.log(sortedArr);

module.exports = SomeKindOfSort;

// divideAndConquer(array) {

//   if(low < high) {
//     // define where to split the array
//     this.mid = Math.round((low + (high - 1))/2);
//     // split arrays first
//     console.log('before split:', array, 'this.mid: ', this.mid);

//     for(let i=0; i<this.mid; i++) {
//       this.tempArray1[i] = array[i];
//     }

//               // this.tempArray1 = array.slice(low, this.mid);
//     console.log('origArray is still: ', origArray);

//     for(let i=0; i<(array.length - this.mid); i++) {
//       console.log('check: array.length - this.mid:', array.length - this.mid)
//       console.log('check also: i + (this.mid)', i + (this.mid))
//       this.tempArray2[i] = array[i + (this.mid)];
//     }
//               //this.tempArray2 = array.slice((this.mid), (array.length));
//     console.log("tempArray1:", this.tempArray1, "tempArray2", this.tempArray2);
//     // recurse on lower half of the array
//     this.lowSolution = this.divideAndConquer(this.tempArray1, low, this.mid);
//     // recurse on highger half of the array
//     this.highSolution = this.divideAndConquer(this.tempArray2, this.mid + 1, high);

//   }
//   // merge the solution
//   this.mergedSolution = this.merge(this.lowSolution, this.highSolution);

//   return this.mergedSolution;
// }

// mergeSort(originalArray) {
//   console.log("sort ahoy!");
//   let origArray = originalArray;

//   return this.divideAndConquer(origArray, 0, origArray.length);
// }
