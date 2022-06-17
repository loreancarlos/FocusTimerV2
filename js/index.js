//EcmaScript - ES6 Modules

import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import Sounds from "./sounds.js";
import { buttonPlay, buttonStop, buttonIncreaseTime, buttonDecreaseTime, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace, minutesDisplay, secondsDisplay } from "./elements.js";

const controls = Controls({ buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace });
const timer = Timer({ minutesDisplay, secondsDisplay, controls });
const sound = Sounds();

Events({ controls, timer, sound });