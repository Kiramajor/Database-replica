let dataBase = [{
    username: 'Tari'.toLowerCase(),
    password: 'tari123', 
},{
    username:'Ola'.toLowerCase(),
    password: '123ola',
},{
    username: 'Kelvin'.toLowerCase(),
    password: 'kel1998',
},{
    username: 'Debby'.toLowerCase(),
    password: 'deb345',
}

];

   let userInput = prompt('Enter username');
   let passInput = prompt('Enter password');
  
   for (let i = 0; i < dataBase.length; i++) {
}
let passCheck = function (input){
    if(userInput === dataBase[i].username && passInput === dataBase[i].password) {
        alert('Sucessful! Welcome to your timeline')
     } else{
        alert('Incorrect password,try again')
    }
}