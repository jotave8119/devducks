import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";


const ParticlesBackground = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return(
        <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        
        options={
          
            {
                autoPlay: true,
                background: {
                  color: {
                    value: "#9e0e9e",
                  },
                  image: "",
                  position: "",
                  repeat: "",
                  size: "",
                  opacity: 50,
                },
                backgroundMask: {
                  composite: "destination-out",
                  cover: {
                    color: {
                      value: "#111111",
                    },
                    opacity: 50,
                  },
                  enable: false,
                },
                defaultThemes: {},
                delay: 0,
                fullScreen: {
                  enable: true,
                  zIndex: -2,
                },
                detectRetina: true,
                duration: 0,
                fpsLimit: 100,
                interactivity: {
                  detectsOn: "window",
                  events: {
                    onClick: {
                      enable: false,
                      mode: [],
                    },
                    onDiv: {
                      selectors: [],
                      enable: false,
                      mode: [],
                      type: "circle",
                    },
                    onHover: {
                      enable: false,
                      mode: [],
                      parallax: {
                        enable: false,
                        force: 2,
                        smooth: 15,
                      },
                    },
                    resize: {
                      delay: 2,
                      enable: true,
                    },
                  },
                  modes: {
                    attract: {
                      distance: 200,
                      duration: 2.0,
                      easing: "ease-out-quad",
                      factor: 1,
                      maxSpeed: 5.0,
                      speed: 4.0,
                    },
                    bounce: {
                      distance: 200,
                    },
                    bubble: {
                      distance: 200,
                      duration: 3.0,
                      mix: false,
                      divs: {
                        distance: 200,
                        duration: 3.0,
                        mix: false,
                        selectors: [],
                      },
                    },
                    connect: {
                      distance: 80,
                      links: {
                        opacity: 30,
                      },
                      radius: 60,
                    },
                    grab: {
                      distance: 100,
                      links: {
                        blink: false,
                        consent: false,
                        opacity: 50,
                      },
                    },
                    push: {
                      default: true,
                      groups: [],
                      quantity: 4,
                    },
                    remove: {
                      quantity: 2,
                    },
                    repulse: {
                      distance: 200,
                      duration: 2.0,
                      factor: 100,
                      speed: 5.0,
                      maxSpeed: 6.0,
                      easing: "ease-out-quad",
                      divs: {
                        distance: 200,
                        duration: 3.0,
                        factor: 100,
                        speed: 5.0,
                        maxSpeed: 5.0,
                        easing: "ease-out-quad",
                        selectors: [],
                      },
                    },
                    slow: {
                      factor: 3,
                      radius: 200,
                    },
                    trail: {
                      delay: 1,
                      pauseOnStop: false,
                      quantity: 1,
                    },
                    light: {
                      area: {
                        gradient: {
                          start: {
                            value: "#b30bb3",
                          },
                          stop: {
                            value: "#fbfbfb",
                          },
                        },
                        radius: 1000,
                      },
                      shadow: {
                        color: {
                          value: "#161616",
                        },
                        length: 2000,
                      },
                    },
                  },
                },
                manualParticles: [],
                particles: {
                  bounce: {
                    horizontal: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                    vertical: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                  },
                  collisions: {
                    absorb: {
                      speed: 2.0,
                    },
                    bounce: {
                      horizontal: {
                        random: {
                          enable: false,
                          minimumValue: 0.1,
                        },
                        value: 1,
                      },
                      vertical: {
                        random: {
                          enable: false,
                          minimumValue: 0.1,
                        },
                        value: 1,
                      },
                    },
                    enable: false,
                    mode: "bounce",
                    overlap: {
                      enable: true,
                      retries: 0,
                    },
                  },
                  color: {
                    value: "#b315b3",
                    animation: {
                      h: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 2.0,
                        decay: -1,
                        sync: true,
                      },
                      s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 5.0,
                        decay: -1,
                        sync: true,
                      },
                      l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 5.0,
                        decay: -1,
                        sync: true,
                      },
                    },
                  },
                  groups: {},
                  move: {
                    angle: {
                      offset: 0,
                      value: 90,
                    },
                    attract: {
                      distance: 200,
                      enable: false,
                      rotate: {
                        x: 3000,
                        y: 3000,
                      },
                    },
                    up: {   //direção
                      x: 40,
                      y: 40,
                      mode: "percent",
                      radius: 0,
                    },
                    decay: 0,
                    distance: {},
                    direction: "none",
                    drift: 0,
                    enable: true,
                    gravity: {
                      acceleration: 15.0,
                      enable: false,
                      inverse: false,
                      maxSpeed: 5.0,
                    },
                    path: {
                      clamp: true,
                      delay: {
                        random: {
                          enable: false,
                          minimumValue: 0,
                        },
                        value: 0,
                      },
                      enable: false,
                      options: {},
                    },
                    outModes: {
                      default: "destroy",
                      bottom: "destroy",
                      left: "destroy",
                      right: "destroy",
                      top: "destroy",
                    },
                    random: false,
                    size: true,
                    speed: 5.0,
                    spin: {
                      acceleration: 9.0,
                      enable: false,
                    },
                    straight: false,
                    trail: {
                      enable: true,
                      length: 3,
                      fill: {
                        color: {
                          value: "#0d0d0e",
                        },
                      },
                    },
                    vibrate: false,
                    warp: false,
                  },
                  number: {
                    density: {
                      enable: false,
                      width: 1920,
                      height: 1080,
                    },
                    limit: 0,
                    value: 0,
                  },
                  opacity: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: {
                      min: 0.3,
                      max: 0.8,
                    },
                    animation: {
                      count: 0,
                      enable: false,
                      speed: 5.0,
                      decay: 0,
                      sync: false,
                      destroy: "none",
                      startValue: "random",
                    },
                  },
                  reduceDuplicates: false,
                  shadow: {
                    blur: 30,
                    color: {
                      value: "#b523b5",
                    },
                    enable: false,
                    offset: {
                      x: 0,
                      y: 0,
                    },
                  },
                  shape: {
                    options: {},
                    type: "edge",
                  },
                  size: {
                    random: {
                      enable: false,
                      minimumValue: 1,
                    },
                    value: {
                      min: 1,
                      max: 10,
                    },
                    animation: {
                      count: 0,
                      enable: false,
                      speed: 3.0,
                      decay: 0,
                      sync: false,
                      destroy: "none",
                      startValue: "random",
                    },
                  },
                  stroke: {
                    width: 0,
                  },
                  zIndex: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    opacityRate: 1,
                    sizeRate: 1,
                    velocityRate: 1,
                  },
                  life: {
                    count: 1,
                    delay: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 0,
                      sync: false,
                    },
                    duration: {
                      random: {
                        enable: false,
                        minimumValue: 0.0001,
                      },
                      value: 0,
                      sync: false,
                    },
                  },
                  rotate: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    animation: {
                      enable: false,
                      speed: 3.0,
                      decay: 0,
                      sync: false,
                    },
                    direction: "clockwise",
                    path: true,
                  },
                  destroy: {
                    bounds: {},
                    mode: "split",
                    split: {
                      count: 1,
                      factor: {
                        random: {
                          enable: false,
                          minimumValue: 0,
                        },
                        value: 0.333333,
                      },
                      rate: {
                        random: {
                          enable: false,
                          minimumValue: 0,
                        },
                        value: 100,
                      },
                      sizeOffset: true,
                      particles: {
                        stroke: {
                          width: 0,
                        },
                        color: {
                          value: "#b61ab6f8",
                        },
                        number: {
                          value: 0,
                        },
                        collisions: {
                          enable: false,
                        },
                        opacity: {
                          value: {
                            min: 0.1,
                            max: 3,
                          },
                          animation: {
                            enable: true,
                            speed: 2.0,
                            sync: false,
                            startValue: "max",
                            destroy: "min",
                          },
                        },
                        shape: {
                          type: "circle",
                        },
                        size: {
                          value: {
                            min: 1,
                            max: 2,
                          },
                          animation: {
                            enable: true,
                            speed: 3.0,
                            count: 1,
                            sync: false,
                            startValue: "min",
                            destroy: "none",
                          },
                        },
                        life: {
                          count: 1,
                          duration: {
                            value: {
                              min: 1,
                              max: 2,
                            },
                          },
                        },
                        move: {
                          decay: 0.05,
                          enable: true,
                          gravity: {
                            enable: true,
                            inverse: false,
                            acceleration: 1,
                          },
                          speed: {
                            min: 0,
                            max: 5,
                          },
                          direction: "none",
                          outModes: "destroy",
                        },
                      },
                    },
                  },
                  roll: {
                    darken: {
                      enable: false,
                      value: 0,
                    },
                    enable: false,
                    enlighten: {
                      enable: false,
                      value: 0,
                    },
                    mode: "vertical",
                    speed: 5.0,
                  },
                  tilt: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    animation: {
                      enable: false,
                      speed: 3.0,
                      decay: 0,
                      sync: false,
                    },
                    direction: "clockwise",
                    enable: false,
                  },
                  twinkle: {
                    lines: {
                      enable: false,
                      frequency: 2.0,
                      opacity: 50,
                    },
                    particles: {
                      enable: false,
                      frequency: 2.0,
                      opacity: 50,
                    },
                  },
                  wobble: {
                    distance: 5,
                    enable: false,
                    speed: {
                      angle: 5,
                      move: 1,
                    },
                  },
                  orbit: {
                    animation: {
                      count: 0,
                      enable: false,
                      speed: 5.0,
                      decay: 0,
                      sync: false,
                    },
                    enable: false,
                    opacity: 50,
                    rotation: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 45,
                    },
                    width: 1,
                  },
                  links: {
                    blink: false,
                    color: {
                      value: "#1d1d1f",
                    },
                    consent: false,
                    distance: 100,
                    enable: false,
                    frequency: 2,
                    opacity: 50,
                    shadow: {
                      blur: 5,
                      color: {
                        value: "#181718",
                      },
                      enable: false,
                    },
                    triangles: {
                      enable: false,
                      frequency: 2,
                    },
                    width: 1,
                    warp: false,
                  },
                  repulse: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    enabled: false,
                    distance: 1,
                    duration: 1,
                    factor: 1,
                    speed: 5,
                  },
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                responsive: [],
                smooth: false,
                style: {},
                themes: [],
                zLayers: 100,
                emitters: {
                  autoPlay: true,
                  fill: true,
                  life: {
                    wait: false,
                  },
                  rate: {
                    quantity: 10,
                    delay: 0.25,
                  },
                  shape: "square",
                  startCount: 0,
                  size: {
                    mode: "percent",
                    height: 0,
                    width: 0,
                  },
                  direction: "none",
                  particles: {},
                  position: {
                    x: 50,
                    y: 50,
                  },
                  spawnColor: {
                    value: "#b815b8bb",
                    animation: {
                      h: {
                        count: 0,
                        enable: true,
                        offset: 0,
                        speed: 5.0,
                        decay: 0,
                        sync: true,
                      },
                      s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 3.0,
                        decay: 0,
                        sync: true,
                      },
                      l: {
                        count: 0,
                        enable: true,
                        offset: {
                          min: 20,
                          max: 80,
                        },
                        speed: 0,
                        decay: 0,
                        sync: true,
                      },
                    },
                  },
                },
        
             }
        }
        />
    )
};

export default ParticlesBackground;