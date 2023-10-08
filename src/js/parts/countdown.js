let clockElem = document.querySelector('.countdown');
let daysSpan = clockElem.querySelector('.days span');
let hoursSpan = clockElem.querySelector('.hours span');
let minutesSpan = clockElem.querySelector('.minutes span');
let secondsSpan = clockElem.querySelector('.seconds span');

// РАССЧИТАЙТЕ ОСТАТОЧНОЕ ВРЕМЯ
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());

    // ПРЕОБРАЗОВАТЬ ВРЕМЯ В Удобный формат
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    // ВЫВОД ДАННЫХ ЧАСОВ КАК МНОГОкратно ИСПОЛЬЗУЕМЫЙ ОБЪЕКТ
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// ПОКАЗАТЬ ЧАСЫ И ОСТАНОВИТЬ ИХ, КОГДА ОНИ ДОСТИГНУТ НУЛЯ 
function initializeClock(endtime) {

    function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    // запускаем функцию сначала один раз, чтобы избежать задержки
    updateClock(); 

    let timeinterval = setInterval(updateClock, 1000);
}

//УСТАНОВИТЕ ДЕЙСТВИТЕЛЬНУЮ ДАТУ КОНЕЧНОСТИ 

const days = clockElem.dataset.days ? clockElem.dataset.days : 0
const deadline = new Date(Date.parse(new Date()) + days * 24 * 60 * 60 * 1000);


export const clock = () => {
    if (!clockElem) return;
    initializeClock(deadline);
}