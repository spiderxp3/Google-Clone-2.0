export const autoFocus = (element) => {
  return element.focus();
};

export const findOne = (element) => {
  return document.querySelector(element);
};

export const find = (element) => {
  return document.querySelectorAll(element);
};

export const style = (elements, styles) => {
  if (!elements) {
    throw Error('You must provide a DOM Element.');
  }

  if (!styles) {
    throw Error('You must provide Style Properties.');
  }

  if (!elements.length) {
    elements.style.cssText = styles;
  }

  if (elements.length) {
    elements.forEach((element) => {
      element.style.cssText = styles;
    });
  }
};
