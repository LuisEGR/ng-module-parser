const acorn = require('acorn');
const walk = require("acorn/dist/walk")

function parse(program, options) {
    options = options || {};
    options.sourceType = options.sourceType || 'module';

    let infoModule = {
        name: null,
        components: [],
        dependencies: [],
        directives: [],
        services: [],
        factories: [],
        constants: [],
    };

    function getArgumentList(ASTNodes) {
        let argumentos = [];
        ASTNodes.forEach((ASTNode) => {
            let name = getArgumentName(ASTNode)
            if (name) {
                argumentos.push(name);
            }
        })
        return argumentos;
    }

    function getLiteralValue(ASTNode) {
        if (ASTNode.type == 'Literal') {
            return ASTNode.value;
        }
    }

    function getArgumentName(ASTNode) {
        if (ASTNode.type == 'Identifier') {
            return ASTNode.name;
        } else if (ASTNode.type == 'Literal') {
            return ASTNode.value;
        }
    }

    walk.ancestor(acorn.parse(program, options), {
        CallExpression(_, ancestors) {
            if(_.callee.property){
                if (_.callee.property.name == 'module') {
                    infoModule.name = getLiteralValue(_.arguments[0]);
                    let deps = _.arguments[1] ? _.arguments[1].elements:[];
                    infoModule.dependencies = getArgumentList(deps);
                }
    
                if (_.callee.property.name == 'component') {
                    infoModule.components.push(getLiteralValue(_.arguments[0]));
                }
    
                if (_.callee.property.name == 'directive') {
                    infoModule.directives.push(getLiteralValue(_.arguments[0]));
                }
    
                if (_.callee.property.name == 'service') {
                    infoModule.services.push(getLiteralValue(_.arguments[0]));
                }
    
                if (_.callee.property.name == 'factory') {
                    infoModule.factories.push(getLiteralValue(_.arguments[0]));
                }
    
                if (_.callee.property.name == 'constant') {
                    infoModule.constants.push(getLiteralValue(_.arguments[0]));
                }
            }
        }
    });
    return infoModule;
}


module.exports = {
    parse: parse,
};