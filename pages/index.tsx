import { Container, Typography } from "@mui/material";
import { authenticate } from "@lib/auth";
import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default function Index() {
  
  return (
    <Container>
      <Typography variant="h2" component="h2" align="center">
        Main Page
      </Typography>
    </Container>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await authenticate(context);
}
