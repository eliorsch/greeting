import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import { styled } from "@mui/material/styles";

export default function RegularEventTail(props) {
  let { name, event, date } = props;
  const columnSize = { height: "100%" };
  const cellSize = { height: "25%", width: "100%" };
  return (
    <Card sx={{width:'100%', height: "4.6em", px: "1em", borderRadius:'0.9em', display: "flex", backgroundColor:'#24cbc7', color:'white' }} {...props} >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            {`${date.getDay()}.${date.getMonth()}`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: "0.5em",
              alignItems: "center",
            }}
          >
            <EmailIcon fontSize="inherit" />
            {event}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-around",
        }}
      >
        <IconButton
          sx={{
            display: "block",
            marginInlineStart: "auto",
            fontSize: "1.2em",
            p:0,
          }}
        >
          <EditIcon fontSize="inherit" />
        </IconButton>
        <Button variant="contained" sx={{
          borderRadius:'0.5em',
          p:'0.3em 0.2em',
          fontSize:'0.8em',
          lineHeight:'1em',
          backgroundColor:'#6487ff'
        }}>ספר לחברים</Button>
      </Box>
    </Card>
  );
}
//------------------
