cekPalindrom("Malam");
function cekPalindrom(word) {
  word = word.toString().toLowerCase();
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word.charAt(i);
  }
  return word == reverseWord ? console.log("Palindrom") : console.log("Bukan Palindrom");
}
