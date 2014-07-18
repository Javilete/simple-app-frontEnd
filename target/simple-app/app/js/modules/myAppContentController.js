define(
    function(){

        var myAppContentController = function($scope, $rootScope, mailService){
            $scope.showingReply = false;
            $scope.reply = {};

            $scope.toggleReplyForm = function(){
                $scope.showingReply = !$scope.showingReply;
                $scope.reply = {};
                $scope.reply.to = $scope.selectedMail.from;
                $scope.reply.content = "\n\n ------------------------\n\n" + $scope.selectedMail.content;
                $scope.reply.subject = $scope.selectedMail.subject;
                $scope.reply.from = $scope.selectedMail.from;
                $scope.reply.date = new Date();
            }

            $scope.sendReply = function(){
                $scope.showingReply = false;
                $rootScope.loading = true;
                mailService.sendMail($scope.reply)
                    .then(function(status){
                        $rootScope.loading = false;
                    }, function(err){
                        $rootScope.loading = false;
                    });
            }

            $scope.$watch('selectedMail', function(evnt){
                $scope.showingReply = false;
                $scope.reply = {};
            })
        }

        myAppContentController.$inject = ['$scope', '$rootScope', 'myAppMailService'];

        return myAppContentController;
    }
)