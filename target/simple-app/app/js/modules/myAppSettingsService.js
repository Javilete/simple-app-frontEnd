define(
    function(){

        var myAppSettingsService = function($http, $q){
            var getSettings =  function(){
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8089/settings?name=Javier Rubio'
                });
            };


            var updateSettings = function(settings){
                var d = $q.defer();
                $http({
                    method: 'PUT',
                    url: 'http://localhost:8089/settings/',
                    data: settings
                }).success(function(data, status, header){
                    d.resolve(data);
                }).error(function(data, status, header){
                    d.reject(data);
                })
            }

            return {
                getSettings: getSettings,
                updateSettings: updateSettings
            };

        }

        myAppSettingsService.$inject = ['$http', '$q'];

        return myAppSettingsService;
    }
)
