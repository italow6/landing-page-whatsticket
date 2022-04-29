import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import icon from "../assets/icon.png";

const TopBar = ({ ContainedButton, ButtonTypography }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          height: "90px",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.1))",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            height: "75px",
          }}
        >
          <Stack direction="row">
            <img
              style={{
                width: 300,
                height: 30,
                marginTop: "5px",
              }}
              src={icon}
              alt=""
            />

            
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              href="#"
              sx={{
                borderRadius: "10px",
                width: "200px",
                height: "55px",
                textTransform: "none",
              }}
              color="secondary"
            >
              <ButtonTypography>Teste Grátis</ButtonTypography>
            </Button>
            <ContainedButton
              variant="contained"
              color="primary"
              href="#"
            >
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
