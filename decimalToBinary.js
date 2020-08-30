function dec2Bin(dec) {
  return dec >= 0 ? dec.toString(2) : (~dec).toString(2);
}

console.log(dec2Bin(7));
