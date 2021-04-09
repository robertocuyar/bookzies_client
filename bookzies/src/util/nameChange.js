export const nameChange = (str, char)=>{
  let confirmIndex = str.indexOf(char);
  let newStr = "";
  if(confirmIndex === -1){
      return str;
  } else {
      newStr = str.replace(char, ", ");
      return nameChange(newStr, char);
  }
}