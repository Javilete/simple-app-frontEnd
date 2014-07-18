define(
    function() {

        var myAppSettingsController = function ($scope, settingsService) {

            $scope.settings = {};

            settingsService.getSettings()
                .success(function (data, status, headers) {
                    $scope.settings = data.data;
                }).error(function (data, status, headers) {

                });

            $scope.updateSettings = function () {
                console.log("Update settings");
                settingsService.updateSettings($scope.settings)
                    .then(function (status) {
                        console.log(status);
                    }, function (err) {
                        console.log(err)
                    });
            }
        }

        myAppSettingsController.$inject = ['$scope', 'myAppSettingsService'];

        return myAppSettingsController;
    }
)