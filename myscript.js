window.onload = () => {
    
    document.querySelector("#myButton").onclick = () => {

      function getRandomInt() {

    let who = [
        "my grandpa", 
        "my next door neighbor", 
        "my cousin", 
        "my dumb dog", 
        "my grandma"];

    let what = [
        "ran away with my car keys", 
        "drank my beer", 
        "ate my burger", 
        "pooped on my car", 
        "stole my amazon package"];

    let when = [
        "last christmas", 
        "on my birthday",
        "yesterday", 
        "just now", 
        "fifteen minutes ago"];

    
    let who2 = Math.floor(Math.random() * who.length -1);
    let what2 = Math.floor(Math.random() * what.length);
    let when2 = Math.floor(Math.random() * when.length);

    return who[who2] + " " + what[what2] + " " + when[when2];

 }

    document.querySelector("#excuse-generator").innerHTML = getRandomInt();
  console.log(getRandomInt());
  
    };
};