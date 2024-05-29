import React from "react";
import styled from "styled-components";
import spectra from "../assets/blue-spectra.png"

export default function Login() {
  const handleClick = async () => {
    const client_id = "1445c814085c44929685e8547922fc0d";
    const redirect_uri = "https://spectra-app-two.vercel.app/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src={spectra}
        alt="spectra"
      />
      <button onClick={handleClick}>Connect to Spectra</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #FFFFFF;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 4rem;
    border-radius: 5rem;
    background-color: transparent;
    color: #0033aa;
    border: 3px black solid;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
