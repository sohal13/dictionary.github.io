const inputEl = document.getElementById("input")
const btnEl = document.getElementById("btn")
const infoText = document.getElementById("info-text")
const meaningContainerEl = document.getElementById("meaning-container")
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio")

async function fetchAPI(val) {
    try {
        if (val === "") {
            console.log("enter somthing");
        infoText.innerText = "Please Enter Somthing !!"

        }
        else {
            infoText.style.display = "block";
            meaningContainerEl.style.display ="none";
            infoText.innerText = `Searching the Meaning of "${val}"`
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
            const result = await fetch(url).then((res) => res.json());
            infoText.style.display = "none";
            meaningContainerEl.style.display ="block";
            titleEl.innerText = result[0].word ;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition
           audioEl.src = result[0].phonetics[0].audio || result[0].phonetics[1].audio ;
            inputEl.value = ""
        }
    } catch (error) {
        infoText.innerText = `Error 404! , Try Again later!`
        console.log(`an error happened ${error}`);
    }
}
btnEl.addEventListener("click" , () => {
    fetchAPI(inputEl.value);
})

