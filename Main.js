var app = new Vue({
    el: '#app',
    data: {
        info: {},
        info2: {},
        calendario: [],
        calendario2: [],
        Torneos: [],
        Torneos2: [],
        TorneoExterior: [],
        TorneoExterior2: [],


    },
    created: function () {
        this.getData();
        this.PrintName();
    },
    methods: {

        getData: function () {
            fetch("https://api.myjson.com/bins/1408vs", {
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
                app.Torneos = json.CalendarioTorneoClase.Horas
                app.Torneos2 = json.CalendarioTorneoClase.Juegos
                app.TorneoExterior = json.CalendarioTorneosExternos.Eventos
                app.PrintName();
                console.log(app.TorneoExterior);

            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });


        },
        PrintName: function () {
            for (var i = 0; i < this.TorneoExterior.length; i++) {
                this.TorneoExterior2.push(this.TorneoExterior[i].name)
            }
        },
    }
})
