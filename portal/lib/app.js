var myApp = angular.module('app', ["ui.router","ngMaterial"])
            			 .directive('backImg', function(){
            				    return function(scope, element, attrs){
            				        var url = attrs.backImg;
            				        element.css({
            				            'background-image': 'url(' + url +')',
            				        });
            				    };
            				})
                   .config(function($stateProvider,$urlRouterProvider) {
                   	   $urlRouterProvider.otherwise("addnode");
                   	   $stateProvider
                   	       .state("services",{
                   	       	   url:"/services",
                   	       	   templateUrl: "html/services.html",
                   	       	   controller: "servicesController"
                   	       })
                           .state("myservices",{
                               url:"/myservices",
                               templateUrl: "html/myservices.html",
                               controller: "myservicesController"
                           })
                           .state("depolyment",{
                               url:"/depolyment:appname",
                               templateUrl: "html/depolyment.html",
                               controller: "depolymentController"
                           })  
                   	       .state("servicedetail",{
                   	       	   url:"/services/:id",
                   	       	   templateUrl: "html/servicedetail.html",
                   	       	   controller: "servicedetailController"
                   	       }) 
                   	       .state("hosts",{
                   	           url:"/hosts",
                   	       	   templateUrl: "html/hosts.html",
                   	       	   controller: "hostsController"
                   	       }) 
                   	       .state("network",{
                   	       	   url:"/network",
                   	       	   templateUrl: "html/network.html",
                   	       	   controller: "networkController"
                   	       }) 
                   	       .state("storage",{
                   	       	   url:"/storage",
                   	       	   templateUrl: "html/storage.html",
                   	       	   controller: "storageController"
                   	       }) 
                   	       .state("users",{
                   	       	   url:"/users",
                   	       	   templateUrl: "html/users.html",
                   	       	   controller: "usersController"
                   	       })
                   	       .state("userdetail",{
                   	       	   url:"/users/:id",
                   	       	   templateUrl: "html/userdetail.html",
                   	       	   controller: "userdetailController"
                   	       })
                           .state("jobdetail",{
                               url:"/jobs/:id",
                               templateUrl: "html/jobdetail.html",
                               controller: "jobdetailController"
                           })
                           .state("vmdetail",{
                               url:"/vm/:vmid",
                               templateUrl: "html/vmdetail.html",
                               controller: "vmdetailController"
                           })
                           .state("addnode",{
                               url:"/addnode",
                               templateUrl: "html/addnode.html",
                               controller: "addnodeController"
                           })
                   	     
                   })
                   .controller('menuController',function($scope,$mdSidenav){
                        
                        $scope.toggleList   = toggleUsersList;
                        function toggleUsersList() {
                          $mdSidenav('left').toggle();
                        }


                        $scope.menus = [{
                                          name: '智能云商店',
                                          url:'addnode',
                                          avatar: 'shopping_cart',
                                          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
                                        },
                                        {
                                          name: '我的云应用',
                                          url:'myservices',
                                          avatar: 'view_module',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云主机',
                                          url:'hosts',
                                          avatar: 'computer',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云网络',
                                          url:'network',
                                          avatar: 'group_work',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云存储',
                                          url:'storage',
                                          avatar: 'view_module',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云账户',
                                          url:'users',
                                          avatar: 'supervisor_account',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        }];
                        $scope.menus2 = [{
                                          name: '智能云商店',
                                          url:'services',
                                          avatar: 'computer',
                                          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
                                        },
                                        {
                                          name: '我的云应用',
                                          url:'myservices',
                                          avatar: 'computer',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云主机',
                                          url:'hosts',
                                          avatar: 'computer',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云网络',
                                          url:'network',
                                          avatar: 'work',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云存储',
                                          url:'storage',
                                          avatar: 'work',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        },
                                        {
                                          name: '智能云账户',
                                          url:'users',
                                          avatar: 'group',
                                          content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
                                        }];
                   })
                   .controller('backgroudController', function($scope){
                   	    $scope.imgurl = "../images/cisco-logo.png";                   	
                   })
                   .controller('hostsController', function($scope,$http){
                   	    $scope.message = ""; 
                        var reqheaders = {"Accept":"application/json","Content-Type":"application/json"}; 

                        $http({
                          method:"GET",
                          url:'/ucsd/app/api/rest?formatType=json&opName=userAPIGetTabularReport&opData={param0:"1",param1:"vcenter5126",param2:"VMS-T0"}',                           
                          headers: reqheaders
                        }).then(function(response) {
                          $scope.vms = response.data.serviceResult.rows;
                          },function(reason) {
                          $scope.message = reason.data;
                        });

                        $scope.poweron = function (vmid) {
                            $http({
                                    method:"GET",
                                    url:"/ucsd/app/api/rest?formatType=json&opName=userAPIExecuteVMAction&opData={param0:" + vmid + ",param1:'powerOn',param2:'poweron'}",                         
                                    headers: reqheaders
                                  }).then(function(response) {
                                    $scope.message = "打开虚机:  " + vmid;
                                  },function(reason) {
                                    $scope.error = reason.data;
                                  });
                        } 

                        $scope.poweroff = function (vmid) {
                            $http({
                                    method:"GET",
                                    url:"/ucsd/app/api/rest?formatType=json&opName=userAPIExecuteVMAction&opData={param0:" + vmid + ",param1:'powerOff',param2:'powerOff'}",                         
                                    headers: reqheaders
                                  }).then(function(response) {
                                    $scope.message = "关闭虚机:  " + vmid;
                                  },function(reason) {
                                    $scope.error = reason.data;
                                  });
                        } 
                                         	
                   })
                   .controller('networkController', function($scope){
                   	    $scope.message = "network page";                   	
                   })
                   .controller('storageController', function($scope){
                   	    $scope.message = "storage page";                   	
                   })
                   .controller('userdetailController', function($scope,$stateParams,$http,$log){
                   	    $scope.message = "user detail page";  
                   	    var reqheaders = {"Accept":"application/json","Content-Type":"application/json","Authorization":"Basic " + "Y2xpcXJhZG1pbjozOTMzNzhDOTFCRDk4Q0VG"};
                   	    $http({
                   	    	method:"GET",
                   	    	url:"/cliqr/v1/users/" + $stateParams.id,                   	    	
                   	    	headers: reqheaders
                   	    }).then(function(response) {
                   	    	$scope.user = response.data;
                            // $log.info(response.data);
                   	    },function(reason) {
                   	    	$scope.error = reason.data;
                   	    	// $log.info(reason.data);
                   	    });
                   })
                   .controller('usersController', function($scope,$http,$log,$state,$rootScope){
                   	    $scope.message = "users page";
                   	    var reqheaders = {"Accept":"application/json","Content-Type":"application/json","Authorization":"Basic " + "Y2xpcXJhZG1pbjozOTMzNzhDOTFCRDk4Q0VG"};
                   	    // $http({
                   	    // 	method: "GET",
                   	    // 	url:"/cliqr/v1/users",                   	    	
                   	    // 	headers: reqheaders
                   	    // }).then(function(response) {
                   	    // 	$scope.users = response.data.users;
                        //     // $log.info(response.data);
                   	    // },function(reason) {
                   	    // 	$scope.error = reason.data;
                   	    // 	// $log.info(reason.data);
                   	    // });

                        $scope.users = [{
                                "id": "2",
                                "resource": "http://10.63.51.32:443/cliqr/v1/users/2",
                                "username": "cliqradmin",
                                "password": "== red-acted ==",
                                "enabled": true,
                                "type": "TENANT",
                                "firstName": "Cliqr",
                                "lastName": "Admin",
                                "companyName": "Cliqr",
                                "tenantId": "1",
                                "emailAddr": "admin@cliqrtech.com",
                                "emailVerified": true,
                                "phoneNumber": null,
                                "externalId": null,
                                "accessKeys": "http://10.63.51.32:443/cliqr/v1/users/2/keys",
                                "disableReason": null,
                                "accountSource": null,
                                "status": "ENABLED",
                                "detail": null,
                                "activationData": null,
                                "created": 1453326938000,
                                "lastUpdated": 1453327203000,
                                "coAdmin": false,
                                "tenantAdmin": true,
                                "activationProfileId": null,
                                "hasSubscriptionPlanType": false
                            }];

          					    $scope.reloadData=function(){
          					    	$state.forceReload();
          					    }
                   })
                   .controller('servicesController', function($scope,$http,$log,$state,$rootScope){
                   	    $scope.message = "";

                        var reqheaders = {"Accept":"application/json","Content-Type":"application/json","Authorization":"Basic " + "Y2xpcXJhZG1pbjozOTMzNzhDOTFCRDk4Q0VG"}; 
                        
                        $http({
                          method: "GET",
                          url:"/cliqr/v1/apps",                          
                          headers: reqheaders
                        }).then(function(response) {
                          $scope.services = response.data.apps;
                            // $log.info(response.data);
                        },function(reason) {
                          $scope.error = reason.data;
                          // $log.info(reason.data);
                        });
                         
                        $scope.staticservices = [{
                                          name: 'redis',
                                          url:'aa',
                                          icon: 'images/png/redis.png',
                                          category:'Cache Servers'
                                        },
                                        // {
                                        //   name: 'memcached',
                                        //   url:'aa',
                                        //   icon: 'images/png/memcached.png',
                                        //   category:'Cache Servers'
                                        // },
                                        {
                                          name: 'mongo',
                                          url:'aa',
                                          icon: 'images/png/mongo.png',
                                          category:'Database Servers'
                                        },
                                        {
                                          name: 'mysql',
                                          url:'aa',
                                          icon: 'images/png/mysql.png',
                                          category:'Database Servers'
                                        },
                                        {
                                          name: 'mariadb',
                                          url:'aa',
                                          icon: 'images/png/mariadb.png',
                                          category:'Database Servers'
                                        },
                                        {
                                          name: 'tomcat',
                                          url:'aa',
                                          icon: 'images/png/tomcat.png',
                                          category:'Application Servers'
                                        },
                                        {
                                          name: 'glassfish',
                                          url:'aa',
                                          icon: 'images/png/glassfish.png',
                                          category:'Application Servers'
                                        },
                                        {
                                          name: 'rabbitmq',
                                          url:'aa',
                                          icon: 'images/png/rabbitmq.png',
                                          category:'Messaging Servers'
                                        },
                                        {
                                          name: 'docker',
                                          url:'aa',
                                          icon: 'images/png/docker.png',
                                          category:'Container Service'
                                        }];
                   })
                   .controller('servicedetailController', function($scope,$stateParams,$http,$log){
                   	    $scope.message = "service detail page";  

                   	    var reqheaders = {"Accept":"application/json","Content-Type":"application/json","Authorization":"Basic " + "Y2xpcXJhZG1pbjozOTMzNzhDOTFCRDk4Q0VG"};
                   	    $http({
                   	    	method:"GET",
                   	    	url:"/cliqr/v1/apps/" + $stateParams.id,                   	    	
                   	    	headers: reqheaders
                   	    }).then(function(response) {
                   	    	$scope.service = response.data;
                            // $log.info(response.data);
                   	    },function(reason) {
                   	    	$scope.error = reason.data;
                   	    	// $log.info(reason.data);
                   	    });
                   })
                   .controller('myservicesController', function($scope,$state,$http,$log){
                        $scope.message = "";  
                        $scope.refresh = function () {
                          $state.reload();
                        }

                        var reqheaders = {"Accept":"application/json","Content-Type":"application/json","Authorization":"Basic " + "Y2xpcXJhZG1pbjozOTMzNzhDOTFCRDk4Q0VG"};
                        $http({
                          method:"GET",
                          url:"/cliqr/v1/jobs/",                          
                          headers: reqheaders
                        }).then(function(response) {
                          $scope.deployments = response.data;
                            // $log.info(response.data);
                        },function(reason) {
                          $scope.error = reason.data;
                          // $log.info(reason.data);
                        });

                        $scope.stopService = function (depolyment) {
                            $http({
                                    method:"DELETE",
                                    url:"/cliqr/v2/jobs/"+ depolyment.id + "?hide=true",                         
                                    headers: reqheaders
                                  }).then(function(response) {
                                    $scope.message = "已提交终止任务,ID:  " + response.data.id;
                                      // $log.info(response.data);
                                    // $scope.message = depolyment.id;
                                  },function(reason) {
                                    $scope.error = reason.data;
                                    // $log.info(reason.data);
                                    // $scope.message = depolyment.id;
                                  });
                          // $scope.message = "reloadmessage";
                          // $state.reload();
                        } 
                        
                   })
                   .controller('depolymentController', function($scope,$stateParams,$mdDialog,$http){
                        $scope.reqmessage = "reqmessage"; 
                        $scope.resmessage = "";                        
                        $scope.selectnetwork = "";  
                        $scope.selectedcloud = false;
                        $scope.appname = $stateParams.appname;

                        var reqheaders = {"Accept":"application/json","Content-Type":"application/json","Authorization":"Basic " + "Y2xpcXJhZG1pbjozOTMzNzhDOTFCRDk4Q0VG"}; 
 
                        $scope.createNum = function () {
                          getNum();
                        };
                        
                        var getNum = function () {
                          var num = Math.random();
                          num = Math.ceil(num * 10000);
                          return num;                     
                        }

                        
                        var postWordpressvmware = {
                                      "appId": "29",
                                      "appVersion": "1",
                                      "metadatas": [],
                                      "environmentId": "1",
                                      "tagIds": [],
                                      "policyIds": null,
                                      "preventTermination": false,
                                      "parameters": {
                                              "appParams": [],
                                              "cloudParams": {
                                                      "cloudRegionId": "1",
                                                      "accountId": "1"
                                              }
                                      },
                                      "jobs": [
                                              {
                                                      "tierId": "30",
                                                      "policyIds": null,
                                                      "tagIds": [],
                                                      "securityProfileIds": [],
                                                      "parameters": {
                                                              "appParams": [
                                                                      {
                                                                              "name": "referredJob",
                                                                              "value": ""
                                                                      },
                                                                      {
                                                                              "name": "TestParam",
                                                                              "value": "This is a test parameter"
                                                                      }
                                                              ],
                                                              "cloudParams": {
                                                                      "cloudRegionId": "1",
                                                                      "accountId": "1",
                                                                      "volumes": [],
                                                                      "networkTypeName": "PoC-Shanghai-ACI-Network-77",
                                                                      "cloudProperties": [
                                                                              {
                                                                                      "name": "FullClone",
                                                                                      "value": "false"
                                                                              },
                                                                              {
                                                                                      "name": "RootDiskResizeConfig",
                                                                                      "value": "false"
                                                                              },
                                                                              {
                                                                                      "name": "UserDatastoreCluster",
                                                                                      "value": ""
                                                                              },
                                                                              {
                                                                                      "name": "UserDataCenterName",
                                                                                      "value": "DC"
                                                                              },
                                                                              {
                                                                                      "name": "UserClusterName",
                                                                                      "value": "cluster01"
                                                                              },
                                                                              {
                                                                                      "name": "UserResourcePoolName",
                                                                                      "value": "resource pool1"
                                                                              },
                                                                              {
                                                                                      "name": "UserTargetDeploymentFolder",
                                                                                      "value": "/CliqrCreatedVM"
                                                                              }
                                                                      ],
                                                                      "instance": "Small"
                                                              }
                                                      },
                                                      "numNodesToLaunch": 1
                                              },
                                              {
                                                      "tierId": "31",
                                                      "policyIds": null,
                                                      "tagIds": [],
                                                      "securityProfileIds": [],
                                                      "parameters": {
                                                              "appParams": [
                                                                      {
                                                                              "name": "referredJob",
                                                                              "value": ""
                                                                      }
                                                              ],
                                                              "cloudParams": {
                                                                      "cloudRegionId": "1",
                                                                      "accountId": "1",
                                                                      "volumes": [],
                                                                      "networkTypeName": "PoC-Shanghai-ACI-Network-77",
                                                                      "cloudProperties": [
                                                                              {
                                                                                      "name": "FullClone",
                                                                                      "value": "false"
                                                                              },
                                                                              {
                                                                                      "name": "RootDiskResizeConfig",
                                                                                      "value": "false"
                                                                              },
                                                                              {
                                                                                      "name": "UserDatastoreCluster",
                                                                                      "value": ""
                                                                              },
                                                                              {
                                                                                      "name": "UserDataCenterName",
                                                                                      "value": "DC"
                                                                              },
                                                                              {
                                                                                      "name": "UserClusterName",
                                                                                      "value": "cluster01"
                                                                              },
                                                                              {
                                                                                      "name": "UserResourcePoolName",
                                                                                      "value": "resource pool1"
                                                                              },
                                                                              {
                                                                                      "name": "UserTargetDeploymentFolder",
                                                                                      "value": "/CliqrCreatedVM"
                                                                              }
                                                                      ],
                                                                      "instance": "Small"
                                                              }
                                                      }
                                              }
                                      ]};
                        var postWordpressaws = {
                              "appId": "38",
                              "appVersion": "1",
                              "metadatas": [],
                              "environmentId": "3",
                              "tagIds": [],
                              "policyIds": null,
                              "preventTermination": false,
                              "parameters": {
                                      "appParams": [],
                                      "cloudParams": {
                                              "cloudRegionId": "5",
                                              "accountId": "3"
                                      }
                              },
                              "jobs": [
                                      {
                                              "tierId": "39",
                                              "policyIds": null,
                                              "tagIds": [],
                                              "securityProfileIds": [],
                                              "parameters": {
                                                      "appParams": [
                                                              {
                                                                      "name": "referredJob",
                                                                      "value": ""
                                                              },
                                                              {
                                                                      "name": "TestParam",
                                                                      "value": "This is a test parameter"
                                                              }
                                                      ],
                                                      "cloudParams": {
                                                              "cloudRegionId": "5",
                                                              "accountId": "3",
                                                              "volumes": [],
                                                              "networkTypeName": "PoC_AWS_Public",
                                                              "cloudProperties": [],
                                                              "instance": "t2.micro"
                                                      }
                                              },
                                              "numNodesToLaunch": 1
                                      },
                                      {
                                              "tierId": "40",
                                              "policyIds": null,
                                              "tagIds": [],
                                              "securityProfileIds": [],
                                              "parameters": {
                                                      "appParams": [
                                                              {
                                                                      "name": "referredJob",
                                                                      "value": ""
                                                              }
                                                      ],
                                                      "cloudParams": {
                                                              "cloudRegionId": "5",
                                                              "accountId": "3",
                                                              "volumes": [],
                                                              "networkTypeName": "PoC_AWS_Public",
                                                              "cloudProperties": [],
                                                              "instance": "t2.micro"
                                                      }
                                              }
                                      }
                              ]};
                        var postWordpressopenstack = {
                              "appId": "29",
                              "appVersion": "1",
                              "metadatas": [],
                              "environmentId": "2",
                              "tagIds": [],
                              "policyIds": null,
                              "preventTermination": false,
                              "parameters": {
                                      "appParams": [],
                                      "cloudParams": {
                                              "cloudRegionId": "2",
                                              "accountId": "2"
                                      }
                              },
                              "jobs": [
                                      {
                                              "tierId": "30",
                                              "policyIds": null,
                                              "tagIds": [],
                                              "securityProfileIds": [],
                                              "parameters": {
                                                      "appParams": [
                                                              {
                                                                      "name": "referredJob",
                                                                      "value": ""
                                                              },
                                                              {
                                                                      "name": "TestParam",
                                                                      "value": "This is a test parameter"
                                                              }
                                                      ],
                                                      "cloudParams": {
                                                              "cloudRegionId": "2",
                                                              "accountId": "2",
                                                              "volumes": [],
                                                              "networkTypeName": "PoCLab-Shanghai-Openstack74-Floating",
                                                              "cloudProperties": [
                                                                      {
                                                                              "name": "provisionInAvailabilitySet",
                                                                              "value": ""
                                                                      },
                                                                      {
                                                                              "name": "availabilitySet",
                                                                              "value": ""
                                                                      },
                                                                      {
                                                                              "name": "TenantName",
                                                                              "value": "admin"
                                                                      }
                                                              ],
                                                              "instance": "3"
                                                      }
                                              },
                                              "numNodesToLaunch": 1
                                      },
                                      {
                                              "tierId": "31",
                                              "policyIds": null,
                                              "tagIds": [],
                                              "securityProfileIds": [],
                                              "parameters": {
                                                      "appParams": [
                                                              {
                                                                      "name": "referredJob",
                                                                      "value": ""
                                                              }
                                                      ],
                                                      "cloudParams": {
                                                              "cloudRegionId": "2",
                                                              "accountId": "2",
                                                              "volumes": [],
                                                              "networkTypeName": "PoCLab-Shanghai-Openstack74-Floating",
                                                              "cloudProperties": [
                                                                      {
                                                                              "name": "provisionInAvailabilitySet",
                                                                              "value": ""
                                                                      },
                                                                      {
                                                                              "name": "availabilitySet",
                                                                              "value": ""
                                                                      },
                                                                      {
                                                                              "name": "TenantName",
                                                                              "value": "admin"
                                                                      }
                                                              ],
                                                              "instance": "3"
                                                      }
                                              }
                                      }
                              ]};
                        var postWordpresseasystack = {
                            "appId": "43",
                            "appVersion": "1",
                            "metadatas": [],
                            "environmentId": "9",
                            "tagIds": [],
                            "policyIds": null,
                            "preventTermination": false,
                            "parameters": {
                                    "appParams": [],
                                    "cloudParams": {
                                            "cloudRegionId": "6",
                                            "accountId": "5"
                                    }
                            },
                            "jobs": [
                                    {
                                            "tierId": "44",
                                            "policyIds": null,
                                            "tagIds": [],
                                            "securityProfileIds": [],
                                            "parameters": {
                                                    "appParams": [
                                                            {
                                                                    "name": "referredJob",
                                                                    "value": ""
                                                            },
                                                            {
                                                                    "name": "TestParam",
                                                                    "value": "This is a test parameter"
                                                            }
                                                    ],
                                                    "cloudParams": {
                                                            "cloudRegionId": "6",
                                                            "accountId": "5",
                                                            "volumes": [],
                                                            "networkTypeName": "PublicNet-172",
                                                            "cloudProperties": [
                                                                    {
                                                                            "name": "provisionInAvailabilitySet",
                                                                            "value": ""
                                                                    },
                                                                    {
                                                                            "name": "availabilitySet",
                                                                            "value": ""
                                                                    },
                                                                    {
                                                                            "name": "TenantName",
                                                                            "value": "Default"
                                                                    }
                                                            ],
                                                            "instance": "11"
                                                    }
                                            },
                                            "numNodesToLaunch": 1
                                    },
                                    {
                                            "tierId": "45",
                                            "policyIds": null,
                                            "tagIds": [],
                                            "securityProfileIds": [],
                                            "parameters": {
                                                    "appParams": [
                                                            {
                                                                    "name": "referredJob",
                                                                    "value": ""
                                                            }
                                                    ],
                                                    "cloudParams": {
                                                            "cloudRegionId": "6",
                                                            "accountId": "5",
                                                            "volumes": [],
                                                            "networkTypeName": "PublicNet-172",
                                                            "cloudProperties": [
                                                                    {
                                                                            "name": "provisionInAvailabilitySet",
                                                                            "value": ""
                                                                    },
                                                                    {
                                                                            "name": "availabilitySet",
                                                                            "value": ""
                                                                    },
                                                                    {
                                                                            "name": "TenantName",
                                                                            "value": "Default"
                                                                    }
                                                            ],
                                                            "instance": "11"
                                                    }
                                            }
                                    }
                              ]};
                        var postCentOS7vmware = {
                                        "appId": "36",
                                        "appVersion": "7.2",
                                        "metadatas": [],
                                        "environmentId": "1",
                                        "tagIds": [],
                                        "policyIds": null,
                                        "preventTermination": false,
                                        "parameters": {
                                                "appParams": [],
                                                "cloudParams": {
                                                        "cloudRegionId": "1",
                                                        "accountId": "1"
                                                }
                                        },
                                        "jobs": [
                                                {
                                                        "tierId": "37",
                                                        "policyIds": null,
                                                        "tagIds": [],
                                                        "securityProfileIds": [],
                                                        "parameters": {
                                                                "appParams": [
                                                                        {
                                                                                "name": "referredJob",
                                                                                "value": ""
                                                                        }
                                                                ],
                                                                "cloudParams": {
                                                                        "cloudRegionId": "1",
                                                                        "accountId": "1",
                                                                        "volumes": [],
                                                                        "networkTypeName": "PoC-Shanghai-ACI-Network-77",
                                                                        "cloudProperties": [
                                                                                {
                                                                                        "name": "FullClone",
                                                                                        "value": "false"
                                                                                },
                                                                                {
                                                                                        "name": "RootDiskResizeConfig",
                                                                                        "value": "false"
                                                                                },
                                                                                {
                                                                                        "name": "UserDatastoreCluster",
                                                                                        "value": ""
                                                                                },
                                                                                {
                                                                                        "name": "UserDataCenterName",
                                                                                        "value": "DC"
                                                                                },
                                                                                {
                                                                                        "name": "UserClusterName",
                                                                                        "value": "cluster01"
                                                                                },
                                                                                {
                                                                                        "name": "UserResourcePoolName",
                                                                                        "value": "resource pool1"
                                                                                },
                                                                                {
                                                                                        "name": "UserTargetDeploymentFolder",
                                                                                        "value": "/CliqrCreatedVM"
                                                                                }
                                                                        ],
                                                                        "instance": "Small"
                                                                }
                                                        },
                                                        "numNodesToLaunch": 1
                                                }
                                        ]};
                        var postCentOS7aws = {
                              "appId": "36",
                              "appVersion": "7.2",
                              "metadatas": [],
                              "environmentId": "3",
                              "tagIds": [],
                              "policyIds": null,
                              "preventTermination": false,
                              "parameters": {
                                      "appParams": [],
                                      "cloudParams": {
                                              "cloudRegionId": "5",
                                              "accountId": "3"
                                      }
                              },
                              "jobs": [
                                      {
                                              "tierId": "37",
                                              "policyIds": null,
                                              "tagIds": [],
                                              "securityProfileIds": [],
                                              "parameters": {
                                                      "appParams": [
                                                              {
                                                                      "name": "referredJob",
                                                                      "value": ""
                                                              }
                                                      ],
                                                      "cloudParams": {
                                                              "cloudRegionId": "5",
                                                              "accountId": "3",
                                                              "volumes": [],
                                                              "networkTypeName": "PoC_AWS_Public",
                                                              "cloudProperties": [],
                                                              "instance": "t2.micro"
                                                      }
                                              },
                                              "numNodesToLaunch": 1
                                      }
                              ]};
                        var postCentOS7easystack = {
                            "appId": "36",
                            "appVersion": "7.2",
                            "metadatas": [],
                            "environmentId": "9",
                            "tagIds": [],
                            "policyIds": null,
                            "preventTermination": false,
                            "parameters": {
                                    "appParams": [],
                                    "cloudParams": {
                                            "cloudRegionId": "6",
                                            "accountId": "5"
                                    }
                            },
                            "jobs": [
                                    {
                                            "tierId": "37",
                                            "policyIds": null,
                                            "tagIds": [],
                                            "securityProfileIds": [],
                                            "parameters": {
                                                    "appParams": [
                                                            {
                                                                    "name": "referredJob",
                                                                    "value": ""
                                                            }
                                                    ],
                                                    "cloudParams": {
                                                            "cloudRegionId": "6",
                                                            "accountId": "5",
                                                            "volumes": [],
                                                            "networkTypeName": "PublicNet-172",
                                                            "cloudProperties": [
                                                                    {
                                                                            "name": "provisionInAvailabilitySet",
                                                                            "value": ""
                                                                    },
                                                                    {
                                                                            "name": "availabilitySet",
                                                                            "value": ""
                                                                    },
                                                                    {
                                                                            "name": "TenantName",
                                                                            "value": "Default"
                                                                    }
                                                            ],
                                                            "instance": "11"
                                                    }
                                            },
                                            "numNodesToLaunch": 1
                                    }
                            ]};
                        var postCentOS7openstack = {
                              "appId": "36",
                              "appVersion": "7.2",
                              "metadatas": [],
                              "environmentId": "2",
                              "tagIds": [],
                              "policyIds": null,
                              "preventTermination": false,
                              "parameters": {
                                      "appParams": [],
                                      "cloudParams": {
                                              "cloudRegionId": "2",
                                              "accountId": "2"
                                      }
                              },
                              "jobs": [
                                      {
                                              "tierId": "37",
                                              "policyIds": null,
                                              "tagIds": [],
                                              "securityProfileIds": [],
                                              "parameters": {
                                                      "appParams": [
                                                              {
                                                                      "name": "referredJob",
                                                                      "value": ""
                                                              }
                                                      ],
                                                      "cloudParams": {
                                                              "cloudRegionId": "2",
                                                              "accountId": "2",
                                                              "volumes": [],
                                                              "networkTypeName": "PoCLab-Shanghai-Openstack74-Floating",
                                                              "cloudProperties": [
                                                                      {
                                                                              "name": "provisionInAvailabilitySet",
                                                                              "value": ""
                                                                      },
                                                                      {
                                                                              "name": "availabilitySet",
                                                                              "value": ""
                                                                      },
                                                                      {
                                                                              "name": "TenantName",
                                                                              "value": "admin"
                                                                      }
                                                              ],
                                                              "instance": "3"
                                                      }
                                              },
                                              "numNodesToLaunch": 1
                                      }
                              ]};
                        var postjson = {
                                        "appId": "29",
                                        "appVersion": "1",
                                        // "name": "test" + getNum(),
                                        "metadatas": [],
                                        "environmentId": "1",
                                        "tagIds": [],
                                        "policyIds": null,
                                        "preventTermination": false,
                                        "parameters": {
                                                "appParams": [],
                                                "cloudParams": {
                                                        "cloudRegionId": "1",
                                                        "accountId": "1"
                                                }
                                        },
                                        "jobs": [
                                                {
                                                        "tierId": "30",
                                                        "policyIds": null,
                                                        "tagIds": [],
                                                        "securityProfileIds": [],
                                                        "parameters": {
                                                                "appParams": [
                                                                        {
                                                                                "name": "referredJob",
                                                                                "value": ""
                                                                        }
                                                                ],
                                                                "cloudParams": {
                                                                        "cloudRegionId": "1",
                                                                        "accountId": "1",
                                                                        "volumes": [],
                                                                        "cloudProperties": [
                                                                                {
                                                                                        "name": "FullClone",
                                                                                        "value": "false"
                                                                                },
                                                                                {
                                                                                        "name": "RootDiskResizeConfig",
                                                                                        "value": "false"
                                                                                },
                                                                                {
                                                                                        "name": "UserDatastoreCluster",
                                                                                        "value": ""
                                                                                },
                                                                                {
                                                                                        "name": "UserDataCenterName",
                                                                                        "value": "datacenter01"
                                                                                },
                                                                                {
                                                                                        "name": "UserClusterName",
                                                                                        "value": "cluster01"
                                                                                },
                                                                                {
                                                                                        "name": "UserResourcePoolName",
                                                                                        "value": ""
                                                                                },
                                                                                {
                                                                                        "name": "UserTargetDeploymentFolder",
                                                                                        "value": ""
                                                                                }
                                                                        ],
                                                                        "nics": [
                                                                                {
                                                                                        "order": 1,
                                                                                        "id": "VM Network",
                                                                                        "type": "NETWORK"
                                                                                }
                                                                        ],
                                                                        "instance": "m"
                                                                }
                                                        },
                                                        "numNodesToLaunch": 1
                                                }
                                        ]
                              };

                         $scope.setPost = function (cloudname) {
                            if (cloudname == "vmware" ) {
                              if ($scope.appname == "Wordpress") {
                                postjson = postWordpressvmware;
                                postjson.name="wordpress_vmware" + getNum();
                              }
                              if ($scope.appname == "CentOS 7") {
                                postjson = postCentOS7vmware;
                                postjson.name="centos7_vmware" + getNum();
                              }
                              $scope.selectnetwork = postjson.jobs[0].parameters.cloudParams.networkTypeName;
                              $scope.selectedcloud = true;
                              // $scope.resmessage = postjson;
                            }
                            if (cloudname == "aws") {
                              if ($scope.appname == "Wordpress") {
                                postjson = postWordpressaws;
                                postjson.name="wordpress_aws" + getNum();
                              }
                              if ($scope.appname == "CentOS 7") {
                                postjson = postCentOS7aws;
                                postjson.name="centos7_aws" + getNum();
                              }
                              $scope.selectnetwork = postjson.jobs[0].parameters.cloudParams.networkTypeName;
                              $scope.selectedcloud = true;
                              // $scope.resmessage = postjson;
                            }
                            if (cloudname == "openstack" ) {
                              if ($scope.appname == "Wordpress") {
                                postjson = postWordpressopenstack;
                                postjson.name="wordpress_openstack" + getNum();
                              }
                              if ($scope.appname == "CentOS 7") {
                                postjson = postCentOS7openstack;
                                postjson.name="centos7_openstack" + getNum();
                              }
                              $scope.selectnetwork = postjson.jobs[0].parameters.cloudParams.networkTypeName;
                              $scope.selectedcloud = true;
                              // $scope.resmessage = postjson;
                            }

                            if (cloudname == "easystack" ) {
                              if ($scope.appname == "Wordpress") {
                                postjson = postWordpresseasystack;
                                postjson.name="wordpress_easystack" + getNum();
                              }
                              if ($scope.appname == "CentOS 7") {
                                postjson = postCentOS7easystack;
                                postjson.name="centos7_easystack" + getNum();
                              }
                              $scope.selectnetwork = postjson.jobs[0].parameters.cloudParams.networkTypeName;
                              $scope.selectedcloud = true;
                              // $scope.resmessage = postjson;
                            }
                           
                         }

                        $scope.postService = function () {
                            // postjson.name="wordpress" + getNum();
                            // $scope.reqmessage = JSON.stringify(reqheaders) + JSON.stringify(postjson);
                           
                            $scope.reqmessage = postjson;
                            $http({
                              method:"POST",
                              url:"/cliqr/v2/jobs",                           
                              headers: reqheaders,
                              data: postjson
                            }).then(function(response) {
                              $scope.resmessage = "已提交部署：" + response.data.name;
                              },function(reason) {
                              $scope.resmessage = reason.data;
                            });
                            $scope.selectedcloud = false;

                        }                         
                   })
                   .controller('jobdetailController', function($scope,$stateParams,$http,$log){
                        $scope.message = "";  

                        var reqheaders = {"Accept":"application/json","Content-Type":"application/json","Authorization":"Basic " + "Y2xpcXJhZG1pbjozOTMzNzhDOTFCRDk4Q0VG"};
                        $http({
                          method:"GET",
                          url:"/cliqr/v1/jobs/" + $stateParams.id,                          
                          headers: reqheaders
                        }).then(function(response) {
                          $scope.jobjson = response.data;
                            // $log.info(response.data);
                        },function(reason) {
                          $scope.error = reason.data;
                          // $log.info(reason.data);
                        });

                   })  
                   .controller('vmdetailController', function($scope,$stateParams,$http,$log){
                        $scope.message = ""; 
                        $scope.vmdetail = ""; 
                      
                        var reqheaders = {"Accept":"application/json","Content-Type":"application/json"};
                        $http({
                          method:"GET",
                          url:"/ucsd/app/api/rest?formatType=json&opName=userAPIGetTabularReport&opData={param0:'3',param1:" + $stateParams.vmid + ",param2:'DETAILS-V1298'}",                          
                          headers: reqheaders
                        }).then(function(response) {
                          $scope.vmdetail = response.data.serviceResult.rows;
                            // $log.info(response.data);
                        },function(reason) {
                          $scope.error = reason.data;
                          // $log.info(reason.data);
                        });

                   })  

                   	.controller('addnodeController', function($scope,$http){                                                                      //for ng-repeat interaction, if for ng-option, refer to previous version
        //final request body
                $scope.nTier={
            		"appId": "",
                	"appVersion": "",
            		"name": "",
                    "metadatas": [],
                    "environmentId": "",
                    "tagIds": [],
                    "policyIds": null,
                    "preventTermination": false,
            		"parameters": {
                		"appParams": [									                                       
                		],
                        "cloudParams": {                                                                                            //all in one cloud scene
                            "cloudRegionId": "",
                            "accountId": ""
                        }
            		},
            		"jobs": [{}]
        		};

        //interact var, mid var
            //for interaction
                $scope.step=1;
                //$scope.tier
                
                $scope.appInfo=new Array(),
                $scope.versionInfo=new Array(),
                $scope.envInfo=new Array(),
                $scope.cloudRegionInfo=new Array(),
                $scope.cloudAccountInfo=new Array(),
                $scope.resInfo=new Array(),
                $scope.dataCenterInfo=new Array(),
                $scope.clusterInfo=new Array();
                $scope.netInfo=new Array();                                                                                                                                                                             
                $scope.instanceInfo=new Array();
            //mid
                var appId;                                                                                      //mid var be array to store each tier?????
                var version;
                         //
                var envId;
                var nCloudRegion;          //
                var cloudRegionId;                                                                              //if deploy on different clouds, set to array!    
                var cloudRegionName;
        		var cloudAccountId;
                var cloudAccountName;
                var dataCenterValue//=new Array();
                var dataCenterName//=new Array();
                var clusterValue//=new Array();
                var clusterName//=new Array();
                var instance;
                var nicId;
                //var jobId;                                                                                    //to view the deployment
                
                var nApps
                var nVersions                                                                                           //not done, n version for each app, same as n regions for each env
                var nTiers                                                                                              //should get num of other params
                var nEnvs
                var nEnv; 
                var nCloudRegions=new Array()       
                var nCloudRegion                    //# of regions in choosen cloudregion 
                var n_CloudRegion                   //sequence of the choosen cloudregion 
                //var nCloudAccounts    
                var nDCs
                var nClusters
                var nInstances
                var nNets

        //temp request body
                var reqHeaders={
                    "accept":"application/json",
                    "content-Type":"application/json",
                    "authorization":"Basic Y2xpcXJhZG1pbjpBNDk1MThFQzgzNTRERTJB"
                };                                                                                                                                                                                                                  
                $scope.getAppList=function(){
                    $http({
                        method:"GET",
                        url:"/cliqr/v1/apps",
                        //url:"poc_app_list.json",
                        //url:"app_list.json",
                        headers: reqHeaders
                    }).then(function(response){
                        //console.log(response);
                        nApps=response.data.apps.length
                        //console.log(nApps)
                        for(i=0; i<nApps; i++){                                                                                        
                            $scope.appInfo[i]={
                                "id": "",
                                "name": "",
                                "versions": "",
                                "imgUrl": ""
                            };
                            $scope.appInfo[i].id=response.data.apps[i].id;
                            $scope.appInfo[i].name=response.data.apps[i].name;
                            $scope.appInfo[i].versions=response.data.apps[i].versions;
                            angular.merge($scope.appInfo, $scope.appInfo)
                        }
                        $scope.appInfo[0].imgUrl="images/centos.png"
                        $scope.appInfo[1].imgUrl="images/Cisco FindIT_Manager.png"
                        $scope.appInfo[2].imgUrl="images/wordpress.png"
                        $scope.appInfo[3].imgUrl="images/wordpress.png"
                        $scope.appInfo[4].imgUrl="images/wordpress.png"
                        //console.log($scope.appInfo)                                                                                     
                    })
                };
                $scope.getAppDetail=function(){
                    $http({
                        method:"GET",
                        url:"/cliqr/v1/apps/"+appId,
                        //url:"poc_app_detail_32.json",     //apache
                        //url:"poc_app_detail_36.json",     //centos
                        //url:"poc_app_detail_29.json",       //wordpress
                        //url:"app_detail.json",
                        headers: reqHeaders
                    }).then(function(response){
                        //console.log(response),
                        nTiers=response.data.serviceTiers.length
                        $scope.tier=nTiers
                        //console.log(nTiers)
                        jobs=new Array();
                        //console.log(jobs);
                        for (i=0; i<nTiers; i++){                                                                                        
                            jobs[i]={
                                "tierId": "",
                                "policyIds": "",
                                "tagIds": "",
                                "securityProfileIds": "",
                                "parameters": {
                                    "appParams": [
                                    {
                                        "name": "referredJob",     //shourtcut
                                        "value": ""
                                    },
                                    /*{                                                                 //option param ~~~~~~~?????
                                        "name": "TestParam",
                                        "value": "This is a test parameter"
                                    }*/
                                    ],
                                    //"appParams":[],               //otherwise                                                               
                                    "cloudParams": {}
                                }
                            };
                            jobs[i].tierId=response.data.serviceTiers[i].id;
                            jobs[i].policyIds=null;
                            jobs[i].tagIds=[];
                            jobs[i].securityProfileIds=[];
                            //jobs[i].parameters.appParams=response.data.serviceTiers[i].parameters.appParams;
                            angular.merge(jobs, jobs)
                        }
                        $scope.resetJob()                         //in case switching between different apps
                        //console.log(jobs)
                        angular.merge($scope.nTier.jobs, jobs)
                    })
                };                                                                                                                                      //can be moved to comfirm step2, as step3
                $scope.getDeployEnvs=function(){
                    $http({
                        method:"GET",
                        url:"/cliqr/v1/environments",
                        //url:"poc_deployment_env.json",
                        //url:"deployment_env.json",
                        headers: reqHeaders
                    }).then(function(response){                                                                                                        
                        //console.log(response.data.deploymentEnvironments);
                        nEnvs=response.data.deploymentEnvironments.length
                        //console.log(nEnvs)
                        for(i=0; i<nEnvs; i++){
                            $scope.envInfo[i]={
                                "id": "",
                                "name": "",
                                "regionId": [],
                                "regionName": [],
                                "cloudAccountId": [],
                                "cloudAccountName": [],
                                "imgUrl": "",
                            };                                                                              //cloudAccount inside region or not???
                            nCloudRegions[i]=response.data.deploymentEnvironments[i].associatedClouds.length
                            for(j=0; j<nCloudRegions[i]; j++){
                                $scope.envInfo[i].regionId[j]=response.data.deploymentEnvironments[i].associatedClouds[j].regionId;                        //one cloud region, one cloud account per env
                                $scope.envInfo[i].regionName[j]=response.data.deploymentEnvironments[i].associatedClouds[j].regionName;
                                $scope.envInfo[i].cloudAccountId[j]=response.data.deploymentEnvironments[i].associatedClouds[j].cloudAccountId;
                                $scope.envInfo[i].cloudAccountName[j]=response.data.deploymentEnvironments[i].associatedClouds[j].cloudAccountName;
                            }
                            $scope.envInfo[i].id=response.data.deploymentEnvironments[i].id;                        
                            $scope.envInfo[i].name=response.data.deploymentEnvironments[i].name
                        }
                        $scope.envInfo[0].imgUrl="images/vmware.png"
                        $scope.envInfo[1].imgUrl="images/openstack.png"
                        $scope.envInfo[2].imgUrl="images/aws.png"
                        $scope.envInfo[3].imgUrl="images/aws.png"
                        $scope.envInfo[4].imgUrl="images/openstack.png"
                        $scope.envInfo[5].imgUrl="images/hybrid.png"             
                        //console.log($scope.envInfo)
                        //console.log(nCloudRegions)
                    })
                };
                $scope.getInstances=function(){
                    $http({
                        method:"GET",
                        url:"/cliqr/v1/tenants/0/clouds/"+cloudAccountId+"/regions/"+cloudRegionId+"/instanceTypes",
                        //url:"poc_instance.json",
                        headers:reqHeaders
                    }).then(function(response){
                        nInstances=response.data.cloudInstanceTypes.length
                        for (i=0; i<nInstances; i++){
                            $scope.instanceInfo[i]={   
                                "instance": "",
                                "imgUrl": ""                                                                                                         
                            }
                            $scope.instanceInfo[i].instance=response.data.cloudInstanceTypes[i].type  
                        }
                        if(cloudRegionId==1 && cloudAccountId==1){                                                          //instance img for different env
                            $scope.instanceInfo[0].imgUrl="images/small.png"
                        }
                        //console.log($scope.instanceInfo)
                    })
                };
                $scope.getCloudConfigs=function(){
                    $scope.instanceInfo=[]
                    $scope.dataCenterInfo=[]
                    $scope.clusterInfo=[]
                    $scope.netInfo=[]                     //in case switching between
                    $http({
                        method:"GET",
                        url:"/cliqr/service/v1/cloudconfig/clouds/"+cloudRegionName+"/cloudAccountId/"+cloudAccountId+"/userCloudProperties/",
                        //url:"poc_cloud_config.json",
                        //url:"cloud_config.json",
                        headers: reqHeaders
                    }).then(function(response){
                        //console.log(response),
                        nDCs=response.data.propertyDefsType.propertyValueConstraintDefs.propertyValueConstraints[0].propertyValueEnum.length
                        //console.log(nDCs)
                        for (i=0; i<nDCs; i++){
                            $scope.resInfo[i]={
                                "dataCenter":{
                                    "name": "",
                                    "value": ""
                                },
                                "clusters":{
                                    "name": "",
                                    "value": ""
                                }
                            }                                                                                                                            //one cluster per dc
                            $scope.resInfo[i].dataCenter.name=response.data.propertyDefsType.propertyValueConstraintDefs.propertyValueConstraints[0].propertyName,
                            $scope.resInfo[i].dataCenter.value=response.data.propertyDefsType.propertyValueConstraintDefs.propertyValueConstraints[0].propertyValueEnum[i].value,
                            $scope.resInfo[i].clusters.name=response.data.propertyDefsType.propertyValueConstraintDefs.propertyValueConstraints[0].propertyValueEnum[i].children.propertyValueConstraints[0].propertyName,
                            $scope.resInfo[i].clusters.value=response.data.propertyDefsType.propertyValueConstraintDefs.propertyValueConstraints[0].propertyValueEnum[i].children.propertyValueConstraints[0].propertyValueEnum[0].value                   
                            
                            /*$scope.instanceTypes[i]={   
                                "instance": ""                                                                                                          
                            }*/                                                                                                                          
                        }
                        //$scope.instanceTypes[0].instance="Small"
                        //$scope.instanceTypes[1].instance="M1" 
                        for (j=0; j<nDCs; j++){                                                                                           //for ng-repeat interaction 
                            $scope.dataCenterInfo[j]={
                                "name": "",
                                "value": ""
                            }
                            $scope.dataCenterInfo[j].name=$scope.resInfo[j].dataCenter.name
                            $scope.dataCenterInfo[j].value=$scope.resInfo[j].dataCenter.value
                        }
                        //console.log($scope.instanceTypes)  
                        //console.log($scope.resInfo)
                        //console.log($scope.dataCenterInfo)
                        //console.log($scope.clusterInfo)
                    })
                };
                $scope.getNetworks=function(){
                    //console.log(envId, cloudRegionId)
                    $scope.netInfo=[]
                    $http({
                        method:"GET",
                        url:"/cliqr/v1/environments",
                        //url:"poc_deployment_env.json",
                        //cliqr 4.7                url:"/cliqr/v2/cloudProperties/"+cloudRegionName+"?propertyTypes=AvailableNetworks&cloudAccount="+cloudRegionId+"&UserDataCenterName="+dataCenterValue,
                        //url:"poc_available_networks.json",
                        //url:"available_networks.json",
                        headers: reqHeaders
                    }).then(function(response){
                        //console.log(cloudRegionName, cloudRegionId, dataCenterValue)
                        //console.log(response.data),
                        /*cliqr 4.7                nNets=response.data.properties[0].propertyValue.properties[0].relatedProperties.length
                        //console.log(nNets)
                        for (i=0; i<nNets; i++){
                            $scope.netInfo[i]={                                                                                         //should be "nic":[] for other attributes
                                "id": ""                                                                                                   
                            }                                                                                                            
                        $scope.netInfo[i].id=response.data.properties[0].propertyValue.properties[0].relatedProperties[i].attributes[1].value
                        }*/
                        //console.log(nEnv, n_CloudRegion)
                        nNetworks=response.data.deploymentEnvironments[nEnv].associatedClouds[n_CloudRegion].networkSettings.length
                        //console.log(nNetworks)
                        for(i=0; i<nNetworks; i++){
                            $scope.netInfo[i]={
                                "networkTypeName": ""
                            }
                            $scope.netInfo[i].networkTypeName=response.data.deploymentEnvironments[nEnv].associatedClouds[n_CloudRegion].networkSettings[i].networkTypeName
                        }
                        //console.log($scope.netInfo)
                    })                                                             
                };

        //user interactive                                                                    
                $scope.application=function(){
                    for(i=0; i<nApps; i++){
                        if ($scope.appInfo.id==$scope.appInfo[i].id) { 
                            $scope.versionInfo=[]
                            for(j=0; j<1; j++){                                                         //2 versions per app                                                                                                         //j=# of versions of certain app profile
                                $scope.versionInfo[j]={
                                "versions": ""
                                };
                                $scope.versionInfo[j].versions=$scope.appInfo[i].versions[j];
                            }
                        }
                    }
                    appId=$scope.appInfo.id
                    //version=$scope.versionInfo.versions                                               //ng-change only once, version can't be assigned here
                    console.log(appId)
                    //console.log($scope.appInfo)
                    //console.log($scope.appInfo.name)                                                  //refer to cloudInfo.name
                    //console.log($scope.versionInfo)
                    //console.log($scope.versionInfo.versions)
                };
                $scope.environment=function(){
                    //console.log($scope.envInfo.id)
                    for(i=0; i<nEnvs; i++){
                        if ($scope.envInfo.id==$scope.envInfo[i].id){
                            $scope.cloudRegionInfo=[]
                            $scope.cloudAccountInfo=[]
                            for(j=0; j<nCloudRegions[i]; j++){                                           
                                $scope.cloudRegionInfo[j]={
                                    "regionId": "",
                                    "regionName": ""
                                }
                                $scope.cloudRegionInfo[j].regionId=$scope.envInfo[i].regionId[j];
                                $scope.cloudRegionInfo[j].regionName=$scope.envInfo[i].regionName[j];
                            } 
                            nCloudRegion=j//nCloudRegions[i]
                            nEnv=i
                            //console.log(nCloudRegions[i])
                            //console.log($scope.cloudRegionInfo)
                        }                                                                                             
                    }
                    envId=$scope.envInfo.id
                    console.log(envId)
                    //console.log(nEnv, nCloudRegion)
                };
                $scope.cloud=function(){
                    //console.log(nCloudRegion)
                    //console.log(envId)
                    //console.log($scope.cloudRegionInfo)
                    for(i=0; i<nCloudRegion; i++){
                        if ($scope.cloudRegionInfo.regionId==$scope.cloudRegionInfo[i].regionId){
                            $scope.cloudAccountInfo[0]={                                                    
                                "cloudAccountId": "",
                                "cloudAccountName": "" 
                            }
                            $scope.cloudAccountInfo[0].cloudAccountId=$scope.envInfo[nEnv].cloudAccountId[i];     
                            $scope.cloudAccountInfo[0].cloudAccountName=$scope.envInfo[nEnv].cloudAccountName[i];
                        }
                        cloudRegionName=$scope.cloudRegionInfo[i].regionName                                //only one account/region (account insde region???), if k/region, another loop
                        n_CloudRegion=i
                    }
                    cloudRegionId=$scope.cloudRegionInfo.regionId,                                          //on the same cloud of the tier
                    cloudAccountId=$scope.cloudAccountInfo.cloudAccountId,
                    cloudAccountName=$scope.cloudAccountInfo[0].cloudAccountName,
                    console.log(cloudRegionId, cloudRegionName, cloudAccountId, cloudAccountName)
                };
                $scope.instance=function(){
                    for(i=0; i<nInstances; i++){
                        if ($scope.instanceInfo.instance==$scope.instanceInfo.instance){
                            //console.log($scope.instanceInfo.instance)                                  //only one instance 
                        };
                    }
                    instance=$scope.instanceInfo.instance
                    console.log(instance)
                };
                //nTier for different dataCenter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~and cluster~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                $scope.resource=function(){                                                               // same as environment! assignment move to interaction functions!!!
                    $scope.clusterInfo=[]
                    //$scope.netInfo=[]                   //in case switching between
                    //console.log($scope.dataCenterInfo.value)                                            //reuse interaction var for nTier, store each tier in mid var
                    for(i=0; i<nDCs; i++){
                        if ($scope.dataCenterInfo.value==$scope.dataCenterInfo[i].value){                 //[i].name are the same!
                            $scope.clusterInfo[0]={                                                       //only one cluster per dc
                                "name": "",
                                "value": ""
                            }
                            $scope.clusterInfo[0].name=$scope.resInfo[i].clusters.name;
                            $scope.clusterInfo[0].value=$scope.resInfo[i].clusters.value;
                        }
                        dataCenterName=$scope.dataCenterInfo[i].name;
                    }
                    dataCenterValue=$scope.dataCenterInfo.value
                    clusterName=$scope.clusterInfo[0].name
                    clusterValue=$scope.clusterInfo[0].value
                    console.log(dataCenterName, dataCenterValue, clusterName, clusterValue)
                    //console.log($scope.clusterInfo.value)                                                
                    //console.log($scope.clusterInfo[0].clusters.name)
                    //console.log($scope.clusterInfo[0].clusters.value)
                };
                $scope.network=function(){
                    for(i=0; i<nNets; i++){
                        if ($scope.netInfo.networkTypeName==$scope.netInfo[i].networkTypeName){
                            //console.log($scope.netInfo.id)
                        }
                    }
                    nicId=$scope.netInfo.networkTypeName
                    console.log(nicId)
                };

                                                                                                                             
        //major functions
                $scope.confirmSettings=function(){
                        switch($scope.step){
                            case 1:
                                $scope.nTier.appId=appId;
                                version=$scope.versionInfo.versions;
                                $scope.nTier.appVersion=version;
                                break;

                            case 2:
                                $scope.nTier.environmentId=envId;                                                        
                                $scope.nTier.parameters.cloudParams.cloudRegionId=cloudRegionId;                    //on the same cloud of the tier
                                $scope.nTier.parameters.cloudParams.accountId=cloudAccountId;
                                break; 
                            case 3:
                                console.log(dataCenterName, dataCenterValue, clusterName, clusterValue, nicId, instance)
                                console.log($scope.nTier)
                                jobs=new Array();
                                for(i=0; i<nTiers; i++){                                                            //*********nTier, seperate for each!
                                    jobs[i]={   
                                        "parameters": {
                                            "appParams": [],
                                            "cloudParams": {
                                                "cloudRegionId": "",
                                                "accountId": "",
                                                "volumes": [],
                                                "networkTypeName": "",                                              //cliqr 4.6 format
                                                //"rootVolumeSize": "0",
                                                "cloudProperties": [
                                                    {
                                                        "name": "FullClone",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "name": "RootDiskResizeConfig",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "name": "UserDatastoreCluster",
                                                        "value": ""
                                                    },
                                                    {
                                                        "name": "",
                                                        "value": ""
                                                    },
                                                    {
                                                        "name": "",
                                                        "value": ""
                                                    },
                                                    {
                                                        "name": "UserResourcePoolName",
                                                        "value": ""
                                                    },
                                                    {
                                                        "name": "UserTargetDeploymentFolder",
                                                        "value": ""
                                                    }],
                                                /*"nics":[{                                                        //cliqr 4.7 format
                                                    "order": 1,
                                                    "id": "",
                                                    "type": "NETWORK"
                                                }],*/
                                                "instance": ""
                                            }
                                        },    
                                        //"numNodesToLaunch": 1                                                    //not all tier needed.......
                                    };
                                    jobs[i].parameters.cloudParams.cloudRegionId=cloudRegionId,                                             
                                    jobs[i].parameters.cloudParams.accountId=cloudAccountId,
                                    jobs[i].parameters.cloudParams.cloudProperties[3].name=dataCenterName,
                                    jobs[i].parameters.cloudParams.cloudProperties[3].value=dataCenterValue,
                                    jobs[i].parameters.cloudParams.cloudProperties[4].name=clusterName,
                                    jobs[i].parameters.cloudParams.cloudProperties[4].value=clusterValue,
                                    jobs[i].parameters.cloudParams.networkTypeName=nicId,
                                    //jobs[i].parameters.cloudParams.nics[0].id=nicId,
                                    jobs[i].parameters.cloudParams.instance=instance,
                                    
                                    angular.merge(jobs, jobs)
                                };
                                //console.log(jobs)   
                                angular.merge($scope.nTier.jobs, jobs);
                                //$scope.resource()
                                //$scope.instance()
                                //$scope.network()
                                break;

                        }
                };
                $scope.submitJob=function(){
                    $scope.confirmSettings();
                    console.log($scope.nTier)
                    $http({
                        method:"POST",
                        //url:"http://10.63.51.42:443/v2/jobs",
                        url:"/cliqr/v2/jobs",
                        headers: reqHeaders,
                        data: $scope.nTier
                    }).then(function(response) {
                                    $scope.message = "    已提交任务,ID:  " + response.data.id + "  名称:" + response.data.name;
                                      // $log.info(response.data);
                                    // $scope.message = depolyment.id;
                                  },function(reason) {
                                    $scope.error = reason.data;
                                    // $log.info(reason.data);
                                    // $scope.message = depolyment.id;
                                  })
                };
                $scope.resetJob=function(){
                    $scope.nTier={
                        "appId": "",
                        "appVersion": "",
                        "name": "",
                        "metadatas": [],
                        "environmentId": "",
                        "tagIds": [],
                        "policyIds": null,
                        "preventTermination": false,
                        "parameters": {
                            "appParams": [],
                            "cloudParams": {
                                "cloudRegionId": "",
                                "accountId": ""
                            }
                        },
                        "jobs": [{}]
                    };
                    //console.log($scope.nTier),
                };
                /*$scope.viewJobs=function(){
                    $http({
                        method:"GET",
                        url:"/cliqr/job/service/get_job_info/"+jobId,
                        headers: reqHeaders
                    }).then(function(response){
                        console.log(response)
                    })              
                };*/

        //other functions
                $scope.nextStep=function(){
                    $scope.confirmSettings();
                    $scope.step++;
                    //console.log($scope.step);
                };
                $scope.previousStep=function(){
                    $scope.step--;
                    //console.log($scope.step);
                }
                $scope.top=function(){
                    $scope.step=1;
                    //console.log($scope.step);
                }     
        	})



                   ;
   
