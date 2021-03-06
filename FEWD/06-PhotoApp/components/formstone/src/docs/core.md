### Formstone Object

The Formstone core is a dependency of all javascript based components and will contain a few global values, as well as a simple plugin factory. The global Formstone object has access to the following keys:

| Key | Type | Description |
| --- | --- | --- |
| `$window` | `object` | Reference to jQuery wrapped window |
| `window` | `object` | Reference to original window |
| `$document` | `object` | Reference to jQuery wrapped document |
| `document` | `object` | Reference to original document |
| `$body` | `object` | Reference to jQuery wrapped body tag |
| `Plugins` | `object` | Contains all registered plugins |
| `support.file` | `boolean` | File API support |
| `support.history` | `boolean` | History API support, including push and pop state |
| `support.matchMedia` | `boolean` | Match Media API support |
| `support.raf` | `boolean` | Request Animation Frame API support |
| `support.touch` | `boolean` | Touch event support |
| `support.transition` | `boolean` | CSS3 Transition support |
| `userAgent` | `string` | Raw user string |
| `isChrome` | `boolean` | Browser is Chrome |
| `isFirefox` | `boolean` | Browser is FireFox |
| `isSafari` | `boolean` | Browser is Safari |
| `isMobile` | `boolean` | Browser is Mobile |
| `isFirefoxMobile` | `boolean` | Browser is FireFox Mobile |
| `transform` | `string` | Prefixed transform property |
| `transition` | `string` | Prefixed transition property |

User agent sniffing isn't always reliable or considered best practice - it should be used sparingly, if at all.

### Plugin Factory

The `Formstone.Plugin` factory function is used to define a plugin. The factory will use the provided namespace to register the plugin with jQuery. The plugin is then available like any other:

```javascript
$(".target").plugin({
	option: value
});
```

### Plugin Types

There are two types of plugins that can be defined: Widget or Utility.

#### Widget

Widget plugins are implicitly tied to an element to enhance or change the interface. Examples of Widgets include input enhancements like Picker or Selecter. A simple Widget might look like:

```javascript
;(function ($, Formstone, undefined) {

	function setUp() {
		// this = document
	}

	function construct(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	function destruct(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	function reset(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	// Register Plugin

	var Plugin = Formstone.Plugin("namespace", {
			widget: true,
			defaults: {
				option:    value
			},
			classes: [
				"visible"
			],
			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				reset         : reset
			},
			utilities: {
				close:         close
			}
		}),

		// Localize References

		Classes      = Plugin.classes,
		Events       = Plugin.events,
		Functions    = Plugin.functions;

})(jQuery, Formstone);
```

As in the example above, Widgets can override three internal methods by pointing a key to the corresponding local function:

| Method | Description |
| --- | --- |
| `_setup` | Run once when document is ready, scoped to document |
| `_construct` | Run at initialization of each instance, scoped to specific instance |
| `_destruct` | Run at destruction of each instance, scoped to specific instance |
| `_resize` | Run on window resize, scoped to window |

When an instance is created or destroyed, the factory will automatically add or remove the instance's localized plugin data. This data is available as the first argument in any public method call, or by using the namespace to query for the data:

```javascript
this.data("namespace");
```

Custom public methods can also be defined, provided their keys are not prefixed with an underscore (`_`). The underscore signifies a core method and should be avoided when defining public methods. The factory will scope any public method call to the target instance, as well as provide it's plugin data as the first argument followed by any addition arguments:

```javascript
$(".target").namespace("reset", 500);
```

A Widget can also operate as a singleton, like Lightbox or Tooltip. In this case, events are bound to the instance's target element, while DOM manipulations are tied to a single internal instance. This helps prevent unwanted duplication when the interface pattern calls for a single instance.

#### Utility

Utility plugins may interact with DOM nodes but are not necessarily tied to any specific elements. An example of a Utility is the media query event abstraction provided by Media Query. A simple Utility plugin might look like:

```javascript
;(function ($, Formstone, undefined) {

	function delegate() {
		// Manually handle public methods
	}

	// Register Plugin

	var Plugin = Formstone.Plugin("namespace", {
			utilties: {
				_delegate:     delegate
			}
		}),

		// Internal Defaults

		Defaults = {
			option    : value
		},

		// Localize References

		Document = Formstone.$document[0];

})(jQuery, Formstone);
```

A utility can override the default method delegation by pointing the `_delegate` key to a custom function. The delegate function will need to manually handle any arguments passed. Otherwise, Utilities will use the same public method delegation system as Widgets.

```javascript
$.namespace("reset", 500);
```

### Plugin Object

