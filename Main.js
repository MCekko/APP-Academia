var app = new Vue({
    el: '#app',
    data: {
        info: {},
        info2: {},
        calendario: [],
        calendario2: [],


    },
    created: function () {
        this.getData();
    },
    methods: {

        getData: function () {
            fetch("https://api.myjson.com/bins/12h4bc", {
                method: "GET",
            }).then(function (response) {
                if (response.ok) {

                    return response.json();
                }

            }).then(function (json) {

                app.info = json.About.Nosotros;
                app.info2 = json.About.Formacion;
                app.calendario = json.CalendarioClase.Dias
                app.calendario2 = json.CalendarioClase.Horas.toString();
                console.log(json);

            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });


        },
    }
})
