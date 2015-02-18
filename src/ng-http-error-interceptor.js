/*global angular:true */

/**
 * @license HTTP Error Interceptor for Angular.
 * (c) 2015 Luiz Carvalho
 * License: MIT
 */
(function () {
  'use strict';

  angular.module('ng-http-error-interceptor', [])

  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(['$rootScope', '$q', function($rootScope, $q) {
      return {
        responseError: function(rejection) {
          if (rejection.config.httpErrorInterceptor !== false) {
            $rootScope.$broadcast('http-error-' + rejection.status, rejection);
          }
          return $q.reject(rejection);
        }
      };
    }]);
  }]);

})();
