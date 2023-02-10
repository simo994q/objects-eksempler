const person = {
    firstname: 'Kaj',
    lastname: 'Kajsen',
    age: 18,
    fullname: function(){return this.firstname+' '+this.lastname}
}

console.log(person.fullname());
// Kaj Kajsen

let people = [
    'Kaj',
    'Bo',
    'Keld'
]