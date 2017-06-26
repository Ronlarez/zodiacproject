var zodiacArr = [
  {
  sign: "aries",
  reading:"you are going to fall off a building",
  imgPath:"img/aries.jpg",
},
 {
  sign: "taurus",
  reading:"I LOVE YOU MORE THEN YOU WILL EVER KNOW BEAUTIFUL",
  imgPath:"img/taurus.jpg",
},
{
sign: "gemini",
reading:"YOUR SIGN IS ge MINI",
imgPath:"img/gemini.jpg",
} ,
{
  sign: "cancer",
  reading:"HOPE YOU DO NOT DIE FROM YOUR SIGN",
  imgPath:"img/cancer.jpg",
},
  {
  sign: "leo",
  reading:" leo the lion has a main of fro",
  imgPath:"img/leo.png",
},
  {
  sign: "virgo",
  reading:"you to are my little baby girls",
  imgPath:"img/vergo.jpg",
},
  {
  sign: "libra",
  reading:"libra is a sea donkey",
  imgPath:"img/libra.jpg",
},
  {
  sign: "scorpio",
  reading:"EVEN thought u got monkey feet i love you my little Princess",
  imgPath:"img/scorpio.jpg",
},
  {
  sign: "sagittarius",
  reading:"you go ham for a can of spam",
  imgPath:"img/sag.jpg",
},
  {
  sign: "capricorn",
  reading:"can of corn and i'll be ok",
  imgPath:"img/capricorn.jpg",
},
{
sign: "aquarius",
reading:"you are from the monteray bay aquarius",
imgPath:"img/aquarius.jpg",
},
{
  sign: "pisces",
  reading:"you smell like fish",
  imgPath:"img/pisces.jpg",
}
]
function getInfo (onClick){
  var userSign =document.getElementById('userSign').value
  var zodiacImg =document.getElementById('zodiacImg')
for(var i = 0; i < zodiacArr.length; i++){
  if(userSign == zodiacArr [i].sign){
    document.getElementById("text").innerHTML = "<h1>" +zodiacArr[i].sign +"</h1> "+
    zodiacArr[i].reading;
 zodiacImg.src = zodiacArr[i].imgPath
    return

 }


}
console.log("you got it wrong learn how to spell")
  document.getElementById("text").innerHTML = "<h1>You spelled it wrong dumbass</h1>"
}
