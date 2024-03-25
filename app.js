// doubleValues allows us to double the value that we put in the array
function doubleValues(arr){
    let twiceArray = [];
    arr.forEach(function(val) { //forEach allows for looping through an array, letting you use every number added to the array.
        twiceArray.push(val * 2); // push adds to the array, then we multiply the number we put in the array.
    });
    return twiceArray;
}
console.log(doubleValues([1,2,3])); // 2, 4, 6
console.log(doubleValues([5,1,2,3,10])); // 10, 2, 4, 6, 20



// onlyEvenValues selects if numbers are divisible by 2
function onlyEvenValues(arr){
    let evenArray = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) { // If the value is a modulus of 2, add result to array.
            evenArray.push(val);
        }
    });
    return evenArray;
}
console.log(onlyEvenValues([1,2,3])); // 2
console.log(onlyEvenValues([5,1,2,3,10])); // 2, 10


// showFirst and Last makes an array of the first and last letter of the input
function showFirstAndLast(arr){
    let firstLast = [];
    arr.forEach(function(val) {
        firstLast.push(val[0] + val[val.length - 1]); // 0 represents first letter, val.length is used to look at all letters and then we use - 1 to get final letter
    });
    return firstLast;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'test'])); // [ct], [mt], [tm], [tt]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // [hi], [ge], [se]


// addKeyAndValue accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
        val[key] = value; // in an array you need to add both a key and then a string [{name: 'Tim'}]
    });
    return arr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')); // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]



// vowelCount collects the vowels in a string and counts them
function vowelCount(str){
   let splitVowels = str.split(""); // We are splitting the array into different sections
   let obj = {};
   let vowels = "aeiou"; // use a string to select the vowels you want

   splitVowels.forEach(function(letter) {
    let lowerCase = letter.toLowerCase() // Need to convert all possible upper case inputs to lower case in order to add to same key
    if (vowels.indexOf(lowerCase) !== -1) {
        if (obj[lowerCase]) {
            obj[lowerCase]++;
        } else {
            obj[lowerCase] = 1;
        }
    }
   });
   return obj;
}
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim'));  // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};



// Uses map to double the values in the array. Map creates a new array/
function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}
console.log(doubleValuesWithMap([1,2,3])); // [2,4,6]
console.log(doubleValuesWithMap([1,-2,-3])); // [2,-4,-6]


// accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(arr){
    return arr.map(function(val, idx) {
        return val * idx;
    });
}
console.log(valTimesIndex([1,2,3])); // [0,2,6]
console.log(valTimesIndex([1,-2,-3])); // [0,-2,-6]


// accepts an array of objects and some key and returns a new array with the value of that key in each object.
function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
    });
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')); // ['Elie', 'Tim', 'Matt', 'Colt']



// accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
function extractFullName(arr){
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])); // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele'] 



// accepts an array of objects and a key and returns a new array with all the objects that contain that key.
function filterByValue(arr, key) {
    return arr.filter(function(val) { // filter creates a new array, if conditions are true, value is pushed to new array
        return val[key] !== undefined;
    });
}
console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner')); // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]



// accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
    })[0];
}
console.log(find([1,2,3,4,5], 3)); // 3
console.log(find([1,2,3,4,5], 10)); // undefined


// accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];
}
console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true)); // {first: 'Tim', last:"Garcia", isCatOwner: true}



// accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(str) {
    let difVowels = "aeiou";
    return str
        .toLowerCase()
        .split("")
        .filter(function(val) {
                return difVowels.indexOf(val) === -1;
        })
        .join(""); // .join puts the values together into 1 string
}
console.log(removeVowels('Elie')); // ('l')
console.log(removeVowels('TIM')); // ('tm')
console.log(removeVowels('ZZZZZZ')); // ('zzzzzz')



// accepts an array and returns a new array with all of the odd numbers doubled
function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
        return val % 2 !== 0;
    })
    .map(function(val) {
        return val * 2;
    });
}
console.log(doubleOddNumbers([1,2,3,4,5])); // [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])); // []