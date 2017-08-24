


const Utils = {
    getLevelOne: function (target){
         let result;

         if ( typeof target === "object"){
             result = "{";
             Object.keys(target).forEach( (value, idx) => {
                     result += value + ": " + target[value].toString() + ", ";
             });
             if (result.endsWith(", ")){
                 result = result.substring(0, result.length-2);
                 result += "}";
             }
         }else {
             result = JSON.stringify(target);
         }

         return result;
     },


    getParent: function (props) {
        return props.parent !== undefined ? props.parent : "I am orphan";
    }
};

export default Utils;
