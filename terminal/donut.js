(function (){
    var preTag = document.getElementById('asciidonut');

    //Angles
    var A = 1;
    var B = 1
    var R1 = 1;
    var R2 = 2;
    var K1 = 150;
    var K2 = 5;

    //Rendering ASCII frames
    function renderAsciiFrame(){
        var b = []; // Array ascii characters
        var z = []; // Array to store depth values

        var width = 200;
        var height = 100;

        A += 0.07; // Increamenting angle A
        B += 0.03; // Increamenting angle B

        // Precomputing cosines and sines of A and B
        var
            cosA = Math.cos(A),
            sinA = Math.sin(A),
            cosB = Math.cos(B),
            sinB = Math.sin(B);
        
        //Initialising arrays with the default values
        for (var k=0; k<height*width; k++) {
            b[k]= k%width == width-1 ? '\n' : ' ';
            //Set def depth
            z[k]=0;
        } 

        //Generate the ASCII frame
        for (var j=0; j<6.28; j+=0.07) { 
            var ct = Math.cos(j);
            var st = Math.sin(j);

            for (var i=0; i<6.28; i+=0.02) {
                var sp = Math.sin(i);
                cp = Math.cos(i);
                h = ct + 2; // R1 + R2*cos(A)
                D = 1 / (sp*h*sinA + st*cosA + 5); // this is 1/z
                t = sp*h*cosA - st*sinA; // this is a clever factoring of some of the terms in x' and y'

                //Calculate the x,y coordinate
                var x = Math.floor(width/2 + (width/4)*D*(cp*h*cosB - t*sinB));
                var y = Math.floor(height/2 + (height/4)*D*(cp*h*sinB + t*cosB));

                //Calculate the index in the array
                var o = x+width*y;
                //Calculate the ascii char index
                var N = Math.floor(8*((st*sinA - sp*ct*cosA)*cosB - sp*ct*sinA - st*cosA - cp*ct*sinB));

                //Update ascii char if the depth is less than the current depth
                if (y<height && y>=0 && x>=0 && x<width && z[o]<D) {
                    z[o] = D;
                    b[o] = ".,-~:;=!*#$@"[N>0?N:0];
                }
            }
        }

        //Update html pre tag with the ascii frame
        preTag.innerHTML = b.join('');
    }

    function startAsciiAnimation(){
        window.asciiIntervalId = setInterval(renderAsciiFrame, 50);
    }

    renderAsciiFrame(); //Render the first frame
    //Add event listener to start the animation
    if(document.all){
        window.RTCDataChannelEvent('onload', startAsciiAnimation);
    } else {
        window.addEventListener('load', startAsciiAnimation, false);
    }

    //Add event listener to update frame when the window is resized
    window.addEventListener('resize', renderAsciiFrame);
})();