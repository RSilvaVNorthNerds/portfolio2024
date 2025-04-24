import { Box, Button, Link, Typography } from "@mui/material";
import { convert } from "html-to-text";
import PublicationsStyles from "../PublicationsStyles";

interface PublicationCardProps {
  title: string;
  description: string;
  url: string;
  author: string;
}

export default function PublicationCard({
  title,
  description,
  url,
  author,
}: PublicationCardProps) {
  // TODO: Move all this description processing to BE
  const descriptonPreview = description
    ?.match(/<p>(.*?)<\/p>/)?.[1]
    .substring(0, 225);

  const parsedDescription = convert(descriptonPreview ?? "") + "..";

  const imgUrl = description?.match(/src="([^"]*)"/)?.[1];

  return (
    <Box sx={PublicationsStyles.publicationsCardContainer}>
      <Box
        component="img"
        sx={PublicationsStyles.publicationsCardImage}
        src={imgUrl ?? "images/dev.jpg"}
        alt="Project Preview"
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0.75em",
          flex: 1,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography
          sx={{ fontWeight: "bold", fontStyle: "italic" }}
          variant="body2"
        >{`Author: ${author}`}</Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {parsedDescription}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "auto",
          }}
        >
          <Link
            href={url}
            target="_blank"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
              textDecoration: "none",
            }}
          >
            <Button variant="outlined">Check out the Full Article</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
