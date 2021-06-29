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
        
        this.dateTimer();
    }

    updateTime (value) {
        return value < 10 ? "0" + value : value;
    }

    dateTimer() {
        setInterval(() => {
            let time = Date.parse(this.targetDate) - Date.parse(new Date());

            if (time > 0) {
                this.refs.days.textContent = this.updateTime(Math.floor(time / (1000 * 60 * 60 * 24)));
                this.refs.hours.textContent = this.updateTime(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                this.refs.mins.textContent = this.updateTime(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
                this.refs.secs.textContent = this.updateTime(Math.floor((time % (1000 * 60)) / 1000));
            } else {
                clearInterval(timerInterval);;
            }
        }, 1000);
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 29, 2021'),
});

