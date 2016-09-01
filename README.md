# ngRoles
angularjs module for handling roles.

#install
```
bower install ng-roles --save
```

#using
## set the user role
you need to till the ngRoles the user role
#### from controller
```
yourApp.controller('LoginCtrl', function(rolesService){
  rolesService.setUserRole('admin');
});
```

#### or from the run function
```
yourApp.run(function(rolesService){
  rolesService.setUserRole('admin');
});
```

## Features
check the user role
```
var isAdmin = rolesService.is('admin');
```
if the user is one of...
```
var isAdmin = rolesService.hasAny(['admin', 'super-admin']);
```

### Directive
the elemet will be shown only if the user has the role(s)
```
<button ng-roles="admin" >Add User</button>
```

if the user has one of this roles
```
<button ng-roles="admin,super-admin" >Add User</button>
```
