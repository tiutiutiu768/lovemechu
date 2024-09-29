const text =
  "Here a letter for the cutest guy,                     I'm not really a romantic person, but it's 3 am and I'm just rambling and yapling. I don't know if I'm high or just sleep-deprived. This might sound crazy, but I have a crush on you. You keep coming back into my life, and then we disappear again. A ghoster leaving me no trace to follow, well it's the two of us isn't it? Well I thought, ''Okay, maybe I should just let you go and find someone else.'' But then I get jealous, and I realize I'm the one who's been running away. I feel betrayed, like I've been cheated on, even though you were with someone else. It's ridiculous, HAGSHAHAHAHAHA what the sigma yk I thought I could easily let you go, but you keep coming back, and like a stubborn leech, I just can't help but come back too. You don't give me time to heal. The crazy thing is, I've liked you for six years. It doesn't matter if you don't feel the same way. Just so yk I even learned coding, HTML, and CSS just to write this confession. And well Im learning about bleach, chess, rubix cube just for you, chatting you when my exam is tomorrow thats how just fucking psycho I am. I wanted you so badly, I just wanted to tuok someone and myself HAHAHAHAHGAGSHAHAHAHAHAHAHAHBA shet kauwaw ani uy yawa Ngano man Jud na why cant you just find someone else. Why do I love everything about you? I don't know. I wrote a whole note about your interests, what you like, what you hate, even the dictionary you use. That's how deeply I'm smitten. Why can't I forget you? I love your hair, your scent, your voice, your eyes, your skin, your music taste, the way you laugh, the way you smile, your attitude, your personality... what else is there?  Im fucking love blinded, Im so blind that anything I see about you is all shiny and glittery what are you? A shonen boy well maybe BRUH  I sometimes wonder why I'm writing this. Maybe it's for my younger self, the one who admired that cute scout, shorter than me, doing the flag ceremony. Did I really wake up early just to see you? Did I join the poster-making just to be near you? Maybe I wasn't that ''down bad'' back then. Or maybe I was?  I'm such a loser, so loyal to someone I'm not even with. I'm hopelessly devoted to this guy I sent the code to, and I might just lose my mind if you say no. Will you try to date a loser like me?";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();