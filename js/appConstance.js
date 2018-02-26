var meuApp = angular.module("appConstance", []);
	meuApp.controller("meuController", function($scope){
		
		$scope.novoPagamento = {};
		$scope.savar = localStorage.getItem('contas'); 
		$scope.visualizarPagamento = {};

		$scope.cntPagar = (localStorage.getItem('contas') !== null) ? JSON.parse($scope.savar) : [{
			"PagarPara" : null,
			"Historico" : null,
			"DataEmissao" : null,
			"NumeroDocumento" : null,
			"FormaPagamento" : null,
			"ChaveNF" : null,
			"ContaBancaria" : null,
			"DataVencimento" : null,
			"Valor" : null,
			"Frequencia" : null,
			"PlanoContas" : null,
			"CentroCustos" : null
		}];

		// total contas
		$scope.TotalContas = $scope.cntPagar.length - 1;

		// salva no localStorage
		localStorage.setItem('contas', JSON.stringify($scope.cntPagar));
		$scope.savarContas = function(){
			$scope.cntPagar.push($scope.novoPagamento);
			localStorage.setItem('contas', JSON.stringify($scope.cntPagar));
			$scope.novoPagamento = {};

			// total contas
			$scope.TotalContas = $scope.cntPagar.length - 1;
		};

		// total dos valores
		$scope.ValorTotal = 0;
		$scope.$watchCollection('cntPagar',function() {
			angular.forEach($scope.cntPagar, function(value, key) {
				if($scope.cntPagar[key].Valor !== null){
					$scope.ValorTotal += value.Valor;
				}	
			});
		});


		//visulizar
		$scope.selectPag = function(contas){
			$scope.visualizarPagamento = contas;
		};
	});