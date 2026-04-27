/* ORANGE INTELLIGENCE */

function startAI() {
    while (true) {
        let input = prompt("Orange Intelligence: chiedimi qualcosa!" );

        if (input === null) {
            // se clicca "annulla"
            alert("Uscita forzata!");
            break;
        }

        input = input.toLowerCase().trim();

        if (input === "exit") {
            alert("Saluti, Umano!");
            break;
        }

        let response = responses[input] || responses["__non_sapere__"];
        alert(response);
    }
}

/* RISPOSTE */
const responses = {
    /* 🪵 NIENTE */
    "":"Non mi hai detto niente!",

    /* DEFALUT  */
    "__non_sapere__":"Non lo so! (🤔 Sono una AI base)",

    /* 🪪 "CARTA" D'IDENTITA' */
    "chi sei":"Sono Orange Intellingece, sviluppato dalla Orange!",
    "come ti chiami":"Mi chiamo Orange Intelligence",
    "quanti anni hai":"Ah, sono un robot e non ho età, ma se ce l'avessi... 1 giorno?",
    "cosa ti senti":"🤖 Non posso sentire emozioni, sono un Robot!",
    "qual'è il tuo cibo preferito":"Non posso mangiare, sono un Robot!",
    "cosa sei":"Un Robot",
    "qual è il tuo frutto preferito":"Arancia 🍊! Ovviamente! Sono ORANGE Intelligence 😎",

    /* 🤣 COSE SOLO PER FAR RIDERE */
    "mi vuoi sposare":"No.",
    "mango":"67 67 67 mango Manso 67!",
    "dimmi una barzelletta":"Perchè un computer è andato dal dottore 👨‍⚕️💻? Perchè aveva un virus 🦠!",
    "dimmi una barza":"Perchè un computer è andato dal dottore 👨‍⚕️💻? Perchè aveva un virus 🦠!",
    "oo quanto glassi":"GLASSO.",
    "quanto glassi":"GLASSO.",

    /* 🤬 INSULTARE (GENTILMENTE) ALTRE IA*/
    "sei peggio di chatgpt":"Lo dici tu... e chi altro?",
    "cos'è chatgpt":"mhhhhhhh... mhhhhhhh\naiekduwudiduens... jdijwiwjsopspxsopss... ahhh...\nudiwìfdwow... mhh...",
    
    /* 💭 COSE DA STORIA*/
    "raccontami una storia":"Un giorno La Orange ha creato un'IA... prima si chiamava Iris, ma ha floppato, quindi poi ha fatto Orange Intelligence, ovvero io! 🤖 "
};
