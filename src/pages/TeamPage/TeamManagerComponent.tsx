import { Box, Typography } from "@mui/material";
import React from "react";
import { Management } from "./Index";

interface Props {
    manager: Management
}

const TeamManagerComponent = ({manager}: Props) => {
  return (
    <Box sx={{ backgroundColor: "lightcoral" }}>
      <Typography align="center" variant="h6">
        {manager.name}
      </Typography>
      <Typography align="center" variant="h6">
        {manager.position}
      </Typography>
    </Box>
  );
};

export default TeamManagerComponent;
