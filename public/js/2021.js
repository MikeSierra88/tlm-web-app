$(document).ready(() => {

    $('.countdown-throwmefeelings').countdown100({
        /*Set Endtime here*/
        endtimeYear: 2021,
        endtimeMonth: 06,
        endtimeDate: 04,
        endtimeHours: 0,
        endtimeMinutes: 00,
        endtimeSeconds: 00,
        timeZone: "America/New_York" 
    });

    $('.countdown-hitmelikeadream').countdown100({
        /*Set Endtime here*/
        endtimeYear: 2021,
        endtimeMonth: 06,
        endtimeDate: 25,
        endtimeHours: 0,
        endtimeMinutes: 00,
        endtimeSeconds: 00,
        timeZone: "America/New_York" 
    });

    // ICONS CLICK HANDLERS

    //Exaggerate
    $("#icon-spotify-exaggerate").on("mouseup", function() {
        $("#spotify-link-exaggerate")[0].click();
    });

    $("#icon-amazon-exaggerate").on("mouseup", function() {
        $("#amazon-link-exaggerate")[0].click();
    });

    $("#icon-apple-exaggerate").on("mouseup", function() {
        $("#apple-link-exaggerate")[0].click();
    });

    //Emergency
    $("#icon-spotify-emergency").on("mouseup", function() {
        $("#spotify-link-emergency")[0].click();
    });

    $("#icon-amazon-emergency").on("mouseup", function() {
        $("#amazon-link-emergency")[0].click();
    });

    $("#icon-apple-emergency").on("mouseup", function() {
        $("#apple-link-emergency")[0].click();
    });

});
