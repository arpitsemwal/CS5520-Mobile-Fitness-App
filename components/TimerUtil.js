const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (milliSeconds) => {
    let minutes = 0;
    let seconds = 0;

    if (milliSeconds < 0) {
        milliSeconds = 0;
    }

    if (milliSeconds < 100) {
        return `00:00:${padToTwo(milliSeconds)}`;
    }

    let remainMilliSeconds = milliSeconds % 100;
    seconds = (milliSeconds - remainMilliSeconds) / 100;

    if (seconds < 60) {
        return `00:${padToTwo(seconds)}:${padToTwo(remainMilliSeconds)}`;
    }

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(remainMilliSeconds)}`;
};