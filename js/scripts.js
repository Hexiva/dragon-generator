function nameGen() {
  var syl1Array = ["Syl","Kor", "And", "Drak", "Zar", "Kol", "Rak", "Szar", "Shar", "Skal", "Ner", "Lar", "Vol", "Mort","Dsur",]
  var syl2Array = ["de", "and", "al", "as", "or", "ar", "ak", "", "ol", "ol"]
  var syl3Array = ["rion", "ion", "ar", "as", "us", "ius", "ian", "rian", "os","ios",]
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var syl3Num = Math.floor(Math.random() * syl3Array.length);
  var name = syl1Array[syl1Num] + syl2Array[syl2Num] + syl3Array[syl3Num];
  return name;
}

function genderGen () {
  genderArray = ["Male", "Male", "Male", "Male",  "Male", "Male", "Female", "Female", "Female", "Female", "Female", "Female",  "Nonbinary",]
  var genderNum = Math.floor(Math.random() * genderArray.length);
  var gender = genderArray[genderNum];
  return gender;
}

function colorGen() {

  if (gender === "Male") {
    var pronoun1 = "he";
    var pronoun2 = "him";
    var pronoun3 = "his";
    var capPronoun1 = "He";
    var capPronoun2 = "His";
  } else if (gender === "Female") {
    var pronoun1 = "she";
    var pronoun2 = "her";
    var pronoun3 = "her";
    var capPronoun1 = "She";
    var capPronoun2 = "Her";
    } else {
    var pronoun1 = "xe";
    var pronoun2 = "xir";
    var pronoun3 = "xir";
    var capPronoun1 = "Xe";
    var capPronoun2 = "Xir";
      }

  var colorArray = ["red", "blue", "white", "black", "purple", "pink", "green", "orange", "yellow", "brown", "sky-blue", "creamy off-white", "deep red", "blood red", "bright red", "neon red", "maroon", "burgundy", "teal", "deep blue", "indigo", "very pale blue", "very pale pink", "navy blue", "dark teal", "light teal", "grey", "dark grey", "pale grey", "lilac", "deep purple", "magenta", "neon blue", "neon pink", "neon magenta", "neon green", "forest green", "blue-green", "yellow-green", "pale green","neon orange", "burnt orange", "red-orange", "creamy pale orange", "deep orange", "blue-grey", "grey-green", "pale yellow", "bright yellow", "neon yellow", "dull yellow", "golden yellow", "golden brown", "reddish brown", "rusty red", "greyish brown", "dark brown", "light brown", "creamy pale brown", "deep brown", "mahogany", ]
  var colNum = Math.floor(Math.random() * colorArray.length);
  var color = colorArray[colNum];
  var colNum2 = Math.floor(Math.random() * colorArray.length);
  var color2 = colorArray[colNum2];
  var bodyPartArray = ["wings", "legs", "face", "head", "tail", "neck", "wings and legs", "face and head", "legs and tail", "neck and head"];
  var bodyPartNum = Math.floor(Math.random() * bodyPartArray.length);
  var bodyPart = bodyPartArray[bodyPartNum];
  var patternTypeArray = ["stripes", "spots", "speckles", "mottling", "streaks", "blotches", "patches",];
  var pattTypeNum= Math.floor(Math.random() * patternTypeArray.length);
  var patternType = patternTypeArray[pattTypeNum];
  var patternArray = ["solid " + color, color + " with " + color2 + " " + patternType, color + " with " + color2 + " " + patternType + " on " + pronoun3 + " " + bodyPart, "mottled " + color + " and " + color2,  color + " fading to " + color2 + " around " + pronoun3 + " " + bodyPart, "half " + color + " and half " + color2, color + " with " + color2 + " " + bodyPart, color + " with a " + color2 + " underbelly",]
  var pattNum= Math.floor(Math.random() * patternArray.length);
  var pattern = patternArray[pattNum];
  return pattern;
}

