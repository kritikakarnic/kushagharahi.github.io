module kushame {
    "use strict";

    interface MainControllerScope {
        helloWorld: string;
        resumeUrl: string;
        pogoMapUrl: string;
    }

    class MainController {
        public static $inject = ["$scope", "$sce"];
        constructor($scope: MainControllerScope, $sce: ng.ISCEService) {
          $scope.helloWorld = "NG1 + TypeScript";
          $scope.resumeUrl =
            $sce.trustAsResourceUrl("https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true");
        $scope.pogoMapUrl = $sce.trustAsResourceUrl("http://159.203.176.43:8000");
    }
    }
    app.controller("MainController", MainController);
}
