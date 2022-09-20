"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinutes = void 0;
function convertHourStringToMinutes(hourString) {
    const [hour, minutes] = hourString.split(':').map(Number);
    const timeInMinutes = hour * 60 + minutes;
    return timeInMinutes;
}
exports.convertHourStringToMinutes = convertHourStringToMinutes;
