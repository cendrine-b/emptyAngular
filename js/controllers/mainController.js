// MAIN CONTROLLER
function mainController($scope) {
    $scope.table = [];

    var line;

    $scope.addRow = function () {
      line = {
        name: $scope.name,
        firstname: $scope.firstname,
        email: $scope.email
      };

      $scope.table.push(line);

      $scope.name = '';
      $scope.firstname = '';
      $scope.email = '';
    };
}
