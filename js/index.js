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

    dateTimer() {
        setInterval(() => {
            let time = Date.parse(this.targetDate) - Date.parse(new Date());

            if (time > 0) {
                const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const days = Math.floor(time / (1000 * 60 * 60 * 24));
                const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((time % (1000 * 60)) / 1000);

                this.refs.days.textContent = days < 10 ? "0" + days : days;
                this.refs.hours.textContent = hours < 10 ? "0" + hours : hours;
                this.refs.mins.textContent = mins < 10 ? "0" + mins : mins;
                this.refs.secs.textContent = secs < 10 ? "0" + secs : secs;
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

