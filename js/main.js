// refer this for toggle options - http://codepen.io/8odoros/pen/BzxAwm

function onLoadSearchPage(){
    var criterias = ["#sTo", "#sFrom", "#sSubject"];
    for(var i = 0; i < criterias.length; i++){
        $( criterias[i] ).toggle("slow");
    }

}

function toggleSection(divName){
  $( divName ).toggle("slow");
}

