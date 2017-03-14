/*
 * Adrian Statescu <mergesortv@gmail.com> http://adrianstatescu.com
 * Square Root(SQRT) Algorithm using Recurrence relation an+1 = ( an + n / an ) / 2.0; 
 * MIT License
 */
DOMhelp = {

            addEvent: function(elem,evType,fn,useCapture) {

                if(elem.addEventListener) {

                       elem.addEventListener(evType,fn,useCapture);

                } else if(elem.attachEvent) {

                       var r = elem.attachEvent('on'+evType,fn);

                       return r; 

                } else {

                       elem['on'+evType] = fn;
                }
      
            },

            trim: function(nr) {

                  return nr.replace(/^\s+/,"").replace(/\s+$/,"");

            }

    };

    //Computes SQuare RooT in JavaScript version 1
    //using: s=1/2(s+nr/s)
    function radical(nr) {

        if(nr < 0) {return "invalid input";}

        if(nr == 0) {return 0;}

        var s = 1;

            for(var i = 0; i < 100; i++){

                 s = ( s + nr / s ) * 1 / 2; 
            }

          return s;
    }


    //Computes SQuare RooT in JavaScript version 2
    function sqrt(n) {

             var EPS = 0.00001

             var an, 
                 anplus1;

                 an = parseFloat(n / 2.0); 

                 anplus1 = ( an + parseFloat ( n / an)  ) / 2.0  

                 while( (anplus1 > an ? anplus1 - an : an - anplus1) >= EPS ) {

                        an = anplus1

                        anplus1 = ( an + parseFloat( n / an) ) / 2  
                 }
           
           return anplus1
    }

    function solve() {

         var number = document.getElementById('input').value;

             number = DOMhelp.trim(number); 

             if(number == "") {document.getElementById('solution').innerHTML = "The textfield is empty!";return;}

             if(isNaN(number)) {document.getElementById('solution').innerHTML = "Error! Is Not a Number!";return;}

             document.getElementById('input').value = parseFloat(number);

         var output = radical(number);
         var output2 = sqrt(number);

             document.getElementById('solution').innerHTML ="SQRT("+number+") = " + output2 + '<br/>';
             document.getElementById('solution').innerHTML +="SQRT("+number+") = " + output + '<br/>';
             document.getElementById('solution').innerHTML += "Math.sqrt("+number+") = " + Math.sqrt(parseFloat(number)) + " (Built-in)";
    } 

    function init() {

         DOMhelp.addEvent(document.getElementById('doit'),'click',solve,false);
    }  

   DOMhelp.addEvent(window,'load',init,false);

