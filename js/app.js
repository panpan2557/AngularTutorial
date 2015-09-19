var app = angular.module('application', []);
app.controller('main', function($scope) {
  //Mock the tabs and task
  $scope.tabs = [{name:"Default", tasks:[{name: 'Have Meeting'}], }, {name: 'Work', tasks:[{name: 'Do TSP Document'}]}];
  $scope.addNewTask = function(tab) {
    tab.tasks.push({name:$scope.taskName});
    //clear the input text
    $scope.listName = '';
  };
  $scope.addNewTab = function() {
    $scope.tabs.push({name:$scope.tabName, task:[]});
    //clear the input text
    $scope.tabName = '';
  };
  $scope.deleteTask = function(task, tab) {
    var index = tab.tasks.indexOf(task);
    tab.tasks.splice(index, 1);
  }
  $scope.moveTo = function(otab, tab, task) {
    $scope.deleteTask(task, tab);
    otab.tasks.push(task);
  }
});
