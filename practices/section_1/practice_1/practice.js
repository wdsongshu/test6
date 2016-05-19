function collect_same_elements(collection_a, collection_b) {
  var printArray = getPrint(collection_a, collection_b);

  return printArray;
}

function getPrint(collection_a, collection_b) {
  var printArray = [];

  collection_a.forEach(function (num_a) {
    if (isExist(num_a, collection_b)) {
      printArray.push(num_a);
    }
  });

  return printArray;
}

function isExist(num_a, collection_b) {
  for (var j = 0; j < collection_b.length; j++) {
    if (num_a === collection_b[j]) {

      return true;
    }
  }
}

module.exports = collect_same_elements;
