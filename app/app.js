var sysadminApp = angular.module("sysAdminApp", [
        'ngRoute', 'ngAnimate',
        'angularytics', 'ui.router',
        'sysAdminAppServices', 'sysAdminAppControllers'
    ], function () {
    })
    .config(['$locationProvider', '$sceDelegateProvider', 'AngularyticsProvider', appCongifuration])
    .config(uiRoutes)
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.interceptors.push('HttpIntercepor');

        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
            for(name in obj) {
                value = obj[name];

                if(value instanceof Array) {
                    for(i=0; i<value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if(value instanceof Object) {
                    for(subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if(value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    }]);

function appCongifuration($locationProvider, $sceDelegateProvider, AngularyticsProvider) {
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
    //$locationProvider.hashPrefix('!');
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://*.mdscjtest.com/**'
        //'https://*.vimeo.com/**',
        //'http://vimeo.com/**',
        //'https://vimeo.com/**',
        //'http://www.youtube-nocookie.com/**',
        //'https://www.youtube-nocookie.com/**',
        //'http://www.youtube.com/**',
        //'https://www.youtube.com/**'
    ]);
}


var sysAdminAppServices = angular.module('sysAdminAppServices', []);
var sysAdminAppControllers = angular.module('sysAdminAppControllers', []);