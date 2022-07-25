import React from "react";
import { Container, PSText, DSImage, DSText } from "./Homepage.styled";
import avatar from "./img/avatar.jpg";

function Homepage(){
    const [catHover, setCatHover] = React.useState(false);

    function setHover(value){
        setCatHover(value)
    }
    return(
        <Container>
            <DSText onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>MY FACE</DSText>
            {catHover && <DSImage onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} src={avatar} />}
            <PSText>Just a list of solved challenges from <a href="https://www.frontendmentor.io">frontendmentor.io</a></PSText>
        </Container>
    )
}

export default Homepage;