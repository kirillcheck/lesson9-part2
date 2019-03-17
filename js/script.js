window.addEventListener('DOMContentLoaded', function () {

    let age = document.getElementById('age');
 
    function showUser(surname, name,value) {
             alert("Пользователь " + surname + " " + name + ", его возраст " +  age.value);
    }
     
    showUser('shakhov', 'kiril' );
    





});