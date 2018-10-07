document.getElementById("spoiler-trigger").addEventListener("click", function(){
    if(document.getElementById("spoiler").style.display=='none'){
        document.getElementById("spoiler").style.display='block';
    }else{
        document.getElementById("spoiler").style.display='none';
    }
});