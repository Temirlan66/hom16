import React from 'react';
import styled from 'styled-components';
const MyCard = () => {
    return (
        <Container>
            <h2>My Card page bla bla bla </h2>
        </Container>
    );
};
const Container = styled.div`
     margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    width: 500px;
    height: 150px;
    background-color: white;
    padding: 20px 20px;

`
export default MyCard;