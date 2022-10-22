

async function getTodayFood(body) {
    const response = await fetch('https://testmyappc.herokuapp.com/foods', { method: 'POST', body: body, headers: {"Content-type": "application/json; charset=UTF-8"}
})
const foods = await response.json();

return foods;
}

async function run() {
    const sauce = document.getElementById('flexSwitchCheckDefault').checked;
    const body = JSON.stringify({
        'withSalsa': sauce,
    });
    const food = await getTodayFood(body);
    const element = document.getElementById('food');
    element.textContent = ""; 
    const string = (food.proteina.coccion + ' ' + food.proteina.nombre + ' ' + food.carbohidrato + ' ' + food.verdura.coccion + ' ' + food.verdura.nombre + ' ' + food.salsa).replace('undefined', '');
    element.textContent = string; 

}
window.addEventListener('load', (event) => {
    const boton = document.querySelector("#submit").addEventListener('click',run);

});
