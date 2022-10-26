import React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

 const Item = ({ productos }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productos.img}
          alt={productos.nombre}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {productos.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${productos.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to = {'/productos/'+ productos.nombre}>
        <Button size="small" color="primary">
          Ver Detalles
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(249, 220, 92, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};
export default Item;