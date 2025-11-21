# jsmWidget

A simple, customizable JavaScript widget for web applications.

## Features

- 🎨 Light and dark theme support
- ⚡ Pure JavaScript (no dependencies)
- 🔧 Fully customizable
- 📱 Responsive design
- 🎯 Easy to integrate

## Quick Start

1. Include the widget files in your HTML:

```html
<link rel="stylesheet" href="styles.css">
<script src="jsmWidget.js"></script>
```

2. Create a container for the widget:

```html
<div id="jsm-widget"></div>
```

3. Initialize the widget:

```javascript
var widget = new JSMWidget({
    containerId: 'jsm-widget',
    title: 'My Widget',
    message: 'Welcome to JSM Widget!',
    theme: 'light',
    showButton: true,
    buttonText: 'Click Me'
});

widget.init();
```

## Demo

Open `index.html` in your browser to see the widget in action.

## Configuration Options

- `containerId` (string): ID of the container element (default: 'jsm-widget')
- `title` (string): Widget title (default: 'JSM Widget')
- `message` (string): Widget message (default: 'Welcome to JSM Widget!')
- `theme` (string): Theme - 'light' or 'dark' (default: 'light')
- `showButton` (boolean): Show/hide button (default: true)
- `buttonText` (string): Button text (default: 'Click Me')

## Methods

- `init()`: Initialize the widget
- `updateMessage(message)`: Update the widget message
- `setTheme(theme)`: Change widget theme ('light' or 'dark')
- `destroy()`: Remove the widget from DOM
- `onButtonClick()`: Custom callback for button clicks

## Example

```javascript
var widget = new JSMWidget({
    containerId: 'my-widget',
    title: 'Hello World',
    message: 'This is a custom message!',
    theme: 'dark'
});

widget.init();

// Custom button click handler
widget.onButtonClick = function() {
    console.log('Button clicked!');
    this.updateMessage('New message at ' + new Date().toLocaleTimeString());
};
```

## License

MIT