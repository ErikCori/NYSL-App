var app = new Vue({
    el: '#app',
    data: {
        section: "home",
    }
})

function cambiarSection(nuevaSeccion){
  app.section = nuevaSeccion;
}