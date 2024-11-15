const projectShowcaseStyles = {
  projectShowcaseWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1200px",
    padding: "0rem 3rem",

    "@media (max-width: 800px)": {
      padding: "0rem 1rem",
      alignItems: "center",
    },
  },
  projectContainer: {
    width: "100%",

    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
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

  projectCardWrapper: {
    width: "300px",
    height: "375px",
    maxHeight: "375px",
    borderRadius: "20px",
    margin: "0px 10px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 10px 0px #141414",
    backgroundColor: "#102D3B",
  },

  projectCardContent: {
    display: "flex",
    flexDirection: "column",
    padding: "0.75em",
    flex: 1,
  },
  projectCardDescription: {
    height: "60px",
    marginBottom: "1rem",
    overflowY: "auto",
  },
  projectCardActionButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "auto",
  },
};

export default projectShowcaseStyles;
