'use strict';

angular.module('start', []) //necessita colocar o ng-app na index.html para puxar o modulo

.controller('indexController', indexController); // necessita colocar o ng-controller para puxar o controller

function indexController($scope){
	// a funcao deve ter o mesmo nome do controller

	$scope.celulares = [
		{
			marca: 'apple',
			modelo: 'iphone',
			preco: 1500
		},
		{
			marca: 'Samsung',
			modelo: 'Galaxy',
			preco: 800
		},
		{
			marca: 'LG',
			modelo: 'Optimus',
			preco: 900
		},
		{
			marca: 'Motorola',
			modelo: 'Moto G',
			preco: 1000
		}
	];


}