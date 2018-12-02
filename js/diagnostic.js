function diagnostic(arrayValuesSympts, fn) {
    var result = createArray(enfermedades.length, arrayValuesSympts.length);
    for (let enf = 0; enf < enfermedades.length; enf++) {
        let symptsVals = enfermedades[enf].symp;
        for (let sym = 0; sym < arrayValuesSympts.length; sym++) {
            result[enf][sym] = (symptsVals[sym] < arrayValuesSympts[sym]) ? parseInt(arrayValuesSympts[sym]) : parseInt(symptsVals[sym]);
        }
    }
    fn(result);
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