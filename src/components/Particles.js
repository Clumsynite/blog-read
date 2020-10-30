import Particles from "react-particles-js";

var style = {
  position: "absolute",
  height: "95vh",
  width: "95vw",
};

const ParticlesBackground = () => {
  return (
    <div style={style}>
      <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
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
