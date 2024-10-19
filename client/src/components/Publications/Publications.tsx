import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PublicationCard from "./components/PublicationCard";

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
    fetch("http://localhost:3003/get-publications")
      .then((raw) => raw.json())
      .then((data) => setPublications(data));
  }, []);

  return (
    <Box>
      <Typography variant="h4">Latest Publications</Typography>
      <Box>
        {publications.map((publication, index) => (
          <PublicationCard
            key={index}
            name={publication.title}
            description={publication.content}
            url={publication.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Publications;
