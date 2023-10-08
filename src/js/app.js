import "./static/side-fixed.js";
import "./parts/menu.js";
import "./parts/slider.js";
import "./parts/langs.js";


import { replaceDomElements } from "./static/replace.js";
import { accorden } from "./static/accordeon.js";
import { clock } from "./parts/countdown.js";
import { animations, animationsStagger } from "./parts/animations.js";

animationsStagger();
animations()
replaceDomElements();
accorden();
clock();