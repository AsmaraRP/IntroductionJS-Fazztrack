reverseWords("Saya Belajar Fullstack Website");
function reverseWords(sentence) {
  sentence = sentence.split(" ");
  let result = [];
  result = sentence.reverse();
  return console.log(result.join(" "));
}
