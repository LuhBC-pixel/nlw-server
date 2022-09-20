"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesToHourString = void 0;
function convertMinutesToHourString(minutes) {
    const hours = Math.floor(minutes / 60);
    const _minutes = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(_minutes).padStart(2, '0')}`;
}
exports.convertMinutesToHourString = convertMinutesToHourString;
