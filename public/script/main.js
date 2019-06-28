var partidos = data.partidos;
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
	crearTablaEnhtml(partidosFiltrados, mesSelec);
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

function crearTablaEnhtml(lista, elemento) {
	var tabla = document.getElementById('table-data');
	tabla.innerHTML = "";
	var contenidoTabla = crearContenidoTabla(lista, elemento);
	tabla.innerHTML = contenidoTabla;
}

function crearContenidoTabla(partidos, elemento) {
	var table = '<thead class="thead"><tr><th>Date</th><th>Teams</th><th>Location</th><th>Times</th></tr></thead>';

	table += '<tbody>';

	partidos.forEach(function (partido) {
		table += '<tr>';
		table += '<td class="date">' + partido.date + '</td>';
		table += '<td class="state">' + partido.teams + '</td>';
		table += 
			'<td class="location"><a href=' +partido["url-location"]+ '>' + partido.location + 
			
			'</td>';
		table += '<td class="times">' + partido.times + '</td>';
		table += '</tr>';
	})
	table += '</tbody>';
	return table;
}
	