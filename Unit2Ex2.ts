function countUnique(value) {
  let stringArray = value.split(" ");
  var countSet = new Set([]);
  for (var i = 0; i < stringArray.length; i++) {
    countSet.add(stringArray[i].toLowerCase());
  }
  return countSet.size;
}

console.assert(countUnique("The cat and the CAT ate the rat") == 5, "Function is not working")
