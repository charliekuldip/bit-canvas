// CANVAS HELPERS

// export default class Canvas extends React.Component {

//     render() {
//         return (
//             <div className="canvas-container">
//                 <canvas id="canvas"></canvas>
//             </div>
//         )
//     }
// }

export function createImage(canvas, src) {
    var img = new Image();
    img.src = src;
    
    // var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    
    img.onload = function() {
        canvas.width = 128;
        canvas.height = 120;
        

        ctx.drawImage(
            img, 
            0, 0, img.width, img.height,
            0, 0, 128, 120
        );
        img.style.display = 'none';
    };

    var color = document.getElementById('color');
    function pick(event) {
        var x = event.layerX;
        var y = event.layerY;
        var pixel = ctx.getImageData(x, y, 1, 1);
        var data = pixel.data;
        var rgba = 'rgba(' + data[0] + ', ' + data[1] +
                    ', ' + data[2] + ', ' + (data[3] / 255) + ')';
        color.style.background =  rgba;
        color.textContent = rgba;
    }
    canvas.addEventListener('mousemove', pick);

}