var kushame;!function(e){"use strict";e.app=angular.module("app",["ngRoute"])}(kushame||(kushame={}));var kushame;!function(e){"use strict";function t(e,t){e.when("/",{controller:"MainController",routeName:"Home",templateUrl:"views/home.html"}).when("/resume",{controller:"MainController",routeName:"Resume",templateUrl:"views/resume.html"}).when("/projects",{controller:"ProjectsController",routeName:"Projects",templateUrl:"views/projects.html"}).when("/contact",{controller:"ContactController",routeName:"Contact",templateUrl:"views/contact.html"}).otherwise({redirectTo:"/"})}t.$inject=["$routeProvider"],e.app.config(t)}(kushame||(kushame={}));var kushame;!function(e){"use strict";var t=function(){function e(e){this.$scope=e}return e.$inject=["$scope","$route","$location"],e}();e.app.controller("ContactController",t)}(kushame||(kushame={}));var kushame;!function(e){"use strict";var t=function(){function e(e,t,o){this.$scope=e,this.$route=t,this.$location=o,e.mobileMenu=!1,e.pageTitle=t.routes[o.url()].routeName,e.$watch(function(){return o.url()},function(){e.pageTitle=t.routes[o.url()].routeName,e.mobileMenu&&(e.mobileMenu=!e.mobileMenu)}),e.isActive=function(e){return e===o.url()}}return e.$inject=["$scope","$route","$location"],e}();e.app.controller("HomeController",t)}(kushame||(kushame={}));var kushame;!function(e){"use strict";var t=function(){function e(e,t){var o="https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true";e.resumeUrl=t.trustAsResourceUrl(o)}return e.$inject=["$scope","$sce"],e}();e.app.controller("MainController",t)}(kushame||(kushame={}));var kushame;!function(e){"use strict";var t=function(){function e(e,t,o){t.get("/models/projects.json").then(function(t){e.projects=t.data},function(t){e.errMessage=t})}return e.$inject=["$scope","$http","$location"],e}();e.app.controller("ProjectsController",t)}(kushame||(kushame={}));var kushame;!function(e){"use strict";var t=function(){function e(){this.template='<a href="{{Link}}" target="_blank" rel="noopener"><img ng-src="{{ImgLink}}"                            ng-mouseover="SetHover(true)" ng-mouseleave="SetHover(false)" class="socialIcon"/></a>',this.restrict="E",this.scope={socialIconName:"@",link:"@"},e.prototype.link=function(e,t,o){var n="./res/img/social/"+o.socialIconName;e.ImgLink=n+".png",e.Link=o.link,e.SetHover=function(t){t===!0?e.ImgLink=n+"-hover.png":e.ImgLink=n+".png"}}}return e.Factory=function(){return new e},e}();angular.module("app").directive("socialIcon",t.Factory)}(kushame||(kushame={}));