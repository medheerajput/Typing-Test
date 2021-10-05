//DOM

const btn = document.querySelector('#btn');
let msg = document.querySelector('.msg');
let text = document.querySelector('#text');
let head=document.getElementById('head');

//Your all task is here in this array
const tasks = ['Hrithik Roshan is an Indian actor who works in Hindi films. He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards, including six Filmfares, four for Best Actor'
, 'Roshan has frequently collaborated with his father, Rakesh Roshan. He made brief appearances as a child actor in several films in the 1980s and later worked as an assistant director on four of his father', 
'The 2003 science fiction film Koi Mil Gaya, for which Roshan won two Filmfare Awards, was a turning point in his film career; he also appeared in its sequels: Krrish (2006) and Krrish 3 (2013). He earned praise for his portrayal of a thief in the 2006 adventure film',
'Roshan has also performed on stage and debuted on television with Just Dance (2011). As a judge on the latter, he became the highest-paid film star on Indian television. He is involved with a numb'
,' Gandhi adopted the use of a short dhoti woven with hand-spun yarn as a mark of identification with Indias rural poor. He began to live in a self-sufficient residential community and to eat simple food; he undertook long fasts as a means of both introspection and political protest',
'Tendulkar scored his much awaited 100th international hundred on 16 March 2012 against Bangladesh in the Asia Cup. He became the first person in history to achieve this feat. Incidentally, it was Tendulkars first ODI hundred against Bangladesh',
'Patani is a Kumaoni hailing from Uttarakhand and Bareilly, Uttar Pradesh, is her birthplace. She hails from a Rajput background. Her birthdate has been reported inconsistently in the media, both as 13 June 1992 and 27 July 1995. Her father, Jagadish Singh Patani is a police officer and her mother is a health inspector.',
'Narendra Damodardas Modi is an Indian politician serving as the 14th and current prime minister of India since 2014. He was the chief minister of Gujarat from 2001 to 2014 and is the Member of Parliament for Varanasi. Modi is a member of the Bharatiya Janata Party and its National Democratic Alliance.','Mahendra Singh Dhoni, is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. MS Dhoni is the only captain in the history of cricket to win all ICC trophies.','Kartik Aaryan Tiwari is an Indian actor who works in Hindi films. While pursuing an engineering degree in biotechnology, he dabbled in modeling and made attempts to start a career in film.']

//we defined uname variable outside the block because we can use this variable (public) 
let uname;
btn.addEventListener('click', () => {

    const main = document.querySelector('#main');
    uname = document.getElementById('name').value;
    if (btn.innerText === 'open') {
        main.classList.add('remove');
    }
})

const info_start = document.getElementById('info_start');
info_start.addEventListener('click', () => {
    if (info_start.innerText === 'Start') {
        playGame();
    } else if (info_start.innerText === 'Done') {
        endGame();
    }else if(info_start.innerText=='Retake Test'){
        window.location.reload(true);
    }
})

let currTime;
const playGame = () => {
    head.innerText='';
    const info_task = document.querySelector('.info_task');
    info_task.classList.add('msg');
    const msg = document.querySelector('.msg');
    const num = Math.floor(Math.random() * tasks.length);
    const arr = tasks[num];
    msg.innerText = arr;
    info_start.innerText = 'Done';

    const date = new Date();
    currTime = date.getTime();
    console.log(currTime);
}

let speed;
const endGame = () => {
    const date = new Date();
    const endTime = date.getTime();

    // in how much time, u have complete your task !! 
    const totalTime = ((endTime - currTime) / 1000);
    console.log(totalTime);
    let data = text.value;
    let countWords = wordCouter(data);
    // console.log('words count :', countWords);   

    speed = Math.round((countWords / totalTime) * 60);

    const msg = document.querySelector('.msg');
     let finalmsg = error(msg.innerText, data);
    // msg.innerText=finalmsg;
    console.log('mistakes :', finalmsg);
    // info_start.innerText ='again'
    finalResult(finalmsg);
    info_start.classList.add('style');
}

//how much did u type get from here.
const wordCouter = (str) => {
    let strCount = str.split(' ').length;
    return strCount;
}

const error = (str1, str2) => {
    let msgStr = str1.split(' ');
    let myStr = str2.split(' ');
    let cnt = 0;

    //here , we will compare bitween task and your type words : (Accuracy find).
    msgStr.forEach(function (item, index) {
        if (item === myStr[index]) {
            cnt++;
            // console.log(`this is cnt is ${cnt}`);
        }
    })
    

    let errorWords = (msgStr.length - cnt);
    return (`<p>Hey ${uname} ~</p>
    <ul class="abc">
    <h3>Your grand score :</h3>
    <li class='result'>Speed : ${speed} WPM</li>
    <li class='result'>Accuracy : ${cnt} out of ${msgStr.length} words.</li>
    <li class='result'>Mistakes : ${errorWords}</li>
    </ul>`)
}

const finalResult=(result)=>{
    const info_task = document.querySelector('.info_task');
    info_task.innerText='';
    text.classList.add('text_remove');
    info_task.innerHTML=`<p >${result} </p>`
    info_start.innerText='Retake Test'
}

const refresh = () => {
    window.location.reload(true);
}