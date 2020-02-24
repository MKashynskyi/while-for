

let username = prompt('Who are you?');

if(!username)
  alert('bye');

if(username !== 'Admin')
  alert('bye');

let password = prompt('Password?');

if(!password)
  alert('bye');

password === 'Nikita boss' 
  ? alert(`Ky ${username}`) 
  : alert('bye')
