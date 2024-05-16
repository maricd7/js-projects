console.log("server started");

//return longest non reapeating character string
//ABCDDDEFHG

const getLongestSubStr = (string) => {
  let currentString = "";
  let currentStrings = [];
  for (let i = 0; i < string.length; i++) {
    if (currentString.includes(string[i])) {
      currentStrings.push(currentString);
      currentString = "";
    }
    currentString += string[i];
    currentStrings.push(currentString);
  }
  const result = currentStrings.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  console.log("Exercise One", result);
};
getLongestSubStr("ABCDDDEFHG");
