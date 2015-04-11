ClassManager = {
    map: {},
    tree: {}
};
Define = function(name, params){
    var p = _.merge({
        $className : name,
        init: function(p){

        },
        parents: [],
        parent: function(){
            if( this.parents.length > 0){
                return _.last( this.parents );
            }
            return null;
        }

    }, _.clone(params));
    var keyParts = name.split('.');
    var s = ClassManager.tree;

    for( var i = 0, c = keyParts.length-1; i <= c; i++ ){
        if(i == c){
            s[keyParts[i]] = p;
        } else {
            if( typeof s[keyParts[i]] == 'undefined'){
                s[keyParts[i]] = {};
            }
            p.parents.push(s[keyParts[i]]);
            s = s[keyParts[i]];
        }
    }

    ClassManager.map[name] = p;
};

