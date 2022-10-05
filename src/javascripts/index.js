import '../styles/globals.css';
import '../styles/index.css';

import ToggleMode from '../utils/ToggleMode';

import { autoFocus, findOne } from '../utils/helpers';

const input = findOne('input');

autoFocus(input);

ToggleMode();
