angular.module('ntt.TreeDnD')
    .factory(
    '$TreeDnDPlugin',['$injector', function ($injector) {
        var _fnget = function (name) {
                if (window.TreeDnD.IsDefined($injector) && $injector.has(name)) {
                    return $injector.get(name);
                }
                return null;
            };
        return _fnget;
    }]
);