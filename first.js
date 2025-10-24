const base_url="https://latest.currency-api.pages.dev/v1/currencies";

let btn=document.querySelector("#btn1");
let toCurr=document.querySelector("#to select");
let fromCurr="eur";

    for(currCode in countryList)
    {
        let newopt=document.createElement("option");
        newopt.innerText= currCode;
        newopt.value= currCode;
        toCurr.append(newopt);
    }
    toCurr.addEventListener("change", () =>{
    updateFlag(toCurr)
});


let updateFlag= (element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img= element.parentElement.querySelector("img");
    img.src=newsrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector("#amount input");
    let amtval=parseFloat(amount.value);
    if(amtval<1 || amtval==="")
    {
          amtval=1;
    amount.value=1;
    }
const url=`${base_url}/${fromCurr}.json`;
let response= await fetch(url);
let data= await response.json();
let toCurrency=toCurr.value.toLowerCase();
let rate=data[fromCurr][toCurrency];
const finalAmount = (amtval * rate).toFixed(2);

    console.log(`${amtval} EUR = ${finalAmount} ${toCurr.value}`);
    document.querySelector(".msg").innerText =
        `${amtval} EUR = ${finalAmount} ${toCurr.value}`;
});


  