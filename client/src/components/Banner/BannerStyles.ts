const BannerStyles = {
  BannerWrapper: {
    width: "100%",
    height: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: 'url("images/river.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundColor: "#090e14",
    paddingTop: "70px",

    "@media (max-width: 768px)": {
      height: "auto",
    },
  },
  BannerContentWrapper: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 2,

    backgroundColor: "rgba(17,26,37,0.6)",
    padding: "2rem",
    margin: "0 2rem",
    borderRadius: "10px",

    "@media (max-width: 768px)": {
      height: "auto",
      flexDirection: "column-reverse",
    },
  },
  BannerImage: {
    width: "100%",
    maxWidth: "350px",
    minWidth: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",

    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "350px",
      maxHeight: "350px !important",
      minWidth: "unset",
    },
  },
  BannerContentDescription: {
    maxHeight: "200px",
    overflow: "auto",
  },
};

export default BannerStyles;
