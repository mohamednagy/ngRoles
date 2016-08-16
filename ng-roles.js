angular.module('ngRoles', []).provider('ngRoles', function(){

  this.allRoles = [];

  this.$get = function(rolesService){
    rolesService.setAllRoles(this.allRoles);
    return rolesService;
  };

}).service('rolesService',[function(){

  this.allRoles = [];
  this.userRole = null;

  this.setAllRoles = function(allRoles){
    this.allRoles = allRoles;
  };

  this.setUserRole = function(role){
    this.userRole = role;
  };

  this.is = function(role){
    return this.userRole === role;
  };

  this.hasAny = function(roles){
    for (var i = 0; i < roles.length; i++) {
      if(roles[i] === this.userRole){
        return true;
      }
    }
    return false;
  };

}]).directive('ngRoles', ['rolesService',function(rolesService){
  return {
    restrict: "A",
    link: function(scope, element, attrs){
      var roles = attrs.ngRoles || "";
      roles = roles.split(',');
      var hasRoles = rolesService.hasAny(roles);
      if(!hasRoles){
        angular.element(element).remove();
      }
    }
  };
}]);
