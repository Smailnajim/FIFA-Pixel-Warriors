const removechildrens = function(){
    const parentt = document.querySelector(".player");
    while (parentt.firstChild) {
        console.log(parentt.firstChild);
        // console.log(parentt.firstChild);
        parentt.removeChild(parentt.firstChild);
    }
};

//creat div camla                    |T a 9 t e   l a 3 i b        |i m e g e s                    |...
const divIn$sectionPlyers = function(pac, sho, pas, dri, def, phy, imgJoure, imgMontakhb, imgnadi, isme, posi) {
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


fetch("js/main.json").then(response => response.json()).then(obj => {//start fetch
    

    const LB = document.getElementById('Defense-L');
    const CB = document.getElementById('Defense-M');
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
        do {
            i++;
            const Posis = obj.players[i].position; 

            if (Posis == "GK")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    LB.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 

            if (Posis == "LB" || Posis == "LCB")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    CB.addEventListener("click", ()=>{
        
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            if (Posis == "CB" || Posis == "CDB")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });
    
    
    RB.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            if (Posis == "RB" || Posis == "RWB")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    LM.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "LM" || Posis == "LW")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    CM.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "CM" || Posis == "CDM")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    RM.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "RM" || Posis == "RW")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    CF.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "CF" || Posis == "LW")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    ST.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "ST")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });

    
    SS.addEventListener("click", ()=>{
        i = -1;
        removechildrens();
        do {
            i++;
            const Posis = obj.players[i].position; 
            
            if (Posis == "RW")
            divIn$sectionPlyers (obj.players[i].passing, obj.players[i].shooting, obj.players[i].pace, obj.players[i].dribbling, obj.players[i].defending, obj.players[i].physical, obj.players[i].photo, obj.players[i].flag, obj.players[i].logo, obj.players[i].name, obj.players[i].position);
            
        }while (obj.players[i].name != "Gianluigi Donnarumma");
    });
});//fine fetch