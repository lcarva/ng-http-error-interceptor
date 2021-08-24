# Deprecated

This repository is no longer maintained.

# ng-http-error-interceptor
Trigger events on any response error for Angular.

Manual
------
This interceptor broadcasts two events upon error responses:
- `http-error` - triggered regardless of HTTP response status code.

```javascript
    $rootScope.$on('http-error', function(response) {
      // Executes on every HTTP response error.
    });
```

- `http-error-XXX` - triggered only if HTTP response status code matches XXX (404, 500, etc).

```javascript
    $rootScope.$on('http-error-403', function(response) {
      // Executes on every HTTP response that errors due to a 403 status code.
    });
```

To bypass interceptor, set `httpErrorInterceptor` flag to false.

```javascript
    $http.get('/spam', { httpErrorInterceptor: false });
```

Examples
--------
See [specs](https://github.com/lcarva/ng-http-error-interceptor/blob/master/spec/ng-http-error-interceptor-spec.js) for usage example.
