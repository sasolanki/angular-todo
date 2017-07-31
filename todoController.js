var myapp = angular.module('todoApp', ['ui.sortable']);


myapp.controller('todoController', function ($scope) {
    var tmpList = [];
    $scope.todo = '';
    $scope.todos = ['Learn Python', 'Create todoApp'];
    $scope.completed = ['Walk 10 miles', 'Read a Novel'];

    $scope.sortingLog = [];

    function createOptions(listName) {
        var _listName = listName;
        var options = {
            placeholder: "app",
            connectWith: ".apps-container",
            helper: function (e, item) {
                console.log("list " + _listName + ": helper");
                return item;
            }
        };
        return options;
    }

    $scope.todosOptionsList = [createOptions('A'), createOptions('B')];

    $scope.AddTodo = function () {
        if ($scope.todo != '') {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        }
    }

    $scope.onEnter = function (keyEvent) {
        if (keyEvent.which === 13)
            $scope.AddTodo();
    }
});