function show(obj) {
    if (Array.isArray(obj)) {
        var html = '';
        html = html + '<table border="1">';
        html = html + '<tr>';
        for (var i = 0; i < obj.length; i++) {
            html = html + '<td>' + obj[i] + '</td>';
        }
        html = html + '</tr>';
        html = html + '</table>';
        //html = html + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', html);
    } else {
        var string = JSON.stringify(obj);
        string = string + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', string);
    }
}

// function show(array) {
//     var html = '';
//     html = html + '<table border="1">';
//     html = html + '<tr>';
//     for (var i = 0; i < array.length; i++) {
//         html = html + '<td>' + array[i] + '</td>';
//     }
//     html = html + '</tr>';
//     html = html + '</table>';
//     //document.getElementById('res').innerHTML = html;
//     document.getElementById('res').insertAdjacentHTML('beforeend', html);
// }

function createSequentialNumbers(array, n) {
    for (var i = 1; i < n + 1; i++) {
        array.push(i);
    }
}

function createRandomNumbers(array, n) {
    for (var i = 1; i < n + 1; i++) {
        array.push(Math.floor(Math.random() * 21));
    }
}