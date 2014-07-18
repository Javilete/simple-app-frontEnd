require.config({
    baseUrl : 'app/js',
    paths: {
        'jquery': 'vendor/jquery',
        'angular' : 'vendor/angular',
        'angularUiRouter' : 'vendor/angular-ui-router',

        'myApp': 'modules/myAppModule'
    },

    shim: {
       'angular': {
            exports: 'angular'
       },
       'angularUiRouter': {
           deps: ['angular'],
           exports: 'angular'
       }
    },

    priority: ['angular']
});

require([
    'jquery',
    'angular',
    'angularUiRouter',
//    'angular-ui-router',

    'modules/myAppModule'
    ],

    function ($, angular) {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });
    });

