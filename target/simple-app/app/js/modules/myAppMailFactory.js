define(
    function(){

        var myAppMailFactory = function($http, $q){
            var getMail = function(){
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8089/myApp/email/javier14@hotmail.com'
                });
            };

        var sendMail = function(mail){
            var d = $q.defer();
            $http({
                method: 'POST',
                data: mail,
                url: 'http://localhost:8089/myApp/email'
            }).success(function(data, status, header){
                d.resolve(data);
            }).error(function(data, status, header){
                d.reject(data);
            })

            return d.promise;
        }

            return {
                getMail: getMail,
                sendMail: sendMail
            };
    }

        myAppMailFactory.$inject = ['$http', '$q'];

        return myAppMailFactory;

    }
)