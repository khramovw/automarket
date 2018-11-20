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

//  Переключение картинок

var Pictures = function () {
    function Pictures() {
        _classCallCheck(this, Pictures);

        this.pict = document.querySelector('.pict');
        this.smallImgAll = document.querySelectorAll('.img-small');
        this.init();
    }

    _createClass(Pictures, [{
        key: 'init',
        value: function init() {
            this.events();
        }
    }, {
        key: 'events',
        value: function events() {
            var _this3 = this;

            document.addEventListener('click', function (e) {
                return _this3.switchPictures(e);
            });
            this.smallImgAll.forEach(function (smallImg) {
                return smallImg.addEventListener('click', function (e) {
                    return _this3.switchBorderPicture(e, smallImg);
                });
            });
        }
    }, {
        key: 'switchPictures',
        value: function switchPictures(e) {
            if (e.target.tagName !== 'IMG') return false;
            // let pos = e.target.src.indexOf('.jpg');
            // let totalString = e.target.src.slice(0, pos) + '-big.jpg';
            // console.log(totalString);
            // if(e.target.className == 'img-small') console.log('попал');
            this.pict.src = e.target.src;
        }
    }, {
        key: 'switchBorderPicture',
        value: function switchBorderPicture(e, smallImg) {
            this.smallImgAll.forEach(function (small) {
                small.classList.remove("is-active");
            });
            smallImg.classList.add("is-active");
        }
    }]);

    return Pictures;
}();

var pictures = new Pictures();

// Переключение табов

var Tabs = function () {
    function Tabs() {
        _classCallCheck(this, Tabs);

        this.tabsControls = document.querySelectorAll('[data-tab-controls]');
        this.tabPane = document.querySelectorAll('[data-tab-pane]');
        this.init();
    }

    _createClass(Tabs, [{
        key: 'init',
        value: function init() {
            this.events();
        }
    }, {
        key: 'events',
        value: function events() {
            var _this4 = this;

            this.tabsControls.forEach(function (controls) {
                return controls.addEventListener('click', function (e) {
                    return _this4.switchTabs(e, controls);
                });
            });
        }
    }, {
        key: 'switchTabs',
        value: function switchTabs(e, controls) {
            e.preventDefault();
            var target = document.getElementById(controls.dataset.tabs.slice(1));
            this.tabPane.forEach(function (pane) {
                pane.classList.remove("is-active");
            });
            this.tabsControls.forEach(function (controls) {
                controls.classList.remove("is-active");
            });
            target.classList.add("is-active");
            controls.classList.add("is-active");
        }
    }]);

    return Tabs;
}();

var tabs = new Tabs();

// Переключение

var Modal = function () {
    function Modal() {
        _classCallCheck(this, Modal);

        this.closeBtnAll = document.querySelectorAll('.close-icon-btn');
        this.modals = document.querySelectorAll('.modal');
        this.init();
        this.layout = layout;
    }

    _createClass(Modal, [{
        key: 'init',
        value: function init() {
            this.events();
        }
    }, {
        key: 'events',
        value: function events() {
            var _this5 = this;

            this.closeBtnAll.forEach(function (closeBtn) {
                return closeBtn.addEventListener('click', function (e) {
                    return _this5.switchModal(e);
                });
            });
        }
    }, {
        key: 'switchModal',
        value: function switchModal(e) {
            this.modals.forEach(function (modal) {
                return modal.classList.add("d-none");
            });
            this.layout.classList.remove('is-open');
        }
    }]);

    return Modal;
}();

var modal = new Modal();

// Переключение dropdown

var Dropdown = function () {
    function Dropdown() {
        _classCallCheck(this, Dropdown);

        this.dropdowns = document.querySelectorAll('.dropdown-container');
        this.arrInitialData = [];
        this.init();
        this.arrResult = ['', '', '', ''];
    }

    _createClass(Dropdown, [{
        key: 'init',
        value: function init() {
            this.events();
        }
    }, {
        key: 'events',
        value: function events() {
            var _this6 = this;

            this.dropdowns.forEach(function (dropdown) {
                return _this6.arrInitialData.push(dropdown.innerText);
            });
            this.dropdowns.forEach(function (dropdown, index) {
                return dropdown.addEventListener('click', function (e) {
                    return _this6.switchDropdowns(e, dropdown, index);
                });
            });
        }
    }, {
        key: 'switchDropdowns',
        value: function switchDropdowns(e, dropdown, index) {
            // console.log(e.target);
            if (e.target.tagName == 'LI') {
                dropdown.querySelector('.title').innerText = e.target.innerText;
                dropdown.classList.add('dropdown-active');
                // console.log(index);

                this.reset(index);
            }

            this.resultSearch(index);

            if (e.target.tagName !== 'INPUT') {
                var marker = 0;
                if (dropdown.classList.contains('is-selected')) marker = 1;
                this.dropdowns.forEach(function (dropdown) {
                    return dropdown.classList.remove("is-selected");
                });

                if (marker == 1) dropdown.classList.remove('is-selected');else dropdown.classList.add('is-selected');
            }
        }
    }, {
        key: 'resultSearch',
        value: function resultSearch(index) {
            var _this7 = this;

            this.dropdowns.forEach(function (el, i) {
                if (i == index) {
                    _this7.arrResult.splice(index, 1, el.children[0].innerText);
                }
            });
            // console.log(this.arrResult);
        }
    }, {
        key: 'reset',
        value: function reset(index) {
            var _this8 = this;

            this.dropdowns.forEach(function (dropdown, i) {
                if (index >= i) return;else {
                    dropdown.classList.remove("dropdown-active");
                    _this8.dropdowns.forEach(function (dropdown, i) {
                        if (index >= i) return;else {
                            dropdown.querySelector('.title').innerText = _this8.arrInitialData[i];
                        }
                    });
                }
            });
        }
    }]);

    return Dropdown;
}();

var dropdown = new Dropdown();

var Accordion = function () {
    function Accordion() {
        _classCallCheck(this, Accordion);

        this.acc = document.getElementsByClassName("accordion");
        this.init();
    }

    _createClass(Accordion, [{
        key: 'init',
        value: function init() {
            this.switching();
        }
    }, {
        key: 'switching',
        value: function switching() {
            for (var i = 0; i < this.acc.length; i++) {
                this.acc[i].onclick = function () {
                    this.classList.toggle("is-open");
                    this.nextElementSibling.classList.toggle("show");
                };
            }
        }
    }]);

    return Accordion;
}();

var accord = new Accordion();

var SwitchClass = function () {
    function SwitchClass(nameClass) {
        _classCallCheck(this, SwitchClass);

        this.anyClasses = document.querySelectorAll(nameClass);
        this.init();
    }

    _createClass(SwitchClass, [{
        key: 'init',
        value: function init() {
            this.events();
        }
    }, {
        key: 'events',
        value: function events() {
            var _this9 = this;

            this.anyClasses.forEach(function (anyClass) {
                return anyClass.addEventListener('click', function () {
                    return _this9.switching(anyClass);
                });
            });
        }
    }, {
        key: 'switching',
        value: function switching(anyClass) {
            this.anyClasses.forEach(function (anyClass) {
                anyClass.classList.remove("is-active");
            });
            anyClass.classList.toggle("is-active");
        }
    }]);

    return SwitchClass;
}();

var anyClass = new SwitchClass('.no-items');