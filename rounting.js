var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/tab1", {
            templateUrl : "tab1.html",
            controller: "tab1Controller"
        })
        .when("/tab2", {
            templateUrl : "tab2.html",
            controller: "tab2Controller"
        })
        .when("/tab3", {
            templateUrl : "tab3.html",
            controller: "tab3Controller"
        });
});
app.controller("tab1Controller", function($scope){
    $scope.list = [
        {name: "Show All", type: ""},
        {name: "Images", type: "image"},
        {name: "Text", type: "text"},
        {name: "Videos", type: "video"},
        ];

    $scope.items = [

        {name: "image1.jpg", type: "image"},
        {name: "image2.png", type: "image"},
        {name: "tex1.txt", type: "text"},
        {name: "text2.txt", type: "text"},
        {name: "video1.mp4", type: "video"},
        {name: "video2.wav", type: "video"},
    ];
    

  });
app.controller("tab2Controller", function($scope){
    $scope.imageList = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
    $scope.imgShow = 'images/image1.jpg';

    $scope.clickMe = function(itm){
        $scope.imgShow = $scope.imageList[itm];
    }

});
app.controller("tab3Controller", function($scope){
    $scope.newItem = ["Get your self BIMMER", "Lol", "Lmao", "RoFL"];

    $scope.addItem = function () {
        if($scope.getText)
            var itemName = $scope.getText;
            $scope.newItem.pop();
            $scope.newItem.unshift(itemName);
        $scope.getText = "";
    };
});