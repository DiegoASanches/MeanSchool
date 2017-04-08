'use strict';

function acao1(){
	var nome = document.getElementById('nome').value; //pega o valor do input

	if(nome==''){
		alert("buuuuh");
	}
	else{
		alert('nome: '+nome);	
	}	
}

function acao1_jquery(){
	var nome = $('#nome_jquery').val(); //pega o valor do input

	if(nome==''){
		//o usuario nao digitou nada
		alert("buuuuh JQUERY");
	}
	else{
		//o usuario digitou alguma coisa
		alert('nome: '+nome);	
	}

	$('#lista').append('<li>'+nome+'</li>'); //adicionando elemento a lista
}