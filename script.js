document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('colorForm');
    form.onsubmit = function (e) {
        e.preventDefault(); 
        var color = document.getElementById('colorInput').value;
        var header = document.getElementById('header');
        header.style.color = color;
    };
});
