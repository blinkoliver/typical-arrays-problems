exports.min = min = (array) => {
    return !Array.isArray(array) || array.length === 0 ? 0 : Math.min(...array);
};

exports.max = max = (array) => {
    return !Array.isArray(array) || array.length === 0 ? 0 : Math.max(...array);
};

exports.avg = avg = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        array.forEach((el) => {
            sum += el;
        });
        return sum / array.length;
    }
};
