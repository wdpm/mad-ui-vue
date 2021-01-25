(function ($) {
    $.confetti = new function () {
        let maxParticles = 150;
        let particles = [];

        let canvas = document.getElementById("confetti");
        let ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        addEventListener('resize', () => {
            canvas.width = innerWidth
            canvas.height = innerHeight
            init()
        })

        let particleColors = {
            colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue",
                "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
            getColor: function () {
                let index = Math.floor(Math.random() * this.colorOptions.length);
                return this.colorOptions[index];
            }
        }

        function ConfettiParticle(color) {
            this.x = Math.random() * canvas.width; // x-coordinate
            this.y = (Math.random() * canvas.height) - canvas.height; //y-coordinate
            this.r = randomIntFromRange(10, 30); //radius;
            this.d = (Math.random() * maxParticles) + 10; //density;
            this.color = color;
            this.angle = 0;
            // skew
            this.tilt = Math.floor(Math.random() * 10) - 10;
            this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
            this.tiltAngle = 0;

            this.draw = function () {
                ctx.beginPath();
                ctx.lineWidth = this.r / 2;
                ctx.strokeStyle = this.color;
                ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
                ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
                ctx.stroke();
                ctx.closePath();
            }

            this.update = function () {
                this.angle += 0.01;
                this.tiltAngle += this.tiltAngleIncremental;
                this.x += Math.sin(this.angle);
                this.y += (Math.cos(this.angle + this.d) + 3 + this.r / 2) / 2;
                this.tilt = (Math.sin(this.tiltAngle)) * 15;

                if (this.y >= canvas.height) {
                    this.y = 0;
                }

                this.draw();
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < maxParticles; i++) {
                let particleColor = particleColors.getColor();
                particles.push(new ConfettiParticle(particleColor));
            }
        }

        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
            })
        }

        $('#startConfetti')
            .click(animate);

        function randomIntFromRange(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }

        this.init = init;
    }
    $.confetti.init();
}(jQuery));
