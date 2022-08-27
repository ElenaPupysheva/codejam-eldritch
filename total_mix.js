import lvl_one from "./code.js";
import lvl_two from "./code.js";
import lvl_th from "./code.js";

function getRandomNumbersInRange(min, max, count) {
    let randomNumbers = [];

    while (randomNumbers.length < count) {
        randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    let uniqueNumbers = new Set();

    randomNumbers.forEach(
        n => {
            if (!uniqueNumbers.has(n)) {
                uniqueNumbers.add(n);
                return;
            }

            let i = 1;
            while (true) {
                const more = n + i;
                if (more <= max && !uniqueNumbers.has(more)) {
                    uniqueNumbers.add(more);
                    return;
                }

                const less = n - i;
                if (less >= min && !uniqueNumbers.has(less)) {
                    uniqueNumbers.add(less);
                    return;
                }

                i++;
            }
        }
    );
    
    return [ ...uniqueNumbers ];
}
let RN_arr=getRandomNumbersInRange(1, 18, 5);

function greenFirst(){
let green_first=[];
for (let k=0; k<lvl_one[0];k++){
    green_first[k]=RN_arr[k];
} 
return green_first} ;
function greenSecond(){
  let green_second=[];
  for (let k=lvl_one[0]; k<=(lvl_two[0]+lvl_one[0]);k++){
    green_second[k]=RN_arr[k];    
  } 
    return green_second};
function greenThird(){
    let green_Third=[];
    for (let k=(lvl_two[0]+lvl_one[0]); k<=(lvl_th[0]+lvl_two[0]+lvl_one[0]);k++){
    green_Third[k]=RN_arr[k];
    }return green_Third};
// BROWN
let RN_arr_b=getRandomNumbersInRange(19, 39, 9);
        function brownFirst(){
        let brown_first=[];
        for (let k=0; k<lvl_one[2];k++){
            brown_first[k]=RN_arr_b[k];
        }return brown_first};
  
        function brownSecond(){
            let brown_second=[];
            for (let k=lvl_one[2]; k<=(lvl_two[2]+lvl_one[2]);k++){
                // for (let i=0; i<lvl_two[2];i++){
                brown_second[k]=RN_arr_b[k];
            } return brown_second};
  
        function brownThird(){
        let brown_third=[];
            for (let k=(lvl_two[2]+lvl_one[2]); k<=(lvl_th[2]+lvl_two[2]+lvl_one[2]+1);k++){
                // for (let i=0; i<lvl_th[2];i++){
                    brown_third[k]=RN_arr_b[k];
                } return brown_third};
        // BLUE
                let RN_arr_bl=getRandomNumbersInRange(40, 51, 2);
                function blueFirst(){
                let blue_first=[];
                for (let k=0; k<lvl_one[1];k++){
                    blue_first[k]=RN_arr_bl[k];
                } return blue_first};

                function blueSecond(){
                    let blue_second=[];
                    for (let k=lvl_one[1]; k<=(lvl_two[1]+lvl_one[1]);k++){
                        // for (let i=0; i<lvl_two[1];i++){
                        blue_second[k]=RN_arr_bl[k];
                    } return blue_second};

                function blueThird(){
                let blue_third=[];
                    for (let k=(lvl_two[1]+lvl_one[1]); k<=(lvl_th[1]+lvl_two[1]+lvl_one[1]);k++){
                        // for (let i=0; i<lvl_th[1];i++){
                            blue_third[k]=RN_arr_bl[k];
                        } return blue_third} ;
// собираем стейджи
let stageONE=(([].concat(greenFirst(),brownFirst(),blueFirst())).filter(n => n)).sort(()=>Math.random()-0.5); 
let stageTWO=(([].concat(greenSecond(),brownSecond(),blueSecond())).filter(n => n)).sort(()=>Math.random()-0.5); 
let stageTHREE=(([].concat(greenThird(),brownThird(),blueThird())).filter(n => n)).sort(()=>Math.random()-0.5);  
// 
// document.querySelector("#shuffle").addEventListener('click', greenSecond);
let all=stageONE.length+stageTWO.length+stageTHREE.length;
let Arr_all=[].concat(stageONE,stageTWO,stageTHREE);
console.log(all);
console.log(Arr_all);
let count=0;

function ShowPic()
{
let st_g=document.querySelector("#green").innerText;
let st_br=document.querySelector("#brown").innerText;
let st_bl=document.querySelector("#blue").innerText;
let st_g_s=document.querySelector("#green_s").innerText;
let st_br_s=document.querySelector("#brown_s").innerText;
let st_bl_s=document.querySelector("#blue_s").innerText;  
let st_g_t=document.querySelector("#green_t").innerText;
let st_br_t=document.querySelector("#brown_t").innerText;
let st_bl_t=document.querySelector("#blue_t").innerText;            
count++;
console.log(count);
// стейдж  первый
        if (count<=stageONE.length){
            if (Arr_all[count-1]<19){
                let color="green";
                let bgNum=color+(Arr_all[count-1]).toString();
                console.log(bgNum);
                const img = new Image();
                img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
                let showDeck=document.querySelector("#results");
                img.onload = () => {      
                showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;
                };
                document.getElementById("green").innerHTML = st_g-1;
            }
            else if ((Arr_all[count-1]>18) && (Arr_all[count-1]<40)){
                let color="brown";
                let bgNum=color+(Arr_all[count-1]-18).toString();
                console.log(bgNum);
                const img = new Image();
                img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
                let showDeck=document.querySelector("#results");
                img.onload = () => {      
                showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;
                };
                document.getElementById("brown").innerHTML = st_br-1;
            }
            else if (Arr_all[count-1]>39){
                let color="blue";
                let bgNum=color+(Arr_all[count-1]-39).toString();
                console.log(bgNum);
                const img = new Image();
                img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
                let showDeck=document.querySelector("#results");
                img.onload = () => {      
                showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;
                }; 
                document.getElementById("blue").innerHTML = st_bl-1;
            }}
// стейдж два
        else if ((count>stageONE.length) && (count<=(stageTWO.length+stageONE.length))){
            if (Arr_all[count-1]<19){
                let color="green";
                let bgNum=color+(Arr_all[count-1]).toString();
                console.log(bgNum);
                const img = new Image();
                img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
                let showDeck=document.querySelector("#results");
                img.onload = () => {      
                showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;}; 
                document.getElementById("green_s").innerHTML = st_g_s-1;
            }
            else if ((Arr_all[count-1]>18) && (Arr_all[count-1]<40)){
                let color="brown";
                let bgNum=color+(Arr_all[count-1]-18).toString();
                console.log(bgNum);
                const img = new Image();
                img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
                let showDeck=document.querySelector("#results");
                img.onload = () => {      
                showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;}; 
                document.getElementById("brown_s").innerHTML = st_br_s-1;
            }
            else if (Arr_all[count-1]>39){
                let color="blue";
                let bgNum=color+(Arr_all[count-1]-39).toString();
                console.log(bgNum);
                const img = new Image();
                img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
                let showDeck=document.querySelector("#results");
                img.onload = () => {      
                showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;}; 
                document.getElementById("blue_s").innerHTML = st_bl_s-1;

            }}
// stage three
        else if ((count>(stageTWO.length+stageONE.length)) && (count<=all))
        {if (Arr_all[count-1]<19){
            let color="green";
            let bgNum=color+(Arr_all[count-1]).toString();
            console.log(bgNum);
            const img = new Image();
            img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
            let showDeck=document.querySelector("#results");
            img.onload = () => {      
            showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;};
            document.getElementById("green_t").innerHTML = st_g_t-1;
        }
        else if ((Arr_all[count-1]>18) && (Arr_all[count-1]<40)){
            let color="brown";
            let bgNum=color+(Arr_all[count-1]-18).toString();
            console.log(bgNum);
            const img = new Image();
            img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
            let showDeck=document.querySelector("#results");
            img.onload = () => {      
            showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;};
            document.getElementById("brown_t").innerHTML = st_br_t-1;
        }
        else if (Arr_all[count-1]>39){
            let color="blue";
            let bgNum=color+(Arr_all[count-1]-39).toString();
            console.log(bgNum);
            const img = new Image();
            img.src = `./assets/MythicCards/${color}/${bgNum}.png`;// здесь ваш код 
            let showDeck=document.querySelector("#results");
            img.onload = () => {      
            showDeck.style.backgroundImage = `url('./assets/MythicCards/${color}/${bgNum}.png')`;};
            document.getElementById("blue_t").innerHTML = st_bl_t-1;
        }}
    if (count>all){
        document.querySelector(".game").classList.add('element_none');
        document.querySelector(".deck").classList.add('element_show');
    }
    };
    document.querySelector(".deck").addEventListener('click', ShowPic);

