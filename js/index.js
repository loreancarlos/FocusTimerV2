//EcmaScript - ES6 Modules

import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import Sounds from "./sounds.js";
import { buttonPlay, buttonPause, buttonStop, buttonSetTime, buttonSoundOn, buttonSoundOff, minutesDisplay, secondsDisplay } from "./elements.js";

const controls = Controls({ buttonPlay, buttonPause, buttonStop, buttonSetTime, buttonSoundOn, buttonSoundOff });
const timer = Timer({ minutesDisplay, secondsDisplay, controls });
const sound = Sounds();

Events({ controls, timer, sound });