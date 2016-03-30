socialModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/VMiPagina/:idUsuario', {
                controller: 'VMiPaginaController',
                templateUrl: 'app/paginas/VMiPagina.html'
            }).when('/VPagina/:idUsuario', {
                controller: 'VPaginaController',
                templateUrl: 'app/paginas/VPagina.html'
            });
}]);

socialModule.controller('VMiPaginaController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'ngDialog', 'identService', 'paginasService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, ngDialog, identService, paginasService) {
      $scope.msg = '';
      paginasService.VMiPagina({"idUsuario":$routeParams.idUsuario}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VPrincipal = function() {
        $location.path('/VPrincipal');
      };
      $scope.VPagina = function(idUsuario) {
        $location.path('/VPagina/'+idUsuario);
      };
       $scope.VInicio = function() {
        $location.path('/VInicio');
      };
      $scope.VForos = function(){
        $location.path('/VForos');
      };
      $scope.VLogin = function() {
        $location.path('/VLogin');
      };
      $scope.VContactos = function(idUsuario) {
        $location.path('/VContactos/'+idUsuario);
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VMiPagina.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}
    }]);
socialModule.controller('VPaginaController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'ngDialog', 'identService', 'paginasService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, ngDialog, identService, paginasService) {
      $scope.msg = '';
      $scope.fPagina = {};

      paginasService.VPagina({"idUsuario":$routeParams.idUsuario}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VPrincipal0 = function() {
        $location.path('/VPrincipal');
      };
      $scope.VPagina0 = function(idUsuario) {
        $location.path('/VPagina/'+idUsuario);
      };
       $scope.VInicio0 = function() {
        $location.path('/VInicio');
      };
      $scope.VForos0 = function(){
        $location.path('/VForos');
      };
      $scope.VLogin0 = function() {
        $location.path('/VLogin');
      };
      $scope.VContactos0 = function(idUsuario) {
        $location.path('/VContactos/'+idUsuario);
      };


      $scope.fPaginaSubmitted = false;
      $scope.AModificarPagina0 = function(isValid) {
        $scope.fPaginaSubmitted = true;
        if (isValid) {
          
          paginasService.AModificarPagina($scope.fPagina).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VPagina.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}
    }]);