app.controller('SoundCtrl', function($scope, $log, $sce) {
    $scope.sound = null;

    $scope.playSound = function(sound) {
        $scope.sound = sound;
    }

    $scope.getSoundFileName = function() {
        $log.debug("s1");
        if ($scope.sound) {
            var fname = "sound/" + $scope.sound + ".wav";
            fname = $sce.trustAsResourceUrl(fname);
            $log.debug("Sound:" + fname);
            return fname;
        }
        return null;
    }
});


