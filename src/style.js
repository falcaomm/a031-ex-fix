import styled from "styled-components";

export const HeaderEstilo = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10vh;
`

export const MainEstilo = styled.main`
    height: 750px;
    display: flex;
`

export const MenuLateral = styled.nav`
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
`

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const PainelVideos = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
`

export const FooterEstilo = styled.footer`
    background: #333b3e;
    color: white;
    width: 100%;
`
