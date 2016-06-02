//----------------Button Animate for search box-----------------


var $inputBox = $('#userSearch');
var $searchToggle = $('#searchToggle');
//var wikiURL = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=";
var userTerm = ""
var $userSearch = $('#userSearch');
var $randBtn = $('#randomBtn');
var $pageDis = $('#pageDisplay');
var wikiRandom = 'https://en.wikipedia.org/wiki/Special:Random'


$(document).ready(function() {
    $randBtn.click(function(event) {
        $pageDis.empty();
        $pageDis.append('<iframe src="' + wikiRandom + '"></iframe>');
    });
    $searchToggle.click(function(event) {
        triggerApi();
    });
    $userSearch.keypress(function(e) {
        if (e.which == 13) {
            triggerApi();
            return false;
        }
    });
});

function triggerApi() {
    $userTerm = $userSearch.val();
    $userSearch.val('');
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
            openWindow(wikiNormURL);
        }
    });
}

function openWindow(wikiNormURL) {
    $pageDis.empty();
    $pageDis.append('<iframe src="' + wikiNormURL + '"></iframe>');
}
