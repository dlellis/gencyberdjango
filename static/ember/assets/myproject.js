/* jshint ignore:start */

/* jshint ignore:end */

define('myproject/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'myproject/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('myproject/components/auth-manager', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		isLoggedIn: false,
		username: '',
		password: '',
		errorMsg: '',
		remember: false,
		userid: -1,
		actions: {
			login: function login() {
				//do stuff to authenticate here
				var username = this.get('username');
				var password = this.get('password');
				var remember = this.get('remember');
				var data = {
					'username': username,
					'password': password };
				var controllerObj = this;
				Ember['default'].$.post('../api/session/', data, function (response) {
					if (response.isauthenticated) {
						//success
						console.log('Login POST Request to ../api/session/ was successful.');
						controllerObj.set('username', response.username);
						controllerObj.set('userid', response.userid);
						controllerObj.set('isLoggedIn', true);

						if (remember) {
							//save username and pass to local storage
							localStorage.setItem('remember', true);
							localStorage.setItem('username', controllerObj.get('username'));
							localStorage.setItem('password', controllerObj.get('password'));
						} else {
							localStorage.removeItem('remember');
							localStorage.removeItem('username');
							localStorage.removeItem('password');
						}
						controllerObj.set('password', '');
					} else {
						//errors
						console.log('Login POST Request to ../api/session/ was unsuccessful.');
						controllerObj.set('errorMsg', response.message);
					}
				});
			},
			logout: function logout() {
				var controllerObj = this;
				Ember['default'].$.ajax({ url: '../api/session/', type: 'DELETE' }).then(function (response) {
					console.log('Logout DELETE Request to ../api/session/ was successful:' + response);
					controllerObj.set('isLoggedIn', false);
					controllerObj.set('errorMsg', '');
					controllerObj.set('username', '');
					controllerObj.set('userid', -1);

					if (localStorage.remember) {
						controllerObj.set('remember', localStorage.remember);
						controllerObj.set('username', localStorage.username);
						controllerObj.set('password', localStorage.password);
					}
				});
			}
		},
		init: function init() {
			this._super();
			var controllerObj = this;
			Ember['default'].$.get('../api/session/', function (response) {
				if (response.isauthenticated) {
					//success
					console.log('The user: \'' + response.username + '\' is currently logged in.');
					controllerObj.set('username', response.username);
					controllerObj.set('userid', response.userid);
					controllerObj.set('isLoggedIn', true);
				} else {
					//errors
					console.log('The user is not currently logged in.');
				}
			});
			if (localStorage.remember) {
				this.set('remember', localStorage.remember);
				this.set('username', localStorage.username);
				this.set('password', localStorage.password);
			}
		}
	});

});
define('myproject/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, bs_accordion_item) {

	'use strict';



	exports.default = bs_accordion_item.default;

});
define('myproject/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, bs_accordion) {

	'use strict';



	exports.default = bs_accordion.default;

});
define('myproject/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, bs_alert) {

	'use strict';



	exports.default = bs_alert.default;

});
define('myproject/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, bsButtonGroup) {

	'use strict';

	exports['default'] = bsButtonGroup['default'];

});
define('myproject/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, bsButton) {

	'use strict';

	exports['default'] = bsButton['default'];

});
define('myproject/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, bs_collapse) {

	'use strict';



	exports.default = bs_collapse.default;

});
define('myproject/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, bs_dropdown_button) {

	'use strict';



	exports.default = bs_dropdown_button.default;

});
define('myproject/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, bs_dropdown_menu) {

	'use strict';



	exports.default = bs_dropdown_menu.default;

});
define('myproject/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, bs_dropdown_toggle) {

	'use strict';



	exports.default = bs_dropdown_toggle.default;

});
define('myproject/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, bs_dropdown) {

	'use strict';



	exports.default = bs_dropdown.default;

});
define('myproject/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, bs_form_element) {

	'use strict';



	exports.default = bs_form_element.default;

});
define('myproject/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, bs_form_group) {

	'use strict';



	exports.default = bs_form_group.default;

});
define('myproject/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, bs_form) {

	'use strict';



	exports.default = bs_form.default;

});
define('myproject/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, bs_input) {

	'use strict';



	exports.default = bs_input.default;

});
define('myproject/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, bs_modal_backdrop) {

	'use strict';



	exports.default = bs_modal_backdrop.default;

});
define('myproject/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, bs_modal_body) {

	'use strict';



	exports.default = bs_modal_body.default;

});
define('myproject/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, bs_modal_dialog) {

	'use strict';



	exports.default = bs_modal_dialog.default;

});
define('myproject/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, bs_modal_footer) {

	'use strict';



	exports.default = bs_modal_footer.default;

});
define('myproject/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, bs_modal_header) {

	'use strict';



	exports.default = bs_modal_header.default;

});
define('myproject/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, bs_modal) {

	'use strict';



	exports.default = bs_modal.default;

});
define('myproject/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, bs_nav_item) {

	'use strict';



	exports.default = bs_nav_item.default;

});
define('myproject/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, bs_nav) {

	'use strict';



	exports.default = bs_nav.default;

});
define('myproject/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, bs_navbar_content) {

	'use strict';



	exports.default = bs_navbar_content.default;

});
define('myproject/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, bs_navbar_nav) {

	'use strict';



	exports.default = bs_navbar_nav.default;

});
define('myproject/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, bs_navbar_toggle) {

	'use strict';



	exports.default = bs_navbar_toggle.default;

});
define('myproject/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, bs_navbar) {

	'use strict';



	exports.default = bs_navbar.default;

});
define('myproject/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, bs_progress_bar) {

	'use strict';



	exports.default = bs_progress_bar.default;

});
define('myproject/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, bs_progress) {

	'use strict';



	exports.default = bs_progress.default;

});
define('myproject/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, bs_select) {

	'use strict';



	exports.default = bs_select.default;

});
define('myproject/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, bs_tab_pane) {

	'use strict';



	exports.default = bs_tab_pane.default;

});
define('myproject/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, bs_tab) {

	'use strict';



	exports.default = bs_tab.default;

});
define('myproject/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, bs_textarea) {

	'use strict';



	exports.default = bs_textarea.default;

});
define('myproject/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, ember_wormhole) {

	'use strict';



	exports.default = ember_wormhole.default;

});
define('myproject/components/lf-outlet', ['exports', 'liquid-fire/ember-internals'], function (exports, ember_internals) {

	'use strict';

	exports['default'] = ember_internals.StaticOutlet;

});
define('myproject/components/lf-overlay', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var COUNTER = '__lf-modal-open-counter';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'span',
    classNames: ['lf-overlay'],

    didInsertElement: function didInsertElement() {
      var body = Ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.addClass('lf-modal-open');
      body.data(COUNTER, counter + 1);
    },

    willDestroy: function willDestroy() {
      var body = Ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.data(COUNTER, counter - 1);
      if (counter < 2) {
        body.removeClass('lf-modal-open');
      }
    }
  });

});
define('myproject/components/light-box', ['exports', 'ember-cli-lightbox/components/light-box'], function (exports, light_box) {

	'use strict';



	exports.default = light_box.default;

});
define('myproject/components/like-item', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		url: Ember['default'].computed('like.farm', 'like.server', 'like.id', 'like.secret', function () {
			return "https://farm" + this.get('like').farm + ".staticflickr.com/" + this.get('like').server + "/" + this.get('like').objid + "_" + this.get('like').secret + "_b.jpg";
		})
	});

});
define('myproject/components/liquid-bind', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidBind = Ember['default'].Component.extend({
    tagName: '',
    positionalParams: ['value'] // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
  });

  LiquidBind.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidBind;

});
define('myproject/components/liquid-child', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['liquid-child'],

    didInsertElement: function didInsertElement() {
      var $container = this.$();
      if ($container) {
        $container.css('visibility', 'hidden');
      }
      this.sendAction('liquidChildDidRender', this);
    }

  });

});
define('myproject/components/liquid-container', ['exports', 'ember', 'liquid-fire/growable', 'myproject/components/liquid-measured'], function (exports, Ember, Growable, liquid_measured) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(Growable['default'], {
    classNames: ['liquid-container'],

    lockSize: function lockSize(elt, want) {
      elt.outerWidth(want.width);
      elt.outerHeight(want.height);
    },

    unlockSize: function unlockSize() {
      var _this = this;

      var doUnlock = function doUnlock() {
        _this.updateAnimatingClass(false);
        var elt = _this.$();
        if (elt) {
          elt.css({ width: '', height: '' });
        }
      };
      if (this._scaling) {
        this._scaling.then(doUnlock);
      } else {
        doUnlock();
      }
    },

    // We're doing this manually instead of via classNameBindings
    // because it depends on upward-data-flow, which generates warnings
    // under Glimmer.
    updateAnimatingClass: function updateAnimatingClass(on) {
      if (this.isDestroyed || !this._wasInserted) {
        return;
      }
      if (arguments.length === 0) {
        on = this.get('liquidAnimating');
      } else {
        this.set('liquidAnimating', on);
      }
      if (on) {
        this.$().addClass('liquid-animating');
      } else {
        this.$().removeClass('liquid-animating');
      }
    },

    startMonitoringSize: Ember['default'].on('didInsertElement', function () {
      this._wasInserted = true;
      this.updateAnimatingClass();
    }),

    actions: {

      willTransition: function willTransition(versions) {
        if (!this._wasInserted) {
          return;
        }

        // Remember our own size before anything changes
        var elt = this.$();
        this._cachedSize = liquid_measured.measure(elt);

        // And make any children absolutely positioned with fixed sizes.
        for (var i = 0; i < versions.length; i++) {
          goAbsolute(versions[i]);
        }

        // Apply '.liquid-animating' to liquid-container allowing
        // any customizable CSS control while an animating is occuring
        this.updateAnimatingClass(true);
      },

      afterChildInsertion: function afterChildInsertion(versions) {
        var elt = this.$();
        var enableGrowth = this.get('enableGrowth') !== false;

        // Measure  children
        var sizes = [];
        for (var i = 0; i < versions.length; i++) {
          if (versions[i].view) {
            sizes[i] = liquid_measured.measure(versions[i].view.$());
          }
        }

        // Measure ourself again to see how big the new children make
        // us.
        var want = liquid_measured.measure(elt);
        var have = this._cachedSize || want;

        // Make ourself absolute
        if (enableGrowth) {
          this.lockSize(elt, have);
        } else {
          this.lockSize(elt, {
            height: Math.max(want.height, have.height),
            width: Math.max(want.width, have.width)
          });
        }

        // Make the children absolute and fixed size.
        for (i = 0; i < versions.length; i++) {
          goAbsolute(versions[i], sizes[i]);
        }

        // Kick off our growth animation
        if (enableGrowth) {
          this._scaling = this.animateGrowth(elt, have, want);
        }
      },

      afterTransition: function afterTransition(versions) {
        for (var i = 0; i < versions.length; i++) {
          goStatic(versions[i]);
        }
        this.unlockSize();
      }
    }
  });

  function goAbsolute(version, size) {
    if (!version.view) {
      return;
    }
    var elt = version.view.$();
    var pos = elt.position();
    if (!size) {
      size = liquid_measured.measure(elt);
    }
    elt.outerWidth(size.width);
    elt.outerHeight(size.height);
    elt.css({
      position: 'absolute',
      top: pos.top,
      left: pos.left
    });
  }

  function goStatic(version) {
    if (version.view && !version.view.isDestroyed) {
      version.view.$().css({ width: '', height: '', position: '' });
    }
  }

});
define('myproject/components/liquid-if', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, Ember, ember_internals) {

  'use strict';

  var LiquidIf = Ember['default'].Component.extend({
    positionalParams: ['predicate'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    helperName: 'liquid-if',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      var predicate = ember_internals.shouldDisplay(this.getAttr('predicate'));
      this.set('showFirstBlock', this.inverted ? !predicate : predicate);
    }
  });

  LiquidIf.reopenClass({
    positionalParams: ['predicate']
  });

  exports['default'] = LiquidIf;

});
define('myproject/components/liquid-measured', ['exports', 'liquid-fire/components/liquid-measured'], function (exports, liquid_measured) {

	'use strict';



	exports.default = liquid_measured.default;
	exports.measure = liquid_measured.measure;

});
define('myproject/components/liquid-modal', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['liquid-modal'],
    currentContext: Ember['default'].computed('owner.modalContexts.lastObject', function () {
      var context = this.get('owner.modalContexts.lastObject');
      if (context) {
        context.view = this.innerView(context);
      }
      return context;
    }),

    owner: Ember['default'].inject.service('liquid-fire-modals'),

    innerView: function innerView(current) {
      var self = this,
          name = current.get('name'),
          container = this.get('container'),
          component = container.lookup('component-lookup:main').lookupFactory(name);
      Ember['default'].assert("Tried to render a modal using component '" + name + "', but couldn't find it.", !!component);

      var args = Ember['default'].copy(current.get('params'));

      args.registerMyself = Ember['default'].on('init', function () {
        self.set('innerViewInstance', this);
      });

      // set source so we can bind other params to it
      args._source = Ember['default'].computed(function () {
        return current.get("source");
      });

      var otherParams = current.get("options.otherParams");
      var from, to;
      for (from in otherParams) {
        to = otherParams[from];
        args[to] = Ember['default'].computed.alias("_source." + from);
      }

      var actions = current.get("options.actions") || {};

      // Override sendAction in the modal component so we can intercept and
      // dynamically dispatch to the controller as expected
      args.sendAction = function (name) {
        var actionName = actions[name];
        if (!actionName) {
          this._super.apply(this, Array.prototype.slice.call(arguments));
          return;
        }

        var controller = current.get("source");
        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(actionName);
        controller.send.apply(controller, args);
      };

      return component.extend(args);
    },

    actions: {
      outsideClick: function outsideClick() {
        if (this.get('currentContext.options.dismissWithOutsideClick')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'outsideClick');
        }
      },
      escape: function escape() {
        if (this.get('currentContext.options.dismissWithEscape')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'escape');
        }
      },
      dismiss: function dismiss() {
        var source = this.get('currentContext.source'),
            proto = source.constructor.proto(),
            params = this.get('currentContext.options.withParams'),
            clearThem = {};

        for (var key in params) {
          if (proto[key] instanceof Ember['default'].ComputedProperty) {
            clearThem[key] = undefined;
          } else {
            clearThem[key] = proto[key];
          }
        }
        source.setProperties(clearThem);
      }
    }
  });

  function proxyToInnerInstance(self, message) {
    var vi = self.get('innerViewInstance');
    if (vi) {
      vi.send(message);
    }
  }

});
define('myproject/components/liquid-outlet', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidOutlet = Ember['default'].Component.extend({
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      this.set('outletName', this.attrs.inputOutletName || 'main');
    }
  });

  LiquidOutlet.reopenClass({
    positionalParams: ['inputOutletName']
  });

  exports['default'] = LiquidOutlet;

});
define('myproject/components/liquid-spacer', ['exports', 'liquid-fire/components/liquid-spacer'], function (exports, liquid_spacer) {

	'use strict';



	exports.default = liquid_spacer.default;

});
define('myproject/components/liquid-unless', ['exports', 'myproject/components/liquid-if'], function (exports, LiquidIf) {

  'use strict';

  exports['default'] = LiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });

});
define('myproject/components/liquid-versions', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, Ember, ember_internals) {

  'use strict';

  var get = Ember['default'].get;
  var set = Ember['default'].set;

  exports['default'] = Ember['default'].Component.extend({
    tagName: "",
    name: 'liquid-versions',

    transitionMap: Ember['default'].inject.service('liquid-fire-transitions'),

    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      if (!this.versions || this._lastVersion !== this.getAttr('value')) {
        this.appendVersion();
        this._lastVersion = this.getAttr('value');
      }
    },

    appendVersion: function appendVersion() {
      var versions = this.versions;
      var firstTime = false;
      var newValue = this.getAttr('value');
      var oldValue;

      if (!versions) {
        firstTime = true;
        versions = Ember['default'].A();
      } else {
        oldValue = versions[0];
      }

      // TODO: may need to extend the comparison to do the same kind of
      // key-based diffing that htmlbars is doing.
      if (!firstTime && (!oldValue && !newValue || oldValue === newValue)) {
        return;
      }

      this.notifyContainer('willTransition', versions);
      var newVersion = {
        value: newValue,
        shouldRender: newValue || get(this, 'renderWhenFalse')
      };
      versions.unshiftObject(newVersion);

      this.firstTime = firstTime;
      if (firstTime) {
        set(this, 'versions', versions);
      }

      if (!newVersion.shouldRender && !firstTime) {
        this._transition();
      }
    },

    _transition: function _transition() {
      var _this = this;

      var versions = get(this, 'versions');
      var transition;
      var firstTime = this.firstTime;
      this.firstTime = false;

      this.notifyContainer('afterChildInsertion', versions);

      transition = get(this, 'transitionMap').transitionFor({
        versions: versions,
        parentElement: Ember['default'].$(ember_internals.containingElement(this)),
        use: get(this, 'use'),
        // Using strings instead of booleans here is an
        // optimization. The constraint system can match them more
        // efficiently, since it treats boolean constraints as generic
        // "match anything truthy/falsy" predicates, whereas string
        // checks are a direct object property lookup.
        firstTime: firstTime ? 'yes' : 'no',
        helperName: get(this, 'name'),
        outletName: get(this, 'outletName')
      });

      if (this._runningTransition) {
        this._runningTransition.interrupt();
      }
      this._runningTransition = transition;

      transition.run().then(function (wasInterrupted) {
        // if we were interrupted, we don't handle the cleanup because
        // another transition has already taken over.
        if (!wasInterrupted) {
          _this.finalizeVersions(versions);
          _this.notifyContainer("afterTransition", versions);
        }
      }, function (err) {
        _this.finalizeVersions(versions);
        _this.notifyContainer("afterTransition", versions);
        throw err;
      });
    },

    finalizeVersions: function finalizeVersions(versions) {
      versions.replace(1, versions.length - 1);
    },

    notifyContainer: function notifyContainer(method, versions) {
      var target = get(this, 'notify');
      if (target) {
        target.send(method, versions);
      }
    },

    actions: {
      childDidRender: function childDidRender(child) {
        var version = get(child, 'version');
        set(version, 'view', child);
        this._transition();
      }
    }

  });

});
define('myproject/components/liquid-with', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidWith = Ember['default'].Component.extend({
    name: 'liquid-with',
    positionalParams: ['value'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    iAmDeprecated: Ember['default'].on('init', function () {
      Ember['default'].deprecate("liquid-with is deprecated, use liquid-bind instead -- it accepts a block now.");
    })
  });

  LiquidWith.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidWith;

});
define('myproject/components/lm-container', ['exports', 'ember', 'liquid-fire/tabbable'], function (exports, Ember) {

  'use strict';

  /*
     Parts of this file were adapted from ic-modal

     https://github.com/instructure/ic-modal
     Released under The MIT License (MIT)
     Copyright (c) 2014 Instructure, Inc.
  */

  var lastOpenedModal = null;
  Ember['default'].$(document).on('focusin', handleTabIntoBrowser);

  function handleTabIntoBrowser() {
    if (lastOpenedModal) {
      lastOpenedModal.focus();
    }
  }

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['lm-container'],
    attributeBindings: ['tabindex'],
    tabindex: 0,

    keyUp: function keyUp(event) {
      // Escape key
      if (event.keyCode === 27) {
        this.sendAction();
      }
    },

    keyDown: function keyDown(event) {
      // Tab key
      if (event.keyCode === 9) {
        this.constrainTabNavigation(event);
      }
    },

    didInsertElement: function didInsertElement() {
      this.focus();
      lastOpenedModal = this;
    },

    willDestroy: function willDestroy() {
      lastOpenedModal = null;
    },

    focus: function focus() {
      if (this.get('element').contains(document.activeElement)) {
        // just let it be if we already contain the activeElement
        return;
      }
      var target = this.$('[autofocus]');
      if (!target.length) {
        target = this.$(':tabbable');
      }

      if (!target.length) {
        target = this.$();
      }

      target[0].focus();
    },

    constrainTabNavigation: function constrainTabNavigation(event) {
      var tabbable = this.$(':tabbable');
      var finalTabbable = tabbable[event.shiftKey ? 'first' : 'last']()[0];
      var leavingFinalTabbable = finalTabbable === document.activeElement ||
      // handle immediate shift+tab after opening with mouse
      this.get('element') === document.activeElement;
      if (!leavingFinalTabbable) {
        return;
      }
      event.preventDefault();
      tabbable[event.shiftKey ? 'last' : 'first']()[0].focus();
    },

    click: function click(event) {
      if (event.target === this.get('element')) {
        this.sendAction('clickAway');
      }
    }
  });

});
define('myproject/controllers/application', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        isHome: (function () {
            return this.get('currentRouteName') == 'home';
        }).property('currentRouteName')
    });

});
define('myproject/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('myproject/controllers/home', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var PhotoCollection = Ember['default'].ArrayProxy.extend(Ember['default'].SortableMixin, {
		sortProperties: ['dates.taken'],
		sortAscending: false,
		content: []
	});

	exports['default'] = Ember['default'].Controller.extend({
		applicationController: Ember['default'].inject.controller('application'),
		photos: PhotoCollection.create(),
		searchField: '',
		tagSearchField: '',
		filteredPhotosLoaded: (function () {
			return this.get('filteredPhotos').length > 0;
		}).property('filteredPhotos.length'),
		tagList: ['hi', 'cheese'],
		filteredPhotos: (function () {
			var filter = this.get('searchField');
			var rx = new RegExp(filter, 'gi');
			var photos = this.get('photos');

			return photos.filter(function (photo) {
				return photo.get('title').match(rx) || photo.get('owner.username').match(rx);
			});
		}).property('photos.@each', 'searchField'),
		actions: {
			like: function like(photo) {
				var title = photo.get('title');
				if (title.length >= 97) {
					title = title.substring(0, 96) + "...";
				}
				var photodata = {
					'user': this.get('applicationController').get('userid'),
					'title': title,
					'objid': photo.get('id'),
					'farm': photo.get('farm'),
					'secret': photo.get('secret'),
					'server': photo.get('server')
				};
				Ember['default'].$.post('../api/likes/', photodata, function (response) {
					photo.set('liked', true);
					console.log('Request to add like for photo: ' + photo.get('title') + ' returned the following response');
					console.log(response);
				});
			},
			search: function search() {
				this.set('loading', true);
				this.get('photos').content.clear();
				this.store.unloadAll('photo');
				this.send('getPhotos', this.get('tagSearchField'));
			},
			getPhotos: function getPhotos(tag) {
				var apiKey = '01dbbdd8cb57d5d34b5f804aad4e392b';
				var host = 'https://api.flickr.com/services/rest/';
				var method = "flickr.photos.search";
				var requestURL = host + "?method=" + method + "&api_key=" + apiKey + "&tags=" + tag + "&per_page=50&format=json&nojsoncallback=1";
				var photos = this.get('photos');
				var t = this;
				Ember['default'].$.getJSON(requestURL, function (data) {
					if (!data.photos) {
						console.log("Could not load photos. Check your API key");
						return;
					}
					//callback for successfully completed requests
					//make secondary requests to get all of the photo information
					data.photos.photo.map(function (photoitem) {
						//iterate over each photo
						var infoRequestURL = host + "?method=" + "flickr.photos.getInfo" + "&api_key=" + apiKey + "&photo_id=" + photoitem.id + "&format=json&nojsoncallback=1";
						Ember['default'].$.getJSON(infoRequestURL, function (item) {
							var photo = item.photo;
							var tags = photo.tags.tag.map(function (tagitem) {
								return tagitem._content;
							});
							var newPhotoItem = t.store.createRecord('photo', {
								title: photo.title._content,
								dates: photo.dates,
								owner: photo.owner,
								description: photo.description._content,
								link: photo.urls.url[0]._content,
								views: photo.views,
								tags: tags,
								//flickr url data
								id: photo.id,
								farm: photo.farm,
								secret: photo.secret,
								server: photo.server
							});
							photos.pushObject(newPhotoItem);
						});
					});
				});
			},
			clicktag: function clicktag(tag) {
				this.set('tagSearchField', tag);
				this.set('loading', true);
				this.get('photos').content.clear();
				this.store.unloadAll('photo');
				this.send('getPhotos', tag);
			}
		},
		init: function init() {
			this._super.apply(this, arguments);
			var apiKey = '4435e3a217bc7afc94dfcba607b70eb1';
			var host = 'https://api.flickr.com/services/rest/';
			var method = "flickr.tags.getHotList";
			var requestURL = host + "?method=" + method + "&api_key=" + apiKey + "&count=75&format=json&nojsoncallback=1";
			var t = this;
			Ember['default'].$.getJSON(requestURL, function (data) {
				//callback for successfully completed requests
				console.log(data);
				data.hottags.tag.map(function (tag) {
					t.get('tagList').pushObject(tag._content);
				});
			});
		}
	});

});
define('myproject/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('myproject/controllers/profile', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('myproject/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, bs_contains) {

	'use strict';



	exports.default = bs_contains.default;
	exports.bsContains = bs_contains.bsContains;

});
define('myproject/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, bs_eq) {

	'use strict';



	exports.default = bs_eq.default;
	exports.eq = bs_eq.eq;

});
define('myproject/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, bs_not) {

	'use strict';



	exports.default = bs_not.default;
	exports.not = bs_not.not;

});
define('myproject/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, bs_read_path) {

	'use strict';



	exports.default = bs_read_path.default;
	exports.readPath = bs_read_path.readPath;

});
define('myproject/initializers/app-version', ['exports', 'myproject/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('myproject/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, bootstrap_linkto) {

	'use strict';



	exports.default = bootstrap_linkto.default;
	exports.initialize = bootstrap_linkto.initialize;

});
define('myproject/initializers/export-application-global', ['exports', 'ember', 'myproject/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('myproject/initializers/liquid-fire', ['exports', 'liquid-fire/router-dsl-ext', 'liquid-fire/ember-internals'], function (exports, __dep0__, ember_internals) {

  'use strict';

  // This initializer exists only to make sure that the following
  // imports happen before the app boots.
  ember_internals.registerKeywords();

  exports['default'] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };

});
define('myproject/initializers/load-bootstrap-config', ['exports', 'myproject/config/environment', 'ember-bootstrap/config'], function (exports, ENV, Config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() /* container, application */{
    Config['default'].load(ENV['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };

});
define('myproject/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, initializer) {

	'use strict';

	exports['default'] = initializer['default'];

});
define('myproject/liquid-fire/tests/modules/liquid-fire/action.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/action.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/action.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/animate.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/animate.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/animate.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/components/liquid-measured.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire/components');
  test('modules/liquid-fire/components/liquid-measured.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/components/liquid-measured.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/components/liquid-spacer.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire/components');
  test('modules/liquid-fire/components/liquid-spacer.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/components/liquid-spacer.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/constrainables.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/constrainables.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/constrainables.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/constraint.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/constraint.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/constraint.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/constraints.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/constraints.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/constraints.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/dsl.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/dsl.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/dsl.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/ember-internals.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/ember-internals.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/ember-internals.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/growable.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/growable.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/growable.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/index.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/index.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/index.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/internal-rules.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/internal-rules.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/internal-rules.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/modal.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/modal.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/modal.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/modals.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/modals.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/modals.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/mutation-observer.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/mutation-observer.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/mutation-observer.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/promise.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/promise.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/promise.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/router-dsl-ext.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/router-dsl-ext.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/router-dsl-ext.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/rule.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/rule.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/rule.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/running-transition.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/running-transition.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/running-transition.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/tabbable.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/tabbable.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/tabbable.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/transition-map.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/transition-map.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/transition-map.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/velocity-ext.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/velocity-ext.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/velocity-ext.js should pass jshint.');
  });

});
define('myproject/liquid-fire/tests/modules/liquid-fire/version-warnings.jshint', function () {

  'use strict';

  module('JSHint - modules/liquid-fire');
  test('modules/liquid-fire/version-warnings.js should pass jshint', function () {
    ok(true, 'modules/liquid-fire/version-warnings.js should pass jshint.');
  });

});
define('myproject/models/photo', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        title: DS['default'].attr('string'),
        dates: DS['default'].attr('object'),
        //flickr extra data
        owner: DS['default'].attr('object'),
        description: DS['default'].attr('string'),
        link: DS['default'].attr('string'),
        views: DS['default'].attr('number'),
        tags: DS['default'].attr('object'),
        //flickr url data
        id: '',
        farm: DS['default'].attr('number'),
        secret: DS['default'].attr('string'),
        server: DS['default'].attr('string'),
        url: (function () {
            return "https://farm" + this.get('farm') + ".staticflickr.com/" + this.get('server') + "/" + this.get('id') + "_" + this.get('secret') + "_b.jpg";
        }).property('farm', 'server', 'id', 'secret'),
        ownerurl: (function () {
            return "http://www.flickr.com/photos/" + this.get('owner.nsid');
        }).property('owner.nsid'),
        humanReadableDate: (function () {
            var taken = new Date(this.get('dates.taken'));
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            return days[taken.getDay()] + " " + months[taken.getMonth()] + " " + taken.getDate() + ", " + taken.getFullYear();
        }).property('dates.taken')

    });

});
define('myproject/router', ['exports', 'ember', 'myproject/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('profile', { path: "profile/:userid" });
    this.route('home');
  });

  exports['default'] = Router;

});
define('myproject/routes/home', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('myproject/routes/profile', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		setupController: function setupController(controller, model) {
			var url = '../api/userprofiles/' + model.userid + '/';
			Ember['default'].$.get(url, function (response) {
				if (!response.detail) {
					//success
					controller.set('likes', response.likes);
					console.log('Loading user profile');
				} else {
					//errors
					console.log('Error loading user profile.');
				}
				console.log(response);
			});
		}
	});

});
define('myproject/services/liquid-fire-modals', ['exports', 'liquid-fire/modals'], function (exports, Modals) {

	'use strict';

	exports['default'] = Modals['default'];

});
define('myproject/services/liquid-fire-transitions', ['exports', 'liquid-fire/transition-map'], function (exports, TransitionMap) {

	'use strict';

	exports['default'] = TransitionMap['default'];

});
define('myproject/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 20
                },
                "end": {
                  "line": 12,
                  "column": 20
                }
              },
              "moduleName": "myproject/templates/application.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","bs-input",[],["type","text","value",["subexpr","@mut",[["get","searchField",["loc",[null,[11,53],[11,64]]]]],[],[]],"placeholder","filter photos"],["loc",[null,[11,24],[11,94]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 16
              },
              "end": {
                "line": 17,
                "column": 16
              }
            },
            "moduleName": "myproject/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"type","submit");
            dom.setAttribute(el1,"class","btn btn-default");
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","glyphicon glyphicon-search");
            dom.setAttribute(el2,"aria-hidden","true");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [
            ["block","if",[["get","filteredPhotos",["loc",[null,[10,26],[10,40]]]]],[],0,null,["loc",[null,[10,20],[12,27]]]],
            ["inline","bs-input",[],["type","text","value",["subexpr","@mut",[["get","tagSearchField",["loc",[null,[13,49],[13,63]]]]],[],[]],"action","search","placeholder","search for a flickr tag"],["loc",[null,[13,20],[13,119]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 12
            },
            "end": {
              "line": 18,
              "column": 12
            }
          },
          "moduleName": "myproject/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","bs-form",[],["formLayout","inline","class","search-form","action","search"],0,null,["loc",[null,[9,16],[17,28]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 24
              },
              "end": {
                "line": 20,
                "column": 47
              }
            },
            "moduleName": "myproject/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Home");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 12
            },
            "end": {
              "line": 22,
              "column": 12
            }
          },
          "moduleName": "myproject/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","nav navbar-nav left-menu");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),0,0);
          return morphs;
        },
        statements: [
          ["block","link-to",["home"],[],0,null,["loc",[null,[20,24],[20,59]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 6
          }
        },
        "moduleName": "myproject/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/application.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1,"class","navbar navbar-default navbar-fixed-top");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","navbar-brand");
        dom.setAttribute(el4,"href","#");
        var el5 = dom.createTextNode("My App");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-right search-field");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","if",[["get","isHome",["loc",[null,[8,18],[8,24]]]]],[],0,1,["loc",[null,[8,12],[22,19]]]],
        ["inline","auth-manager",[],["class","auth-mgr","userid",["subexpr","@mut",[["get","userid",["loc",[null,[23,51],[23,57]]]]],[],[]]],["loc",[null,[23,12],[23,59]]]],
        ["content","outlet",["loc",[null,[29,4],[29,14]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/auth-manager', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 8
              },
              "end": {
                "line": 3,
                "column": 49
              }
            },
            "moduleName": "myproject/templates/components/auth-manager.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["content","username",["loc",[null,[3,37],[3,49]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/auth-manager.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1,"class","auth-form");
          var el2 = dom.createTextNode("\n		Hello ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","btn btn-default");
          var el3 = dom.createTextNode("Log out");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [2]);
          var element6 = dom.childAt(element5, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element5,1,1);
          morphs[1] = dom.createElementMorph(element6);
          return morphs;
        },
        statements: [
          ["block","link-to",["profile",["get","userid",["loc",[null,[3,29],[3,35]]]]],[],0,null,["loc",[null,[3,8],[3,61]]]],
          ["element","action",["logout"],[],["loc",[null,[4,48],[4,67]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 1
              },
              "end": {
                "line": 24,
                "column": 1
              }
            },
            "moduleName": "myproject/templates/components/auth-manager.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("form");
            dom.setAttribute(el1,"class","form-inline auth-form");
            var el2 = dom.createTextNode("\n\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group has-error");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("label");
            dom.setAttribute(el3,"class","control-label");
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","alert alert-danger");
            dom.setAttribute(el4,"style","padding: 5px; margin-bottom: 0px;");
            dom.setAttribute(el4,"role","alert");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group has-error");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            dom.setAttribute(el2,"class","checkbox");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" Remember me\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"type","button");
            dom.setAttribute(el2,"class","btn btn-default");
            var el3 = dom.createTextNode("Sign in");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var element3 = dom.childAt(element2, [1]);
            var element4 = dom.childAt(element2, [7]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(element3, [1, 0]),0,0);
            morphs[1] = dom.createMorphAt(element3,3,3);
            morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
            morphs[3] = dom.createMorphAt(dom.childAt(element2, [5]),1,1);
            morphs[4] = dom.createElementMorph(element4);
            return morphs;
          },
          statements: [
            ["content","errorMsg",["loc",[null,[12,120],[12,132]]]],
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","username",["loc",[null,[13,55],[13,63]]]]],[],[]],"placeholder","Username","enter","login"],["loc",[null,[13,4],[13,103]]]],
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","password",["loc",[null,[16,55],[16,63]]]]],[],[]],"placeholder","Password","type","password","enter","login"],["loc",[null,[16,4],[16,119]]]],
            ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","remember",["loc",[null,[19,36],[19,44]]]]],[],[]]],["loc",[null,[19,4],[19,46]]]],
            ["element","action",["login"],[],["loc",[null,[21,49],[21,67]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 1
              },
              "end": {
                "line": 38,
                "column": 1
              }
            },
            "moduleName": "myproject/templates/components/auth-manager.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("form");
            dom.setAttribute(el1,"class","form-inline auth-form");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            dom.setAttribute(el2,"class","checkbox");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" Remember me\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"type","button");
            dom.setAttribute(el2,"class","btn btn-default");
            var el3 = dom.createTextNode("Sign in");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [7]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
            morphs[3] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","username",["loc",[null,[27,55],[27,63]]]]],[],[]],"placeholder","Username","enter","login"],["loc",[null,[27,4],[27,103]]]],
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","password",["loc",[null,[30,55],[30,63]]]]],[],[]],"placeholder","Password","type","password","enter","login"],["loc",[null,[30,4],[30,119]]]],
            ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","remember",["loc",[null,[33,36],[33,44]]]]],[],[]]],["loc",[null,[33,4],[33,46]]]],
            ["element","action",["login"],[],["loc",[null,[35,49],[35,67]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 39,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/auth-manager.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","errorMsg",["loc",[null,[7,7],[7,15]]]]],[],0,1,["loc",[null,[7,1],[38,8]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 40,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/auth-manager.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","isLoggedIn",["loc",[null,[1,6],[1,16]]]]],[],0,1,["loc",[null,[1,0],[39,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/bs-accordion-item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-accordion-item.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["content","yield",["loc",[null,[10,8],[10,17]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/bs-accordion-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"role","tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2,"class","panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]),1,1);
        morphs[3] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["panel-heading ",["subexpr","if",[["get","collapsed",["loc",[null,[1,68],[1,77]]]],"collapsed","expanded"],[],["loc",[null,[1,63],[1,102]]]]]]],
        ["element","action",["toggleActive"],[],["loc",[null,[1,16],[1,41]]]],
        ["content","title",["loc",[null,[4,12],[4,21]]]],
        ["block","bs-collapse",[],["collapsed",["subexpr","@mut",[["get","collapsed",["loc",[null,[8,25],[8,34]]]]],[],[]],"class","panel-collapse"],0,null,["loc",[null,[8,0],[12,16]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/bs-alert', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "myproject/templates/components/bs-alert.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"type","button");
            dom.setAttribute(el1,"class","close");
            dom.setAttribute(el1,"aria-label","Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"aria-hidden","true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [
            ["element","action",["dismiss"],[],["loc",[null,[3,59],[3,79]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-alert.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","dismissible",["loc",[null,[2,6],[2,17]]]]],[],0,null,["loc",[null,[2,0],[4,7]]]],
          ["content","yield",["loc",[null,[5,0],[5,9]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/bs-alert.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","unless",[["get","hidden",["loc",[null,[1,10],[1,16]]]]],[],0,null,["loc",[null,[1,0],[6,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/bs-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "myproject/templates/components/bs-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","icon",["loc",[null,[1,24],[1,28]]]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "myproject/templates/components/bs-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","icon",["loc",[null,[1,6],[1,10]]]]],[],0,null,["loc",[null,[1,0],[1,44]]]],
        ["content","text",["loc",[null,[1,44],[1,52]]]],
        ["content","yield",["loc",[null,[1,52],[1,61]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/bs-form-element', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "myproject/templates/components/bs-form-element.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","partial",[["get","formElementTemplate",["loc",[null,[1,10],[1,29]]]]],[],["loc",[null,[1,0],[1,31]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/bs-form-group', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-form-group.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"aria-hidden","true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-control-feedback ",["get","iconName",["loc",[null,[3,41],[3,49]]]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "myproject/templates/components/bs-form-group.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]],
        ["block","if",[["get","hasFeedback",["loc",[null,[2,6],[2,17]]]]],[],0,null,["loc",[null,[2,0],[4,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/bs-form', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "myproject/templates/components/bs-form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/bs-modal-dialog', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","bs-modal-header",[],["title",["subexpr","@mut",[["get","title",["loc",[null,[4,36],[4,41]]]]],[],[]],"closeButton",["subexpr","@mut",[["get","closeButton",["loc",[null,[4,54],[4,65]]]]],[],[]]],["loc",[null,[4,12],[4,67]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "myproject/templates/components/bs-modal-dialog.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","yield",["loc",[null,[8,16],[8,25]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","bs-modal-body",[],[],0,null,["loc",[null,[7,12],[9,30]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","yield",["loc",[null,[11,12],[11,21]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","bs-modal-footer",["loc",[null,[15,12],[15,31]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "myproject/templates/components/bs-modal-dialog.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(element1,2,2);
        morphs[3] = dom.createMorphAt(element1,4,4);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["modal-dialog ",["get","sizeClass",["loc",[null,[1,27],[1,36]]]]]]],
        ["block","if",[["get","header",["loc",[null,[3,14],[3,20]]]]],[],0,null,["loc",[null,[3,8],[5,15]]]],
        ["block","if",[["get","body",["loc",[null,[6,14],[6,18]]]]],[],1,2,["loc",[null,[6,8],[12,15]]]],
        ["block","if",[["get","footer",["loc",[null,[14,14],[14,20]]]]],[],3,null,["loc",[null,[14,8],[16,15]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('myproject/templates/components/bs-modal-footer', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","this",["loc",[null,[2,12],[2,16]]]]],[],["loc",[null,[2,4],[2,18]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","closeTitle",["loc",[null,[5,52],[5,66]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","submitTitle",["loc",[null,[6,81],[6,96]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
            return morphs;
          },
          statements: [
            ["block","bs-button",[],["type","default","action","close"],0,null,["loc",[null,[5,8],[5,80]]]],
            ["block","bs-button",[],["type","primary","buttonType","submit","disabled",["subexpr","@mut",[["get","submitDisabled",["loc",[null,[6,65],[6,79]]]]],[],[]]],1,null,["loc",[null,[6,8],[6,110]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","closeTitle",["loc",[null,[8,52],[8,66]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["block","bs-button",[],["type","primary","action","close"],0,null,["loc",[null,[8,8],[8,80]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","hasSubmitButton",["loc",[null,[4,10],[4,25]]]]],[],0,1,["loc",[null,[4,4],[9,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "myproject/templates/components/bs-modal-footer.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[10,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/bs-modal-header', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"type","button");
          dom.setAttribute(el1,"class","close");
          dom.setAttribute(el1,"aria-label","Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"aria-hidden","true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["close"],[],["loc",[null,[2,59],[2,77]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","this",["loc",[null,[5,12],[5,16]]]]],[],["loc",[null,[5,4],[5,18]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-modal-header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1,"class","modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","title",["loc",[null,[7,28],[7,37]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/bs-modal-header.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","closeButton",["loc",[null,[1,6],[1,17]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["block","if",[["get","hasBlock",["loc",[null,[4,6],[4,14]]]]],[],1,2,["loc",[null,[4,0],[8,7]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('myproject/templates/components/bs-modal', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "myproject/templates/components/bs-modal.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","this",["loc",[null,[4,10],[4,14]]]]],[],["loc",[null,[4,2],[4,16]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 0
              }
            },
            "moduleName": "myproject/templates/components/bs-modal.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["modal-backdrop ",["subexpr","if",[["get","fade",["loc",[null,[8,34],[8,38]]]],"fade"],[],["loc",[null,[8,29],[8,47]]]]," ",["subexpr","if",[["get","in",["loc",[null,[8,53],[8,55]]]],"in"],[],["loc",[null,[8,48],[8,62]]]]]]],
            ["attribute","id",["concat",[["get","backdropId",["loc",[null,[8,70],[8,80]]]]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-modal.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          return morphs;
        },
        statements: [
          ["block","bs-modal-dialog",[],["close",["subexpr","action",["close"],[],["loc",[null,[3,25],[3,41]]]],"fade",["subexpr","@mut",[["get","fade",["loc",[null,[3,47],[3,51]]]]],[],[]],"in",["subexpr","@mut",[["get","in",["loc",[null,[3,55],[3,57]]]]],[],[]],"id",["subexpr","@mut",[["get","modalId",["loc",[null,[3,61],[3,68]]]]],[],[]],"title",["subexpr","@mut",[["get","title",["loc",[null,[3,75],[3,80]]]]],[],[]],"closeButton",["subexpr","@mut",[["get","closeButton",["loc",[null,[3,93],[3,104]]]]],[],[]],"keyboard",["subexpr","@mut",[["get","keyboard",["loc",[null,[3,114],[3,122]]]]],[],[]],"header",["subexpr","@mut",[["get","header",["loc",[null,[3,130],[3,136]]]]],[],[]],"body",["subexpr","@mut",[["get","body",["loc",[null,[3,142],[3,146]]]]],[],[]],"footer",["subexpr","@mut",[["get","footer",["loc",[null,[3,154],[3,160]]]]],[],[]],"size",["subexpr","@mut",[["get","size",["loc",[null,[3,166],[3,170]]]]],[],[]],"backdropClose",["subexpr","@mut",[["get","backdropClose",["loc",[null,[3,185],[3,198]]]]],[],[]]],0,null,["loc",[null,[3,0],[5,20]]]],
          ["block","if",[["get","showBackdrop",["loc",[null,[7,6],[7,18]]]]],[],1,null,["loc",[null,[7,0],[9,7]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 19
          }
        },
        "moduleName": "myproject/templates/components/bs-modal.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","ember-wormhole",[],["to","ember-bootstrap-modal-container","renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[1,69],[1,82]]]]],[],[]]],0,null,["loc",[null,[1,0],[11,19]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/bs-progress-bar', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "myproject/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","percentRounded",["loc",[null,[4,16],[4,30]]]]],[],["loc",[null,[4,8],[4,32]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "myproject/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","percentRounded",["loc",[null,[6,8],[6,26]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-progress-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","hasBlock",["loc",[null,[3,10],[3,18]]]]],[],0,1,["loc",[null,[3,4],[7,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "myproject/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","percentRounded",["loc",[null,[10,38],[10,52]]]]],[],["loc",[null,[10,30],[10,54]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "myproject/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","percentRounded",["loc",[null,[12,30],[12,48]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-progress-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","hasBlock",["loc",[null,[9,10],[9,18]]]]],[],0,1,["loc",[null,[9,4],[13,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/bs-progress-bar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","showLabel",["loc",[null,[2,6],[2,15]]]]],[],0,1,["loc",[null,[2,0],[15,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/bs-progress', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/bs-progress.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/bs-select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1,"disabled","");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1,1,1);
          return morphs;
        },
        statements: [
          ["attribute","selected",["subexpr","bs-not",[["get","value",["loc",[null,[2,39],[2,44]]]]],[],["loc",[null,[2,30],[2,46]]]]],
          ["content","prompt",["loc",[null,[3,8],[3,18]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/bs-select.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","value",["concat",[["subexpr","bs-read-path",[["get","item",["loc",[null,[8,34],[8,38]]]],["get","optionValuePath",["loc",[null,[8,39],[8,54]]]]],[],["loc",[null,[8,19],[8,56]]]]]]],
          ["attribute","selected",["subexpr","bs-eq",[["get","item",["loc",[null,[9,29],[9,33]]]],["get","value",["loc",[null,[9,34],[9,39]]]]],[],["loc",[null,[9,21],[9,41]]]]],
          ["inline","bs-read-path",[["get","item",["loc",[null,[10,23],[10,27]]]],["get","optionLabelPath",["loc",[null,[10,28],[10,43]]]]],[],["loc",[null,[10,8],[10,45]]]]
        ],
        locals: ["item"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "myproject/templates/components/bs-select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","prompt",["loc",[null,[1,6],[1,12]]]]],[],0,null,["loc",[null,[1,0],[5,7]]]],
        ["block","each",[["get","content",["loc",[null,[7,8],[7,15]]]]],["key","@identity"],1,null,["loc",[null,[7,0],[12,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/form-element/errors', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/errors.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","validationMessages.firstObject",["loc",[null,[2,29],[2,63]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "myproject/templates/components/form-element/errors.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","showValidationMessages",["loc",[null,[1,6],[1,28]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/form-element/feedback-icon', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/feedback-icon.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"aria-hidden","true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-control-feedback ",["get","iconName",["loc",[null,[2,41],[2,49]]]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "myproject/templates/components/form-element/feedback-icon.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasFeedback",["loc",[null,[1,6],[1,17]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/form-element/horizontal/checkbox', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "myproject/templates/components/form-element/horizontal/checkbox.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(element1,3,3);
        morphs[3] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[1,14],[1,38]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[1,43],[1,73]]]]]]],
        ["inline","input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[4,25],[4,29]]]]],[],[]],"type","checkbox","checked",["subexpr","@mut",[["get","value",["loc",[null,[4,54],[4,59]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,69],[4,77]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,87],[4,95]]]]],[],[]]],["loc",[null,[4,12],[4,97]]]],
        ["content","label",["loc",[null,[4,98],[4,107]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[7,4],[7,48]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/form-element/horizontal/default', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "myproject/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","value",["loc",[null,[5,20],[5,25]]]],["get","formElementId",["loc",[null,[5,26],[5,39]]]],["get","validation",["loc",[null,[5,40],[5,50]]]]],[],["loc",[null,[5,12],[5,52]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "myproject/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","bs-input",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[7,26],[7,39]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,45],[7,49]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[7,55],[7,66]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[7,73],[7,78]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[7,91],[7,102]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[7,113],[7,122]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[7,132],[7,140]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[7,150],[7,158]]]]],[],[]]],["loc",[null,[7,12],[7,160]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/horizontal/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1,0,0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2,1,1);
          morphs[5] = dom.createMorphAt(element2,3,3);
          morphs[6] = dom.createMorphAt(element2,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["get","horizontalLabelGridClass",["loc",[null,[2,34],[2,58]]]]," ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,66],[2,80]]]],"sr-only"],[],["loc",[null,[2,61],[2,92]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,101],[2,114]]]]]]],
          ["content","label",["loc",[null,[2,118],[2,127]]]],
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[3,18],[3,42]]]]]]],
          ["block","if",[["get","hasBlock",["loc",[null,[4,14],[4,22]]]]],[],0,1,["loc",[null,[4,8],[8,15]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[9,8],[9,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[10,8],[10,52]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "myproject/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","value",["loc",[null,[15,20],[15,25]]]],["get","formElementId",["loc",[null,[15,26],[15,39]]]],["get","validation",["loc",[null,[15,40],[15,50]]]]],[],["loc",[null,[15,12],[15,52]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "myproject/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","bs-input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[17,28],[17,32]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[17,38],[17,49]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[17,56],[17,61]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[17,74],[17,85]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[17,96],[17,105]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[17,115],[17,123]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[17,133],[17,141]]]]],[],[]]],["loc",[null,[17,12],[17,143]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/horizontal/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(element0,3,3);
          morphs[3] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[13,18],[13,42]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[13,47],[13,77]]]]]]],
          ["block","if",[["get","hasBlock",["loc",[null,[14,14],[14,22]]]]],[],0,1,["loc",[null,[14,8],[18,15]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[19,8],[19,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[20,8],[20,52]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/horizontal/default.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[22,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/form-element/horizontal/select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/horizontal/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1,0,0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2,1,1);
          morphs[5] = dom.createMorphAt(element2,3,3);
          morphs[6] = dom.createMorphAt(element2,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["get","horizontalLabelGridClass",["loc",[null,[2,34],[2,58]]]]," ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,66],[2,80]]]],"sr-only"],[],["loc",[null,[2,61],[2,92]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,101],[2,114]]]]]]],
          ["content","label",["loc",[null,[2,118],[2,127]]]],
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[3,18],[3,42]]]]]]],
          ["inline","bs-select",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,23],[4,36]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,42],[4,46]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[4,55],[4,62]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[4,79],[4,98]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[4,115],[4,134]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,141],[4,146]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,156],[4,164]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,174],[4,182]]]]],[],[]]],["loc",[null,[4,8],[4,184]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,8],[5,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,8],[6,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/horizontal/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(element0,3,3);
          morphs[3] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[9,18],[9,42]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[9,47],[9,77]]]]]]],
          ["inline","bs-select",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[10,25],[10,29]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[10,38],[10,45]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[10,62],[10,81]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[10,98],[10,117]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,124],[10,129]]]]],[],[]]],["loc",[null,[10,8],[10,131]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[11,8],[11,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[12,8],[12,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/horizontal/select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[14,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/form-element/horizontal/textarea', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/horizontal/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1,0,0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2,1,1);
          morphs[5] = dom.createMorphAt(element2,3,3);
          morphs[6] = dom.createMorphAt(element2,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["get","horizontalLabelGridClass",["loc",[null,[2,34],[2,58]]]]," ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,66],[2,80]]]],"sr-only"],[],["loc",[null,[2,61],[2,92]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,101],[2,114]]]]]]],
          ["content","label",["loc",[null,[2,118],[2,127]]]],
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[3,18],[3,42]]]]]]],
          ["inline","bs-textarea",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,25],[4,38]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,44],[4,48]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,55],[4,60]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[4,73],[4,84]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[4,95],[4,104]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[4,110],[4,114]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[4,120],[4,124]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,134],[4,142]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,152],[4,160]]]]],[],[]]],["loc",[null,[4,8],[4,162]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,8],[5,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,8],[6,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/horizontal/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(element0,3,3);
          morphs[3] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[9,18],[9,42]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[9,47],[9,77]]]]]]],
          ["inline","bs-textarea",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[10,27],[10,31]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,38],[10,43]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[10,56],[10,67]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[10,78],[10,87]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[10,93],[10,97]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[10,103],[10,107]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[10,117],[10,125]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[10,135],[10,143]]]]],[],[]]],["loc",[null,[10,8],[10,145]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[11,8],[11,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[12,8],[12,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/horizontal/textarea.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[14,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/form-element/inline/checkbox', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "myproject/templates/components/form-element/inline/checkbox.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["inline","input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[3,21],[3,25]]]]],[],[]],"type","checkbox","checked",["subexpr","@mut",[["get","value",["loc",[null,[3,50],[3,55]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[3,65],[3,73]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[3,83],[3,91]]]]],[],[]]],["loc",[null,[3,8],[3,93]]]],
        ["content","label",["loc",[null,[3,94],[3,103]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/form-element/inline/default', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/inline/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/inline/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","value",["loc",[null,[5,12],[5,17]]]],["get","formElementId",["loc",[null,[5,18],[5,31]]]],["get","validation",["loc",[null,[5,32],[5,42]]]]],[],["loc",[null,[5,4],[5,44]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/inline/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","bs-input",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[7,18],[7,31]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,37],[7,41]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[7,47],[7,58]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[7,65],[7,70]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[7,83],[7,94]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[7,105],[7,114]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[7,124],[7,132]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[7,142],[7,150]]]]],[],[]]],["loc",[null,[7,4],[7,152]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/inline/default.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["block","if",[["get","hasBlock",["loc",[null,[4,6],[4,14]]]]],[],1,2,["loc",[null,[4,0],[8,7]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[9,0],[9,51]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('myproject/templates/components/form-element/inline/select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/inline/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/inline/select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-select",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,15],[4,28]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,34],[4,38]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[4,47],[4,54]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[4,71],[4,90]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[4,107],[4,126]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,133],[4,138]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,148],[4,156]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,166],[4,174]]]]],[],[]]],["loc",[null,[4,0],[4,176]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/form-element/inline/textarea', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/inline/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/inline/textarea.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-textarea",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,17],[4,30]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,36],[4,40]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,47],[4,52]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[4,65],[4,76]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[4,87],[4,96]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[4,102],[4,106]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[4,112],[4,116]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,126],[4,134]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,144],[4,152]]]]],[],[]]],["loc",[null,[4,0],[4,154]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/form-element/vertical/checkbox', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "myproject/templates/components/form-element/vertical/checkbox.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[3,21],[3,25]]]]],[],[]],"type","checkbox","checked",["subexpr","@mut",[["get","value",["loc",[null,[3,50],[3,55]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[3,65],[3,73]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[3,83],[3,91]]]]],[],[]]],["loc",[null,[3,8],[3,93]]]],
        ["content","label",["loc",[null,[3,94],[3,103]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/form-element/vertical/default', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/vertical/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/vertical/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","value",["loc",[null,[5,12],[5,17]]]],["get","formElementId",["loc",[null,[5,18],[5,31]]]],["get","validation",["loc",[null,[5,32],[5,42]]]]],[],["loc",[null,[5,4],[5,44]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/vertical/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","bs-input",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[7,18],[7,31]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,37],[7,41]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[7,47],[7,58]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[7,65],[7,70]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[7,83],[7,94]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[7,105],[7,114]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[7,124],[7,132]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[7,142],[7,150]]]]],[],[]]],["loc",[null,[7,4],[7,152]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/vertical/default.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["block","if",[["get","hasBlock",["loc",[null,[4,6],[4,14]]]]],[],1,2,["loc",[null,[4,0],[8,7]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[9,0],[9,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[10,0],[10,44]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('myproject/templates/components/form-element/vertical/select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/vertical/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/vertical/select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-select",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,15],[4,28]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,34],[4,38]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[4,47],[4,54]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[4,71],[4,90]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[4,107],[4,126]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,133],[4,138]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,148],[4,156]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,166],[4,174]]]]],[],[]]],["loc",[null,[4,0],[4,176]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/form-element/vertical/textarea', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/form-element/vertical/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/form-element/vertical/textarea.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-textarea",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,17],[4,30]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,37],[4,42]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,48],[4,52]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[4,65],[4,76]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[4,87],[4,96]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,106],[4,114]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,124],[4,132]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[4,138],[4,142]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[4,148],[4,152]]]]],[],[]]],["loc",[null,[4,0],[4,154]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/like-item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 5
          }
        },
        "moduleName": "myproject/templates/components/like-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"class","list-group-item");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","media");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","media-heading");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","media-body");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"class","media-object profile-feed-img");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createAttrMorph(element1, 'src');
        return morphs;
      },
      statements: [
        ["content","like.title",["loc",[null,[3,28],[3,42]]]],
        ["attribute","src",["concat",[["get","url",["loc",[null,[5,15],[5,18]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/liquid-bind', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 4
                },
                "end": {
                  "line": 7,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-bind.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["inline","yield",[["get","version",["loc",[null,[6,15],[6,22]]]]],[],["loc",[null,[6,6],[6,26]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 4
                },
                "end": {
                  "line": 9,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-bind.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","version",["loc",[null,[8,6],[8,20]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 0
              }
            },
            "moduleName": "myproject/templates/components/liquid-bind.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","if",[["get","hasBlock",["loc",[null,[5,11],[5,19]]]]],[],0,1,["loc",[null,[5,4],[9,12]]]]
          ],
          locals: ["version"],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-bind.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[2,28],[2,39]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[2,44],[2,47]]]]],[],[]],"outletName",["subexpr","@mut",[["get","attrs.outletName",["loc",[null,[3,32],[3,48]]]]],[],[]],"name","liquid-bind","renderWhenFalse",true,"class",["subexpr","@mut",[["get","class",["loc",[null,[4,67],[4,72]]]]],[],[]]],0,null,["loc",[null,[2,2],[11,22]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.12",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 6
                  },
                  "end": {
                    "line": 27,
                    "column": 6
                  }
                },
                "moduleName": "myproject/templates/components/liquid-bind.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [
                ["inline","yield",[["get","version",["loc",[null,[26,17],[26,24]]]]],[],["loc",[null,[26,8],[26,28]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.12",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 6
                  },
                  "end": {
                    "line": 29,
                    "column": 6
                  }
                },
                "moduleName": "myproject/templates/components/liquid-bind.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [
                ["content","version",["loc",[null,[28,8],[28,22]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 4
                },
                "end": {
                  "line": 31,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-bind.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["block","if",[["get","hasBlock",["loc",[null,[25,13],[25,21]]]]],[],0,1,["loc",[null,[25,6],[29,14]]]]
            ],
            locals: ["version"],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 32,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-bind.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[21,30],[21,41]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[21,49],[21,58]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[21,63],[21,66]]]]],[],[]],"outletName",["subexpr","@mut",[["get","attrs.outletName",["loc",[null,[22,34],[22,50]]]]],[],[]],"name","liquid-bind","renderWhenFalse",true],0,null,["loc",[null,[21,4],[31,26]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-bind.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[14,9],[14,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[15,12],[15,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[16,19],[16,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[17,26],[17,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[18,17],[18,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[19,19],[19,31]]]]],[],[]]],0,null,["loc",[null,[13,2],[32,25]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/liquid-bind.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[33,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/liquid-container', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "myproject/templates/components/liquid-container.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","yield",[["get","this",["loc",[null,[1,8],[1,12]]]]],[],["loc",[null,[1,0],[1,14]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('myproject/templates/components/liquid-if', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 6,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-if.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","yield",["loc",[null,[5,6],[5,15]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 8,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-if.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","yield",[],["to","inverse"],["loc",[null,[7,6],[7,28]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-if.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","if",[["get","valueVersion",["loc",[null,[4,10],[4,22]]]]],[],0,1,["loc",[null,[4,4],[8,11]]]]
          ],
          locals: ["valueVersion"],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-if.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","showFirstBlock",["loc",[null,[2,27],[2,41]]]]],[],[]],"name",["subexpr","@mut",[["get","helperName",["loc",[null,[2,47],[2,57]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[3,27],[3,30]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[3,47],[3,67]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[3,74],[3,79]]]]],[],[]]],0,null,["loc",[null,[2,2],[9,22]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.12",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 6
                  },
                  "end": {
                    "line": 23,
                    "column": 6
                  }
                },
                "moduleName": "myproject/templates/components/liquid-if.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["content","yield",["loc",[null,[22,8],[22,17]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.12",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 23,
                    "column": 6
                  },
                  "end": {
                    "line": 25,
                    "column": 6
                  }
                },
                "moduleName": "myproject/templates/components/liquid-if.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["inline","yield",[],["to","inverse"],["loc",[null,[24,8],[24,30]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 4
                },
                "end": {
                  "line": 26,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-if.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["block","if",[["get","valueVersion",["loc",[null,[21,12],[21,24]]]]],[],0,1,["loc",[null,[21,6],[25,13]]]]
            ],
            locals: ["valueVersion"],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 27,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-if.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","showFirstBlock",["loc",[null,[19,29],[19,43]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[19,51],[19,60]]]]],[],[]],"name",["subexpr","@mut",[["get","helperName",["loc",[null,[19,66],[19,76]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[20,8],[20,11]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[20,28],[20,48]]]]],0,null,["loc",[null,[19,4],[26,24]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-if.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[12,9],[12,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[13,12],[13,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[14,19],[14,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[15,26],[15,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[16,17],[16,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[17,19],[17,31]]]]],[],[]]],0,null,["loc",[null,[11,2],[27,23]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/liquid-if.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[28,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/components/liquid-modal', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-modal.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"role","dialog");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'aria-labelledby');
            morphs[2] = dom.createAttrMorph(element0, 'aria-label');
            morphs[3] = dom.createMorphAt(element0,1,1);
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["lf-dialog ",["get","cc.options.dialogClass",["loc",[null,[3,28],[3,50]]]]]]],
            ["attribute","aria-labelledby",["get","cc.options.ariaLabelledBy",["loc",[null,[3,86],[3,111]]]]],
            ["attribute","aria-label",["get","cc.options.ariaLabel",["loc",[null,[3,127],[3,147]]]]],
            ["inline","lf-vue",[["get","cc.view",["loc",[null,[4,15],[4,22]]]]],["dismiss","dismiss"],["loc",[null,[4,6],[4,42]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-modal.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","lm-container",[],["action","escape","clickAway","outsideClick"],0,null,["loc",[null,[2,2],[6,19]]]],
          ["content","lf-overlay",["loc",[null,[7,2],[7,16]]]]
        ],
        locals: ["cc"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/liquid-modal.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","liquid-versions",[],["name","liquid-modal","value",["subexpr","@mut",[["get","currentContext",["loc",[null,[1,45],[1,59]]]]],[],[]],"renderWhenFalse",false],0,null,["loc",[null,[1,0],[8,20]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/liquid-outlet', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 6
                },
                "end": {
                  "line": 17,
                  "column": 6
                }
              },
              "moduleName": "myproject/templates/components/liquid-outlet.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["inline","outlet",[["get","outletName",["loc",[null,[16,17],[16,27]]]]],[],["loc",[null,[16,8],[16,29]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-outlet.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","set-outlet-state",[["get","outletName",["loc",[null,[15,26],[15,36]]]],["get","version.outletState",["loc",[null,[15,37],[15,56]]]]],[],0,null,["loc",[null,[15,6],[17,28]]]]
          ],
          locals: ["version"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-outlet.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-bind",[["get","outletState",["loc",[null,[2,17],[2,28]]]]],["id",["subexpr","@mut",[["get","id",["loc",[null,[3,9],[3,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[4,12],[4,17]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[5,10],[5,13]]]]],[],[]],"name","liquid-outlet","outletName",["subexpr","@mut",[["get","outletName",["loc",[null,[7,17],[7,27]]]]],[],[]],"containerless",["subexpr","@mut",[["get","containerless",["loc",[null,[8,20],[8,33]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[9,19],[9,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[10,26],[10,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[11,17],[11,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[12,19],[12,31]]]]],[],[]]],0,null,["loc",[null,[2,2],[19,20]]]]
        ],
        locals: ["outletState"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/liquid-outlet.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","get-outlet-state",[["get","outletName",["loc",[null,[1,21],[1,31]]]]],[],0,null,["loc",[null,[1,0],[20,21]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/liquid-versions', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 5,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-versions.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["inline","yield",[["get","version.value",["loc",[null,[4,14],[4,27]]]]],[],["loc",[null,[4,6],[4,31]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-versions.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","liquid-child",[],["version",["subexpr","@mut",[["get","version",["loc",[null,[3,28],[3,35]]]]],[],[]],"liquidChildDidRender","childDidRender","class",["subexpr","@mut",[["get","class",["loc",[null,[3,80],[3,85]]]]],[],[]]],0,null,["loc",[null,[3,4],[5,21]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-versions.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","version.shouldRender",["loc",[null,[2,8],[2,28]]]]],[],0,null,["loc",[null,[2,2],[6,9]]]]
        ],
        locals: ["version"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/liquid-versions.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["get","versions",["loc",[null,[1,8],[1,16]]]]],["key","@identity"],0,null,["loc",[null,[1,0],[7,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/templates/components/liquid-with', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-with.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","version",["loc",[null,[3,13],[3,20]]]]],[],["loc",[null,[3,4],[3,24]]]]
          ],
          locals: ["version"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-with.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[2,28],[2,39]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[2,44],[2,47]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[2,53],[2,57]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[2,64],[2,69]]]]],[],[]]],0,null,["loc",[null,[2,2],[4,23]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 4
                },
                "end": {
                  "line": 16,
                  "column": 4
                }
              },
              "moduleName": "myproject/templates/components/liquid-with.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["inline","yield",[["get","version",["loc",[null,[15,15],[15,22]]]]],[],["loc",[null,[15,6],[15,26]]]]
            ],
            locals: ["version"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/components/liquid-with.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[14,30],[14,41]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[14,49],[14,58]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[14,63],[14,66]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[14,72],[14,76]]]]],[],[]]],0,null,["loc",[null,[14,4],[16,25]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/components/liquid-with.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[7,9],[7,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[8,12],[8,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[9,19],[9,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[10,26],[10,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[11,17],[11,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[12,19],[12,31]]]]],[],[]]],0,null,["loc",[null,[6,2],[17,23]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "myproject/templates/components/liquid-with.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[18,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/home', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 5
                },
                "end": {
                  "line": 18,
                  "column": 5
                }
              },
              "moduleName": "myproject/templates/home.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1,"class","btn btn-warning btn-xs pull-right");
              dom.setAttribute(el1,"disabled","disabled");
              var el2 = dom.createTextNode("\n							");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("span");
              dom.setAttribute(el2,"class","glyphicon glyphicon-thumbs-up");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" Like\n						");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 5
                },
                "end": {
                  "line": 22,
                  "column": 5
                }
              },
              "moduleName": "myproject/templates/home.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1,"class","btn btn-default btn-xs pull-right");
              var el2 = dom.createTextNode("\n							");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("span");
              dom.setAttribute(el2,"class","glyphicon glyphicon-thumbs-up");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" Like\n						");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element2 = dom.childAt(fragment, [1]);
              var morphs = new Array(1);
              morphs[0] = dom.createElementMorph(element2);
              return morphs;
            },
            statements: [
              ["element","action",["like",["get","photo",["loc",[null,[19,72],[19,77]]]]],[],["loc",[null,[19,56],[19,79]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child2 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 31,
                  "column": 5
                },
                "end": {
                  "line": 33,
                  "column": 5
                }
              },
              "moduleName": "myproject/templates/home.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1,"class","btn btn-info btn-xs post-tag-button");
              var el2 = dom.createTextNode("#");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element1);
              morphs[1] = dom.createMorphAt(element1,1,1);
              return morphs;
            },
            statements: [
              ["element","action",["clicktag",["get","tag",["loc",[null,[32,78],[32,81]]]]],[],["loc",[null,[32,58],[32,83]]]],
              ["content","tag",["loc",[null,[32,85],[32,92]]]]
            ],
            locals: ["tag"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 38,
                "column": 2
              }
            },
            "moduleName": "myproject/templates/home.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","list-group-item");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","media");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","media-left media-middle");
            var el4 = dom.createTextNode("\n					");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n					Taken: ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("a");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("br");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n					By: ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("a");
            dom.setAttribute(el4,"target","_blank");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("br");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n				");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","media-body");
            var el4 = dom.createTextNode("\n					");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("h4");
            dom.setAttribute(el4,"class","media-heading");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" (");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" Views)\n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("					");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n					");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n				");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","row");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","col-md-1 col-xs-1 col-sm-1");
            var el4 = dom.createTextNode("Tags:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","col-md-11 col-xs-11 col-sm-11");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("				");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var element4 = dom.childAt(element3, [1]);
            var element5 = dom.childAt(element4, [1]);
            var element6 = dom.childAt(element5, [3]);
            var element7 = dom.childAt(element5, [5]);
            var element8 = dom.childAt(element4, [3]);
            var element9 = dom.childAt(element8, [1]);
            var morphs = new Array(10);
            morphs[0] = dom.createMorphAt(element5,1,1);
            morphs[1] = dom.createAttrMorph(element6, 'href');
            morphs[2] = dom.createMorphAt(element6,0,0);
            morphs[3] = dom.createAttrMorph(element7, 'href');
            morphs[4] = dom.createMorphAt(element7,0,0);
            morphs[5] = dom.createMorphAt(element9,0,0);
            morphs[6] = dom.createMorphAt(element9,2,2);
            morphs[7] = dom.createMorphAt(element9,4,4);
            morphs[8] = dom.createUnsafeMorphAt(element8,3,3);
            morphs[9] = dom.createMorphAt(dom.childAt(element3, [5, 3]),1,1);
            return morphs;
          },
          statements: [
            ["inline","light-box",[],["href",["subexpr","@mut",[["get","photo.url",["loc",[null,[7,22],[7,31]]]]],[],[]],"data-lightbox",["subexpr","@mut",[["get","photo.id",["loc",[null,[7,46],[7,54]]]]],[],[]],"data-title",["subexpr","@mut",[["get","photo.title",["loc",[null,[7,66],[7,77]]]]],[],[]],"data-class","media-object feed-img"],["loc",[null,[7,5],[8,42]]]],
            ["attribute","href",["get","photo.link",["loc",[null,[9,22],[9,32]]]]],
            ["content","photo.humanReadableDate",["loc",[null,[9,35],[9,62]]]],
            ["attribute","href",["get","photo.ownerurl",["loc",[null,[10,19],[10,33]]]]],
            ["content","photo.owner.username",["loc",[null,[10,52],[10,76]]]],
            ["content","photo.title",["loc",[null,[13,31],[13,46]]]],
            ["content","photo.views",["loc",[null,[13,48],[13,63]]]],
            ["block","if",[["get","photo.liked",["loc",[null,[14,11],[14,22]]]]],[],0,1,["loc",[null,[14,5],[22,12]]]],
            ["content","photo.description",["loc",[null,[24,5],[24,28]]]],
            ["block","each",[["get","photo.tags",["loc",[null,[31,20],[31,30]]]]],[],2,null,["loc",[null,[31,5],[33,14]]]]
          ],
          locals: ["photo"],
          templates: [child0, child1, child2]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 40,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/home.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","list-group");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","each",[["get","filteredPhotos",["loc",[null,[3,19],[3,33]]]]],[],0,null,["loc",[null,[3,2],[38,11]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 1
              },
              "end": {
                "line": 43,
                "column": 1
              }
            },
            "moduleName": "myproject/templates/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1,"src","../page-loading.gif");
            dom.setAttribute(el1,"class","img-responsive center-block");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 48,
                  "column": 3
                },
                "end": {
                  "line": 50,
                  "column": 3
                }
              },
              "moduleName": "myproject/templates/home.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1,"class","btn btn-info btn-small tag-button");
              var el2 = dom.createTextNode("#");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element0);
              morphs[1] = dom.createMorphAt(element0,1,1);
              return morphs;
            },
            statements: [
              ["element","action",["clicktag",["get","tag",["loc",[null,[49,74],[49,77]]]]],[],["loc",[null,[49,54],[49,79]]]],
              ["content","tag",["loc",[null,[49,81],[49,88]]]]
            ],
            locals: ["tag"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 1
              },
              "end": {
                "line": 52,
                "column": 1
              }
            },
            "moduleName": "myproject/templates/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","jumbotron");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h1");
            var el3 = dom.createTextNode("D's Photos");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Created by Dalton Ellis");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Click one of the popular flickr tags below or search one above:");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),7,7);
            return morphs;
          },
          statements: [
            ["block","each",[["get","tagList",["loc",[null,[48,18],[48,25]]]]],[],0,null,["loc",[null,[48,3],[50,12]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 0
            },
            "end": {
              "line": 54,
              "column": 0
            }
          },
          "moduleName": "myproject/templates/home.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","liquid-if",[["get","loading",["loc",[null,[41,14],[41,21]]]]],["use","toDown"],0,1,["loc",[null,[41,1],[52,15]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 54,
            "column": 14
          }
        },
        "moduleName": "myproject/templates/home.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","liquid-if",[["get","filteredPhotosLoaded",["loc",[null,[1,13],[1,33]]]]],["use","toDown"],0,1,["loc",[null,[1,0],[54,14]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('myproject/templates/profile', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 4,
              "column": 1
            }
          },
          "moduleName": "myproject/templates/profile.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","like-item",[],["like",["subexpr","@mut",[["get","like",["loc",[null,[3,19],[3,23]]]]],[],[]]],["loc",[null,[3,2],[3,25]]]]
        ],
        locals: ["like"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 5
          }
        },
        "moduleName": "myproject/templates/profile.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","list-group");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","likes",["loc",[null,[2,17],[2,22]]]]],[],0,null,["loc",[null,[2,1],[4,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('myproject/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('myproject/tests/components/auth-manager.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/auth-manager.js should pass jshint', function() { 
    ok(true, 'components/auth-manager.js should pass jshint.'); 
  });

});
define('myproject/tests/components/like-item.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/like-item.js should pass jshint', function() { 
    ok(true, 'components/like-item.js should pass jshint.'); 
  });

});
define('myproject/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 5, col 47, Expected \'===\' and instead saw \'==\'.\n\n1 error'); 
  });

});
define('myproject/tests/controllers/home.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/home.js should pass jshint', function() { 
    ok(true, 'controllers/home.js should pass jshint.'); 
  });

});
define('myproject/tests/controllers/profile.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/profile.js should pass jshint', function() { 
    ok(true, 'controllers/profile.js should pass jshint.'); 
  });

});
define('myproject/tests/helpers/resolver', ['exports', 'ember/resolver', 'myproject/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('myproject/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('myproject/tests/helpers/start-app', ['exports', 'ember', 'myproject/app', 'myproject/router', 'myproject/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('myproject/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('myproject/tests/models/photo.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/photo.js should pass jshint', function() { 
    ok(true, 'models/photo.js should pass jshint.'); 
  });

});
define('myproject/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('myproject/tests/routes/home.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/home.js should pass jshint', function() { 
    ok(true, 'routes/home.js should pass jshint.'); 
  });

});
define('myproject/tests/routes/profile.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/profile.js should pass jshint', function() { 
    ok(true, 'routes/profile.js should pass jshint.'); 
  });

});
define('myproject/tests/test-helper', ['myproject/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('myproject/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('myproject/tests/transforms/object.jshint', function () {

  'use strict';

  module('JSHint - transforms');
  test('transforms/object.js should pass jshint', function() { 
    ok(true, 'transforms/object.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/components/auth-manager-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('auth-manager', 'Unit | Component | auth manager', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('myproject/tests/unit/components/auth-manager-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/auth-manager-test.js should pass jshint', function() { 
    ok(true, 'unit/components/auth-manager-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/components/like-item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('like-item', 'Unit | Component | like item', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('myproject/tests/unit/components/like-item-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/like-item-test.js should pass jshint', function() { 
    ok(true, 'unit/components/like-item-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/controllers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('myproject/tests/unit/controllers/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/application-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/application-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/controllers/home-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('myproject/tests/unit/controllers/home-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/home-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/home-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/controllers/profile-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:profile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('myproject/tests/unit/controllers/profile-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/profile-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/profile-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/models/photo-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('photo', 'Unit | Model | photo', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('myproject/tests/unit/models/photo-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/photo-test.js should pass jshint', function() { 
    ok(true, 'unit/models/photo-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/routes/home-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('myproject/tests/unit/routes/home-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/home-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/home-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/routes/profile-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:profile', 'Unit | Route | profile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('myproject/tests/unit/routes/profile-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/profile-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/profile-test.js should pass jshint.'); 
  });

});
define('myproject/tests/unit/transforms/object-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('transform:object', 'Unit | Service | object', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });

});
define('myproject/tests/unit/transforms/object-test.jshint', function () {

  'use strict';

  module('JSHint - unit/transforms');
  test('unit/transforms/object-test.js should pass jshint', function() { 
    ok(true, 'unit/transforms/object-test.js should pass jshint.'); 
  });

});
define('myproject/transforms/object', ['exports', 'ember', 'ember-data'], function (exports, Ember, DS) {

    'use strict';

    exports['default'] = DS['default'].Transform.extend({
        deserialize: function deserialize(value) {
            if (!Ember['default'].$.isPlainObject(value)) {
                return {};
            } else {
                return value;
            }
        },
        serialize: function serialize(value) {
            if (!Ember['default'].$.isPlainObject(value)) {
                return {};
            } else {
                return value;
            }
        }
    });

});
define('myproject/transitions/cross-fade', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = crossFade;
  // BEGIN-SNIPPET cross-fade-definition
  function crossFade() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    liquid_fire.stop(this.oldElement);
    return liquid_fire.Promise.all([liquid_fire.animate(this.oldElement, { opacity: 0 }, opts), liquid_fire.animate(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
  }

  // END-SNIPPET

});
define('myproject/transitions/default', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = defaultTransition;
  function defaultTransition() {
    if (this.newElement) {
      this.newElement.css({ visibility: '' });
    }
    return liquid_fire.Promise.resolve();
  }

});
define('myproject/transitions/explode', ['exports', 'ember', 'liquid-fire'], function (exports, Ember, liquid_fire) {

  'use strict';



  exports['default'] = explode;

  function explode() {
    var _this = this;

    var seenElements = {};
    var sawBackgroundPiece = false;

    for (var _len = arguments.length, pieces = Array(_len), _key = 0; _key < _len; _key++) {
      pieces[_key] = arguments[_key];
    }

    var promises = pieces.map(function (piece) {
      if (piece.matchBy) {
        return matchAndExplode(_this, piece, seenElements);
      } else if (piece.pick || piece.pickOld || piece.pickNew) {
        return explodePiece(_this, piece, seenElements);
      } else {
        sawBackgroundPiece = true;
        return runAnimation(_this, piece);
      }
    });
    if (!sawBackgroundPiece) {
      if (this.newElement) {
        this.newElement.css({ visibility: '' });
      }
      if (this.oldElement) {
        this.oldElement.css({ visibility: 'hidden' });
      }
    }
    return liquid_fire.Promise.all(promises);
  }

  function explodePiece(context, piece, seen) {
    var childContext = Ember['default'].copy(context);
    var selectors = [piece.pickOld || piece.pick, piece.pickNew || piece.pick];
    var cleanupOld, cleanupNew;

    if (selectors[0] || selectors[1]) {
      cleanupOld = _explodePart(context, 'oldElement', childContext, selectors[0], seen);
      cleanupNew = _explodePart(context, 'newElement', childContext, selectors[1], seen);
      if (!cleanupOld && !cleanupNew) {
        return liquid_fire.Promise.resolve();
      }
    }

    return runAnimation(childContext, piece)["finally"](function () {
      if (cleanupOld) {
        cleanupOld();
      }
      if (cleanupNew) {
        cleanupNew();
      }
    });
  }

  function _explodePart(context, field, childContext, selector, seen) {
    var child, childOffset, width, height, newChild;
    var elt = context[field];

    childContext[field] = null;
    if (elt && selector) {
      child = elt.find(selector).filter(function () {
        var guid = Ember['default'].guidFor(this);
        if (!seen[guid]) {
          seen[guid] = true;
          return true;
        }
      });
      if (child.length > 0) {
        childOffset = child.offset();
        width = child.outerWidth();
        height = child.outerHeight();
        newChild = child.clone();

        // Hide the original element
        child.css({ visibility: 'hidden' });

        // If the original element's parent was hidden, hide our clone
        // too.
        if (elt.css('visibility') === 'hidden') {
          newChild.css({ visibility: 'hidden' });
        }
        newChild.appendTo(elt.parent());
        newChild.outerWidth(width);
        newChild.outerHeight(height);
        var newParentOffset = newChild.offsetParent().offset();
        newChild.css({
          position: 'absolute',
          top: childOffset.top - newParentOffset.top,
          left: childOffset.left - newParentOffset.left,
          margin: 0
        });

        // Pass the clone to the next animation
        childContext[field] = newChild;
        return function cleanup() {
          newChild.remove();
          child.css({ visibility: '' });
        };
      }
    }
  }

  function animationFor(context, piece) {
    var name, args, func;
    if (!piece.use) {
      throw new Error("every argument to the 'explode' animation must include a followup animation to 'use'");
    }
    if (Ember['default'].isArray(piece.use)) {
      name = piece.use[0];
      args = piece.use.slice(1);
    } else {
      name = piece.use;
      args = [];
    }
    if (typeof name === 'function') {
      func = name;
    } else {
      func = context.lookup(name);
    }
    return function () {
      return liquid_fire.Promise.resolve(func.apply(this, args));
    };
  }

  function runAnimation(context, piece) {
    return new liquid_fire.Promise(function (resolve, reject) {
      animationFor(context, piece).apply(context).then(resolve, reject);
    });
  }

  function matchAndExplode(context, piece, seen) {
    if (!context.oldElement || !context.newElement) {
      return liquid_fire.Promise.resolve();
    }

    // reduce the matchBy scope
    if (piece.pick) {
      context.oldElement = context.oldElement.find(piece.pick);
      context.newElement = context.newElement.find(piece.pick);
    }

    if (piece.pickOld) {
      context.oldElement = context.oldElement.find(piece.pickOld);
    }

    if (piece.pickNew) {
      context.newElement = context.newElement.find(piece.pickNew);
    }

    // use the fastest selector available
    var selector;

    if (piece.matchBy === 'id') {
      selector = function (attrValue) {
        return "#" + attrValue;
      };
    } else if (piece.matchBy === 'class') {
      selector = function (attrValue) {
        return "." + attrValue;
      };
    } else {
      selector = function (attrValue) {
        var escapedAttrValue = attrValue.replace(/'/g, "\\'");
        return "[" + piece.matchBy + "='" + escapedAttrValue + "']";
      };
    }

    var hits = Ember['default'].A(context.oldElement.find("[" + piece.matchBy + "]").toArray());
    return liquid_fire.Promise.all(hits.map(function (elt) {
      var attrValue = Ember['default'].$(elt).attr(piece.matchBy);

      // if there is no match for a particular item just skip it
      if (attrValue === "" || context.newElement.find(selector(attrValue)).length === 0) {
        return liquid_fire.Promise.resolve();
      }

      return explodePiece(context, {
        pick: selector(attrValue),
        use: piece.use
      }, seen);
    }));
  }

});
define('myproject/transitions/fade', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = fade;

  // BEGIN-SNIPPET fade-definition
  function fade() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var firstStep;
    var outOpts = opts;
    var fadingElement = findFadingElement(this);

    if (fadingElement) {
      // We still have some older version that is in the process of
      // fading out, so out first step is waiting for it to finish.
      firstStep = liquid_fire.finish(fadingElement, 'fade-out');
    } else {
      if (liquid_fire.isAnimating(this.oldElement, 'fade-in')) {
        // if the previous view is partially faded in, scale its
        // fade-out duration appropriately.
        outOpts = { duration: liquid_fire.timeSpent(this.oldElement, 'fade-in') };
      }
      liquid_fire.stop(this.oldElement);
      firstStep = liquid_fire.animate(this.oldElement, { opacity: 0 }, outOpts, 'fade-out');
    }
    return firstStep.then(function () {
      return liquid_fire.animate(_this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts, 'fade-in');
    });
  }

  function findFadingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if (liquid_fire.isAnimating(entry.element, 'fade-out')) {
        return entry.element;
      }
    }
    if (liquid_fire.isAnimating(context.oldElement, 'fade-out')) {
      return context.oldElement;
    }
  }
  // END-SNIPPET

});
define('myproject/transitions/flex-grow', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = flexGrow;
  function flexGrow(opts) {
    liquid_fire.stop(this.oldElement);
    return liquid_fire.Promise.all([liquid_fire.animate(this.oldElement, { 'flex-grow': 0 }, opts), liquid_fire.animate(this.newElement, { 'flex-grow': [1, 0] }, opts)]);
  }

});
define('myproject/transitions/fly-to', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = flyTo;
  function flyTo() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (!this.newElement) {
      return liquid_fire.Promise.resolve();
    } else if (!this.oldElement) {
      this.newElement.css({ visibility: '' });
      return liquid_fire.Promise.resolve();
    }

    var oldOffset = this.oldElement.offset();
    var newOffset = this.newElement.offset();

    if (opts.movingSide === 'new') {
      var motion = {
        translateX: [0, oldOffset.left - newOffset.left],
        translateY: [0, oldOffset.top - newOffset.top],
        outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
        outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
      };
      this.oldElement.css({ visibility: 'hidden' });
      return liquid_fire.animate(this.newElement, motion, opts);
    } else {
      var motion = {
        translateX: newOffset.left - oldOffset.left,
        translateY: newOffset.top - oldOffset.top,
        outerWidth: this.newElement.outerWidth(),
        outerHeight: this.newElement.outerHeight()
      };
      this.newElement.css({ visibility: 'hidden' });
      return liquid_fire.animate(this.oldElement, motion, opts).then(function () {
        _this.newElement.css({ visibility: '' });
      });
    }
  }

});
define('myproject/transitions/move-over', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = moveOver;

  function moveOver(dimension, direction, opts) {
    var _this = this;

    var oldParams = {},
        newParams = {},
        firstStep,
        property,
        measure;

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    if (liquid_fire.isAnimating(this.oldElement, 'moving-in')) {
      firstStep = liquid_fire.finish(this.oldElement, 'moving-in');
    } else {
      liquid_fire.stop(this.oldElement);
      firstStep = liquid_fire.Promise.resolve();
    }

    return firstStep.then(function () {
      var bigger = biggestSize(_this, measure);
      oldParams[property] = bigger * direction + 'px';
      newParams[property] = ["0px", -1 * bigger * direction + 'px'];

      return liquid_fire.Promise.all([liquid_fire.animate(_this.oldElement, oldParams, opts), liquid_fire.animate(_this.newElement, newParams, opts, 'moving-in')]);
    });
  }

  function biggestSize(context, dimension) {
    var sizes = [];
    if (context.newElement) {
      sizes.push(parseInt(context.newElement.css(dimension), 10));
      sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
    }
    if (context.oldElement) {
      sizes.push(parseInt(context.oldElement.css(dimension), 10));
      sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
    }
    return Math.max.apply(null, sizes);
  }

});
define('myproject/transitions/scale', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = scale;
  function scale() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return liquid_fire.animate(this.oldElement, { scale: [0.2, 1] }, opts).then(function () {
      return liquid_fire.animate(_this.newElement, { scale: [1, 0.2] }, opts);
    });
  }

});
define('myproject/transitions/scroll-then', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = function (nextTransitionName, options) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var _this = this;

    Ember['default'].assert("You must provide a transition name as the first argument to scrollThen. Example: this.use('scrollThen', 'toLeft')", 'string' === typeof nextTransitionName);

    var el = document.getElementsByTagName('html');
    var nextTransition = this.lookup(nextTransitionName);
    if (!options) {
      options = {};
    }

    Ember['default'].assert("The second argument to scrollThen is passed to Velocity's scroll function and must be an object", 'object' === typeof options);

    // set scroll options via: this.use('scrollThen', 'ToLeft', {easing: 'spring'})
    options = Ember['default'].merge({ duration: 500, offset: 0 }, options);

    // additional args can be passed through after the scroll options object
    // like so: this.use('scrollThen', 'moveOver', {duration: 100}, 'x', -1);

    return window.$.Velocity(el, 'scroll', options).then(function () {
      nextTransition.apply(_this, rest);
    });
  }

});
define('myproject/transitions/to-down', ['exports', 'myproject/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'y', 1, opts);
  }

});
define('myproject/transitions/to-left', ['exports', 'myproject/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'x', -1, opts);
  }

});
define('myproject/transitions/to-right', ['exports', 'myproject/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'x', 1, opts);
  }

});
define('myproject/transitions/to-up', ['exports', 'myproject/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'y', -1, opts);
  }

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('myproject/config/environment', ['ember'], function(Ember) {
  var prefix = 'myproject';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("myproject/tests/test-helper");
} else {
  require("myproject/app")["default"].create({"name":"myproject","version":"0.0.0.8e8adb3f"});
}

/* jshint ignore:end */
//# sourceMappingURL=myproject.map