// Links for the 4 Top Resorts across 6 States //

/* 

Could use mongoDB to hold a database filled with a collection of 24 resorts (items in DB)
Database includes 6 collections of States with documents containing 4 Resorts per state
State documents contain: resort names, state, links to make a map, and possibly SnoCountry API request URL - to be used in api.js 
Locations  DB
  State name  Collection
    Resort name  Document
      attribute :  Value 
      Google : map URL 
        (width 640px by height 400px) showing the featured resort name, pictures, directions, and links to all other Google Map details
      LatLng : 39.638952,-105.871382  (use with Google Maps to place the pins accurately):
        in API response as:
        "latitude": "39.638952",
        "longitude": "-105.871382",
*/

/* California */
// heavenly : https://goo.gl/maps/Z1fYLwbjT1o
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32646.38609092636!2d-119.93175545368109!3d38.937581332170915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80999044bec9cdc7%3A0xce810176609a01e8!2sHeavenly+Mountain+Resort!5e0!3m2!1sen!2sus!4v1450914523516" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
// alpine meadows : https://goo.gl/maps/QfaH3dkJ2H82
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8451.6903322042!2d-120.24011264940465!3d39.1633697366846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x899da9661d407225!2sAlpine+Meadows+Ski+Resort!5e0!3m2!1sen!2sus!4v1450914603721" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
// squaw valley : https://goo.gl/maps/zkGrtgyMgbD2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8448.513926930904!2d-120.23703021047939!3d39.18979944428812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x30be88f09785170f!2sSquaw+Valley+Resort!5e0!3m2!1sen!2sus!4v1450914670703" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
// mammoth : https://goo.gl/maps/GftQXeFNAK32
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1878.316898763315!2d-119.03830554908062!3d37.65061865084606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x9db373599451c4c2!2sMammoth+Mountain!5e0!3m2!1sen!2sus!4v1450914905708" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>


/* Colorado */
// telluride : https://goo.gl/maps/PjvSwH5r2DQ2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.7378830666335!2d-107.84852578501874!3d37.93655351060876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873ed7fd24b94b9f%3A0x9d02e608ccfc306b!2sTelluride+Ski+Resort!5e0!3m2!1sen!2sus!4v1450914088125" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
// vail : https://goo.gl/maps/LMQPdj9qx4N2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.934918423417!2d-106.35716038496929!3d39.606148512460265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a7060c630dbdb%3A0xa7c2cf2d4b45ada2!2sVail+Ski+Resort!5e0!3m2!1sen!2sus!4v1450914214436" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
// keystone : https://goo.gl/maps/4vSYUqEZRGv
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.971005241961!2d-105.97870138496931!3d39.60533561250895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a5a02238af65b%3A0xf32799b7df0fabaf!2sKeystone+Ski+Resort!5e0!3m2!1sen!2sus!4v1450913492722" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
// breckenridge : https://goo.gl/maps/csRjiH2wTDo
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.504993684828!2d-106.06906858497312!3d39.48051021996677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876af5de55ff22e5%3A0xcb03255c537d3e1c!2sBreckenridge+Ski+Resort!5e0!3m2!1sen!2sus!4v1450914254091" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>


/* Montana */
// big sky : https://goo.gl/maps/4qcfsDhbNP22
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.1277705662123!2d-111.402857684786!3d45.285639753361814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53500c2b107d01f3%3A0x8a1ea7ffc4782a74!2sBig+Sky+Resort!5e0!3m2!1sen!2sus!4v1451900366393" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// bridger bowl : https://goo.gl/maps/uZK9TBce7s62
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6170.526707494442!2d-110.91347703918348!3d45.819372057116816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xfb325ae8b584df5c!2sBridger+Bowl+Ski+Area!5e0!3m2!1sen!2sus!4v1451900521558" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// whitefish : https://goo.gl/maps/wAHXiowRY492
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.325943719585!2d-114.3568640321851!3d48.489180378252605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xee1d351150a0c145!2sWhitefish+Mountain+Resort!5e0!3m2!1sen!2sus!4v1451900471000" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// snowbowl : https://goo.gl/maps/mMswD9tuBHK2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7720.961731573426!2d-114.00286525238563!3d47.014151543692314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dcdc6aaaaaaab%3A0x73eb2843b6c07974!2sMontana+Snowbowl!5e0!3m2!1sen!2sus!4v1451900603952" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>


