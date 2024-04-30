console.log("main js carregou");
if ('serviceWorker' in navigator){
    console.log("serviceWorker esta presente neste navegador e pode ser utilizado");
}else{
    console.log("servidorWorker NNAAOOO esta presente neste navegador e pode ser utilizado");
}