/**
 * JSM Widget - A simple JavaScript widget
 * @version 1.0.0
 */

(function(window) {
    'use strict';

    /**
     * JSMWidget constructor
     * @param {Object} options - Configuration options
     */
    function JSMWidget(options) {
        this.options = options || {};
        this.container = null;
        this.initialized = false;
        
        // Default options
        this.defaults = {
            containerId: 'jsm-widget',
            title: 'JSM Widget',
            message: 'Welcome to JSM Widget!',
            theme: 'light',
            showButton: true,
            buttonText: 'Click Me'
        };
        
        // Merge options with defaults
        this.config = this._extend({}, this.defaults, this.options);
    }

    /**
     * Initialize the widget
     */
    JSMWidget.prototype.init = function() {
        if (this.initialized) {
            console.warn('JSMWidget is already initialized');
            return this;
        }

        this.container = document.getElementById(this.config.containerId);
        
        if (!this.container) {
            console.error('Container element not found: ' + this.config.containerId);
            return this;
        }

        this.render();
        this.attachEvents();
        this.initialized = true;
        
        return this;
    };

    /**
     * Render the widget
     */
    JSMWidget.prototype.render = function() {
        var html = '<div class="jsm-widget-wrapper ' + this.config.theme + '">';
        html += '<div class="jsm-widget-header">';
        html += '<h2>' + this._escapeHtml(this.config.title) + '</h2>';
        html += '</div>';
        html += '<div class="jsm-widget-body">';
        html += '<p>' + this._escapeHtml(this.config.message) + '</p>';
        
        if (this.config.showButton) {
            html += '<button class="jsm-widget-button" id="jsm-widget-btn">';
            html += this._escapeHtml(this.config.buttonText);
            html += '</button>';
        }
        
        html += '</div>';
        html += '</div>';
        
        this.container.innerHTML = html;
    };

    /**
     * Attach event listeners
     */
    JSMWidget.prototype.attachEvents = function() {
        if (this.config.showButton) {
            var button = document.getElementById('jsm-widget-btn');
            if (button) {
                button.addEventListener('click', this._handleButtonClick.bind(this));
            }
        }
    };

    /**
     * Handle button click event
     */
    JSMWidget.prototype._handleButtonClick = function(e) {
        e.preventDefault();
        this.onButtonClick();
    };

    /**
     * Public callback for button click
     */
    JSMWidget.prototype.onButtonClick = function() {
        alert('JSM Widget button clicked!');
    };

    /**
     * Update widget message
     * @param {String} message - New message
     */
    JSMWidget.prototype.updateMessage = function(message) {
        this.config.message = message;
        this.render();
        this.attachEvents();
    };

    /**
     * Destroy the widget
     */
    JSMWidget.prototype.destroy = function() {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.initialized = false;
    };

    /**
     * Extend objects (simple implementation)
     */
    JSMWidget.prototype._extend = function(out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i]) continue;
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    out[key] = arguments[i][key];
                }
            }
        }
        return out;
    };

    /**
     * Escape HTML to prevent XSS
     */
    JSMWidget.prototype._escapeHtml = function(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    };

    // Expose JSMWidget to global scope
    window.JSMWidget = JSMWidget;

})(window);
