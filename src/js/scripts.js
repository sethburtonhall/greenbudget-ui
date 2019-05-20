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

    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
            $(this).closest('tr').addClass('bg-highlight')
        }
        else if($(this).is(":not(:checked)")){
            $(this).closest('tr').removeClass('bg-highlight')
        }
    });
});
