import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./ImageCard.module.css";
import CardActionArea from "@mui/material/CardActionArea";

export const ImageCard = () => {
  const cardImages = [
    { id:1,pic: "/src/assets/Billboard.avif" },
    { id:2,pic: "/src/assets/screen displays.avif" },
    { id:3,pic: "/src/assets/social media.avif" },
  ];

  return (
    <div className={styles.imageCardContainer}>
      {cardImages.map((cardImage) => (
        <Card sx={{ width: 300 }} key={cardImage.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={cardImage.pic}
              alt="Billboard picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem ipsum
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                dolor sit amet
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};
