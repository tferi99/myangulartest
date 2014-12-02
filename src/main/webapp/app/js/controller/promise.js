app.controller('PromiseCtrl', function($scope, $q, $timeout, $log) {
    $scope.waitTime1 = 2;
    $scope.processing1 = false;
    $scope.result1 = 10;
    
    $scope.waitTime2 = 5;
    $scope.processing2 = false;
    $scope.result2 = '';
    $scope.promise2Progress = 0;
    
    $scope.createAndCallPromise1 = function() {
        $scope.processing1 = true;

        var promise = createPromise1($scope.result1, $scope.waitTime1);
        promise.then(function(value) {
            $scope.result1 = value;
            $scope.processing1 = false;
        })
    }

    $scope.createAndCallPromise2 = function() {
        $scope.promise2Progress = 0;
        $scope.processing2 = true;
        $scope.result2 = '';

        var promise = createPromise2($scope.waitTime2);
        promise.then(function(value) {
            // success
            $scope.result2 = "Completed: " + value;
            $scope.processing2 = false;
        }, function(reason) {
            // error
            $scope.result2 = reason;
            $scope.processing2 = false;
        }, function(processed) {
            // notify
            $scope.promise2Progress = processed;
        });
    }


    function createPromise1(num, waitSecs)
    {
        var deferred = $q.defer();

        setTimeout(function() {
            deferred.notify('Processed:' + num);
            num++;
            deferred.resolve(num);
            //deferred.reject('Error');
        }, waitSecs * 1000);

        return deferred.promise;
    }

    function createPromise2(waitSecs)
    {
        var deferred = $q.defer();

        setTimeout(function() {
            doAnythingForSecs(deferred, waitSecs, -1);
        }, 10);

        return deferred.promise;
    }

    function doAnythingForSecs(deferred, waitSecs, current)
    {
        $log.debug("Starting processing promise2");

        if (current < waitSecs) {
            /*if (current == 3) {
                deferred.reject("Menj a picsaba");
            }*/

            current++;
            $log.debug("Processing: " + current);
            deferred.notify(current);

            setTimeout(function() {
                doAnythingForSecs(deferred, waitSecs, current)
            }, 1000);
        }
        else {
            deferred.resolve(waitSecs);
        }
    }
});

