define(
    function(){

        var myAppMailListingController = function($scope, mailService){
            $scope.emailList=[];

            mailService.getMail()
                .success(function(data, status, headers){
                    $scope.emailList = data.data;
                }).error(function(data, status, headers){

                });

            //$scope.emailList = Mails.query();

            /* $http.jsonp('http://localhost:8080/email/all?callback=myCallback')
             .success(function(data, status){
             $scope.emailList = data;
             })
             .error(function(response){
             alert(response);
             });*/
        }

        myAppMailListingController.$inject = ['$scope', 'myAppMailService'];

        return myAppMailListingController;
    }
)