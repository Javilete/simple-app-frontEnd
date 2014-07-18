define(
    function() {

        var myAppEmailListingDirective = function () {
            return {
                restrict: 'EA', //Element, Attribute, Class or comMent
                replace: false, //Whether it replaces the current element where the directive is or not
                scope: {
                    email: '=', //accept an object as a parameter two-way data binding
                    action: '&', //accept a function as a parameter one-way data binding(getter)
                    shouldUseGravater: '@' //accept a string as a parameter
                },
                templateUrl: '/app/templates/emailListing.tpl.html',
                controller: ['$scope', '$element', '$attrs', '$transclude',
                    function ($scope, $element, $attrs, $transclude) {

                        $scope.handleClick = function () {
                            $scope.action({selectedMail: $scope.email});//Passing an object, assign the value from the isolated scope defined
                        }

                    }
                ]
            }
        }

        myAppEmailListingDirective.$inject = [];

        return myAppEmailListingDirective;
    }
)