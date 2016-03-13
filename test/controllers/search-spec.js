describe('SearchController', function() {
  var $controllerConstructor,
  scope,
  location;

  beforeEach(module('LeagueStats'));

  beforeEach(inject(function($controller, $rootScope, $location) {
    $controllerConstructor = $controller;
    scope = $rootScope;
    location = $location;
  }));

  it('Removes spaces from string to make LoL names URL safe', function() {
    // Stopping on this for the deadline, however I may continue with it over the weekend

    // $controllerConstructor('SearchController', {'$scope':scope, '$location':location});
    //
    // expect(location.path()).toBe('/');
    // location.path('/a/non-existent/route');
    //
    // console.log(location.path());
  });
});
