(function() {
  'use strict';

  angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      $scope.dishes = '';
      $scope.message = '';
      $scope.checked = false;

      $scope.checkLunch = function() {
          if ($scope.dishes.trim().length === 0) {
              $scope.empty = true;
          } else {
              $scope.checked = true;
              $scope.empty = false;
              var arrayDishes = $scope.dishes.split(',');
              var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
                  return v.trim() !== '';
              });

              if (arrayDishesWithoutEmptys.length <= 3) {
                  $scope.message = 'Enjoy!';
              } else {
                  $scope.message = 'Too much!';
              }
          }
      };
  }
})();

// (function () {
//     'use strict';
    
//     angular.module('LunchChecker', [])
//     .controller('LunchCheckerController',LunchCheckerController);

//     LunchCheckerController.$inject = ['$scope', '$filter'];
//     function LunchCheckerController($scope, $filter) {
//         $scope.dishes = '';
//         $scope.message = '';
//         $scope.checked = false;

//         $scope.checkLunch = function() {
//             if ($scope.dishes.trim().length === 0) {
//                 $scope.empty = true;
//             } else {
//                 $scope.checked = true;
//                 $scope.empty = false;
//                 $scope.message="";
//                 var arrayDishes = $scope.dishes.split(',');
//                 var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
//                     return v.trim() !== '';
//                 });

//                 if (arrayDishesWithoutEmptys.length <= 3) {
//                     $scope.message = 'Enjoy!';
//                 } else {
//                     $scope.message = 'Too much!';
//                 }
//               }
//             };

//     }
//   }
// )
// ();

    // .controller('LunchCheckerController', function ($scope) {
    //   LunchCheckerController.$inject=
    //   $scope.name = "";
    //   $scope.totalValue = 0;
    
    //   $scope.displayNumeric = function () {
    //     var totalNameValue = calculateNumericForString($scope.name);
    //     $scope.totalValue = totalNameValue;
    //   };
    
    
    //   function calculateNumericForString(string) {
    //     var totalStringValue = 0;
    //     for (var i = 0; i < string.length; i++) {
    //       totalStringValue += string.charCodeAt(i);
    //     }
    
    //     return totalStringValue;
    //   }
    
    // });
    
    
    // })();