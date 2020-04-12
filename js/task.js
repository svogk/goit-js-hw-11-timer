console.log("Задание 3");

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};

setInterval(() => {
    // const targetDate = new Date('Jul 17, 2019');
    const targetDate = new Date('Jul 17, 2020');
    const currentDate = Date.now();
    const deltaTime = targetDate - currentDate;
    updateClockface(deltaTime);
}, 1000);


function updateClockface(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
};

function pad(value, count) {
    return String(value).padStart(count, '0');
};
