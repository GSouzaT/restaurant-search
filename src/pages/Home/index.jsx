import React, { useState } from "react";
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from "../../components";

import { Container, Search, Logo, Wrapper, CarrouselTitle, Carousel } from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return (<Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="Logo do buscador" />
                <TextField
                    label='Pesquisar Restaurantes'
                    outlined
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                ><Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                </TextField>
                <CarrouselTitle>Na sua Área</CarrouselTitle>
                <Carousel {...settings}>
                   <Card photo={restaurante} title='nome aleatorio'/>
                   <Card photo={restaurante} title='nome aleatorio'/>
                   <Card photo={restaurante} title='nome aleatorio'/>
                   <Card photo={restaurante} title='nome aleatorio'/>
                   <Card photo={restaurante} title='nome aleatorio'/>
                   <Card photo={restaurante} title='nome aleatorio'/>
                   <Card photo={restaurante} title='nome aleatorio'/>
                </Carousel>
            </Search>
            <RestaurantCard />
        </Container>
        <Map />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
)};

export default Home;