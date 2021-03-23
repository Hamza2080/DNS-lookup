particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
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
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


function handleSubmit(e) {
    const ipAPI = '/api/check-dns'
    const inputValue = e.target.search.value;
    e.preventDefault();
    Swal.queue([{
        allowOutsideClick: true,
        allowEscapeKey: true,
        title: 'Loading',
        icon: 'info',
        showConfirmButton: false,
        showCloseButton: false,
        showCancelButton: false,
        onOpen: () => {
            Swal.showLoading();
            return fetch(ipAPI + `?dns=${inputValue}`)
                .then(response => response.json())
                .then(data => {
                    console.log("data", data);
                    Swal.hideLoading();
                    if (data.success) {
                        let html = `<p>The dns ${inputValue} is valid. IP addresses are listed below</p>`
                        data.addresses.forEach((address) => {
                            html += `<li>${address}</li>`
                        });
                        Swal.update({
                            icon: 'success',
                            title: 'Valid DNS',
                            html
                        })
                    } else {
                        Swal.update({
                            title: 'Invalid DNS',
                            icon: 'error',
                            html: `The dns "${inputValue}" is not valid `,
                        })
                    }
                })
                .catch(() => {
                    Swal.hideLoading();
                    Swal.update({
                        icon: 'warning',
                        title: 'Internet error!',
                        html: 'Please make sure you are connected to internet'
                    })
                })
        }
    }]);
}