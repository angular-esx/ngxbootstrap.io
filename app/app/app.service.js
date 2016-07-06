var commonService = ng.core.Class({
    constructor: function () {
        var self = this;
        this.mapText = {
            'alert': 'Alert',
            'button': 'Button',
            'collapse': 'Collapse',
            'carousel': 'Carousel',
            'dropdown': 'Dropdown',
            'modal': 'Modal',
            'progressbar': 'Progressbar',
            'tab': 'Tabs',
            'popover': 'Popover',
            'gettingStart': 'Getting Start'
        }
        this.currentComponent = 'gettingStart';
    }

});

module.exports = commonService;