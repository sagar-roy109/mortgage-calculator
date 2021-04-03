

(function ($) {


    // Show Tool Tip

    jQuery('.mortgage-calc-wrapper .tool-tip-container .text-right').on({

        'mouseover': function () {

            jQuery(this).siblings().css('display', 'block');
        },
        'mouseout': function () {

            jQuery(this).siblings().css('display', 'none');
        },



    })




    //  Radio Button Selection

    jQuery(' input[type="radio"]:checked').parent().addClass('radio-active');

    let inputChecked = jQuery('input[type="radio"]');

    inputChecked.on('click', function () {
        inputChecked.each(function () {
            jQuery(this).parent().toggleClass('radio-active', this.checked);
        })
    })







})(window.jQuery);
