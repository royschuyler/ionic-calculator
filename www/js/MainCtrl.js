angular.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
  // $scope.message = 'hello';
  $scope.output = 0;
  $scope.number = 0;
  $scope.operation = null;
  $scope.nextNumber = null;
  $scope.pendingValue = null;
  $scope.lastOperation = null;
  $scope.numberArr =[];
  $scope.firstSetArr = [];
  $scope.operation = null;
  $scope.ready = 0;


$scope.updateOutput = function(btn) {
  $scope.numberArr.push(btn);
  // console.log($scope.numberArr)
  $scope.ready = $scope.numberArr.join('');
  // console.log(ready);
  $scope.output = $scope.ready;
  // $scope.firstSetArr.push(ready);
  // console.log(ready);
}

$scope.updateOperation = function(btn) {

  $scope.firstSetArr.push($scope.ready);
  console.log($scope.firstSetArr);
  $scope.ready = 0;
  $scope.numberArr =[];
  console.log($scope.numberArr);
  $scope.operation = btn;
}

$scope.calculate = function(){

  $scope.firstSetArr.push($scope.ready);
  console.log($scope.firstSetArr);
  $scope.ready = '';
  $scope.numberArr =[];
  console.log($scope.numberArr);
  console.log($scope.operation);

  if ($scope.operation === '+'){
    $scope.number = Number($scope.firstSetArr[0]) + Number($scope.firstSetArr[1]);
    console.log($scope.number);
    $scope.output = $scope.number;
  }

  else if($scope.operation === '-'){
    $scope.number = Number($scope.firstSetArr[0]) - Number($scope.firstSetArr[1]);
    console.log($scope.number);
    $scope.output = $scope.number;
  }

  else if($scope.operation === '*'){
    $scope.number = Number($scope.firstSetArr[0]) * Number($scope.firstSetArr[1]);
    console.log($scope.number);
    $scope.output = $scope.number;
  }

  else if($scope.operation === '/'){
    $scope.number = Number($scope.firstSetArr[0]) / Number($scope.firstSetArr[1]);
    console.log($scope.number);
    $scope.output = $scope.number;
  }

}






























  // $scope.updateOutput = function(btn) {
  //   if($scope.output == "0" || $scope.newNumber) {
  //     $scope.output = btn;
  //     $scope.newNumber = false;
  //   } else {
  //       $scope.output += String(btn);
  //   }
  //   $scope.pendingValue = toNumber($scope.output);
  // };

  // $scope.add = function() {
  //   if($scope.pendingValue) {
  //     if($scope.runningTotal && $scope.pendingOperation == ADD ) {
  //       $scope.runningTotal += $scope.pendingValue;
  //     } else if($scope.runningTotal && $scope.pendingOperation == SUBTRACT ) {
  //       $scope.runningTotal -= $scope.pendingValue;
  //     }
  //     else {
  //       $scope.runningTotal = $scope.pendingValue;
  //     }
  //   }
  //   setOperationToken(ADD);
  //   setOutput(String($scope.runningTotal));
  //   $scope.pendingOperation = ADD;
  //   $scope.newNumber = true;
  //   $scope.pendingValue = null;
  // };

  //   $scope.subtract = function() {
  //   if($scope.pendingValue) {
  //     if($scope.runningTotal && ($scope.pendingOperation == SUBTRACT) ) {
  //       $scope.runningTotal -= $scope.pendingValue;
  //     } else if($scope.runningTotal && $scope.pendingOperation == ADD ) {
  //       $scope.runningTotal += $scope.pendingValue;
  //     } else {
  //       $scope.runningTotal = $scope.pendingValue;
  //     }
  //   }
  //   setOperationToken(SUBTRACT);
  //   setOutput(String($scope.runningTotal));
  //   $scope.pendingOperation = SUBTRACT;
  //   $scope.newNumber = true;
  //   $scope.pendingValue = null;
  // };













}]);


