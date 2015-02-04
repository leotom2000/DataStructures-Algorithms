function loadDefaults(){
	var shapes = document.getElementsByClassName('topmenu');
	for(var i=0; i<shapes.length; i++){
		shapes[i].addEventListener('click', function(){ showShape(this.innerHTML ) } );
	}

	var slider1 = document.getElementById('input1');
	var box1 = document.getElementById("sldval1");
	slider1.onmousemove = function(){
	    box1.innerHTML = slider1.value;
	    updateRectange();
	}
	
	var slider2 = document.getElementById('input2');
	var box2 = document.getElementById("sldval2");
	slider2.onmousemove = function(){
	    box2.innerHTML = slider2.value;
	    updateRectange();
	}
	
}


function updateRectange(){
	
	var height = Number(document.getElementById('input1').value);
	var width = Number(document.getElementById('input2').value);
	var res1 =  2 * ( height +  width);
	var res2 = height *  width ;

	document.getElementById('result1').innerHTML=res1;
	document.getElementById('result2').innerHTML=res2;
	
	
}




function showShape(shape){
	if(shape.length>0){
	eval( "show"+ shape + "()"  );
	}
}


function showCircle(){
	
    var element = document.createElement('div');
    element.className = "someID";
	
	
	document.getElementById('attrib1').innerHTML="";
	document.getElementById('attrib2').innerHTML="";

	document.getElementById('input1').value="";
	document.getElementById('input2').value="";

	document.getElementById('unit1').innerHTML="";
	document.getElementById('unit2').innerHTML="";

	document.getElementById('resArrtib1').innerHTML="Perimeter :";
	document.getElementById('resArrtib2').innerHTML="Area : ";



	document.getElementById('resUnit1').innerHTML="mm";
	document.getElementById('resUnit2').innerHTML="SQ mm" ;
	
	
}
function showCube(){showCircle()}
function showSphere(){showCircle()}
function showCone(){showCircle()}
function showCylinder(){showCircle()}
function showTriangle(){showCircle()}
function showPyramid(){showCircle()}




function showRectangle(){
debugger;

document.getElementById('attrib1').innerHTML="Height";
document.getElementById('attrib2').innerHTML="Width";

document.getElementById('input1').value="60";
document.getElementById('input2').value="40";

document.getElementById('unit1').innerHTML="mm";
document.getElementById('unit2').innerHTML="mm";

document.getElementById('resArrtib1').innerHTML="Perimeter :";
document.getElementById('resArrtib2').innerHTML="Area : ";

var height = Number(document.getElementById('input1').value);
var width = Number(document.getElementById('input2').value);
var res1 =  2 * ( height +  width);
var res2 = height *  width ;

document.getElementById('result1').innerHTML=res1;
document.getElementById('result2').innerHTML=res2 ;

document.getElementById('resUnit1').innerHTML="mm";
document.getElementById('resUnit2').innerHTML="SQ mm" ;

}