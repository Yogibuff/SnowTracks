/* location bar event listeners */

/////////////////   California   ////////////////////

var california = document.getElementById('california');
  california.addEventListener('focus', addCaliforniaListeners);

var californiaResortsArray = ["heavenly", "alpineMeadows", "squawValley", "mammoth"];

var addCaliforniaListeners = function() {
  for (var i = 0; i < californiaResortsArray.length; i++){
    addEventListeners(californiaResortsArray[i] + "SearchButton");
    console.log(californiaResortsArray[i]);
  }
};


/////////////////   Colorado   ////////////////////

var colorado = document.getElementById('colorado');
  colorado.addEventListener('focus', addColoradoListeners);

var coloradoResortsArray = ["vail", "telluride", "keystone", "breckenridge"];

var addColoradoListeners = function() {
  for (var i = 0; i < coloradoResortsArray.length; i++){
    addEventListeners(coloradoResortsArray[i] + "SearchButton");
  }
};



/////////////////   Montana   ////////////////////

var montana = document.getElementById('montana');
  montana.addEventListener('focus', addMontanaListeners);

var montanaResortsArray = ["bigSky", "bridgerBowl", "whitefish", "snowbowl"];

var addMontanaListeners = function() {
  for (var i = 0; i < montanaResortsArray.length; i++){
    addEventListeners(montanaResortsArray[i] + "SearchButton");
  }
};


/////////////////   NewMexico   ////////////////////

var newMexico = document.getElementById('newMexico');
  newMexico.addEventListener('focus', addNewMexicoListeners);

var newMexicoResortsArray = ["taosSkiValley", "apache", "parajito", "angelFire"];

var addNewMexicoListeners = function() {
  for (var i = 0; i < newMexicoResortsArray.length; i++){
    addEventListeners(newMexicoResortsArray[i] + "SearchButton");
  }
};


/////////////////   Utah   ////////////////////

var utah = document.getElementById('utah');
  utah.addEventListener('focus', addUtahListeners);

var utahResortsArray = ["alta", "solitude", "parkCity", "snowbird"];

var addUtahListeners = function() {
  for (var i = 0; i < utahResortsArray.length; i++){
    addEventListeners(utahResortsArray[i] + "SearchButton");
  }
};


/////////////////   Vermont   ////////////////////

var vermont = document.getElementById('vermont');
  vermont.addEventListener('focus', addVermontListeners);

var vermontResortsArray = ["killington", "jaysPeak", "smugglersNotch", "stratton"];

var addVermontListeners = function() {
  for (var i = 0; i < vermontResortsArray.length; i++){
    addEventListeners(vermontResortsArray[i] + "SearchButton");
  }
};
