(function(window) {
    /*util*/
    if (!window.StringBuilder) {
        var isModern = String.prototype.trim;
        window.StringBuilder = function() {
            this.content = isModern ? "" : [];
        };
        window.StringBuilder.prototype.append = isModern ?
            function(str) {
                this.content += str;
                return this;
            } : function(str) {
                this.content.push(str);
                return this;
            };
        window.StringBuilder.prototype.appends = isModern ? function() {
            for (var i = 0, l = arguments.length; i < l; i++) {
                this.content += arguments[i];
            }
            return this;
        } : function() {
            for (var i = 0, l = arguments.length; i < l; i++) {
                this.content.push(arguments[i]);
            }
            return this;
        };
        window.StringBuilder.prototype.toString = isModern ? function() {
            return this.content;
        } : function() {
            return this.content.join("");
        };
        window.StringBuilder.prototype.clear = isModern ? function() {
            this.content = "";
            return this;
        } : function() {
            this.content = [];
            return this;
        };
    }
})(window);