/* New Mexico */
// taos ski valley : https://goo.gl/maps/Au1HK6q33yP2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25627.27691639139!2d-105.47113017917987!3d36.59244257904718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87176ae3f0000001%3A0xcf4bc5e9974ae0f5!2sTaos+Ski+Valley%2C+Inc.!5e0!3m2!1sen!2sus!4v1451900676198" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// apache : https://goo.gl/maps/TuD8N9MqVGU2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9929911037934!2d-105.79095998514248!3d33.397347059404105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e1d75aaaaaaaab%3A0xeab909c0f2c5fb8e!2sSki+Apache!5e0!3m2!1sen!2sus!4v1451900728163" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// pajarito : https://goo.gl/maps/qi1RVSuPWNG2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10866.070889974813!2d-106.40218744539679!3d35.8889702820791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x56606c59df7070e7!2sPajarito+Mountain+Ski+Area!5e0!3m2!1sen!2sus!4v1451900788439" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// angel fire : https://goo.gl/maps/nNY1N6XjQZx
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.8967565457124!2d-105.27557468506282!3d36.38749329852226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87175892ec0ffafd%3A0xa8186ea02297a957!2sAngel+Fire+Resort!5e0!3m2!1sen!2sus!4v1451900826740" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>


/* Utah */
// alta : https://goo.gl/maps/WJuhZRh8yB22
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7699560999786!2d-111.63095908493912!3d40.59083295295698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87527081341582c5%3A0x11d9d28a3a831268!2sAlta+Ski+Area!5e0!3m2!1sen!2sus!4v1451900875450" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// solitude : https://goo.gl/maps/vW8p77rJCFJ2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.4900261343787!2d-111.59419868493825!3d40.61907405123268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87526e2a421177bf%3A0xafc63e9db2036b66!2sSolitude+Mountain+Resort!5e0!3m2!1sen!2sus!4v1451900950925" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// park city : https://goo.gl/maps/AW7UBpu8xjS2
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.038394243417!2d-111.5104786849373!3d40.65108404927752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752729c585de5df%3A0xfb4938052215e3af!2sPark+City!5e0!3m2!1sen!2sus!4v1451900986973" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// snowbird : https://goo.gl/maps/fmNjHuHeE282
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.213658785757!2d-111.65896478493946!3d40.58103905355459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87526300d0d7b777%3A0xfb3354fa3e0d0e30!2sSnowbird+Ski+%26+Summer+Resort!5e0!3m2!1sen!2sus!4v1451901033021" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>


/* Vermont */
// killington : https://goo.gl/maps/2LppvdhvH7v
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.299701439857!2d-72.80460900973839!3d43.617790281789766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x151ba175c7bce8bd!2sKillington+Ski+Area!5e0!3m2!1sen!2sus!4v1451901093328" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// jay peak : https://goo.gl/maps/pcU13aYQDcv
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5648.862481757562!2d-72.50737147407847!3d44.93490066145588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb60ed7e10e19f1%3A0x7c7be953a3190d61!2sJay+Peak+Resort!5e0!3m2!1sen!2sus!4v1451901135291" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// smugglers notch : https://goo.gl/maps/LEfWCQudKq32
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.386501264652!2d-72.79063188480963!3d44.58911969942486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb58d52c5aa9bd3%3A0x67d3bc866eef2ca3!2sSmugglers&#39;+Notch+Resort!5e0!3m2!1sen!2sus!4v1451901167669" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

// stratton : https://goo.gl/maps/TGBQ9eGL8oy
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.5749957576986!2d-72.9103170848588!3d43.11344579518308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e05805a936c2c1%3A0xad64bc779caf063e!2sStratton+Mountain+Resort!5e0!3m2!1sen!2sus!4v1451901214650" width="640" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>