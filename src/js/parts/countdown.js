
// /***** РАССЧИТАЙТЕ ОСТАТОЧНОЕ ВРЕМЯ *****/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    /***** ПРЕОБРАЗОВАТЬ ВРЕМЯ В Удобный формат *****/
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    /***** ВЫВОД ДАННЫХ ЧАСОВ КАК МНОГОкратно ИСПОЛЬЗУЕМЫЙ ОБЪЕКТ *****/
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

/***** ПОКАЗАТЬ ЧАСЫ И ОСТАНОВИТЬ ИХ, КОГДА ОНИ ДОСТИГНУТ НУЛЯ *****/
function initializeClock(clock, endtime) {
    var clock = document.querySelector('.countdown');
    var daysSpan = clock.querySelector('.days span');
    var hoursSpan = clock.querySelector('.hours span');
    var minutesSpan = clock.querySelector('.minutes span');
    var secondsSpan = clock.querySelector('.seconds span');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock(); // запускаем функцию сначала один раз, чтобы избежать задержки
    var timeinterval = setInterval(updateClock, 1000);
}

/***** УСТАНОВИТЕ ДЕЙСТВИТЕЛЬНУЮ ДАТУ КОНЕЧНОСТИ *****/
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('coundown', deadline);


