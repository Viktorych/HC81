$(document).ready(function () {
    function onLoad(svg, error) {
        /*
        $('g#eaf').click(function () {
        });
        $('g#hydraulics').click(function () {
            window.location = "/emp/cem/danieli/eaf/hydraulics";
        });
        */
        //text = $('#tspan5457');

        //readApi();
        //var timerId = setInterval(readApi, 1000);
    }

    $(function () {

        $('#index').svg({});
        var svg = $('#index').svg('get');
        svg.load('/main/index.svg', {
            addTo: false,
            changeSize: false,
            onLoad: onLoad
        });


    });


});
