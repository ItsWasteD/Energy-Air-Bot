function eAirGame() {

  var timeout = 500;

var questions = [
  {question: "Wie viele Energy Air Tickets werden verlost?", answer: "40’000"}, //RICHTIG
  {question: "Wohin führt die Klassenfahrt?", answer: "Berlin"},//RICHTIG
  {question: "Welcher dieser Acts hatte einen Auftritt am Energy Air 2017?", answer: "Ed Sheeran"},//RICHTIG
  {question: "Wer eröffnete das erste Energy Air?", answer: "Bastian Baker"},//RICHTIG
  {question: "Wie schwer ist die Energy Air Bühne?", answer: "1000 Tonnen"},//RICHTIG
  {question: "Welcher Schweizer Shootingstar spielt in DAS SCHÖNSTE MÄDCHEN DER WELT die Hauptrolle?", answer: "Luna Wedler"},//RICHTIG
  {question: "Wann fand Energy Air zum ersten Mal statt?", answer: "2014"},//RICHTIG
  {question: "Energy Air Tickets kann man…", answer: "gewinnen"},
  {question: "Welcher Schauspieler/Rapper trägt im Film eine goldene Maske?", answer: "Cyril"},//RICHTIG
  {question: "Das NRJ-Gefährt ist ein…", answer: "Tuk Tuk"},//RICHTIG
  {question: "Wer war der letzte Act beim Energy Air 2017?", answer: "Wincent Weiss"},//RICHTIG
  {question: "Wo findet das Energy Air statt?", answer: "Stade de Suisse (Bern)"},
  {question: "Wann findet das Energy Air 2018 statt?", answer: "8. September 2018"},//RICHTIG
  {question: "Welche Fussballmannschaft ist im Stade de Suisse zuhause?", answer: "BSC Young Boys"},//RICHTIG
  {question: "Mit welchem dieser Tickets geniesst du die beste Sicht zur Energy Air Bühne?", answer: "XTRA-Circle"},//RICHTIG
  {question: "Wo erfährst du immer die neusten Infos rund um Energy Air?", answer: "im Radio, auf der Website und über Social Media"},//RICHTIG
  {question: "Wie viele Acts waren beim letzten Energy Air dabei?", answer: "15"},//RICHTIG
  {question: "Die wievielte Energy Air Ausgabe findet dieses Jahr statt?", answer: "Die fünfte"},//RICHTIG
  {question: "Was ist Cyrils besondere Begabung?", answer: "Texte schreiben und rappen"},//RICHTIG
  {question: "Was ist Cyrils (Aaron Hilmer) Markenzeichen im Film?", answer: "Seine grosse Nase"},//RICHTIG
  {question: "Wann ist der offizielle Filmstart von DAS SCHÖNSTE MÄDCHEN DER WELT in den Schweizer Kinos?", answer: "6. September 2018"},//RICHTIG
  {question: "Wer stand am letzten Energy Air als Überraschungsgast auf der Bühne?", answer: "Bastian Baker"},//RICHTIG
  {question: "Wie heisst der aktuelle Sommerhit von Energy Air Act Alvaro Soler?", answer: "La Cintura"},//RICHTIG
  {question: "Welcher Act interviewte vor dem letzten Energy Air das Publikum?", answer: "Baba Shrimps"},//RICHTIG
  {question: "Wann beginnt das Energy Air 2018?", answer: "Um 17 Uhr"},//RICHTIG
  {question: "Was passiert, wenn es am Eventtag regnet?", answer: "Energy Air findet trotzdem statt"},//RICHTIG
  {question: "Wer spielt die Mutter von Cyril?", answer: "Anke Engelke"},//RICHTIG
  {question: "Wie viele Spotlights gibt es am Energy Air?", answer: "250"},//RICHTIG
  {question: "Welchen Song performte Dodo am Energy Air mit den Überraschungsgästen Lo & Leduc?", answer: "Für Ingwer & Ewig"},//RICHTIG
  {question: "Auf welchem Weg kann man KEINE Energy Air Tickets gewinnen?", answer: "E-Mail"},//RICHTIG
  {question: "Welche Farbe haben die Haare des Social Media Stars Julia Beautx im Film?", answer: "Pink"},//RICHTIG
  {question: "Wie reiste Kygo im Jahr 2015 ans Energy Air?", answer: "Im Privatjet"},//RICHTIG
  {question: "Welcher Act stand beim ersten Energy Air 2014 und auch im letzten Jahr auf der Bühne?", answer: "Pegasus"},//RICHTIG
  {question: "Welcher berühmte DJ-Act stand 2017 auf der Bühne des Energy Air?", answer: "Dimitri Vegas & Like Mike"},//RICHTIG
  {question: "Wie breit ist die Energy Air Bühne?", answer: "70 Meter"},//RICHTIG
  {question: "Was verlangte Nena am Energy Air 2016?", answer: "Eine komplett weisse Garderobe"},//RICHTIG
  {question: "Wen nahm Knackeboul am Energy Air 2014 mit backstage?", answer: "Sein Mami"},//RICHTIG
  {question: "Energy Air ist der einzige Energy Event, …", answer: "…für den man Tickets nur gewinnen kann."},
  {question: "Welche amerikanische Band trat am Energy Air 2016 auf?", answer: "One Republic"},//RICHTIG
  {question: "Wie viele Konfetti-Kanonen gibt es am Energy Air?", answer: "40"},//RICHTIG
  {question: "Woher kommt Energy Air Act Max Giesinger?", answer: "Deutschland"},//RICHTIG
  {question: "Auf welcher Social-Media-Plattform kann man keine Energy Air Tickets gewinnen?", answer: "Twitter"},
  {question: "Wie viele Mitarbeiter sind am Energy Air im Einsatz?", answer: "1600"},
  {question: "Mit welchem Preis wurde der Nachwuchsstar Luna Wedler dieses Jahr ausgezeichnet?", answer: "Shootingstar Berlinale 2018"}];//RICHTIG

  for(var i = 0; i < 10; i++) {
    setTimeout(answerQuestion, timeout);
    if(i == 9) {
        setTimeout(finish, 1000);
    }
  }

  function finish() {
    console.log("IN FINISH");
    var btn = document.getElementsByClassName("btn btn-primary game-button game-button-slot")[0];
    if(btn != undefined) {
      document.getElementsByClassName("btn btn-primary game-button game-button-slot")[0].click();
      setTimeout(clickLogo, timeout);
    }
  }

  function clickLogo() {
    var rand = Math.floor(Math.random() * 12);
    document.getElementsByClassName("pulse")[rand].click();
    setTimeout(restart, timeout);
  }

  function restart() {
    document.getElementById("lose").click();
  }

  function answerQuestion() {
    var q = $('.mobile-padding-question')[1].innerText;
    var answer = findAnswer(q);
    console.log(q + " : " + answer);
    document.getElementById(answer).click();
    document.getElementById("next-question").click();
  }

  function findAnswer(q) {
    var answer;
    questions.forEach((c, i, a) => {
      if(c.question == q) {
        answer = c.answer;
      }
    });
    return answer;
  }
}

setInterval(eAirGame, 5000);
