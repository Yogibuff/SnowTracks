/* location bar event listeners */

/////////////////   California   ////////////////////

var california = document.getElementById('california');
  california.addEventListener('focus', addResortListeners);

var californiaResortsArray = ["heavenly", "alpineMeadows", "squawValley", "mammoth"];

var addResortListeners = function() {
  for (var i = 0; i < californiaResortsArray.length; i++){
    addEventListeners(californiaResortsArray[i] + "SearchButton");
  }
};


/////////////////   Colorado   ////////////////////

var colorado = document.getElementById('colorado');
  colorado.addEventListener('focus', addResortListeners);

var coloradoResortsArray = ["vail", "telluride", "keystone", "breckenridge"];

var addResortListeners = function() {
  for (var i = 0; i < coloradoResortsArray.length; i++){
    addEventListeners(coloradoResortsArray[i] + "SearchButton");
  }
};



/////////////////   Montana   ////////////////////

var montana = document.getElementById('montana');
  montana.addEventListener('focus', addResortListeners);

var montanaResortsArray = ["bigSky", "bridgerBowl", "whitefish", "snowbowl"];

var addResortListeners = function() {
  for (var i = 0; i < montanaResortsArray.length; i++){
    addEventListeners(montanaResortsArray[i] + "SearchButton");
  }
};


/////////////////   NewMexico   ////////////////////

var newMexico = document.getElementById('newMexico');
  newMexico.addEventListener('focus', addResortListeners);

var newMexicoResortsArray = ["taosSkiValley", "apache", "parajito", "angelFire"];

var addResortListeners = function() {
  for (var i = 0; i < newMexicoResortsArray.length; i++){
    addEventListeners(newMexicoResortsArray[i] + "SearchButton");
  }
};


/////////////////   Utah   ////////////////////

var utah = document.getElementById('utah');
  utah.addEventListener('focus', addResortListeners);

var utahResortsArray = ["alta", "solitude", "parkCity", "snowbird"];

var addResortListeners = function() {
  for (var i = 0; i < utahResortsArray.length; i++){
    addEventListeners(utahResortsArray[i] + "SearchButton");
  }
};


/////////////////   Vermont   ////////////////////

var vermont = document.getElementById('vermont');
  vermont.addEventListener('focus', addResortListeners);

var vermontResortsArray = ["killington", "jaysPeak", "smugglersNotch", "stratton"];

var addResortListeners = function() {
  for (var i = 0; i < vermontResortsArray.length; i++){
    addEventListeners(vermontResortsArray[i] + "SearchButton");
  }
};
