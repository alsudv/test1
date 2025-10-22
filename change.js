const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[3].innerText==='Davliatshina'){
        document.body.style.backgroundImage = "url('shablon.jpg')";
        document.getElementsByTagName('div')[3].innerText='Давлятшина';
        document.getElementsByTagName('div')[4].innerText='Алсу';
        document.getElementsByTagName('div')[5].innerText='Габдельнуровна';
        document.getElementsByTagName('div')[6].innerText='жен';
        document.getElementsByTagName('div')[8].innerText='гор.Москва';
    }
    else{

        if (document.getElementsByTagName('div')[3].innerText==='Давлятшина'){
            document.body.style.backgroundImage = "url('seria50.jpg')";
            document.getElementsByTagName('div')[3].innerText='Davliatshina';
            document.getElementsByTagName('div')[4].innerText='Alsu';
            document.getElementsByTagName('div')[5].innerText='Gabdelnurovna';
            document.getElementsByTagName('div')[6].innerText='female';
            document.getElementsByTagName('div')[8].innerText='Moscow';



        }
    }
}

change.addEventListener("click", change_all)