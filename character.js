
const btnCharacters = document.querySelectorAll(".character");
const descriptions = document.getElementById("descriptions");
const characterImg = document.getElementById("character-img");
const characterP = document.getElementById("character-p");
const characterOrigen = document.getElementById("character-origen");
const characterMap = document.getElementById("character-map");
const characterRole = document.getElementById("character-role");
const characterName = document.getElementById("character-name");
const closeDesc = document.getElementById("close-desc");

const cypher = {
    id: 10,
    name: "cypher",
    History: "Cypher es un experto en información de Marruecos que se especializa en redes de vigilancia y es capaz de seguirle la pista al enemigo constantemente. No hay secreto a salvo ni maniobra que pase desapercibida. Cypher siempre está alerta",
    role: "Sentinela",
    origen: "Marruecos",
    maps: "Breeze, Heaven, Fracture",
    img: "resources/cypher.png",
};

const phoenix = {
    id: 0,
    name: "phoenix",
    History: "Los poderes estelares de Phoenix salen a relucir con su estilo de combate, que prende fuego al campo de batalla de forma deslumbrante. Con apoyo o en solitario, él es quien decide cuándo y cómo se lucha",
    role: "Duelista",
    origen: "Reino Unido",
    maps: "Breeze, Icebox, Heaven",
    img: "resources/Phoenix.png",
};

const sova = {
    id: 1,
    name: "sova",
    History: "Nacido en el eterno invierno de la tundra rusa, Sova destaca a la hora de localizar, perseguir y eliminar a los enemigos con una eficiencia y una precisión inclementes. Su arco personalizado junto con su sobrenatural capacidad de rastreamiento hacen que sea imposible escapar",
    role: "Iniciador",
    origen: "Rusia",
    maps: "Ascent, Breeze, Icebox",
    img: "resources/Sova.png",
};

const jett = {
    id: 2,
    name: "jett",
    History: "El estilo de lucha ágil y evasivo de Jett le permite asumir grandes riesgos. En las refriegas, recorre el terreno en círculos y hace trizas a los enemigos con una rapidez espectacular",
    role: "Duelista",
    origen: "Korea del Sur",
    maps: "Bind, Breeze, Icebox",
    img: "resources/Jett.png",
};

const omen = {
    id: 3,
    name: "omen",
    History: "Omen es un fantasma de tiempos pasados que acecha en las sombras. Es capaz de cegar al enemigo, teleportarse a través del campo de batalla y sembrar el caos y la paranoia mientras sus rivales se preguntan dónde atacará la próxima vez",
    role: "Controlador",
    origen: "Desconocido",
    added: "Ascent, Bind, Heaven",
    img: "resources/Omen.png",
};

const brimstone = {
    id: 4,
    name: "brimstone",
    History: "De origen estadounidense, Brimstone cuenta con un arsenal de órbita que garantiza que su equipo siempre vaya por delante. Su capacidad para proporcionar herramientas de utilidad con precisión y desde la distancia lo convierten en un comandante ejemplar",
    role: "Controlador",
    origen: "EE.UU",
    maps: "Bind, Heaven, Fracture",
    img: "resources/Brimstone.png",
};

const reyna =  {
    id: 5,
    name: "reyna",
    History: "Desde el corazón de México, Reyna llega para dominar los combates uno contra uno y cada asesinato que consigue la hace más fuerte. Su potencial es prácticamente infinito, y la destreza individual es el único factor determinante de su éxito",
    role: "Duelista",
    origen: "Mexico",
    maps: "Bind, Breeze, Icebox",
    img: "resources/Reyna.png",
};

const raze = {
    id: 6,
    name: "raze",
    History: "A Raze le encantan los explosivos. Con su estilo de juego basado en la fuerza bruta, destaca a la hora de barrer a grupos de enemigos atrincherados y de despejar áreas estrechas con explosivos y sin compasión",
    role: "Duelista",
    origen: "Brasil",
    maps: "Ascent, Bind, Heaven",
    img: "resources/Raze.png",
};

const breach = {
    id: 7,
    name: "breach",
    History: "Agente iniciador traído desde de Suecia con extensiones robóticas que aturden a los enemigos (y aliados si no se usa bien)",
    role: "Iniciador",
    origen: "Suecia",
    maps: "Ascent, Heaven, Fracture",
    img: "resources/Breach.png",
};

const neon = {
    id: 8,
    name: "neon",
    History: "La agente filipina, Neon, avanza a velocidades impactantes, descargando ráfagas de energía bioeléctrica tan rápido como su cuerpo la genera. Se adelanta velozmente a sus enemigos para atraparlos desprevenidos y luego los fulmina más rápido que un rayo",
    role: "Duelista",
    origen: "Filipinas",
    maps: "Breeze, Heaven, Fracture",
    img: "resources/Neon.png",
};

const killjoy = {
    id: 9,
    name: "killjoy",
    History: "Killjoy, la prodigio de Berlín, asegura fácilmente el campo de batalla con un arsenal de dispositivos. Si el daño que inflige su equipamiento no detiene a sus enemigos, la debilitación de sus robots la ayudarán a aniquilarlos",
    role: "Sentinela",
    origen: "Alemania",
    maps: "Ascent, Icebox, Heaven",
    img: "resources/Killjoy.png",
};



const characters = [
    phoenix , 
    sova ,
    jett ,
    omen ,
    brimstone ,
    reyna,
    raze ,
    breach ,
    neon ,
    killjoy ,
    cypher
    ];

    

    
     btnCharacters.forEach(function(btn){
        btn.addEventListener("click", function(e) {
           const dataPj = e.currentTarget.classList[2];
         characters.findIndex(element => {

          if ((element.name === dataPj) === true)  {
            characterImg.src = element.img;
            characterP.textContent = element.History;
            characterName.textContent = element.name;
            characterOrigen.textContent = element.origen;
            characterMap.textContent = element.maps;
            characterRole.textContent = element.role;
          };
           })
           
           if (descriptions.classList.contains("hidedesc")) {
            descriptions.classList.remove("hidedesc");
           }

           descriptions.classList.toggle("showdesc");
        })
    }) 

    closeDesc.addEventListener("click", function() {
        descriptions.classList.toggle("showdesc");
        descriptions.classList.toggle("hidedesc");
    })


       