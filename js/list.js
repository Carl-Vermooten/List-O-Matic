$(function () {

    var $list, $newItemForm, $newItemButton;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');

    $('li').hide().each(function (index) {
        $(this).delay(450 * index).fadeIn(1600);
    });

    // Counter
    function updateCount() {
        var items = $('li:not(.complete)').length;
        $('#counter').text(items);
    }
    updateCount();

    // Form
    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function () {
        $newItemButton.hide();
        $newItemForm.show();
    });

    // New item
    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li class="list-group-item d-flex justify-content-between">' + text + '</li>');
        $('input:text').val('');
        updateCount();
    });

    // Click handler
    $list.on('click', 'li', function () {
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if (complete === true) {
            $this.animate({
                opacity: 0.0,

            }, 500, 'swing', function () {
                $this.remove();
            });
        } else {
            item = $this.text();
            $this.remove();
            $list
                .append('<li class="complete list-group-item d-flex justify-content-between"><s>' + item + '</s></li>')
                .hide().fadeIn(300);
            updateCount();
        }
    });

});