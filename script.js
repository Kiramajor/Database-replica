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

let input = function(){
     userInput = prompt('Enter username');
     passInput = prompt('Enter password');

}
input();

let passCheck = function (input){
     if(userInput === dataBase[0].username && passInput === dataBase[0].password) {
      alert(`Welcome!login successful`); 
    } else if(userInput === dataBase[1].username && passInput === dataBase[1].password){
        alert(`Welcome!login successful`);
    } else if(userInput === dataBase[2].username && passInput === dataBase[2].password){
        alert(`Welcome!login successful`);
    } else if(userInput === dataBase[3].username && passInput === dataBase[3].password){
        alert(`Welcome!login successful`);
    } else{
        alert('Incorrect password,try again')
    }
}
passCheck();