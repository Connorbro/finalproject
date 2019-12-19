(function() {

    let app = angular.module('timesheet', ["ngAnimate"]);
  
    app.controller('FormController', function($scope, $timeout) {
  
      $scope.ele = {
        date: "",
        text: {
          start:"",
          end: ""
        },
        // msg: "",
        selectTypes: []
       }
       
      
  
      let defaultForm = angular.copy($scope.ele);
  
      $scope.clearInfo = function() {
  
        $scope.ele = angular.copy(defaultForm);
        $scope.formTimesheet.$setPristine();
        $scope.selectedItems = '';
        $scope.newType = '';
  
        document.getElementsByName('formTimesheet')[0].reset();
        let elements = document.getElementById("dropDown").options;
        for (let i = 0; i < elements.length; i++) {
          elements[i].selected = false;
        }
  
      };
  
      $scope.createNew = function(newType) {
  
        if (newType) {
          if (newType.length !== 0) {
            $scope.ele.selectTypes.push(newType);
          }
  
          $scope.newType = '';
        }
  
      };
  
      $scope.saveForm = function() {
        $scope.clicked = true;
  
        $timeout(function() {
          $scope.success = true;
        }, 1400);
  
      };
  
      $scope.startAgain = function() {
  
        if ($scope.clicked === true) {
          $scope.clicked = false;
        }
  
        if ($scope.success === true) {
          $scope.success = false;
        }
  
        $scope.clearInfo();
  
      };
  
    });
  
  })();