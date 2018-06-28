const fs = require('fs');
const acorn = require('acorn');
const walk = require("acorn/dist/walk")


let program = fs.readFileSync('./example_module.js', 'utf8');

let optionsParser = {
    sourceType: 'module'
}

let infoModule = {
    name: null,
    components: [],
    dependencies: [],
    directives: [],
    services: [],
    factories: [],
    constants: [],
};

walk.ancestor(acorn.parse(program, optionsParser), {
    CallExpression(_, ancestors){

        if(_.callee.property.name == 'module'){
            infoModule.name = getLiteralValue(_.arguments[0]);
            infoModule.dependencies = getArgumentList(_.arguments[1].elements);
        }

        if(_.callee.property.name == 'component'){
            infoModule.components.push(getLiteralValue(_.arguments[0]));
        }

        if(_.callee.property.name == 'directive'){
            infoModule.directives.push(getLiteralValue(_.arguments[0]));
        }

        if(_.callee.property.name == 'service'){
            infoModule.services.push(getLiteralValue(_.arguments[0]));
        }

        if(_.callee.property.name == 'factory'){
            infoModule.factories.push(getLiteralValue(_.arguments[0]));
        }

        if(_.callee.property.name == 'constant'){
            infoModule.constants.push(getLiteralValue(_.arguments[0]));
        }

    }
  });

console.log(JSON.stringify(infoModule, null, 2));


function getArgumentList(ASTNodes){
    let arguments = [];
    ASTNodes.forEach((ASTNode) => {
        let name = getArgumentName(ASTNode)
        if(name){
            arguments.push(name);
        }
    })
    return arguments;
}

function getLiteralValue(ASTNode){
    if(ASTNode.type == 'Literal'){
        return ASTNode.value;
    }
}

function getArgumentName(ASTNode){
    if(ASTNode.type == 'Identifier'){
        return ASTNode.name;
    } else if(ASTNode.type == 'Literal'){
        return ASTNode.value;
    }
}