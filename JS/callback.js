function doafter2sec(callback){
    console.log("Waiting for 2 sec");

    setTimeout(()=>{
        callback();
    },2000)
}

doafter2sec(()=>{
    console.log("2 second")
})