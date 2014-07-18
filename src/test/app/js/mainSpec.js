
        describe("Testing the main js module, ", function () {


            var scope;

            //Data
            var email = {
                name: "Javier"
            };

            var deferred1, deferred2;
            var q;

            //mocks
            var settingsServiceMock;

            beforeEach(module("myApp"));

            function instantiateHomeController() {
                inject(function ($rootScope, $controller) {
                    scope = $rootScope.$new();
                    scope.selectedMail = {};

                    homeController = $controller('HomeController', {
                        $scope: scope
                    });
                })
            }

            function instantiateSettingsController() {
                inject(function ($rootScope, $controller, $q) {
                    scope = $rootScope.$new();
                    scope.selectedMail = {};

                    settingsServiceMock = {
                        getSettings: function () {
                            return this;
                        },

                        updateSettings: function () {
                            return this;
                        }
                    }

                    q = $q;
                    deferred1 = q.defer();
                    deferred2 = q.defer();

                    spyOn(settingsServiceMock, 'getSettings').andReturn(deferred1.promise);
                    spyOn(settingsServiceMock, 'updateSettings').andReturn(deferred2.promise);

                    spyOn(deferred1.promise, 'success').andCallThrough();
                    spyOn(deferred2.promise, 'then').andCallThrough();

                    settingsController = $controller('SettingsController', {
                        $scope: scope,
                        settingsService: settingsServiceMock
                    });
                })
            }

            describe("in HomeController, when setSelectedMail is clicked", function () {
                beforeEach(function () {
                    instantiateHomeController();
                    scope.setSelectedMail(email);
                })

                it("set the email passed to the current", function () {
                    expect(scope.selectedMail).toEqual(email);
                })
            })

            describe("in SettingsController, when it is initialized", function () {
                beforeEach(function () {
                    instantiateSettingsController();
                })

                it("should have called getSettings", function () {
                    expect(settingsServiceMock.getSettings).toHaveBeenCalled();
                })
            })
        })

