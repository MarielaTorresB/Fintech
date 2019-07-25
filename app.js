const buttonSavings = document.getElementById("button-calculate-savings");
const buttonSaveBudget = document.getElementById("button-save-budget");
const buttonRegister = document.getElementById("save-register");
const buttonMyAccount = document.getElementById("button-create-account");//NUEVO BOTÓN DECLARADO PARA GUARDAR DATA CON LOCALSTORAGE
const buttonClearBudget = document.getElementById("button-clear-budget");//NUEVO BOTÓN DECLARADO PARA LIMPIAR INPUTS DE PRESUPUESTO
const buttonHome = document.getElementById("button-home-MyAccount");//NUEVO BOTÓN
const buttonEditAccount = document.getElementById("button-edit-account");//NUEVO BOTÓN

//Genera proyección de presupuestos y ahorros
//Función para ingresos
const myBudgets = () => {
    let savings1 = document.getElementById("savings").value;
    let months = document.getElementById("months").value;
    document.getElementById("monthly").value = savings1/months;
    document.getElementById("weekly").value = savings1/months/4;
    document.getElementById("daily").value = savings1/months/4/7;
}
const buttonBudget = document.getElementById("button-calculate-budget");
buttonBudget.addEventListener("click", myBudgets);

/*Función ahorros - SE REPITE
const mySavings = () => {
    let dailySaving = document.getElementById("daily-saving").value;
    let months = document.getElementById("months").value;
    document.getElementById("to-save").value = dailySaving*30*months;
}*/
​
//Captura, imprime, almacena y limpia nombre
const greeting = () => {
    //Captura datos de input 
    let name = document.getElementById("user-name").value;
    //Imprime datos de input

    document.getElementById("greeting").innerHTML = "Hola, " + name;
    //Almacena datos en localStorage
    localStorage.setItem("Name", name);
}
const profileName = () => {
    let name = localStorage.getItem("Name");
    document.getElementById("greeting").innerHTML = "Hola, " + name;
    document.getElementById("name-profile").innerHTML = name;
}

//Genera, imprime y almacena proyección de presupuestos y ahorros
const myBudgets = () => {
    let months = document.getElementById("months").value;
    localStorage.setItem("Months", months)
    
    let savings = document.getElementById("savings").value;
    localStorage.setItem("Savings", savings);
    
    let monthlyBudget = savings/months;
    document.getElementById("monthly").value = monthlyBudget;
    localStorage.setItem("Monthly budget", monthlyBudget);
    
    let weeklyBudget = savings/months/4;
    document.getElementById("weekly").value = weeklyBudget;  
    localStorage.setItem("Weekly budget", weeklyBudget);   
    
    let dailyBudget = savings/months/4/7;
    document.getElementById("daily").value = dailyBudget;    
    localStorage.setItem("Daily budget", dailyBudget);    
}
​
//Obtiene y almacena ahorros
const mySavings = () => {
    let dailySaving = document.getElementById("daily-saving").value;
    localStorage.setItem("Daily saving", dailySaving);
    let months = document.getElementById("months").value;
    let futureSavings = dailySaving*30*months;
    document.getElementById("to-save").value = futureSavings;
    localStorage.setItem("Future saving", futureSavings);
}
​
//Obtiene e imprime presupuestos y ahorros
const printBudget = () => {
    let savings = localStorage.getItem("Savings");
    document.getElementById("savings-display").innerHTML = "$"+savings+".00";
    let monthlyBudget = localStorage.getItem("Monthly budget");
    document.getElementById("monthly-display").innerHTML = "$"+monthlyBudget+".00";
    let weeklyBudget = localStorage.getItem("Weekly budget");
    document.getElementById("weekly-display").innerHTML = "$"+weeklyBudget+".00";
    let dailyBudget = localStorage.getItem("Daily budget");
    document.getElementById("daily-display").innerHTML = "$"+dailyBudget+".00";
    let futureSaving = localStorage.getItem("Future saving");
    document.getElementById("dailySaving-display").innerHTML = "$"+futureSaving+".00"
}
​
//Reimprime datos en el modal de presupuesto después de refrescar página
const reloadBudget = () => {
    let savings = localStorage.getItem("Savings");
    document.getElementById("savings").value = savings;
    let months = localStorage.getItem("Months");
    document.getElementById("months").value = months;
    let monthlyBudget = localStorage.getItem("Monthly budget");
    document.getElementById("monthly").value = monthlyBudget;
    let weeklyBudget = localStorage.getItem("Weekly budget");
    document.getElementById("weekly").value = weeklyBudget;
    let dailyBudget = localStorage.getItem("Daily budget");
    document.getElementById("daily").value = dailyBudget;
    let dailySaving = localStorage.getItem("Daily saving");
    document.getElementById("daily-saving").value = dailySaving;
    let futureSaving = localStorage.getItem("Future saving");
    document.getElementById("to-save").value = futureSaving;
}
​
//Limpia inputs de modal presupuesto
const clearBudget = () => {
    document.getElementById("user-name").value = "";
    document.getElementById("savings").value = "";
    document.getElementById("months").value = "";
    document.getElementById("daily-saving").value = "";
    document.getElementById("monthly").value = "";
    document.getElementById("weekly").value = "";
    document.getElementById("daily").value = "";
    document.getElementById("to-save").value = "";
}
​
//Limpia pantalla principal
const clearHome = () => {
    document.getElementById("savings-display").innerHTML = "";
    document.getElementById("monthly-display").innerHTML = "";
    document.getElementById("weekly-display").innerHTML = "";
    document.getElementById("daily-display").innerHTML = "";
    document.getElementById("dailySaving-display").innerHTML = "";
}
​
​buttonSavings.addEventListener("click", mySavings);
buttonRegister.addEventListener("click", greeting);//imprime nombre de usuaria en pantalla principal
buttonRegister.addEventListener("click",profileName);//imprime nombre de usuaria después de refrescar página y en modal de presupuesto
buttonRegister.addEventListener("click", clearBudget);//limpia modales de registro y presupuesto en caso de nuevo registro
buttonRegister.addEventListener("click", clearHome);//limpia la pantalla principal en caso de nuevo registro
buttonMyAccount.addEventListener("click", clearBudget);//limpia modal de presupuesto
buttonCalculateBudget.addEventListener("click",myBudgets);//calcula presupuestos
buttonCalculateSavings.addEventListener("click",mySavings);//calcula presupuestos
buttonHome.addEventListener("click", printBudget);//imprime en pantalla principal el presupuesto ingresado del modal
buttonHome.addEventListener("click", profileName);//recupera nombre para reimprimir saludo después de refrescar
buttonSaveBudget.addEventListener("click", printBudget);//recupera presupuesto en pantalla principal después de refrescar
buttonEditAccount.addEventListener("click", reloadBudget);//Reimprime en modal presupuesto después de refrescar
​







