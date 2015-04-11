(function(){

    window['_makeContructor'] = function(className) {
        function constructor () {
            return this.constructor.apply(this, arguments) || null;
        }
        if (className) {
            constructor.name = className;
        }
        return constructor;
    };

    EmptyFn = function(){};

    Class = Cls = function(pClass, data, onCreated) {
        if (typeof pClass != 'function') {
            pClass = ClassManager.map[pClass];
        }

        if (!data) {
            data = {};
        }

        pClass = Cls.create(pClass, data);

        Cls.inheritence(pClass, data, onCreated);
        pClass.init();

        return pClass;
    };

    Cls.inheritence = function(Class, data, onCreated){
        var parents = Class.parents
            parentData = _.merge({}, data);

        for( var i = 0, c = parents.length; i < c; i++ ){
            _.merge(parentData, parents[i] );
        }
        _.merge(parentData, Class);
        return _.merge(Class, parentData);
    };

    Cls.create = function (Class, data) {
        if (!Class) {
            Class = _makeContructor(
                data.$className
            );
        }
        return Class;
    };
})();

