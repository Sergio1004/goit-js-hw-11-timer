class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
        };
    }

    dateTimer() {
        setInterval(() => {
            let time = Date.parse(this.targetDate) - Date.parse(new Date());

            if (time > 0) {
                const day = Math.floor(time / (1000 * 60 * 60 * 24));
                const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                const sec = Math.floor((time % (1000 * 60)) / 1000);

                this.updateTimer(this.refs.secs, sec);
                this.updateTimer(this.refs.mins, min);
                this.updateTimer(this.refs.hours, hour);
                this.updateTimer(this.refs.days, day);
            } else {
                clearInterval(timerInterval);;
            }
        }, 1000);
    }

    updateTimer(nums, num) {
        if (num <= 9) {
        nums.textContent = '0' + num;
        } else {
        nums.textContent = num;
        }
    }
}

const start = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 29, 2021'),
});

start.dateTimer();