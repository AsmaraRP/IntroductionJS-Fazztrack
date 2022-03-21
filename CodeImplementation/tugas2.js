reverseWords("Saya Belajar dengan Javascript");
function reverseWords(sentence) {
  sentence = sentence.split(" ");
  let result = [];
  result = sentence.reverse();
  return console.log(result.join(" "));
}
