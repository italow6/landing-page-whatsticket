import Box from "@mui/material/Box";
import React from "react";

import lightBlueCheck from "../assets/lightBlueCheck.png";
import lightGreenCheck from "../assets/lightGreenCheck.png";
import darkCheck from "../assets/darkCheck.png";

import StarRounded from "@mui/icons-material/StarRounded";

import { styled } from "@mui/system";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const PriceTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",
  letterSpacing: "0.025em",
});

const PriceTitleTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",

  color: "#fff",
  textAlign: "center",
  letterSpacing: "0.025em",
});

const PriceTimeTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0.025em",

  color: "#264C81",
});

const PriceListStack = styled(Stack)({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const Prices = ({ TextTypography, ContainedButton, ButtonTypography }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          paddingBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#264C81",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              ENTREPRENOUR{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#264C81" }}>R$ 219,90</PriceTypography>
              <PriceTimeTypography sx={{ color: "#264C81" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                1 Número de telefone
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                1 Administrador
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                3 Usuários
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de atendimentos
              </TextTypography>
            </PriceListStack>
            {/* <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Comunidade no GitHub
              </TextTypography>
            </PriceListStack> */}
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                10GB Armazenamento / Backup
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Transferência de chamados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Separação de acessos por nível (Administrador e Usuário)
              </TextTypography>
              
            </PriceListStack>

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="#"
              color="success"
            >
              <ButtonTypography> Comprar </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          paddingBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#264C81",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              STARTUP{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#264C81" }}>R$ 399,90</PriceTypography>
              <PriceTimeTypography sx={{ color: "#264C81" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                2 Números de telefone
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                2 Administradores
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                6 Usuários
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de atendimentos
              </TextTypography>
            </PriceListStack>
            {/* <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Comunidade no GitHub
              </TextTypography>
            </PriceListStack> */}
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                20GB Armazenamento / Backup
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Transferência de chamados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Separação de acessos por nível (Administrador e Usuário)
              </TextTypography>
              
            </PriceListStack>

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="#"
              color="success"
            >
              <ButtonTypography> Comprar </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          paddingBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#264C81",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              BUSINESS{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#264C81" }}>R$ 739,90</PriceTypography>
              <PriceTimeTypography sx={{ color: "#264C81" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                5 Números de telefone
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                5 Administradores
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                15 Usuários
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de atendimentos
              </TextTypography>
            </PriceListStack>
            {/* <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Comunidade no GitHub
              </TextTypography>
            </PriceListStack> */}
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                40GB Armazenamento / Backup
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Transferência de chamados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Separação de acessos por nível (Administrador e Usuário)
              </TextTypography>
              
            </PriceListStack>

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="#"
              color="success"
            >
              <ButtonTypography> Comprar </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          paddingBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#264C81",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              CORPORATE{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#264C81" }}>R$ 1.199,90</PriceTypography>
              <PriceTimeTypography sx={{ color: "#264C81" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                10 Números de telefone
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                15 Administradores
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                45 Usuários
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de atendimentos
              </TextTypography>
            </PriceListStack>
            {/* <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Comunidade no GitHub
              </TextTypography>
            </PriceListStack> */}
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                90GB Armazenamento / Backup
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Transferência de chamados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Separação de acessos por nível (Administrador e Usuário)
              </TextTypography>
              
            </PriceListStack>

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="#"
              color="success"
            >
              <ButtonTypography> Comprar </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          paddingBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#264C81",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              PRIME{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#264C81" }}>Valor a consultar</PriceTypography>
              <PriceTimeTypography sx={{ color: "#264C81" }}>
              
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Números ilimitados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Administradores ilimitados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Usuários ilimitados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de atendimentos
              </TextTypography>
            </PriceListStack>
            {/* <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Comunidade no GitHub
              </TextTypography>
            </PriceListStack> */}
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                270GB Armazenamento / Backup
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Transferência de chamados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Suporte 24/7* (Exclusivo PRIME)
              </TextTypography>
              
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Separação de acessos por nível (Administrador e Usuário)
              </TextTypography>
              
            </PriceListStack>
            

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="#"
              color="success"
            >
              <ButtonTypography> Comprar </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          paddingBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#264C81",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              TESTE GRÁTIS{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#264C81" }}>3 dias</PriceTypography>
              <PriceTimeTypography sx={{ color: "#264C81" }}>
              
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                1 Número de telefone
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                1 Administrador
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                3 Usuários
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem limite de atendimentos
              </TextTypography>
            </PriceListStack>
            {/* <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Comunidade no GitHub
              </TextTypography>
            </PriceListStack> */}
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                10GB Armazenamento / Backup
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Transferência de chamados
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto", marginTop: "5px" }}>
                Separação de acessos por nível (Administrador e Usuário)
              </TextTypography>
              
            </PriceListStack>
            

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="#"
              color="success"
            >
              <ButtonTypography> Testar </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    
  );
};

export default Prices;
