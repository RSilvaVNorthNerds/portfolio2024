import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PublicationCard from "./components/PublicationCard";
import environment from "../../../environment";

interface GetAllPublicationsResponse {
  id: string;
  title: string;
  description: string;
  [key: string]: any;
}

const Publications = () => {
  const [publications, setPublications] = useState<
    GetAllPublicationsResponse[]
  >([]);

  useEffect(() => {
    fetch(`${environment.API_URL}/get-publications`)
      .then((raw) => raw.json())
      .then((data) => setPublications(data));
  }, []);

  return (
    <Box
      id="publications"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        margin: "5em 0em",
        padding: "0rem 3rem",

        "@media (max-width: 768px)": {
          alignItems: "center",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          width: "fit-content",
          position: "relative",

          "::after": {
            content: '""',
            display: "block",
            width: "55%",
            height: "20px",
            backgroundColor: "#508D9F",
            transform: "translateX(100%) translateY(-110%)",
            position: "absolute",
            zIndex: -1,
          },

          "@media (max-width: 768px)": {
            textAlign: "center",
            "::after": {
              width: "55%",
            },
          },
        }}
      >
        Latest Publications
      </Typography>
      <Box>
        {publications &&
          publications.map((publication, index) => (
            <PublicationCard
              key={index}
              title={publication.title}
              description={publication.content}
              url={publication.id}
              author={publication.author}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Publications;
