const canvas = document.querySelector('canvas');
const ref = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

const score_num = document.querySelector('#score_num')
const startGameBtn = document.querySelector('#startGameBtn')
const modalEl = document.querySelector('#modalEl')
const bgScoreEl = document.querySelector('#bgScoreEl')

//classes

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    dot() {
        ref.beginPath()
        ref.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ref.fillStyle = this.color
        ref.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    dot() {
        ref.beginPath()
        ref.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ref.fillStyle = this.color
        ref.fill()
    }

    update() {
        this.dot()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    dot() {
        ref.beginPath()
        ref.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ref.fillStyle = this.color
        ref.fill()
    }

    update() {
        this.dot()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }

    dot() {
        ref.save()
        ref.globalAlpha = this.alpha
        ref.beginPath()
        ref.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ref.fillStyle = this.color
        ref.fill()
        ref.restore()
    }

    update() {
        this.dot()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

//Arrays
let player = new Player(x, y, 15, 'red')

let projectiles = []
let enemies = []
let particles = []

//reset function
function init() {
player = new Player(x, y, 15, 'red')

projectiles = []
enemies = []
particles = []
score = 0
score_num.innerHTML = score
bgScoreEl.innerHTML = score
}

//spawn enemies
function spawnEnemies() {
    setInterval(() => {
        const radius = Math.random() * (50 - 5) + 5
        let x
        let y

    if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
        y = Math.random() * canvas.height
        }
    else {
        x= Math.random() * canvas.width
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
    }
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`

        const angle = Math.atan2(canvas.height / 2 - y, 
    canvas.width / 2 - x)
const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle)
}
        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 590)
}

let animationId 
let score = 0

function animate() {
    animationId = requestAnimationFrame(animate)
    ref.fillStyle = 'rgba(0, 0, 0 ,0.1)'
    ref.fillRect(0, 0, canvas.width, canvas.height)
    player.dot()
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1)
        } else {
            particle.update()
        }
    });
    projectiles.forEach((projectile, index) => {
        projectile.update()

        if (projectile.x + projectile.radius < 0 || 
            projectile.x - projectile.radius > canvas.width ||
            projectile.y + projectile.radius < 0 ||
            projectile.y - projectile.radius > canvas.height) {
            setTimeout(() => {
            projectiles.splice(index, 1)
            }, 0)
        }
    })

    enemies.forEach((enemy, index) => {
        enemy.update()
        const dist = Math.hypot(player.x - enemy.x,
                player.y - enemy.y)
        if (dist - enemy.radius - player.radius < 1) {
            cancelAnimationFrame(animationId)
            modalEl.style.display = 'flex'
            bgScoreEl.innerHTML = score
        }

        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x,
                projectile.y - enemy.y)

        if (dist - enemy.radius - projectile.radius < 1) {

            //create explosions
            for (let i = 0; i < enemy.radius * 2; i++) {
                particles.push(new Particle(projectile.x, projectile.y, Math.random() * 2, enemy.color, {x: (Math.random() - 0.5) * (Math.random() * 7), y: (Math.random() - 0.5) * (Math.random() * 7)}))
            }
            if (enemy.radius -10 > 10) {
                score += 25
            score_num.innerHTML = score

                gsap.to(enemy, {
                    radius: enemy.radius - 10
                })
                setTimeout(() => {
            projectiles.splice(projectileIndex, 1)
            }, 0)
            } else {
                score += 100
            score_num.innerHTML = score

                setTimeout(() => {
            enemies.splice(index, 1)
            projectiles.splice(projectileIndex, 1)
            }, 0)
            }
        }
        })
    });
}
//start game
addEventListener('click', (event) => { 
const angle = Math.atan2(event.clientY - canvas.height / 2, 
    event.clientX - canvas.width / 2)
const velocity = {
    x: Math.cos(angle) * 5,
    y: Math.sin(angle) * 5
}
projectiles.push(new Projectile(
    canvas.width / 2, canvas.height / 2, 5, 'red', velocity)
    )
})

startGameBtn.addEventListener('click', () => {
    init()
    animate()
    spawnEnemies()
    modalEl.style.display = 'none'
})