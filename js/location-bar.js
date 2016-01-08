/* Location bar event listeners that Request Weather */

/////////////////   California   ////////////////////

var california = document.getElementById('california');
california.addEventListener('focus', addCaliforniaListeners);

var californiaResortsObject = ["heavenly", "alpineMeadows", "squawValley", "mammoth"];

var addCaliforniaListeners = function() {
  for (var i = 0; i < californiaResortsObject.length; i++){
    (californiaResortsObject[i] + "SearchButton").addEventListener('click', function() {
      // request weather from SnoCountry api using resort id, based on the object[#] of clicked resort
    });
  }
};


/////////////////   Colorado   ////////////////////

var colorado = document.getElementById('colorado');
colorado.addEventListener('focus', addColoradoListeners);

var coloradoResortsObject = ["vail", "telluride", "keystone", "breckenridge"];

var addColoradoListeners = function() {
  for (var i = 0; i < coloradoResortsObject.length; i++){
    (coloradoResortsObject[i] + "SearchButton").addEventListener('click', function() {
      // request weather from SnoCountry api using resort id, based on the object[#] of clicked resort
    });
  }
};



/////////////////   Montana   ////////////////////

var montana = document.getElementById('montana');
montana.addEventListener('focus', addMontanaListeners);

var montanaResortsObject = ["bigSky", "bridgerBowl", "whitefish", "snowbowl"];

var addMontanaListeners = function() {
  for (var i = 0; i < montanaResortsObject.length; i++){
    (montanaResortsObject[i] + "SearchButton").addEventListener('click', function() {
      // request weather from SnoCountry api using resort id, based on the object[#] of clicked resort
    });
  }
};


/////////////////   NewMexico   ////////////////////

var newMexico = document.getElementById('newMexico');
newMexico.addEventListener('focus', addNewMexicoListeners);

var newMexicoResortsObject = ["taosSkiValley", "apache", "parajito", "angelFire"];

var addNewMexicoListeners = function() {
  for (var i = 0; i < newMexicoResortsObject.length; i++){
    (newMexicoResortsObject[i] + "SearchButton").addEventListener('click', function() {
      // request weather from SnoCountry api using resort id, based on the object[#] of clicked resort
    });
  }
};


/////////////////   Utah   ////////////////////

var utah = document.getElementById('utah');
utah.addEventListener('focus', addUtahListeners);

var utahResortsObject = ["alta", "solitude", "parkCity", "snowbird"];

var addUtahListeners = function() {
  for (var i = 0; i < utahResortsObject.length; i++){
    (utahResortsObject[i] + "SearchButton").addEventListener('click', function() {
      // request weather from SnoCountry api using resort id, based on the object[#] of clicked resort
    });
  }
};


/////////////////   Vermont   ////////////////////

var vermont = document.getElementById('vermont');
vermont.addEventListener('focus', addVermontListeners);

var vermontResortsObject = ["killington", "jaysPeak", "smugglersNotch", "stratton"];

var addVermontListeners = function() {
  for (var i = 0; i < vermontResortsObject.length; i++){
    (vermontResortsObject[i] + "SearchButton").addEventListener('click', function() {
      // request weather from SnoCountry api using resort id, based on the object[#] of clicked resort
    });
  }
};