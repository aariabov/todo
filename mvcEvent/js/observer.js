function Event (sender) {
    this._sender = sender;
    this._listeners = [];
};

Event.prototype.register = function (listener) {
    this._listeners.push(listener);
}

Event.prototype.notify = function (args) {
    for (var i = 0; i < this._listeners.length; i += 1) {
        this._listeners[i](this._sender, args);
    }
}