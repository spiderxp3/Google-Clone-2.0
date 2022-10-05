import { find, findOne, style } from './helpers';

const ToggleMode = () => {
  const windowMedia = window.matchMedia;
  const windowMatches = windowMedia('(prefers-color-scheme: dark)').matches;

  const links = find('.main__lang-link');
  const vectors = find('.dark-mode-svg');
  const buttons = find('button');

  const body = findOne('body');
  const input = findOne('input');
  const image = findOne('.main__image');
  const button = findOne('.header__link-btn');
  const tooltip = findOne('.main__audio-tooltip');
  const form = findOne('.main__form-top');
  const lbreak = findOne('.footer__line-break');
  const footer = findOne('footer');

  if (windowMedia && windowMatches) {
    document.documentElement.style.setProperty('--white-color-x0', '#202124');
    document.documentElement.style.setProperty(
      '--black-color-x0',
      '--white-color-x0'
    );

    style(body, 'color: #bdc1c6');
    style(image, 'filter: brightness(0) invert(1)');
    style(footer, 'background: #171717');
    style(button, 'background: #8AB4F8; color: #202124');
    style(input, 'background: transparent; color: #FFF');
    style(form, 'border: 1px solid #5f6368');
    style(buttons, 'background: #303134; color: #e8eaed');
    style(vectors, 'fill: #bdc1c6');
    style(links, 'color: #8ab4f8');
    style(lbreak, 'border: 1px solid #212327');
    style(tooltip, 'background: #353535; color: #FFF; border: 1px solid #FFF;');
  } else {
    style(button, 'color: #FFFFFF');
  }
};

export default ToggleMode;
