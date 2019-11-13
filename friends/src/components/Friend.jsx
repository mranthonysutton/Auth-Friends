import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Friend = props => {
  const classes = useStyles();

  return (
    <Card className="friend-cards">
      <Typography variant="h3">{props.name}</Typography>
      <p>Age: {props.age}</p>
      <p>{props.email}</p>
      <div className="button-container">
        <Fab color="primary" className={classes.fab}>
          Edit
        </Fab>
        <Fab color="secondary">Delete</Fab>
      </div>
    </Card>
  );
};

export default Friend;
