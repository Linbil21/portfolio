particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 35,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#2e82a6", "#207a9e", "#3581a6", "#1f6e91"]
        },
        "shape": {
            "type": "polygon",
            "polygon": {
                "nb_sides": 6
            }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.8,
                "opacity_min": 0.15,
                "sync": false
            }
        },
        "size": {
            "value": 25,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 8,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 200,
                "size": 35,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "push": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
