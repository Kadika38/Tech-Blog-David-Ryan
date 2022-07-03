const home = () => {
    document.location.replace('/');
}

const dashboard = () => {
    document.location.replace('/dashboard');
}

const login = () => {
    document.location.replace('/login');
}

const logout = () => {
    //create later
}

document.querySelector('#home').addEventListener('click', home);
document.querySelector('#dashboard').addEventListener('click', dashboard);
document.querySelector('#login').addEventListener('click', login);
/* document.querySelector('#logout').addEventListener('click', logout); */