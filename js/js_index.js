var carga = 1;


$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (carga < 4) {
            
            $.getJSON("data/" + carga + ".json", function (jsonObject) {
                addrow(jsonObject);
            }); carga++;
        } else {
            $('#mas').css("display","none");
        }
    }
});

/*BOTON*/
function cargar() {
    if (carga < 4) {
        
        $.getJSON("data/" + carga + ".json", function (jsonObject) {
            addrow(jsonObject);
        }); carga++;
    } else {
        $('#mas').css("display","none");
    }
};



function addrow(json) {
    $.each(json, function (i, item) {
        $(".noticias").append('<div class="col-md-10">' +
            '<div class="thumbnail">' +
            '<div class="caption">' + '<h3 class="text-justify">' + item.titulo + "</h3>" + "</div>" +
            '<img src="' + item.img + '" alt="..." />' +
            '<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
            '<p class="text-right">' + "<em>" + item.fecha + "</em>" + "</p>" + "</div>" + "</div>" + "</div>");
    })
};

