Polymer('collapsible-container', {
    duration: 350,
    opened: false,
    getSize: function () {
        return this.$.content.clientHeight;
    },
    toggle: function () {
        this.opened = !this.opened;
    },
    openedChanged: function (oldVal, newVal) {
        this.$.full.value = this.getSize();
        this.$.anim.target = this;
        this.$.anim.play();
    }
});
