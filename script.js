// registro
const btnSubmit = document.getElementById('btnSubmit');
const inpUser = document.getElementById('nameNew');
const inpPass = document.getElementById('passNew');
const inpEdad = document.getElementById('ageNew');
// logeo
const userName = document.getElementById('user');
const userPass = document.getElementById('password');
const btnLogin = document.getElementById('login');

// Hacer que logica entre la para verificar el usuario registrado 

const bdd = []; //Array donde se guardan los usuarios
function createUser() { // creamos usuario
    const user = {
        name: inpUser.value,
        pass: inpPass.value,
        edad: inpEdad.value
    }

    const verifica = user.edad >= 10 ? true : alert('No tienes edad suficiente!'); //Verificacion con operador ternario para corroborar la edad
    if (verifica) {
        bdd.push(user); // lo colocamos en el array
        const bddJSON = JSON.stringify(bdd); // lo transformamos en JSON.Stringify para su manejo por sessionStorage
        sessionStorage.setItem('usuario', bddJSON); //Lo guardamos en el sessionStorage
        bdd.map(e => console.log(e));
        alert('Usuario creado con exito!')
    }
}

function logeo() { //Verificacion de datos para luego Logear
    const captureUser = JSON.parse(sessionStorage.getItem('usuario')); //capturamos los datos guardado en la sessionStorage y lo transformamos en objeto
    for (let i = 0; i < captureUser.length; i++) { //recorremos el array
        const element = captureUser[i];
        if (element.name == userName.value && element.pass == userPass.value) { // verificamos los valores capturadoras con los datos ingresados por el usuario
            alert('Login aprovado!')
            window.location = 'pages/home.html'; // Trasladamos a la pagina principal
            return;
        } else {
            alert('Usuario incorrecto');
            return;
        }

    }

}

//boton para registrarse
btnSubmit.onclick = (e) => {
    e.preventDefault();
    // se ejecuta la funcion crear usuario al clickear 'registrar'
    createUser();
}

//boton de logeo
btnLogin.onclick = (e) => {
    e.preventDefault();
    logeo();
}