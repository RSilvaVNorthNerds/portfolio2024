import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PublicationCard from "./components/PublicationCard";
import { getArticleImageURL } from "./helpers";
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
    fetch(`${environment.API_URL}:3003/get-publications`)
      .then((raw) => raw.json())
      .then((data) => setPublications(data));
  }, []);

  return (
    <Box
      id="publications"
      sx={{ maxWidth: "1200px", margin: "5em 0em", padding: "0rem 3rem" }}
    >
      <Typography
        variant="h4"
        sx={{
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
        }}
      >
        Latest Publications
      </Typography>
      <Box>
        {publications.map((publication, index) => (
          <PublicationCard
            key={index}
            title={publication.title}
            description={publication.content}
            url={publication.id}
            author={publication.author}
            imgUrl={getArticleImageURL(publication.content)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Publications;
