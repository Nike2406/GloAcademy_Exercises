'use strict';

function getOneVar(arg){
    if (typeof(arg) !== 'string') { 
        console.log(arg + ' - это не строка.'); 
     }else{
        let oneVar = arg.trim();
        if (oneVar.length > 30) {
            oneVar  = oneVar.slice(0, 30) + '...'; 
        }
        
        console.log('Это строка: ' + oneVar );
    }
}

getOneVar('Строка');
getOneVar(true);
getOneVar(6465165165);
getOneVar('         Длинная строка                    ');
getOneVar('Очень длинная строка!!!!!!!!!!!!!!!!!!!!!!!!!');