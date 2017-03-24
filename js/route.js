(function(){
    var app = angular.module('sfdbApp', ['ngRoute', 'cusServices']);

    app.controller('ManageObjController', ['$scope', 'webServiceFactory', 'progressService',
                                           function($scope, webServiceFactory, progressService){
    	
    	$scope.loadData = function(){
    		$scope.objs = webServiceFactory.getObjectsService(function(d){
            	$scope.svcErr = true;
            });
        	
        	$scope.objs.$promise.then(function (response) {
        		$scope.objs = response;
        		$scope.countA = $scope.objs.length;
            $scope.countP = 0;
            $scope.countC = 0;
        		$scope.countS = 0; 
                calcCount($scope);
            });
    	}
    	$scope.$on('reloadData', $scope.loadData);
    	$scope.loadData();
    	$scope.selecta = {all : false,};
//      $scope.objs = res1;
        
        $scope.selectAll = function(){
        	var c=0;          
        	angular.forEach($scope.objs, function(obj){ 
				if(!obj.createSfObject){
					obj.checkbox = $scope.selecta.all;
        			$scope.selecta.all ? c++ : 0;
				}
        		
        		});
        	$scope.countS = c;
        }
        
        $scope.saveObjects = function(){
        	var progress = progressService.progressData;
        	progress.progressText = 'Calculating objects..';
        	progressService.openModal();
        	var dataArr = [];
        	angular.forEach($scope.objs, function(obj){ 
        		if(obj.checkbox && !obj.createSfObject){
        			var data = {};
        			data.objectName = obj.sfObjectName;
        			dataArr.push(data);
        		}        		
        	});
        	
        	progress.progressText = 'Creating tables..';
        	progress.max = dataArr.length;
        	progress.successArr = [];
        	progress.failedArr = [];
        	
        	angular.forEach(dataArr, function(data){
        		webServiceFactory.createTableService(data, function(d){
        			progress.successArr.push(data.objectName);
        			progress.count++;
        			closeModalWin(progress);
        		},function(d){        			        			
        			progress.failedArr.push(data.objectName);
        			progress.count++;
        			closeModalWin(progress);
        		});
        	});
        	
        	$scope.inProgress = false;
        }
        
        $scope.updateSaveCount = function(e){
        	e ? $scope.countS++ : $scope.countS--;
        }
        
    }]);
    
    app.controller('SyncController', [ '$scope', 'progressService', 'webServiceFactory', 
                                       function($scope, progressService, webServiceFactory){
    	
    	$scope.svcErr = false;
    	$scope.tables = webServiceFactory.getDifferenceService(function(d){
        	$scope.svcErr = true;
        	console.log('SyncController' +d);
        });
        $scope.tables = $scope.tables.$promise.then(function(response){
        	$scope.isComplete = true;
        	$scope.tables = parseResp(response);
        });
        $scope.isCollapse = true;
        
        $scope.syncObject = function(table, diff){
        	var progress = progressService.progressData;
        	progressService.openModal();
        	var data = {};
        	if(diff){
        		data.objectName = table;
        		data.alterFields = diff.join('~');
        		webServiceFactory.alterTableResource(data, function(d){
        			progress.sText = 'Completed!';
        			progress.progressText = 'Completed Updating : ' + data.objectName;        			
        			progress.complete = true;
        		}, function(d){
        			progress.sText = 'Completed!';
        			progress.progressText = 'Failed Updating : ' + data.objectName;        			
        			progress.complete = true;
        		});
        	}else{
    			data.objectName = table;
    			webServiceFactory.createTableService(data, function(d){
	    				progress.sText = 'Completed!';
	        			progress.progressText = 'Completed creating : ' + data.objectName;        			
	        			progress.complete = true;
	        		},function(d){ 
	        			progress.sText = 'Completed!';
	        			progress.progressText = 'Failed creating : ' + data.objectName;        			
	        			progress.complete = true;
	        		});
        	}
        }
        
        $scope.syncAllObject = function(){
        	progressService.openModal();
        	var progress = progressService.progressData;
        	progress.max = $scope.tables.difference.length;
        	progress.successArr = [];
        	progress.failedArr = [];
        	angular.forEach($scope.tables.difference, function(table){ 
            	
            	var data = {};
            	var diff = table.missingColumns;
            	if(diff){
            		data.objectName = table.objectName;
            		data.alterFields = diff.join('~');
            		webServiceFactory.alterTableResource(data, function(d){
            			progress.successArr.push(data.objectName);
            			progress.count++;
            			closeModalWin(progress);
            		}, function(d){
            			progress.failedArr.push(data.objectName); 
            			progress.count++;
            			closeModalWin(progress);
            		});
            	}else{
        			data.objectName = table.objectName;
        			webServiceFactory.createTableService(data, function(d){
	        				progress.successArr.push(data.objectName);
	        				progress.count++;
	            			closeModalWin(progress);
    	        		},function(d){ 
    	        			progress.failedArr.push(data.objectName);
    	        			progress.count++;
                			closeModalWin(progress);
    	        		});
            	}     		
        	});
        }
        
        $scope.syncData = function(){
        	progressService.openModal();
        	var progress = progressService.progressData;
        	webServiceFactory.syncDataService(function(){
        		progress.sText = 'Completed!';
    			progress.progressText = 'Successfully requested data sync';        			
    			progress.complete = true;
				progress.refresh = false;
        	},function(){
        		progress.sText = 'Completed!';
    			progress.progressText = 'Data sync request failed.';        			
    			progress.complete = true;
				progress.refresh = false;
        	});
        }
        
    }]);
    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
    
    app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './html/manage.html',
            controller : 'ManageObjController'
        })
        .when('/synchronize', {
            templateUrl : './html/synchronize.html',
            controller : 'SyncController'
        });
    });
    app.directive('topNav', function(){
        return {
            templateUrl: './html/nav.html'
        };
    });
	app.directive('diHref', ['$location', '$route',
        function($location, $route) {
    return function(scope, element, attrs) {
        scope.$watch('diHref', function() {
            if(attrs.diHref) {
                element.attr('href', attrs.diHref);
                element.bind('click', function(event) {
                    scope.$apply(function(){
						var p = $location.path().replace('#', '').replace('/','');
						var hr = attrs.diHref.replace('#', '').replace('/','');

						console.log(p, '--', hr)
                        if(p == hr) $route.reload();
                    });
                });
            }
        });
    }
}]);
    
