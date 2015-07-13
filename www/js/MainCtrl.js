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
  $scope.trig = '';


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
  document.getElementById("myBtn").disabled = false;

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


$scope.updateTrig = function(trick){
  $scope.trig = trick;

  if ($scope.trig === 'sin') {
  $scope.output = Math.sin($scope.ready)
};

  if ($scope.trig === 'cos') {
  $scope.output = Math.cos($scope.ready)
};

  if ($scope.trig === 'tan') {
  $scope.output = Math.tan($scope.ready)
};

  if ($scope.trig === 'asin') {
  $scope.output = Math.asin($scope.ready)
};

  if ($scope.trig === 'acos') {
  $scope.output = Math.acos($scope.ready)
};

  if ($scope.trig === 'atan') {
  $scope.output = Math.atan($scope.ready)
};
}

$scope.clear = function(){
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
  $scope.trig = '';
  document.getElementById("myBtn").disabled = false;
};

$scope.square = function(){
  $scope.output = $scope.ready * $scope.ready;
};

$scope.sqrt = function(){
  $scope.output = Math.sqrt($scope.ready)
};

$scope.disable = function(){
  document.getElementById("myBtn").disabled = true;
  console.log('disabled');
}


}]);


