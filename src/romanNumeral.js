export function romanNumeral (input) {
  this.input = input;
}
romanNumeral.prototype.calcRomanNumeral = function () {
  var splitNumber = this.input.split("");
  var onesPlace = splitNumber[splitNumber.length - 1];
  if (splitNumber.length > 1) {
    var tensPlace = splitNumber[splitNumber.length - 2];
  }
  if (splitNumber.length > 2) {
    var hundredsPlace = splitNumber[splitNumber.length - 3];
  }
  if (splitNumber.length > 3) {
    var thousandsPlace = splitNumber[splitNumber.length - 4];
  }
  return calcThousandsPlace(thousandsPlace) + calcHundredsPlace(hundredsPlace) + calcTensPlace(tensPlace) + calcOnesPlace(onesPlace);
}
function calcOnesPlace(onesPlace) {
  var output = [];
  var one = 'I';
  var five = 'V';
  var ten = 'X';
  for (var i = 1; i<=onesPlace; i++) {
    if (i === 4) {
      output.splice(1);
      output.push(five);
    } else if (i === 5){
      output.shift();
    } else if ( i=== 9) {
      output.splice(0,3);
      output.push(ten);
    } else {
      output.push(one);
    }
  }
  return output.join('');
}
function calcTensPlace(tensPlace) {
  var output = [];
  var ten = 'X';
  var fifty = 'L';
  var oneHundred = 'C';
  for (var i = 1; i<=tensPlace; i++) {
    if (i === 4) {
      output.splice(1);
      output.push(fifty);
    } else if (i === 5){
      output.shift();
    } else if ( i=== 9) {
      output.splice(0,3);
      output.push(oneHundred);
    } else {
      output.push(ten);
    }
  }
  return output.join('');
}

function calcHundredsPlace(hundredsPlace) {
  var output = [];
  var hundred = 'C';
  var fiveHundred = 'D';
  var oneThousand = 'M';
  for (var i = 1; i<=hundredsPlace; i++) {
    if (i === 4) {
      output.splice(1);
      output.push(fiveHundred);
    } else if (i === 5){
      output.shift();
    } else if ( i=== 9) {
      output.splice(0,3);
      output.push(oneThousand);
    } else {
      output.push(hundred);
    }
  }
  return output.join('');
}

function calcThousandsPlace(thousandsPlace) {
  var output = [];
  var thousand = 'M';
  for (var i = 1; i<=thousandsPlace; i++) {
    output.push(thousand);
  }
  return output.join('');
}


