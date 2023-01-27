//------------Declaraciones variables para "Mapas"---------------------
const btnSplit = document.getElementById('btn-split');
const divSplit = document.getElementById('full-img-split');
const btnClosesplit = document.getElementById('btn-closesplit');

const btnIcebox = document.getElementById('btn-icebox');
const divIcebox = document.getElementById('full-img-icebox');
const btnCloseicebox = document.getElementById('btn-closeicebox');

const btnAscent = document.getElementById('btn-ascent');
const divAscent= document.getElementById('full-img-ascent');
const btnCloseascent = document.getElementById('btn-closeascent');

const btnBind = document.getElementById('btn-bind');
const divBind = document.getElementById('full-img-bind');
const btnClosebind = document.getElementById('btn-closebind');

const btnBreeze = document.getElementById('btn-breeze');
const divBreeze = document.getElementById('full-img-breeze');
const btnClosebreeze = document.getElementById('btn-closebreeze');


btnSplit.addEventListener("click", function() {
    if (divSplit.classList.contains("hideleft")) {
        divSplit.classList.remove("hideleft");
        }

divSplit.classList.toggle("show");
});

btnClosesplit.addEventListener("click", function() {
    divSplit.classList.toggle("show");
    divSplit.classList.toggle("hideleft");
})


//--------------------------

btnIcebox.addEventListener("click", function() {
    if (divIcebox.classList.contains("hideleft")) {
        divIcebox.classList.remove("hideleft");
        }

    divIcebox.classList.toggle("show");
})

btnCloseicebox.addEventListener("click", function() {
    divIcebox.classList.toggle("show");
    divIcebox.classList.toggle("hideleft");
    })

//--------------------------

btnAscent.addEventListener("click", function() {
    if (divAscent.classList.contains("hideright")) {
    divAscent.classList.remove("hideright");
    }

    divAscent.classList.toggle("showright");
})

btnCloseascent.addEventListener("click", function() {
    divAscent.classList.toggle("showright");
    divAscent.classList.toggle("hideright");
    })

//-----------------------------

btnBind.addEventListener("click", function() {
    if (divBind.classList.contains("hideleft")) {
        divBind.classList.remove("hideleft");
        }

    divBind.classList.toggle("show");
})

btnClosebind.addEventListener("click", function() {
    divBind.classList.toggle("show");
    divBind.classList.toggle("hideleft");
    })

//----------------------------------

btnBreeze.addEventListener("click", function() {
    if (divBreeze.classList.contains("hideright")) {
        divBreeze.classList.remove("hideright");
        }

    divBreeze.classList.toggle("showright");
})

btnClosebreeze.addEventListener("click", function() {
    divBreeze.classList.toggle("showright");
    divBreeze.classList.toggle("hideright");
    })









