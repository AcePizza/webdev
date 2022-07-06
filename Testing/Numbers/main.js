let numArray = [1.2, 2.5, 2.3, 3.4, 4.1, 5, 1.6, 2.7, 4.3];
let compareValue = 3;
let compareValuePlusOne = compareValue + 1;

const filteredRating = numArray.filter((rating) => {
  //   console.log("compareValue :>> ", compareValue);
  //   console.log("compareValuePlusOne :>> ", compareValuePlusOne);
  //   console.log(rating > compareValuePlusOne + 1 && compareValue);
  if (rating < compareValuePlusOne && rating >= compareValue) {
    console.log("Yes :>> ", rating);
    return rating;
  }
});

console.log("filteredRating :>> ", filteredRating);
