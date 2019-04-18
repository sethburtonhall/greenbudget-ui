$(document).ready(function () {
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

    // $('#mainTable').DataTable();
    // $('#subTable').DataTable();

    // highlight table row when checked
    $("input[type='checkbox']").on('click', function () {
        if($(this).prop('checked', true)){
            console.log('test');
            $(this).closest('tr').addClass('highlight');
        } else{
            $(this).closest('tr').removeClass('highlight');
        }
    });
});
