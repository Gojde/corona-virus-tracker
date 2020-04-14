window.addEventListener('load', () => {
    const content = document.querySelector('.content');
    const canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext("2d");

    canvas.height = content.clientHeight;
    canvas.width = content.clientWidth;

    // ctx.beginPath();
    // ctx.moveTo(1, 0);
    // ctx.lineTo(1, 193);
    // ctx.lineTo(21, 193);
    // ctx.lineWidth = 2;
    // ctx.stroke();

    // ctx.moveTo(1, 365);
    // ctx.lineTo(21, 365);
    // ctx.lineWidth = 2;
    // ctx.stroke();

    // ctx.moveTo(1, content.clientHeight);
    // ctx.lineTo(1, 550);
    // ctx.lineTo(21, 550);
    // ctx.lineWidth = 2;
    // ctx.stroke();

    ctx.beginPath();
    ctx.filter = 'blur(20px)';
    ctx.arc(content.clientWidth - 150, 85, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.beginPath();
    ctx.filter = 'blur(20px)';
    ctx.arc(520, 50, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.beginPath();
    ctx.filter = 'blur(8px)';
    ctx.arc(140, 260, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.beginPath();
    ctx.filter = 'blur(20px)';
    ctx.arc(80, content.clientHeight - 100, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.beginPath();
    ctx.filter = 'blur(8px)';
    ctx.arc(content.clientWidth - 450, content.clientHeight - 130, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    
});