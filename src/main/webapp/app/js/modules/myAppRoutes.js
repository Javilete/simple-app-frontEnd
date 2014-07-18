define(
    function(){

        var myAppRoutes = function($stateProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        '':{
                            templateUrl: 'app/templates/home.tpl.html',
                            controller: 'myAppHomeController'
                        },
                        'emailContent@home': {
                            templateUrl: 'app/templates/emailContent.tpl.html',
                            controller: 'myAppContentController'
                        },
                        'listingBar@home': {
                            templateUrl: 'app/templates/listingBar.tpl.html',
                            controller: 'myAppMailListingController'
                        }
                    }
                })
                .state('settings', {
                    url: '/settings',
                    templateUrl: 'app/templates/settings.tpl.html',
                    controller: 'myAppSettingsController'
                })

        }

         myAppRoutes.$inject = ['$stateProvider', '$locationProvider'];

         return myAppRoutes;
    }
)