function hideEliment(elimentId) {
    const eliment = document.getElementById(elimentId);
    if (eliment) {
        eliment.classList.add('hidden');
    } else {
        console.error(`Element with ID '${elimentId}' not found.`);
    }
}

function showEliment(elimentId) {
    const eliment = document.getElementById(elimentId);
    if (eliment) {
        eliment.classList.remove('hidden');
    } else {
        console.error(`Element with ID '${elimentId}' not found.`);
    }
}


function genaretAranmodAlfabate(){
    const alfabates = 'abcdefghijklmnopqrstuvwxyz'
    const splitalfa = alfabates.split('');
   

    const randomenumber = Math.random()*25;
    const indxn = Math.round(randomenumber);
    const alfabate = splitalfa[indxn];
    return alfabate;


}


function addbgcolorByid(elimentId){

    const eliment = document.getElementById(elimentId);
    eliment.style.backgroundColor = 'yellow'; 


}
