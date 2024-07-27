var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
    var demo = document.getElementById("demo");
    if (count % 2 == 0) { // проверка на четность
        demo.innerHTML = "";
    } else {
        // создание нового элемента img
        var img = document.createElement("img");
        // установка источника изображения
        img.src = "https://eecs.susu.ru/wp-content/uploads/2021/11/CTF.jpg";
        // добавление изображения
        demo.appendChild(img); // добавление дочернего элемента
    }
}
