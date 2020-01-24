class PageThemeSelect {
  constructor(element) {
    this.element = element;
    this.theme = element.val();

    this.element.change(function(e) {
      this.set(e.currentTarget.value)
    }.bind(this));
  }

  set(theme) {
    this.theme = theme;

    this._swapBodyClass();
    this._swapThemeStylesheets();
  }

  change(handler) {
    this.element.on('change', function(e) {
      handler(e.currentTarget.value)
    });
  }

  trigger(e) {
    this.element.trigger(e);
  }

  _swapBodyClass() {
    if (this.theme == 'dark') {
      $('body').addClass('prism-dark');
    } else {
      $('body').removeClass('prism-dark');
    }
  }

  _swapThemeStylesheets() {
    const stylesheets = $('link[rel=stylesheet][data-theme]')

    stylesheets.each(function(index, stylesheet) {
      var stylesheet = $(stylesheet)

      if (stylesheet.attr('data-theme') == this.theme) {
        stylesheet.removeAttr('disabled');
      } else {
        stylesheet.attr('disabled', 'disabled');
      }
    }.bind(this));
  }
}

export default PageThemeSelect;