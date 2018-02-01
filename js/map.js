var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 59.93605075, lng: 30.32291472},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 17

        });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 59.93605075, lng: 30.32291472},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'Наш маркер: Большой театр',

        // Укажем свою иконку для маркера
        icon: "../images/icon-map-pin.svg"
    });

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">mishka shop</h1>'+
        '<div id="bodyContent">'+
        '<p>г. Санкт-Петербург,ул. Большая Конюшенная,д. 19/8, офис 101</p>'+
        '<p><b>e-mail:</b> <a href="#" target="_blank">info@mimimishkashop.ru</a>'+
        '</p>'+
        '</div>'+
        '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}