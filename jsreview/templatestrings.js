const defaultPerson = {
    name: { first: "Shane",
    last: "kiage"},
    favactivity: "skiing"
};

function logActive(person = defaultPerson){
    console.log("${person.name.first} loves ${person.favActivity}");
}


const logComplimen = function(){
    console.log("You're doing great!!!")
};

logComplimen();

hey();

function hey(){
    alert("hey!!");
}