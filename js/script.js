
//Скрипт чтобы заработало меню


var checkbox = document.querySelector("#navi-toggle"); //Получаем чекбокс


var links = document.querySelectorAll(".navigation__item"); //Получаем список ссылок в меню

//При клике на ссылку убираем галочку с чекбокса, при этом прокрутка к нужной секции на странице происходит с помощью якорей через ЦСС

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function () {

        checkbox.checked = false;
    });
}