function bodyGen() {

  if (gender === "Male") {
    var pronoun1 = "he";
    var pronoun2 = "him";
    var pronoun3 = "his";
    var capPronoun1 = "He";
    var capPronoun2 = "His";
  } else if (gender === "Female") {
    var pronoun1 = "she";
    var pronoun2 = "her";
    var pronoun3 = "her";
    var capPronoun1 = "She";
    var capPronoun2 = "Her";
    } else {
    var pronoun1 = "xe";
    var pronoun2 = "xir";
    var pronoun3 = "xir";
    var capPronoun1 = "Xe";
    var capPronoun2 = "Xir";
      }

  var bodyArray = ["a long, snake-like body", "a solid, heavily armored body", "a lithe, lizard-like body",];
  var bodyNum = Math.floor(Math.random() * bodyArray.length);
  var bodyType = bodyArray[bodyNum];
  var scaleArray = ["smooth", "jagged", "spiky", "narrow", "heavy"];
  var scaleNum = Math.floor(Math.random() * scaleArray.length);
  var scales = scaleArray[scaleNum] + " scales";
  var spineAdjArray = ["long", "curved", "thin", "thick", "wide", "", "twisted"]
  var spineAdjNum = Math.floor(Math.random() * spineAdjArray.length);
  var spineAdj = spineAdjArray[spineAdjNum]
  var spineArray = ["two rows of " + spineAdj + " spikes down the back of " + pronoun3 + " spine", "a row of " + spineAdj + " spikes down the back of " + pronoun3 + " spine", "a frill going down the back of " + pronoun3 + " spine", "two frills going down the back of " + pronoun3 + " spine"]
  var spineNum = Math.floor(Math.random() * spineArray.length);
  spine = spineArray[spineNum];

  var hornArray = ["two curled horns on either side of " + pronoun3 + " head", "two short spines protruding back from the base of " + pronoun3 + " jaw", "two horns pointing back from the top of " + pronoun3 + " skull", "two curled horns protruding from the base of " + pronoun3 + " jaw", spineAdj + " spines all over " + pronoun3 + " body", "one horn on " + pronoun3 + " nose", "one spike protruding from the base of " + pronoun3 + " chin", "a crown of spines extending back from the base of " + pronoun3 + " skull"];
  var hornNum = Math.floor(Math.random() * hornArray.length);
  horn = hornArray[hornNum];

  var frillArray = ["two frills extending back from " + pronoun3 + " jaw", "a frill topping the crown of " + pronoun3 + " skull", "two frills extending back on either side of " + pronoun3 + " head like ears"];
  var frillNum = Math.floor(Math.random() * frillArray.length);
  var frill = frillArray[frillNum];

  var tendril = "one tendril on each side of " + pronoun3 + " face, below each nostril";

  var tailArray = ["a broad fan", "an arrow", "a spiked club", "a tuft of fur",]
  var tailNum = Math.floor(Math.random() * tailArray.length);
  var tail = "a tail that ends in " + tailArray[tailNum];

  var bodyFormArray = ["two forelegs and no hind legs", "two hind legs and wings in the place of forelegs", "four legs",]
  var bodyFormNum = Math.floor(Math.random() * bodyFormArray.length);
  bodyForm = bodyFormArray[bodyFormNum];

  var traitArray = [horn, frill, tail, spine];
  var trait1Num = Math.floor(Math.random() * traitArray.length);
  var trait1 = traitArray[trait1Num];
  traitArray.splice($.inArray(trait1, traitArray),1);
  var trait2Num = Math.floor(Math.random() * traitArray.length);
  var trait2 = traitArray[trait2Num];
  traitArray.splice($.inArray(trait2, traitArray),1);
  var trait3Num = Math.floor(Math.random() * traitArray.length);
  var trait3 = traitArray[trait3Num];

  var wingArray = ["are ribbed frills stretching out from " + pronoun3 + " shoulders and connecting to their tail", "are batlike, tipped with a spike where a bat's thumb would be", "are batlike, tipped with two spikes where a bat's thumb would be", "are composed of overlapping scales resembling feathers", "are smooth and resemble a pterodactyl's",]
  var wingNum = Math.floor(Math.random() * wingArray.length);
  var wing = wingArray[wingNum];

  return capPronoun1 + " has " + bodyType + " with " + bodyForm + ". " + capPronoun1 + " has " +  trait1 + ", " + trait2 + ", and " + trait3 + ". " + capPronoun2 + " wings " + wing + ". ";


}

$(document).ready(function() {
  $('.add-button').click(function(){
    gender = genderGen();
    $("#dragon").text(nameGen() + " is " + colorGen()+ ". " + bodyGen());
    $("#dragon").show();
  });
});
