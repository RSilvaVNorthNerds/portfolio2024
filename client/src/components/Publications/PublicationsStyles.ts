const PublicationsStyles = {
  publicationsCardContainer: {
    width: "100%",
    height: "200px",
    maxHeight: "200px",
    borderRadius: "20px",
    margin: "10px 0px",
    display: "flex",
    boxShadow: "0px 0px 10px 0px #141414",
    backgroundColor: "#102D3B",

    "@media (max-width: 775px)": {
      maxWidth: "300px",
      flexDirection: "column",
      maxHeight: "unset",
      height: "auto",
    },
  },
  publicationsCardImage: {
    width: "20rem",
    borderRadius: "20px 0px 0px 20px",
    objectFit: "cover",
    "@media (max-width: 775px)": {
      maxHeight: "12rem",
      width: "100%",
      borderRadius: "20px 20px 0px 0px",
    },
  },
};

export default PublicationsStyles;
