describe('ng-http-error-interceptor module', function() {

    var $httpBackend,
        $http,
        $rootScope;

    angular.module('myTestApp', ['ng-http-error-interceptor'])

    beforeEach(module('myTestApp'));

    beforeEach(inject(function(_$httpBackend_, _$http_, _$rootScope_) {
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        $rootScope = _$rootScope_;
    }));

    it('triggers error on error', function() {
        var handler = jasmine.createSpy('handler');
        $rootScope.$on('http-error-403', handler);
        $httpBackend.expectGET('/spam').respond(403, '');
        $http.get('/spam');
        $httpBackend.flush();

        expect(handler).toHaveBeenCalled();
    });

    it('honors ignore flag', function() {
        var handler = jasmine.createSpy('handler');
        $rootScope.$on('http-error-403', handler);
        $httpBackend.expectGET('/spam').respond(403, '');
        $http.get('/spam', { httpErrorInterceptor: false });
        $httpBackend.flush();

        expect(handler).not.toHaveBeenCalled();
    })
});