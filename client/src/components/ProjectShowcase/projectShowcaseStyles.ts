const projectShowcaseStyles = {
  projectShowcaseWrapper: {
    width: "100%",
    padding: "0rem 3rem",

    "@media (max-width: 800px)": {
      padding: "0rem 1rem",
    },
  },
  projectContainer: {
    width: "100%",
  },
  projectHeader: {
    width: "fit-content",
    "::after": {
      content: '""',
      display: "block",
      width: "55%",
      height: "20px",
      backgroundColor: "#508D9F",
      transform: "translateX(100%) translateY(-110%)",
      position: "relative",
      zIndex: -1,
    },
  },
};

export default projectShowcaseStyles;
