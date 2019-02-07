var myApp = angular.module('myApp', []);

var controllers = {};

controllers.myController = function($scope)
{
    $scope.data = [
        {
            imag: 'imag/imag1.png', 
            title: 'Card 1', 
            content: 'a',
            href: '#',
            action: 'This is a link' 
        },
        {
            imag: 'imag/imag2.png', 
            title: 'Card 2', 
            content: 'dxxxxxxxxxxxx',
            href: '#',
            action: 'This is a link' 
        },
        {
            imag: 'imag/imag3.png', 
            title: 'Card 3', 
            content: 'c',
            href: '#',
            action: 'This is a link' 
        }
    ];
}

myApp.controller(controllers);