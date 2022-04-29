import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const Horarios = ({ SubtitleTypography, TextTypography }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={12} xs={12} sx={{ paddingBottom: "100px", paddingTop: "100px" }}>
        <Box
          sx={{
            display: "flex",
            paddingRight: "78px",

            maxWidth: "666px",

            letterSpacing: "0.025em",
            color: "#302F2F",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Stack direction="column" spacing={2}>
            <SubtitleTypography>Informações e Suporte</SubtitleTypography>

            <TextTypography>
              Segunda à sexta, das 8h às 18h.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              Sábados, das 8h às 12h.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              27/7 Para clientes PRIME*.
            </TextTypography>
          </Stack>
        </Box>
      </Grid>
      <Grid item lg={6} md={12} xs={12} sx={{ paddingBottom: "100px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingRight: "78px",
            maxWidth: "484px",
            height: "165px",
            marginLeft: "auto",
            marginRight: "auto",

            backgroundColor: "#00ccff",
            borderRadius: "82px 0px 0px 0px",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Horarios;
