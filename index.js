var myApp = angular.module("myModule", []);
var myController = function ($scope) {
    $scope.todos = [];
    $scope.index = 0;
    $scope.clearIndex = 0;
    $scope.addOrEdit = 'add';
    $scope.newTodo = '';
    $scope.message="Enter The task"
    $scope.addTodo = function (type) {
        if ($scope.newTodo == '') {
            return window.alert("Please Enter the itmes");
        }




        if (type == 'add') {
    
            
            $scope.todos.push({ id: $scope.todos.length + 1, title: $scope.newTodo, done: false });
        }
        else if (type == 'edit') {
            $scope.todos.forEach(element => {
                if (element.id == $scope.index) {
                    element.title = $scope.newTodo;
                    $scope.message="Enter The Task";
                }
            })
        }
        $scope.addOrEdit = 'add'

        $scope.newTodo = '';

    };


    $scope.clearTodo = function (j) {
        console.log(j);
        $scope.todos.forEach(element => {
            if (element.id == j) {
                element.done = true;
    
        }
        $scope.todos = $scope.todos.filter(function (item) {
            console.log(!item.done);
            return !item.done;
        })
    })
};

$scope.editTodo = function (i) {
    console.log('here');
    console.log(i);
    $scope.index = i;
    $scope.addOrEdit = "edit";
    $scope.message = "Edit  your items";
    $scope.todos.forEach(element => {
        if (element.id == $scope.index) {
            $scope.newTodo = element.title;
        
        }
    })

}


        // $scope.newTodo=$scope.todos[i].newTodo;
        // $scope.index=i;

    
};

myApp.controller("myController", myController);
