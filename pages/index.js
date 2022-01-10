import { Container, Typography } from "@mui/material";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Database from "../components/Database";
import { useState } from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Staff-db</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        style={{ paddingTop: "20px" }}
        maxWidth="md"
        className={styles.main}
      >
        <Typography textAlign="center" variant="h2">
          Staff DB
        </Typography>
        <Database />
      </Container>

      <footer className={styles.footer}></footer>
    </div>
  );
}
