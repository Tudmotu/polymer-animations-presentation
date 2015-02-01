Polymer('collapsible-container', {
    duration: 350,
    opened: false,
    getSize: function () {
        return this.$.content.clientHeight;
    },
    openedChanged: function (oldVal, newVal) {
        if (newVal === true)
            this.hidden = false;

        this.$.initial.value = this.getSize();
        this.$.anim.target = this;
        this.$.anim.play();
    },
    toggle: function () {
        this.opened = !this.opened;
    }
});
