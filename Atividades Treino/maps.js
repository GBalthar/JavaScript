function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Guilherme', 'Admin');
usuarios.set('Augusto', 'Admin');
usuarios.set('Ana', 'User');
usuarios.set('Bernardo', 'Admin');

console.log(getAdmins(usuarios));