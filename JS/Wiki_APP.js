//----------------Button Animate for search box-----------------


var $inputBox = $('#userSearch');
var $searchToggle = $('#searchToggle');
//var wikiURL = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=";
var userTerm = ""
var $userSearch = $('#userSearch');
var $randBtn = $('#randomBtn');
var wikiRandom = 'https://en.wikipedia.org/wiki/Special:Random'


$(document).ready(function() {
    $inputBox.animate({
        width: "toggle",
        opacity: "toggle"
    }, 800).removeClass('showInput');
    $randBtn.click(function(event) {
        window.location = wikiRandom;
    });
    $searchToggle.click(function(event) {
        $inputBox.animate({
            width: "toggle",
            opacity: "toggle"
        }, 800).addClass('showInput');
        $userTerm = $userSearch.val();
        $userSearch.val('');
        //wikiURL += $userTerm;
        console.log($userTerm);
        $.ajax({
            url: 'http://en.wikipedia.org/w/api.php',
            data: {
                action: 'query',
                list: 'search',
                srsearch: $userTerm,
                format: 'json'
            },
            dataType: 'jsonp',
            success: function(x) {
                var searchURL = x.query.search[0].title;
                var wikiNormURL = 'http://en.wikipedia.org/wiki/';
                wikiNormURL += searchURL;
                console.log(wikiNormURL);
                window.location = wikiNormURL;
            }
        });
    });
});


//-----------------API function------------------------------
