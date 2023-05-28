import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

export default function CloseEventTail({ name, event, date }) {
  return (
    <Card className="centerFlex column" sx={{ p:'0.5rem', backgroundColor:'#5f87ff' }}>
      <CardHeader title={name} titleTypographyProps={{color:'#ff9810'}} sx={{p:'0px'}}/>
      <CardContent  sx={{p:'0px'}}>
        <Typography color={'white'}>{`${event}  ${date}`}</Typography>
      </CardContent>
    </Card>
  );
}
