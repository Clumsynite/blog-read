import Particles from "react-particles-js";

var style = {
  position: "absolute",
  height: "100vh",
  width: "100%",
  zIndex: '-1'
};

const ParticlesBackground = () => {
  return (
    <div style={style}>
      <Particles
        style={{ position: "absolute" }}
        height="100%"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#000000",
            },
            line_linked: {
              color: {
                value: "#000000",
              },
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
