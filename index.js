const items = document.querySelectorAll('.item');
items.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
        removFoucus();
        item.classList.add('selected');
    })
})
removFoucus = ()=>{
    items.forEach(item=>{
        item.classList.remove('selected')
    })
}

function eventCountDown (){
    const eventDate = new Date ("December 31, 2023 00:00");
    const now = new Date ();
    const diff = eventDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor (diff/msInDay);
    document.querySelector('.day').textContent = displayDay;
    const displayHour = Math.floor ((diff%msInDay)/msInHour);
    document.querySelector('.hour').textContent = displayHour;
    const displayMinute = Math.floor ((diff%msInHour)/msInMinute);
    document.querySelector('.minute').textContent =displayMinute;
    const displaySecond = Math.floor ((diff%msInMinute)/msInSecond);
    document.querySelector('.second').textContent = displaySecond;

    if (diff <=0 ){
        document.querySelector('.day').textContent = 0;
        document.querySelector('.hour').textContent = 0;
        document.querySelector('.minute').textContent = 0;
        document.querySelector('.second').textContent = 0;
        clearInterval (timeid);
        oppening();
    }
}
let timeid = setInterval(eventCountDown, 1000);
eventCountDown();

function oppening(){
    const headTwo = document.querySelector('h2');
    headTwo.textContent = "WE OPEN FOR YUO!!!"
}