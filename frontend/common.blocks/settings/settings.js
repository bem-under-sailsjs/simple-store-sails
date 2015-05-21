modules.define('settings', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this._messages = this.findBlockOutside('form').elem('messages');
                }
            }
        }
    }));
});
