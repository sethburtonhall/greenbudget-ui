$(document).ready(function () {
    // $("#sidebar").mCustomScrollbar({
    //     theme: "minimal",
    //     setHeight: "100%"
    // });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#mainTable').on('click', 'tr', function(event) {
        if($(this).hasClass('bg-highlight')){
            $(this).removeClass('bg-highlight');
        } else {
            $(this).addClass('bg-highlight').siblings().removeClass('bg-highlight').parent().siblings().find('tr').removeClass('bg-highlight');
        }
    });
});
