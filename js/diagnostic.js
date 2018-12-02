// ██████╗ ██╗ █████╗  ██████╗ ███╗   ██╗ ██████╗ ███████╗████████╗██╗ ██████╗
// ██╔══██╗██║██╔══██╗██╔════╝ ████╗  ██║██╔═══██╗██╔════╝╚══██╔══╝██║██╔════╝
// ██║  ██║██║███████║██║  ███╗██╔██╗ ██║██║   ██║███████╗   ██║   ██║██║     
// ██║  ██║██║██╔══██║██║   ██║██║╚██╗██║██║   ██║╚════██║   ██║   ██║██║     
// ██████╔╝██║██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝███████║   ██║   ██║╚██████╗
// ╚═════╝ ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═╝ ╚═════╝
/**
 * @author Enrique Aguilar
 * @param {array} arrayValuesSympts 
 * @param {callbak} fn 
 */
function diagnostic(arrayValuesSympts, fn) {
    var result = createArray(enfermedades.length, arrayValuesSympts.length);
    var total = [];
    for (let enf = 0; enf < enfermedades.length; enf++) {
        let symptsVals = enfermedades[enf].symp;
        for (let sym = 0; sym < arrayValuesSympts.length; sym++) {
            result[enf][sym] = (arrayValuesSympts[sym] < symptsVals[sym]) ? parseFloat(arrayValuesSympts[sym]) : parseFloat(symptsVals[sym]);
        }
    }
    for (let index = 0; index < enfermedades.length; index++) {
        let sumTemp = 0;
        for (let sum = 0; sum < arrayValuesSympts.length; sum++) {
            sumTemp += result[index][sum];
        }
        total.push({
            id: index,
            name: enfermedades[index].name,
            total: sumTemp
        });
    }
    console.table(result);
    total = JSON.sort(total, "total", false);
    fn(total);
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }
    return arr;
}

JSON.sort = function (jsonObject, atrribute, desc = true) {
    let keys = Object.keys(jsonObject);
    for (let j = 0; j < keys.length; j++) {
        for (let i = 0; i < keys.length; i++) {
            let keyplus = keys[i + 1];
            let index = keys[i];
            var keyPlusAtt = (jsonObject[keyplus] !== undefined) ? jsonObject[keyplus][atrribute] : jsonObject[index][atrribute];
            let condicion = (desc) ? jsonObject[index][atrribute] > keyPlusAtt : jsonObject[index][atrribute] < keyPlusAtt;
            if (condicion) {
                var temp = jsonObject[index];
                jsonObject[index] = jsonObject[keyplus];
                jsonObject[keyplus] = temp;
            }
        }
    }
    return jsonObject;
}