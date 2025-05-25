const isValidEmail = (email) => {
  const atIndex = email.indexOf("@");
  const lastDotIndex = email.lastIndexOf(".");
  //   console.log(`@ index: ${atIndex} last dot index: ${lastDotIndex}`);

  // @ only one time
  if (atIndex === -1 || email.indexOf("@", atIndex + 1) !== -1) return false;

  // can't be first character or last character
  if (atIndex === 0 || atIndex === email.length - 1) return false;

  // @ must be followed by at least two characters, followed by (.).
  if (lastDotIndex <= atIndex + 2) return false;

  //  . can't be the last character
  if (lastDotIndex === email.length - 1) return false;

  return true;
};

console.log(isValidEmail("umayer@g@mail.com"));
console.log(isValidEmail("@umayer.gmail.com"));
console.log(isValidEmail("umayer.gmail.com@"));
console.log(isValidEmail("umayer@ai.lcom"));
console.log(isValidEmail("umayer@gmailcom."));
console.log(isValidEmail("Umayer@gmail.com"));
