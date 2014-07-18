//var app = angular.module('myApp', ['ngRoute', 'ngResource']);

//app.config(function($routeProvider) {
//	$routeProvider.when('/', {
//		templateUrl: "app/templates/home.tpl.html",
//		controller: 'HomeController'
//	})
//        .when('/settings',{
//            templateUrl: "app/templates/settings.tpl.html",
//            controller: 'SettingsController'
//        })
//	    .otherwise({redirectTo: '/'});
//});
define([
        'angular',
        './myAppRoutes',
        './myAppMailService',
        './myAppSettingsService',
        './myAppHomeController',
        './myAppSettingsController',
        './myAppMailListingController',
        './myAppContentController',
        './myAppEmailListingDirective'
    ],
    function(
        angular,
        myAppRoutes,
        myAppMailService,
        myAppSettingsService,
        myAppHomeController,
        myAppSettingsController,
        myAppMailListingController,
        myAppContentController,
        myAppEmailListingDirective
    ){

        var app = angular.module('myApp', ['ui.router']);

        app.service('myAppMailService', myAppMailService);
        app.service('myAppSettingsService', myAppSettingsService);

        app.controller('myAppHomeController', myAppHomeController);
        app.controller('myAppSettingsController', myAppSettingsController);
        app.controller('myAppMailListingController', myAppMailListingController);
        app.controller('myAppContentController', myAppContentController);

        app.directive('myAppEmailListingDirective', myAppEmailListingDirective);

        app.config(myAppRoutes);









//        app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
//            $locationProvider.html5Mode(true);
//
//            $stateProvider
//                .state('home', {
//                    url: '/home',
//                    views: {
//                        '':{
//                            templateUrl: 'app/templates/home.tpl.html',
//                            controller: 'HomeController'
//                        },
//                        'emailContent@home': {
//                            templateUrl: 'app/templates/emailContent.tpl.html',
//                            controller: 'ContentController'
//                        },
//                        'listingBar@home': {
//                            templateUrl: 'app/templates/listingBar.tpl.html',
//                            controller: 'MailListingController'
//                        }
//                    }
//                })
//                .state('settings', {
//                    url: '/settings',
//                    templateUrl: 'app/templates/settings.tpl.html',
//                    controller: 'SettingsController'
//                })
//        }])

//        app.service('mailService', ['$http', '$q', function($http, $q){
//            var getMail = function(){
//                return $http({
//                    method: 'GET',
//                    url: 'http://localhost:8089/email/all'
//                });
//            };
//
//            var sendMail = function(mail){
//                var d = $q.defer();
//                $http({
//                    method: 'POST',
//                    data: mail,
//                    url: 'http://localhost:8089/email/send'
//                }).success(function(data, status, header){
//                    d.resolve(data);
//                }).error(function(data, status, header){
//                    d.reject(data);
//                })
//
//                return d.promise;
//            }
//
//            return {
//                getMail: getMail,
//                sendMail: sendMail
//            };
//        }]);

        ////Resource service used
        //app.factory('Mails', ['$resource', function($resource){
        //    return $resource('http://localhost:8089/email');
        //}]);

//        app.service('settingsService', ['$http', '$q', function($http, $q){
//
//            var getSettings =  function(){
//                return $http({
//                    method: 'GET',
//                    url: 'http://localhost:8089/settings?name=Javier Rubio'
//                });
//            };
//
//
//            var updateSettings = function(settings){
//                var d = $q.defer();
//                $http({
//                    method: 'PUT',
//                    url: 'http://localhost:8089/settings/',
//                    data: settings
//                }).success(function(data, status, header){
//                    d.resolve(data);
//                }).error(function(data, status, header){
//                    d.reject(data);
//                })
//            }
//
//            return {
//                getSettings: getSettings,
//                updateSettings: updateSettings
//            };
//
//
//        }]);

//        app.directive('emailListing', function(){
//
//            return {
//                restrict: 'EA', //Element, Attribute, Class or comMent
//                replace: false, //Whether it replaces the current element where the directive is or not
//                scope:{
//                    email: '=', //accept an object as a parameter two-way data binding
//                    action: '&', //accept a function as a parameter one-way data binding(getter)
//                    shouldUseGravater: '@' //accept a string as a parameter
//                },
//                templateUrl: '/app/templates/emailListing.tpl.html',
//                controller: ['$scope', '$element', '$attrs', '$transclude',
//                    function($scope, $element, $attrs, $transclude){
//
//                        $scope.handleClick = function(){
//                            $scope.action({selectedMail: $scope.email});//Passing an object, assign the value from the isolated scope defined
//                        }
//
//                    }
//                ]
//            }
//
//        });

//        app.controller('HomeController', function($scope){
//
//            $scope.selectedMail;
//
//            $scope.setSelectedMail = function(mail){
//                $scope.selectedMail = mail;
//            }
//
//            $scope.isSelected = function(mail){
//                if($scope.selectedMail){
//                    return $scope.selectedMail === mail;
//                }
//            }
//
//
//        });

//        app.controller('SettingsController', ['$scope', 'settingsService', function($scope, settingsService){
//            $scope.settings = {
//            };
//
//            settingsService.getSettings()
//                .success(function(data, status, headers){
//                    $scope.settings = data.data;
//                }).error(function(data, status, headers){
//
//                });
//
//            $scope.updateSettings = function(){
//                console.log("Update settings");
//                settingsService.updateSettings($scope.settings)
//                    .then(function(status){
//                        console.log(status);
//                    }, function(err){
//                        console.log(err)
//                    });
//            }
//        }]);


//        app.controller('MailListingController', ['$scope', 'mailService', function($scope, mailService){
//            $scope.emailList=[];
//
//            mailService.getMail()
//                .success(function(data, status, headers){
//                    $scope.emailList = data.data;
//                }).error(function(data, status, headers){
//
//                });

            //$scope.emailList = Mails.query();

            /* $http.jsonp('http://localhost:8080/email/all?callback=myCallback')
             .success(function(data, status){
             $scope.emailList = data;
             })
             .error(function(response){
             alert(response);
             });*/
//        }]);

//        app.controller('ContentController', ['$scope', '$rootScope', 'mailService', function($scope, $rootScope, mailService){
//            $scope.showingReply = false;
//            $scope.reply = {};
//
//            $scope.toggleReplyForm = function(){
//                $scope.showingReply = !$scope.showingReply;
//                $scope.reply = {};
//                $scope.reply.to = $scope.selectedMail.from;
//                $scope.reply.content = "\n\n ------------------------\n\n" + $scope.selectedMail.content;
//                $scope.reply.subject = $scope.selectedMail.subject;
//                $scope.reply.from = $scope.selectedMail.from;
//                $scope.reply.date = new Date();
//            }
//
//            $scope.sendReply = function(){
//                $scope.showingReply = false;
//                $rootScope.loading = true;
//                mailService.sendMail($scope.reply)
//                    .then(function(status){
//                        $rootScope.loading = false;
//                    }, function(err){
//                        $rootScope.loading = false;
//                    });
//            }
//
//            $scope.$watch('selectedMail', function(evnt){
//                $scope.showingReply = false;
//                $scope.reply = {};
//            })
//
//        }]);

    })