//    app.directive('progress', function(){
//        return {
//            templateUrl: './html/progress.html'
//        };
//    });

    app.directive('footerCts', function(){
        return {
            templateUrl: './html/footer.html'
        };
    });
    
})();

function calcCount($scope){
	angular.forEach($scope.objs, function(obj){
		if(!obj.createSfObject){
			$scope.countP++;
		}else{
			$scope.countC++;
		}
	});
}

function parseResp(data){
  var res = {};
  var fc = 'Field(s) is missing - [', tc = 'Table is missing';
  
  if(!data.Difference){
    res.isDifferent = true;
    var arr = [];
    for(item in data){
      var x = {};
      x.objectName = item;
      if(item.startsWith("$") || item.startsWith("toJSON"))
    	  continue;
      var temp = data[item];
      if(temp == tc){
        x.isMissing=true;
      }else if(temp.indexOf(fc) > -1){
        var cols = [];
        temp = temp.replace(fc, '').replace(']', '');
        x.missingColumns= temp.split(', ');
      }
      arr.push(x);
    }
    res.difference = arr;
  }else{
    res.isDifferent = false;
  }
  return res;
}

function closeModalWin(progress, $scope){
	if(progress.count == progress.max){
		progress.sText = 'Completed!';
		progress.progressText = progress.successArr.length > 0 ? 
				'Success : ' + progress.successArr.join(' || ') :
					'';
		progress.progressText2 = progress.failedArr.length > 0 ?
				'Failed : ' + progress.failedArr.join(' || ') :
					'';
		
		progress.complete = true;
		
	}
}