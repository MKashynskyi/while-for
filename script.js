const HELLO_MESSAGE = 'Who are you?'; 
const BYE_MESSAGE = 'bye';

let username = prompt(HELLO_MESSAGE);

if(!username)
  alert(BYE_MESSAGE);

if(username !== 'Admin')
  alert(BYE_MESSAGE);

let password = prompt('Password?');

if(!password)
  alert(BYE_MESSAGE);

password === 'Nikita boss' 
  ? alert(`Ky ${username}`) 
  : alert(BYE_MESSAGE)
