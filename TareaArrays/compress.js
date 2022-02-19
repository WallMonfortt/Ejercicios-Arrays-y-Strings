function compress(s){
  //string compression
  let compressed = '';
  let current = s[0];
  let count = 0;
  //iterate through the string
  for(let i = 0; i < s.length; i++){
    //if the current character is the same as the next character
    if(s[i] === current){
      count++;
      //if the current character is not the same as the next character
    }else{
      compressed += current + count;
      current = s[i];
      count = 1;
    }
  }
  //add the last character and count
  compressed += current + count;
  //if the compressed string is longer than the original string
  return compressed.length < s.length ? compressed : s;

}


// Test
console.log(compress("aabcccccaaa"));
console.log(compress("abcdef"));
