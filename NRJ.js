function eAirGame() {

  //Faster page loading
  if(document.head != null) {
    //document.head.parentNode.removeChild(document.head);
  }

  var timeout = 500;

  var questions = [
    {question: "Wie viele Energy Air Tickets werden verlost?", answer: "40’000"},
    {question: "Wohin führt die Klassenfahrt?", answer: "Berlin"},
    {question: "Welcher dieser Acts hatte einen Auftritt am Energy Air 2017?", answer: "Ed Sheeran"},
    {question: "Wer eröffnete das erste Energy Air?", answer: "Bastian Baker"},
    {question: "Wie schwer ist die Energy Air Bühne?", answer: "1000 Tonnen"},
    {question: "Welcher Schweizer Shootingstar spielt in DAS SCHÖNSTE MÄDCHEN DER WELT die Hauptrolle?", answer: "Luna Wedler"},
    {question: "Wann fand das Energy Air zum ersten Mal statt?", answer: "2014"},
    {question: "Energy Air Tickets kann man…", answer: "gewinnen"},
    {question: "Welcher Schauspieler/Rapper trägt im Film eine goldene Maske?", answer: "Cyril"},
    {question: "Das NRJ-Gefährt ist ein…", answer: "Tuk Tuk"},
    {question: "Wer war der letzte Act am Energy Air 2017?", answer: "Kodaline"},
    {question: "Wo findet das Energy Air statt?", answer: "Stade de Suisse, Bern"},
    {question: "Wann findet das Energy Air 2018 statt?", answer: "8. September 2018"},
    {question: "Welche Fussballmannschaft ist im Stade de Suisse zuhause?", answer: "BSC Young Boys"},
    {question: "Mit welchem dieser Tickets geniesst du die beste Sicht zur Energy Air Bühne?", answer: "XTRA-Circle"},
    {question: "Wo erfährst du immer die neusten Infos rund um das Energy Air?", answer: "im Radio, auf der Website und über Social Media"},
    {question: "Wie viele Acts waren beim letzten Energy Air dabei?", answer: "15"},
    {question: "Die wievielte Energy Air Ausgabe findet dieses Jahr statt?", answer: "Die fünfte"},
    {question: "Was ist Cyrils besondere Begabung?", answer: "Texte schreiben und rappen"},
    {question: "Was ist Cyrils (Aaron Hilmer) Markenzeichen im Film?", answer: "Seine grosse Nase"},
    {question: "Wann ist der offizielle Filmstart von DAS SCHÖNSTE MÄDCHEN DER WELT in den Schweizer Kinos?", answer: "6. September 2018"},
    {question: "Wer stand am letzten Energy Air als Überraschungsgast auf der Bühne?", answer: "Bastian Baker"},
    {question: "Wie heisst der aktuelle Sommerhit von Energy Air Act Alvaro Soler?", answer: "La Cintura"},
    {question: "Welcher Act interviewte vor dem letzten Energy Air das Publikum?", answer: "Baba Shrimps"},
    {question: "Wann beginnt das Energy Air 2018?", answer: "Um 17 Uhr"},
    {question: "Was passiert, wenn es am Eventtag regnet?", answer: "Energy Air findet trotzdem statt"},
    {question: "Wer spielt die Mutter von Cyril?", answer: "Anke Engelke"},
    {question: "Wie viele Spotlights gibt es am Energy Air?", answer: "250"},
    {question: "Welchen Song performte Dodo am Energy Air mit den Überraschungsgästen Lo & Leduc?", answer: "Für Ingwer & Ewig"},
    {question: "Auf welchem Weg kann man KEINE Energy Air Tickets gewinnen?", answer: "E-Mail"},
    {question: "Welche Farbe haben die Haare des Social Media Stars Julia Beautx im Film?", answer: "Pink"},
    {question: "Wie reiste Kygo im Jahr 2015 ans Energy Air?", answer: "Privatjet"},
    {question: "Welcher Act stand beim ersten Energy Air 2014 und auch im letzten Jahr auf der Bühne?", answer: "Pegasus"},
    {question: "Welcher berühmte DJ-Act stand 2017 auf der Bühne des Energy Air?", answer: "Dimitri Vegas & Like Mike"},
    {question: "Wie breit ist die Energy Air Bühne?", answer: "70 Meter"},
    {question: "Was verlangte Nena am Energy Air 2016?", answer: "Eine komplett weisse Garderobe"},
    {question: "Wen nahm Knackeboul am Energy Air 2014 mit backstage?", answer: "Sein Mami"},
    {question: "Energy Air ist der einzige Energy Event, …", answer: "…für den man Tickets nur gewinnen kann."},
    {question: "Welche amerikanische Band trat am Energy Air 2016 auf?", answer: "One Republic"},
    {question: "Wie viele Konfetti-Kanonen gibt es am Energy Air?", answer: "40"},
    {question: "Woher kommt Energy Air Act Max Giesinger?", answer: "Deutschland"},
    {question: "Auf welcher Social-Media-Plattform kann man keine Energy Air Tickets gewinnen?", answer: "Twitter"},
    {question: "Wie viele Mitarbeiter sind am Energy Air im Einsatz?", answer: "1600"},
    {question: "Mit welchem Preis wurde der Nachwuchsstar Luna Wedler dieses Jahr ausgezeichnet?", answer: "Shootingstar Berlinale 2018"},
    {question: "Auf welchem Portal kann ich zwei Kinotickets für den Film BAD SPIES gewinnen?", answer: "Energy Air – The Game"},
    {question: "Wessen Ex-Freund ist ein internationaler Spion?", answer: "Der Ex von Audrey (Mila Kunis)"},
    {question: "Was ist Audreys Lieblingsbeschäftigung?", answer: "Gamen"},
    {question: "Welches Agentenduo gibt ab dem 30. August so richtig Gas?", answer: "Mila Kunis und Kate McKinnon"},
    {question: "Wo hat Audrey den USB-Stick versteckt?", answer: "Unter der Zunge"},
    {question: "Was verstecken Audrey und Morgan vor der CIA?", answer: "Einen USB-Stick mit vertraulichen Informationen"},
    {question: "Mit welchem Hollywoodstar ist Mila Kunis verheiratet?", answer: "Ashton Kutscher"},
    {question: "Ab wann ist der Film BAD SPIES in den Schweizer Kinos zu sehen?", answer: "Ab 30. August 2018"},
    {question: "In welcher Hauptstadt Europas machen die BAD SPIES keinen Halt?", answer: "Wien"},
    {question: "Aus welchem Film ist Mila Kunis bekannt?", answer: "Bad Moms"}];

    for(var i = 0; i < 10; i++) {
      setTimeout(answerQuestion, timeout);
      if(i == 9) {
        setTimeout(finish, 1000);
      }
    }

    function finish() {
      console.log("IN FINISH");
      var winPicture = document.getElementsByClassName("image")[0];
      if(winPicture != undefined) {
        winPicture.click();
        setTimeout(clickLogo, timeout);
      }
    }

    function clickLogo() {
      var rand = Math.floor(Math.random() * 12);
      var winButton = document.getElementsByClassName("circle col-xs-4 col-sm-3 col-md-4 col-lg-3")[rand];
      winButton.firstChild.click();
      setTimeout(restart, timeout);
    }

    function restart() {
      document.getElementById("lose").click();
    }

    function answerQuestion() {
      var qElem = document.getElementsByClassName('mobile-padding-question')[1];
      if(qElem != undefined) {
        var q = qElem.innerText;
        var answer = findAnswer(q);
        console.log(q + " : " + answer);
        document.getElementById(answer).click();
        document.getElementById("next-question").click();
      }
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

  function checkFail() {
    var btn = document.getElementsByClassName("btn btn-primary game-button btn-lg")[0];
    var loseBtn = document.getElementById("lose");

    var title;
    if(btn != undefined) {
      title = btn.parentElement.children[0].innerText;
      if(title == "Leider verloren") {
        btn.click();
      }
    }

    if(loseBtn != undefined) {
        loseBtn.click();
    }
  }

  setInterval(eAirGame, 5000);
  setInterval(checkFail, 5000);
