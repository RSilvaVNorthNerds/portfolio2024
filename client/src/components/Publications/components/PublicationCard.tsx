import { Box, Button, Link, Typography } from "@mui/material";
import { convert } from "html-to-text";

interface PublicationCardProps {
  title: string;
  description: string;
  url: string;
  author: string;
  imgUrl?: string;
}

export default function PublicationCard({
  title,
  description,
  url,
  author,
  imgUrl,
}: PublicationCardProps) {
  // TODO: Move all this description processing to BE
  const descriptonPreview = description
    ?.match(/<p>(.*?)<\/p>/)?.[1]
    .substring(0, 225);

  const parsedDescription = convert(descriptonPreview ?? "") + "..";

  return (
    <Box
      sx={{
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
      }}
    >
      <Box
        component="img"
        sx={{
          width: "20rem",
          borderRadius: "20px 0px 0px 20px",
          objectFit: "cover",
          "@media (max-width: 775px)": {
            maxHeight: "12rem",
            width: "100%",
            borderRadius: "20px 20px 0px 0px",
          },
        }}
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
