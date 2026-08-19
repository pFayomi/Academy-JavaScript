let userName = prompt("Who's there?", '');
let pass = prompt('Password?', '');

if (userName === 'Admin') {
  
  if (pass === 'TheMaster') {
    console.log('Welcome!');
  } else if (pass === '' || pass === null) {
    console.log('Canceled.');
  } else {
    console.log('Wrong password');
  }

} else if (userName === '' || userName === null) {
  console.log('Canceled.');
} else {
  console.log("I don't know you");
}
// console.log("git update");
let userName = prompt("Who's there?", '');
let pass = prompt('Password?', '');

if (userName === 'Admin') {
  
  if (pass === 'TheMaster') {
    console.log('Welcome!');
  } else if (pass === '' || pass === null) {
    console.log('Canceled.');
  } else {
    console.log('Wrong password');
  }

} else if (userName === '' || userName === null) {
  console.log('Canceled.');
} else {
  console.log("I don't know you");
}
