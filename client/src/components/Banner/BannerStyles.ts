const BannerStyles = {
  BannerWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: 'url("../../public/images/river.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundColor: "transparent",
  },
  BannerContentWrapper: {
    paddingTop: "70px",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 5rem",
    height: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 2,

    "@media (max-width: 768px)": {
      height: "auto",
      flexDirection: "column-reverse",
      padding: "0 2rem",
    },
  },
  BannerImage: {
    width: "100%",
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
};

export default BannerStyles;
