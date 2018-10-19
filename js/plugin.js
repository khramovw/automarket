'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var btnMenu = document.querySelector('.btn-menu-js');
var mobileMenu = document.querySelector('.mobile-menu-js');
var layout = document.querySelector('.layout-js');
var closeBtn = document.querySelector('.close-js');

var OpenModal = function () {
    function OpenModal() {
        _classCallCheck(this, OpenModal);

        this.layout = layout;
        this.init();
        this.btnMenu = btnMenu;
        this.mobileMenu = mobileMenu;
        this.closeBtn = closeBtn;
    }

    _createClass(OpenModal, [{
        key: 'init',
        value: function init() {
            this.openMenu();
            this.closeMenu();
        }
    }, {
        key: 'openMenu',
        value: function openMenu() {
            var _this = this;

            btnMenu.addEventListener('click', function (e) {
                e.stopPropagation();
                _this.mobileMenu.classList.add('is-open');
                _this.layout.classList.add('is-open');
            });
        }
    }, {
        key: 'closeMenu',
        value: function closeMenu() {
            var _this2 = this;

            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                _this2.mobileMenu.classList.remove('is-open');
                _this2.layout.classList.remove('is-open');
            });
        }
    }]);

    return OpenModal;
}();

var openModal = new OpenModal();