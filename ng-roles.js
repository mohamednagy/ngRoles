angular.module('ngRoles', []).provider('ngRoles', function(){

  this.roles = [];

  this.$get = function(rolesService){
    rolesService.setAllRoles(this.roles);
    return rolesService;
  };

}).service('rolesService',[function(){

  this.roles = [];
  this.userRole = null;

  this.setAllRoles = function(roles){
    this.roles = roles;
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
