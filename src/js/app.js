import "./static/side-fixed.js";
import "./parts/menu.js";
import "./parts/slider.js";
import "./parts/langs.js";
import "./parts/animations.js";


import { replaceDomElements } from "./static/replace.js";
import { accorden } from "./static/accordeon.js";
import { clock } from "./parts/countdown.js";

replaceDomElements();
accorden();
clock();