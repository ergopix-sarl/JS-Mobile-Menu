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
        $MobileMenuElement.prepend('<a href="javascript:void(0)" class="mobilemenu__close" data-toggle="MobileMenu"></a>');
    }
    MobileMenu();

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
        $MobileMenuElement.addClass('mobilemenu--visible');
        isOpen = true;
    }

    /**
     * Hide the mobile menu
     */
    MobileMenu.prototype.hide = function (e) {
        $MobileMenuElement.removeClass('mobilemenu--visible');
        isOpen = false;
    }

    /**
     * Register events
     */
    $(document).on('click.ergopix.MobileMenu', toggler, MobileMenu.prototype.toggle);

}(jQuery);
