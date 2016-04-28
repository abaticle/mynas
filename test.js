var getfiles = require("mynas-getfiles");
var getSubtitles = require("mynas-subtitler");
var checkSubtitles = require("mynas-checksubtitles");
var getShowMetadata = require("mynas-getshowmetadata");



var oInput = {
    path: "Y:/series/test_nodes",
    moviesExtensions: ["*.avi", "*.mpg", "*.mp4", "*.mkv"],
    withSubtitles: true
};


getfiles(oInput)
    .pipe(checkSubtitles())
    .pipe(getSubtitles({ lang: "fre" }))
    .pipe(getShowMetadata())
    .on("data", function(entry) {
        console.log(entry);
    });

/*getfiles.stream(oInput, function(err, data) {
    console.log(data);
});
*/
