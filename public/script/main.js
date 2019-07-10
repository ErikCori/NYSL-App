var partidos = app.partidos;
var meses = partidos.map(partido => partido.month);

meses = meses.filter((mes, i, array) => array.indexOf(mes) === i);
meses.sort();

listaDropdownMonths(meses);
filtrarYMostrarTabla();



//********************Funciones************************
function filtrarYMostrarTabla() {
	var mesSelec = document.getElementById("dropMonths").value;
	var partidosFiltrados = "";
	if (mesSelec != "") {
		partidosFiltrados = partidos.filter(partido => partido.month == mesSelec);
	}
	else{
		partidosFiltrados = app.partidos;
	}
	
	app.partidos = partidosFiltrados;
}

function listaDropdownMonths(meses) {
	var listaDropdown = document.getElementById("dropMonths");

	listaDropdown.onchange = filtrarYMostrarTabla;

	meses.forEach(mes => {
		var opcion = document.createElement("option");
		opcion.value = mes;
		opcion.innerText = mes;
		listaDropdown.appendChild(opcion);
	})
}

