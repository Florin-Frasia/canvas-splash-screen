// Create the loader and queue our 3 images. Images will not
// begin downloading until we tell the loader to start.
var loader = new PxLoader(),
    prutImg = loader.addImage('grafica/canvas-image.png'),
    cop1Img = loader.addImage('grafica/mereu.jpg');
    var img = new Array();
    img[0] = new Image();
    img[0] = cop1Img;
// callback that will be run once images are ready
loader.addCompletionListener(function() {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');
      var ctx = canvas.getContext('2d');
  // Functions

  function setClippingRegion(radius) {
     context.beginPath();
     context.arc(canvas.width/2, canvas.height/2,
                 radius, 0, Math.PI*2, false);
     context.clip();
  }

  function fillCanvas(color) {
     context.fillStyle = color;
     context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function endAnimation(loop) {
    clearInterval(loop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(prutImg, 0, 0);
    animate_book();
  }

  function drawAnimationFrame(radius) {
    setClippingRegion(radius);
    ctx.drawImage(prutImg, 0, 0);
  }

  function animate() {
    var radius = 0,
        loop;
        loop = window.setInterval(function() {
          radius += canvas.width/100;
          fillCanvas('charcoal');
          if (radius < canvas.width) {
            context.save();
            drawAnimationFrame(radius);
            context.restore();
          }
          else {
            endAnimation(loop);
          }
        }, 16);
  };

  function animate_book() {
    var i = 1,
        loop;
        ctx.translate(112, 274);
        ctx.scale(0.01, 0.01);
        ctx.drawImage(img[0], 0, 0);

        loop = window.setInterval(function() {
          i = i + 0.001;
          if (i <= 1.09) {
            ctx.scale(i, i);
            ctx.drawImage(img[0], 0, 0);
          }
          else {
            clearInterval(loop);
          }
        }, 16);

  };

  animate();
});

// begin downloading images
loader.start();
