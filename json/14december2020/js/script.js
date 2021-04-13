//    let jsonData = '{"Name": "Imran","Address" : {"Village": "Rajshahi"}}';
 //   console.log(JSON.parse(jsonData));


 let result =[
    {
      "word": "hello",
      "phonetics": [
        {
          "text": "/həˈloʊ/",
          "audio": "https://lex-audio.useremarkable.com/mp3/hello_us_1_rr.mp3"
        },
        {
          "text": "/hɛˈloʊ/",
          "audio": "https://lex-audio.useremarkable.com/mp3/hello_us_2_rr.mp3"
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "Used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!"
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "An utterance of “hello”; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [
                "greeting",
                "welcome",
                "salutation",
                "saluting",
                "hailing",
                "address",
                "hello",
                "hallo"
              ]
            }
          ]
        },
        {
          "partOfSpeech": "intransitive verb",
          "definitions": [
            {
              "definition": "Say or shout “hello”; greet someone.",
              "example": "I pressed the phone button and helloed"
            }
          ]
        }
      ]
    }
  ]

//           let phonetics = result[0].phonetics;
//           let resultFild = document.querySelector("#resultFild");

//            for(let i=0; i< phonetics.length; i++){
//                resultFild.innerHTML = resultFild.innerHTML+ '<br>' + '<a href=" '+phonetics[i].audio+' ">Audio</a>';
//               console.log("OK");
//           }


 let utshab = result[0].meanings[0].definitions[0].definition;
 console.log(utshab);
 
  
