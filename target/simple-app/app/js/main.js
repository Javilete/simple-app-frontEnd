require.config({
    baseUrl : 'app/js',
    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'angular' : 'lib/angular/angular.min',
        'angularUiRouter' : 'lib/angular-ui-router/release/angular-ui-router.min',

        'myApp': 'modules/myAppModule'
    },

    shim: {
       'angular': {
            deps: ['jquery'],
            exports: 'angular'
       },
       'angularUiRouter': ['angular']
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

