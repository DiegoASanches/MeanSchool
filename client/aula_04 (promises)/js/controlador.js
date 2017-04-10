'use strict';

angular.module('start', []) //necessita colocar o ng-app na index.html para puxar o modulo

.controller('indexController', indexController); // necessita colocar o ng-controller para puxar o controller

function indexController($scope){
	// a funcao deve ter o mesmo nome do controller

	function promise1(time){
		return new Promise(function(resolve, reject){

			setTimeout(function(){
				resolve('foi o tempo :' + time);
			}, time);

		});
	}

	Promise.all([promise1(400), promise1(300)])
		.then((res) =>{
			console.log(res);
		}, (err) => {

		});	

	/* tudo que for utilizado com a var $scope ficará visivel para a index.html
	Ex: vamos criar uma var escrito "hello world" e mostrar na tela */

	var hello = "Hello World";

	//agora vamos deixa-la visivel para a index

	$scope.hello = hello;


	$scope.mudar = function(){ //na chamada de funcao no angular, a funcao necessita estar nesse padrao, sendo chamada pelo $scope
		$scope.hello = $scope.titulo; //mudando o titulo do site
	}


}