Defining a plugin using the factory will return an object containing the follow keys:

| Key | Type | Description |
| --- | --- | --- |
| `namespace` | `string` | plugin namespace |
| `initialized` | `boolean` | initialized state |
| `defaults` | `object` | default options extended with initialization and local options |
| `functions` | `object` | private utility functions |
| `methods` | `object` | public methods |
| `utilities` | `object` | public utility methods |
| `classes` | `object` | namespaced classes strings |
| `events` | `object` | namespaced event strings |

These values can then be localized in the scope of the plugin for optimal minimization:

```javascript
var Plugin = Formstone.Plugin(???namespace???, {
		...
	}),
	Defaults     = Plugin.defaults,
	Functions    = Plugin.functions,
	Methods      = Plugin.methods,
	Utilities    = Plugin.utilities,
	Classes      = Plugin.classes,
	Events       = Plugin.events;
```

This may seem strangely redundant at first, however multi-dimensional objects do not minimize efficiently. This is also one reason standard prototypal inheritance is not used when building a plugin, however this is not to say a specific plugin could not contain locally scoped prototypes. Plugin design is always up to the developer, the factory simply provides a consistent, DRY approach to the basic plugin pattern.

#### Classes

The `classes` object returned when defining a plugin will contain properly namespaced strings of both default and custom classes. Custom classes will become object keys, while the namespaced class will become the value:

```javascript
var Plugin = Formstone.Plugin(???namespace???, {
	...
	classes: [
		"visible",
		"content"
	],
	...
});
```

```javascript
var $element = $(Classes.content);
```

| Key | Type | Value |
| --- | --- | --- |
| `base` | Default | `.namespace` |
| `element` | Default | `.namespace-element` |
| `visible` | Custom | `.namespace-visible` |
| `content` | Custom | `.namespace-content` |

The `classes.raw` key will contain just the namespaced class without the leading '.', useful for building html:

```javascript
html += '<div class="' + Classes.raw.content + '">';
```

#### Events

The `events` object returned when defining a plugin will contain properly namespaced strings of both default and custom events. Custom events will become object keys, while the namespaced event will become the value:

```javascript
var Plugin = Formstone.Plugin(???namespace???, {
	...
	events: [
		"enable",
		"disable"
	],
	...
});
```

```javascript
data.$el.on(Events.click, onClick);
```

| Key | Type | Value |
| --- | --- | --- |
| `namespace` | Default | `.namespace` |
| `blur` | Default | `blur.namespace` |
| `change` | Default | `change.namespace` |
| `click` | Default | `click.namespace` |
| `clickTouchStart` | Default | `click.namespace touchstart.namespace` |
| `dblClick` | Default | `dblClick.namespace` |
| `drag` | Default | `drag.namespace` |
| `dragEnd` | Default | `dragend.namespace` |
| `dragEnter` | Default | `dragenter.namespace` |
| `dragLeave` | Default | `dragleave.namespace` |
| `dragOver` | Default | `dragover.namespace` |
| `dragStart` | Default | `dragstart.namespace` |
| `drop` | Default | `drop.namespace` |
| `error` | Default | `error.namespace` |
| `focus` | Default | `focus.namespace` |
| `focusIn` | Default | `focusin.namespace` |
| `focusOut` | Default | `focusout.namespace` |
| `input` | Default | `input.namespace` |
| `keyDown` | Default | `keydown.namespace` |
| `keyPress` | Default | `keypress.namespace` |
| `keyUp` | Default | `keyup.namespace` |
| `load` | Default | `load.namespace` |
| `mouseDown` | Default | `mousedown.namespace` |
| `mouseEnter` | Default | `mouseenter.namespace` |
| `mouseLeave` | Default | `mouseleave.namespace` |
| `mouseMove` | Default | `mousemove.namespace` |
| `mouseOut` | Default | `mouseout.namespace` |
| `mouseOver` | Default | `mouseover.namespace` |
| `mouseUp` | Default | `mouseup.namespace` |
| `resize` | Default | `resize.namespace` |
| `scroll` | Default | `scroll.namespace` |
| `select` | Default | `select.namespace` |
| `touchCancel` | Default | `touchcancel.namespace` |
| `touchEnd` | Default | `touchend.namespace` |
| `touchLeave` | Default | `touchleave.namespace` |
| `touchMove` | Default | `touchmove.namespace` |
| `touchStart` | Default | `touchstart.namespace` |
| `transitionEnd` | Default | `transitionEnd.namespace` |
| `enable` | Custom | `enable.namespace` |
| `disable` | Custom | `disable.namespace` |