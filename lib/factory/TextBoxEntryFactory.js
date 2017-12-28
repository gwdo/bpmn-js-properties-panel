'use strict';

var entryFieldDescription = require('./EntryFieldDescription');


var textBox = function(options, defaultParameters) {

  var resource    = defaultParameters,
      label       = options.label || resource.id,
      canBeShown  = !!options.show && typeof options.show === 'function',
      noInput     = options.noInput || false,
      description = options.description;

  resource.html =
    '<label for="camunda-' + resource.id + '" ' +
    (canBeShown ? 'data-show="isShown"' : '') +
    '>' + label + '</label>' +
    '<div class="bpp-field-wrapper" ' +
    (canBeShown ? 'data-show="isShown"' : '') +
    '>';

    if(!noInput) {
      resource.html += '<div data-iscontenteditable id="camunda-' + resource.id + '" ' +
      'name="' + options.modelProperty + '">' + resource.description + '</div>';
    }
  
    resource.html += '</div>';

  if (canBeShown) {
    resource.isShown = function() {
      return options.show.apply(resource, arguments);
    };
  }

  // add description below text input entry field
  // if (description) {
  //   resource.html += entryFieldDescription(description);
  // }

  resource.cssClasses = ['bpp-textbox'];

  return resource;
};

module.exports = textBox;
