const dino = document.getElementById ("dino");  //получаем элемент
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {  //обработчик событый со значением нажатие кнопки 
    jump();  //функия добавляет класс элементу
}
);

function jump() {
    if (dino.classList != "jump") {  //возвращает все классы элемента
        dino.classList.add("jump")  //если дино не имеет ккласс джамп - добавляем
    }
    setTimeout(function () {  // или удаляем, проверка 300мс
        dino.classList.remove("jump")
    }, 300)
}

let iaAlive = setInterval ( function () {  // вызов через опред 10мс интервал времени 
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));  
    //получаем значение где находится дино getComputedStyle(dino) из scc свойств
    //getPropertyValue получем свойство, которое должно быть обработано, тип строковое
    //parseInt переводим строку в int
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft <50 && cactusLeft > 0 && dinoTop >=140) {
        alert("GAME OVER")
    }
}, 10)