import ancientsData from './data/ancients.js';
alert( "Древний - АЗАТОТ. Сложность - СРЕДНЯЯ" );
//загрузка значений стадий
 
let info=ancientsData[0];
    let value=Object.values(info);
    let First=value[2];
    let Second=value[3];
    let Third=value[4];
let lvl_one=Object.values(First);
let lvl_two=Object.values(Second);
let lvl_th=Object.values(Third);

document.querySelector('#Azatoth').addEventListener('click', function(){
    let info=ancientsData[0];
    let value=Object.values(info);
    let First=value[2];
    //первая стадия
    let lvl_one=Object.values(First);
    console.log(Object.values(First));
    document.getElementById("green").innerHTML = lvl_one[0];
    document.getElementById("brown").innerHTML = lvl_one[2];
    document.getElementById("blue").innerHTML = lvl_one[1];
    //вторая стадия
    let Second=value[3];
    let lvl_two=Object.values(Second);
    document.getElementById("green_s").innerHTML = lvl_two[0];
    document.getElementById("brown_s").innerHTML = lvl_two[2];
    document.getElementById("blue_s").innerHTML = lvl_two[1];
    //треть стадия
    let Third=value[4];
    let lvl_th=Object.values(Third);
    document.getElementById("green_t").innerHTML = lvl_th[0];
    document.getElementById("brown_t").innerHTML = lvl_th[2];
    document.getElementById("blue_t").innerHTML = lvl_th[1];
})


// выбор сложности
const difb = document.querySelectorAll('.dif_b');
difb.forEach((val,i) => {
    val.addEventListener('click', function (e) {
    console.log(e.target);
    difb.forEach(b => b.classList.remove("hover"));
    const target = e.target;

    target.classList.add("hover");
    let typeAncient=idAncient;

    // if (typeAncient="Cthulthu"){
    //     let info=ancientsData[1];
    //     let value=Object.values(info);
    //     let First=value[2];
    //     //первая стадия
    //     let lvl_one=Object.values(First);
    //     console.log(Object.values(First));
    //     document.getElementById("green").innerHTML = lvl_one[0];
    //     document.getElementById("brown").innerHTML = lvl_one[2];
    //     document.getElementById("blue").innerHTML = lvl_one[1];
    //     //вторая стадия
    //     let Second=value[3];
    //     let lvl_two=Object.values(Second);
    //     document.getElementById("green_s").innerHTML = lvl_two[0];
    //     document.getElementById("brown_s").innerHTML = lvl_two[2];
    //     document.getElementById("blue_s").innerHTML = lvl_two[1];
    //     //треть стадия
    //     let Third=value[4];
    //     let lvl_th=Object.values(Third);
    //     document.getElementById("green_t").innerHTML = lvl_th[0];
    //     document.getElementById("brown_t").innerHTML = lvl_th[2];
    //     document.getElementById("blue_t").innerHTML = lvl_th[1];
    // }
    
  })
  })
// выбор челиков
const ancient = document.querySelectorAll('.ancient');
ancient.forEach((val_t,j) => {
    val_t.addEventListener('click', function (e) {
    console.log(e.target);
    ancient.forEach(b => b.classList.remove("hover"));
    const target = e.target;
    var id = e.target.id;
    target.classList.add("hover");  
  })
  })
let idAncient="глобалка";
ancient.forEach((val_t,j) => {
    val_t.addEventListener('click', function (e) {
    idAncient = e.target.id;
   })
  })
console.log(idAncient);
// mix
const start_mix=document.querySelector(".shuffle");
start_mix.addEventListener('click',function(){
    document.querySelector(".play_tab").classList.add('element_none');
})

export default lvl_one; lvl_two;lvl_th;


