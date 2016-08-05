/**
 * mobilemenu - Display a Mobile Menu in a full overlay.
 * @version v1.0.0
 * @link https://github.com/ergopix-sarl/JS-Search-Bar
 */
/**
 * MobileMenu jQuery plugin
 */
+function ($) {
    'use strict';

    var toggler = '[data-toggle="MobileMenu"]',
        $MobileMenuElement = $($(toggler).data('target')),
        isOpen = false;

    /**
     * Constructor
     */
    var MobileMenu = function (el) {
        $MobileMenuElement.addClass('mobilemenu');
    }

    /**
     * Show or hide the mobile menu
     */
    MobileMenu.prototype.toggle = function (e) {
        e.preventDefault();

        if (isOpen) {
            MobileMenu.prototype.hide();
        } else {
            MobileMenu.prototype.show();
        }
    }

    /**
     * Show the mobile menu
     */
    MobileMenu.prototype.show = function (e) {
        $MobileMenuElement.addClass('MobileMenu--visible');
        isOpen = true;
    }

    /**
     * Hide the mobile menu
     */
    MobileMenu.prototype.hide = function (e) {
        $MobileMenuElement.removeClass('MobileMenu--visible');
        $MobileMenuInput.val(''); //Empty the value
        isOpen = false;
    }

    /**
     * Register events
     */
    $(document).on('click.ergopix.MobileMenu', toggler, MobileMenu.prototype.toggle);

}(jQuery);
