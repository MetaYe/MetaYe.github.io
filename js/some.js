window.onload = function() {
    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
    }

    var d = new Date();
    $('date').innerHTML = d.getFullYear();

    var oP = $('post').scrollHeight;
    var oW = window.innerHeight - 108;
    var oF = document.getElementById('foot');

    if(oP>oW) {
        oF.style.position = 'static';
    }
}