//variables dont on a besoin
let sp, btnStart, btnStop, t, ms, s, min, h;

//fonction pour initialiser les variables quand la page se charge
window.onload = function () {
    sp = document.getElementsByTagName('span');
    btnStart = document.getElementById('start');
    btnStop = document.getElementById('stop');
    btnReset = document.getElementById('reset');
    t;
    ms = 0, s = 0, min = 0, h = 0;
    
    //mise en place du compteur
    
    function updateChrono () {
        ms+=1;
        if(ms == 10) {
            ms = 1;
            s+= 1;
        }
        
        if(s == 60) {
            s = 0;
            min += 1;
        }
        
        if (min == 60) {
            min = 0;
            h += 1;
        }
        
        //insertion des valeurs dans les span
        sp[0].innerHTML = h + "h";
        sp[1].innerHTML = min + "min";
        sp[2].innerHTML = s + "s";
        sp[3].innerHTML = ms + "ms";
    }
    
    //mis en place de la fonction du boutton start
    function start () {
        t =  setInterval(updateChrono, 100);
        btnStart.disabled = true;
    }
    
    btnStart.addEventListener("click", start);

    //arret du chronometre
    function stop () {
        clearInterval(t);
        btnStart.disabled = false;
    }
    btnStop.addEventListener("click", stop);

    //réinitialisation du chronometre
    function reset () {
        clearInterval(t);
        btnStart.disabled = false;
        ms = 0, s = 0, min = 0, h = 0;
        //insertion des valeurs dans les span
        sp[0].innerHTML = h + "h";
        sp[1].innerHTML = min + "min";
        sp[2].innerHTML = s + "s";
        sp[3].innerHTML = ms + "ms";
    }

    btnReset.addEventListener("click", reset);
    
}