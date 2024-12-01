let AttackTab = [];//data of player for Chimie 
let MiddlekTab = [];
let DefenseTab = [];
let Goolkiper;
let arryTo = [];
let WhereGo;
let playerInField = 0;


fetch("js/main.json").then(response => response.json()).then(obj => {//start fetch
    const LB = document.getElementById('Defense-L');
    const CB = document.getElementById('Defense-M');
    const CB2 = document.getElementById('Defense-M2');
    const RB = document.getElementById('Defense-R');

    const LM = document.getElementById('Middle-L');
    const CM = document.getElementById('Middle-M');
    const RM = document.getElementById('Middle-R');

    const CF = document.getElementById('Attack-L');
    const ST = document.getElementById('Attack-M');
    const SS = document.getElementById('Attack-R');

    let i;
    GK.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "GK";
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "GK" && obj.players[i].name != Goolkiper)  
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "GK"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    LB.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeDefenseL";
        do {
            i++;
            const Posis = obj.players[i].position;

            if (Posis == "LB" )
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeDefenseL"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    CB.addEventListener("click", ()=>{
        
        i = -1;
        removechildrens();
        WhereGo = "placeDefenseM";
        do {
            i++;
            const Posis = obj.players[i].position; 
            if (Posis == "CB" && obj.players[i].name != DefenseTab [2])
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeDefenseM"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });
    
    CB2.addEventListener("click", ()=>{
        
        i = -1;
        removechildrens();
        WhereGo = "placeDefenseM2";
        do {
            i++;
            const Posis = obj.players[i].position; 
            if (Posis == "CB" && obj.players[i].name != DefenseTab [1])
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeDefenseM2"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    RB.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeDefenseR";
        do {
            i++;
            const Posis = obj.players[i].position; 
            if (Posis == "RB" )
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeDefenseR"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    LM.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeMiddleL";
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "CM" && obj.players[i].name != MiddlekTab [1] && obj.players[i].name != MiddlekTab [2])
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeMiddleL"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    CM.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeMiddleM";
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if ((Posis == "CM" || Posis == "CDM") && obj.players[i].name != MiddlekTab [0] && obj.players[i].name != MiddlekTab [2])
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeMiddleM"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    RM.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeMiddleR";
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "CM" && obj.players[i].name != MiddlekTab [0] && obj.players[i].name != MiddlekTab [1])
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeMiddleR"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    CF.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeAttackL";
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if ( Posis == "LW")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeAttackL"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    ST.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeAttackM";
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "ST")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeAttackM"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    SS.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        WhereGo = "placeAttackR";
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "RW")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical,  obj.players[i].rating, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);//, "placeAttackR"
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    // finde position indes plyer in json
    function FiPlyer (namePl ){
        i = -1;
        do {
            i++;
            // console.log(namePl);//-------------------------------------------------------------------------------->
        }while (obj.players[i].name != namePl);
        return i;
    }

    // calcel Chimie 
    function calcelChimie(arryTo, namePlyer, nambrePlyerInTabl){
        // console.log(namePlyer);  //----------------------------------------------------------------------------------------------------------->
        let indexMainPlyer = FiPlyer (namePlyer); //return i of plyer that i want calcule his chime
        // console.log("hnaaaaaaaaaaaaa ",indexMainPlyer);
        let indexPlyers;//index of chak player in arry
        let coron;//points chime 10 becose it's in corect position
        let memleague;
        // const vombrPlyerAround = arryP.lenght;
        coron = 0;
        for (i = 0; i < nambrePlyerInTabl; i++){
            indexPlyers = FiPlyer (arryTo[i]);
            
            coron += 10;
            if (obj.players[indexPlyers].league == obj.players[indexMainPlyer].league){//is He mem league
                memleague++;
                if(memleague == 2)
                    coron += 4;
                if(memleague > 2)
                    coron += 2;
            }
            if (obj.players[indexPlyers].club == obj.players[indexMainPlyer].club)//is He meme club
                coron += 3;
            if (obj.players[indexPlyers].nationality == obj.players[indexMainPlyer].nationality)
                coron += 1;
            if(obj.players[indexPlyers].rating >= 87)
                coron += 0.25;
            // console.log("fcdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnla3ib", arryTo[i]);
        }
        
        // console.log(arryP.lenght);   / nambrePlyerInTabl
        return coron ;
    }

    //calcel chemstri
    function FineField (){
        let Chimistry;//div go up
        let RestChimistry;//div reste

        Chimistry = 0;
        // console.log("nhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 0000000",Chimistry);
        arryTo = [AttackTab [0], AttackTab [2], MiddlekTab [0], MiddlekTab [1], MiddlekTab [2]];
        Chimistry += calcelChimie (arryTo, AttackTab [1], 5);
        // console.log("nhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 1111",Chimistry);

        arryTo = [AttackTab [1], MiddlekTab [0], MiddlekTab [1]];
        Chimistry += calcelChimie (arryTo, AttackTab [0],3);

        arryTo = [AttackTab [1], MiddlekTab [2], MiddlekTab [1]]
        Chimistry += calcelChimie (arryTo, AttackTab [2],3);

        arryTo = [AttackTab [1], MiddlekTab [1], DefenseTab [0], DefenseTab [1], AttackTab [0]]
        Chimistry += calcelChimie (arryTo, MiddlekTab [0],5);

        arryTo = [AttackTab [1], MiddlekTab [1], DefenseTab [3], DefenseTab [2], AttackTab [2]]
        Chimistry += calcelChimie (arryTo, MiddlekTab [2],5);

        arryTo = [AttackTab [1], AttackTab [0], MiddlekTab [0], MiddlekTab [2], DefenseTab [3], DefenseTab [2], DefenseTab [1], DefenseTab [0], AttackTab [2]]
        Chimistry += calcelChimie (arryTo, MiddlekTab [1],);

        arryTo = [DefenseTab [1], DefenseTab [3], MiddlekTab [2], MiddlekTab [1], Goolkiper]
        Chimistry += calcelChimie (arryTo, DefenseTab [2],5);

        arryTo = [DefenseTab [1], MiddlekTab [0], MiddlekTab [1], Goolkiper]
        Chimistry += calcelChimie (arryTo, DefenseTab [0],4);

        arryTo = [DefenseTab [2], MiddlekTab [2], MiddlekTab [1], Goolkiper]
        Chimistry += calcelChimie (arryTo, DefenseTab [3],4);

        arryTo = [DefenseTab [2], DefenseTab [0], MiddlekTab [0], MiddlekTab [1], Goolkiper]
        Chimistry += calcelChimie (arryTo, DefenseTab [1],5);

        arryTo = [DefenseTab [0], DefenseTab [1], DefenseTab [2], DefenseTab [3], Goolkiper]
        Chimistry += calcelChimie (arryTo, Goolkiper,5);

        // console.log("nhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ",Chimistry);

        Chimistry /= 11;
        Chimistry *= 5;
        RestChimistry = 100 - Chimistry;
        // console.log("nhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 2",Chimistry," fg ",RestChimistry);
        // console.log("hnaaaaaaaaaaaaa ",Goolkiper);
        //change value

        document.querySelector(".porsontag").innerHTML = Chimistry;
        document.documentElement.style.setProperty("--varGoUp", Chimistry);
        document.documentElement.style.setProperty("--varReste", RestChimistry);
    }
    
//fine fetch


const removechildrens = function(){
    const parentt = document.querySelector(".player");
    while (parentt.firstChild) {
        parentt.removeChild(parentt.firstChild);
    }
};

//creat div camla                    |T a 9 t e   l a 3 i b             |i m e g e s                    |...
const replacePlayerToField = function(pac, sho, pas, dri, def, phy, rit, imgJoure, imgMontakhb, imgnadi, isme, posi){
    const visiblGk = document.getElementById("cGK");
    const visiblDL = document.getElementById("cDefense-L");
    const visiblDR = document.getElementById("cDefense-R");
    const visiblDM = document.getElementById("cDefense-M");
    const visiblDM2 = document.getElementById("cDefense-M2");
    const visiblMR = document.getElementById("cMiddle-R");
    const visiblMM = document.getElementById("cMiddle-M");
    const visiblML = document.getElementById("cMiddle-L");
    const visiblAR = document.getElementById("cAttack-R");
    const visiblAM = document.getElementById("cAttack-M");
    const visiblAL = document.getElementById("cAttack-L");

    const div$parent = document.createElement('div');
    const h4$dom1 = document.createElement('h4');
    const p$dom2 = document.createElement('p');
    const p$dom3 = document.createElement('p');
    const img$dom4 = document.createElement('img');
    const p$dom5 = document.createElement('p');
    const p$dom6 = document.createElement('p');
    const p$dom7 = document.createElement('p');
    const p$dom8 = document.createElement('p');

    //get Field2
    const Field2$parent = document.querySelector('.field2');

    // value into elements
    h4$dom1.innerHTML = `${isme}`;
    p$dom2.innerHTML = `${posi}`;
    p$dom3.innerHTML = `${rit}`;
    img$dom4.src = imgJoure;
    img$dom4.alt = "joure";
    p$dom5.innerHTML = "PAC SHO PAS";
    p$dom6.innerHTML = `${pac} | ${sho} | ${pas}`;
    p$dom7.innerHTML = "DRI DEF PHY";
    p$dom8.innerHTML = `${dri} | ${def} | ${phy}`;

    //add classes
    div$parent.classList.add(WhereGo);
    h4$dom1.classList.add("nameJoure");
    p$dom2.classList.add("posi");
    p$dom3.classList.add("LG");
    p$dom5.classList.add("LevelJoure");
    p$dom6.classList.add("LevelJoure");
    p$dom7.classList.add("LevelJoure");
    p$dom8.classList.add("LevelJoure");


    //append into
    Field2$parent.appendChild(div$parent);
    div$parent.appendChild(h4$dom1);
    div$parent.appendChild(p$dom2);
    div$parent.appendChild(p$dom3);
    div$parent.appendChild(img$dom4);
    div$parent.appendChild(p$dom5);
    div$parent.appendChild(p$dom6);
    div$parent.appendChild(p$dom7);
    div$parent.appendChild(p$dom8);
    div$parent.style.visibility = 'visible';
    
    removechildrens();

    switch(WhereGo) {
        case "placeAttackM":
            AttackTab [1] = `${isme}`; //take name player with his position for Chimie
            visiblAM.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeAttackL":
            AttackTab [0] = `${isme}`;
            visiblAL.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeAttackR":
            AttackTab [2] = `${isme}`;
            visiblAR.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeMiddleL":
            MiddlekTab [0] = `${isme}`;
            visiblML.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeMiddleR":
            MiddlekTab [2] = `${isme}`;
            visiblMR.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeMiddleM":
            MiddlekTab [1] = `${isme}`;
            visiblMM.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeDefenseL":
            DefenseTab [0] = `${isme}`;
            visiblDL.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeDefenseM":
            DefenseTab [1] = `${isme}`;
            visiblDM.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeDefenseM2":
            DefenseTab [2] = `${isme}`;
            visiblDM2.style.visibility = 'visible';
            playerInField++;
            break;

        case "placeDefenseR":
            DefenseTab [3] = `${isme}`;
            visiblDR.style.visibility = 'visible';
            playerInField++;
            break;

        case "GK":
            Goolkiper = `${isme}`;
            visiblGk.style.visibility = 'visible';
            playerInField++;
    }
// console.log("cdfffffffffffffffffffffffffff",playerInField);
    if(playerInField == 11){
        FineField();
    }
        
}



//creat div camla                    |T a 9 t e   l a 3 i b            |i m e g e s                    |...
const divIn$sectionPlyers = function(pac, sho, pas, dri, def, phy, rit, imgJoure, imgMontakhb, imgnadi, isme, posi) {//, WhereGo
    const div$Cart = document.createElement('div');//this is cart
    const div$side_img = document.createElement('div');// in cart
    const div$side_nel = document.createElement('div');//in cart
    const img$ = document.createElement('img');// in div$side_img
    const div$ = document.createElement('div');//in div$side_img
    const img$1enterDiv = document.createElement('img');// in div$
    const img$2enterDiv = document.createElement('img');//in div$
    const p$enterDiv = document.createElement('p');//in div$
    const h5$ = document.createElement('h5');//in div$side_nel
    const p$ = document.createElement('div');//in div$side_nel
    const button$enterNel = document.createElement('button');//in div$side_nel
    //start
    const Section$Player = document.querySelector('.player');

    p$.innerHTML = `PAC:${pac}  SHO:${sho}  PAS:${pas}  DRI:${dri}  DEF:${def}  PHY:${phy}`;
    img$.src = imgJoure;
    img$.alt = 'joure image';
    img$1enterDiv.src = imgMontakhb;
    img$1enterDiv.alt = 'joure image';
    img$2enterDiv.src = imgnadi;
    img$2enterDiv.alt = 'joure image';
    h5$.innerHTML = isme;
    p$enterDiv.innerHTML = posi;
    button$enterNel.innerHTML = "Add";

    //add class

    div$side_img.classList.add('player-NEL');
    div$side_img.classList.add('player-img');
    div$Cart.classList.add('player-cart');

    //add id
    button$enterNel.setAttribute('id', 'addPlyerInto');

    //button eventListener
    button$enterNel.addEventListener("click", ()=>{
        replacePlayerToField(pac, sho, pas, dri, def, phy, rit, imgJoure, imgMontakhb, imgnadi, isme, posi);
    });


    //append
    div$side_nel.appendChild(h5$);
    div$side_nel.appendChild(p$);
    div$side_nel.appendChild(button$enterNel);
    div$side_img.appendChild(img$);
    div$.appendChild(img$1enterDiv);
    div$.appendChild(img$2enterDiv);
    div$.appendChild(p$enterDiv);
    div$side_img.appendChild(div$);
    div$Cart.appendChild(div$side_img);
    div$Cart.appendChild(div$side_nel);
    Section$Player.appendChild(div$Cart);
};
});