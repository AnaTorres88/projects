// Objetivo: El usuario puede entrar, eliminar y actulizar su lista de tareas
window.onload = function() {

	var task="";
	var confirmation="";
	
	// Usuario pulsa el botón y es ejecurada la función addingTask
	document.getElementById("addtask").addEventListener("click", function(){
		//obtiene el valor del input. 
		task = document.getElementById("textinput").value + " X";
		//crea text node
		var newlist = document.createTextNode(task);
		//se crea un element li
		var node = document.createElement("li");
		//se agrega atributo de id
		node.setAttribute("class", "task");
		//se agrega el event listener
		node.addEventListener("click", removeElement, false);
		// se agrega newlist (el valor) al nodo
		node.appendChild(newlist);
		 document.getElementById("list").appendChild(node);
		 //limpiar el campo
		 document.getElementById("textinput").value=" ";
	});


	//Usuario pulsa un elemento de al lista, ejecutando la sig. función

	function removeElement(){
		/*Confirm pregunta al usuario si quiere eliminar la tarea
		el valor de var confirm es cambiado por true o false*/
		confirmation = confirm("Would you like to delete this task definitively?");
	 // Si la confirmación es true, usuario da OK, se ejecuta el siguiente código
			if (confirmation === true){
		//la variable remoevd aloja todos los elementos dinámicos con clase 'task'
				var removed = document.getElementsByClassName("task");
			  //Se requiere un loop para pasar por cada uno...
	  			for(var i=0; i<removed.length; i++){
	  	//Y atribuírles la clase crossed, que es la que representa que han sido terminados o elimiandos
			  		removed[i].setAttribute("class", "crossed");
			 	 }
			}
	}
};//Fin de onload



/**/ 
