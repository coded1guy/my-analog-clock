window.onload = function () {
    setInterval(showClock, 1000);

    function showClock() {

    // DEFINE CANVAS AND ITS CONTEXT.
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
            
        var date = new Date;
        var angle;
        var secHandLength = 60;

      // CLEAR EVERYTHING ON THE CANVAS. RE-DRAW NEW ELEMENTS EVERY SECOND.
            ctx.clearRect(0, 0, canvas.width, canvas.height);        
            //it then call these functions
            OUTER_DIAL1();
            OUTER_DIAL2();
            CENTER_DIAL();
            MARK_THE_HOURS();
            MARK_THE_SECONDS();

            SHOW_SECONDS();
            SHOW_MINUTES();
            SHOW_HOURS();
        
        //definition of each function
        
        //the external line path
        function OUTER_DIAL1() {
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 10, 0, Math.PI * 2);
            ctx.strokeStyle = 'maroon';
            ctx.stroke();
        }
        //the second line, inner line
        function OUTER_DIAL2() {
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 7, 0, Math.PI * 2);
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }
        //the center circle 
        function CENTER_DIAL() {
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
            ctx.lineWidth = 8;
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'blue';
            ctx.stroke();
         }
         //marking out the seconds points
         function MARK_THE_SECONDS() {

             for (var i = 0; i < 60; i++) {
                angle = (i - 3) * (Math.PI * 2) / 60;       
             // THE ANGLE TO MARK.
                ctx.lineWidth = 1.5;        
             // HAND WIDTH.
                ctx.beginPath();

                var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
                var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
                var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 30));
                var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 30));

                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);

                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
        }
        //marking out the hour points
        function MARK_THE_HOURS() {

            for (var i = 0; i < 12; i++) {
                angle = (i - 3) * (Math.PI * 2) / 12;   
            // THE ANGLE TO MARK.
                ctx.lineWidth = 2;            
            // HAND WIDTH.
                ctx.beginPath();

                var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
                var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
                var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 7));
                var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 7));

                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);

                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
        }
        //the second hand
        function SHOW_SECONDS() {

            var sec = date.getSeconds();
                angle = ((Math.PI * 2) * (sec / 60)) - ((Math.PI * 2) / 4);
            ctx.lineWidth = 1.6;              
            // HAND WIDTH.

            ctx.beginPath();
            // START FROM CENTER OF THE CLOCK.
           ctx.moveTo(canvas.width / 2, canvas.height / 2);   
            // DRAW THE LENGTH.
        ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength),
            canvas.height / 2 + Math.sin(angle) * secHandLength);

            // DRAW THE TAIL OF THE SECONDS HAND.
        ctx.moveTo(canvas.width / 2, canvas.height / 2);    // START FROM CENTER.
            // DRAW THE LENGTH.
        ctx.lineTo((canvas.width / 2 - Math.cos(angle) * 20),
            canvas.height / 2 - Math.sin(angle) * 20);

            ctx.strokeStyle = 'red';        // COLOR OF THE HAND.
            ctx.stroke();
        }
            
        //the minutes hand
        function SHOW_MINUTES() {

            var min = date.getMinutes();
            angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
            ctx.lineWidth = 2;              // HAND WIDTH.

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);  
            // START FROM CENTER.
            // DRAW THE LENGTH.
        ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.1),      
            canvas.height / 2 + Math.sin(angle) * secHandLength / 1.1);

            ctx.strokeStyle = 'black';  // COLOR OF THE HAND.
            ctx.stroke();
        }

        function SHOW_HOURS() {
        	   var hour = date.getHours();
                
            var min = date.getMinutes();
                angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
            ctx.lineWidth = 2;          
            // HAND WIDTH.

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);     
            // START FROM CENTER.
                // DRAW THE LENGTH.
            ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.5),      
                canvas.height / 2 + Math.sin(angle) * secHandLength / 1.5);

            ctx.strokeStyle = 'black';   // COLOR OF THE HAND.
            ctx.stroke();
        }
    }
}