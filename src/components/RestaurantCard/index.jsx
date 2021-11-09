import React from "react";
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, RestaurantPhoto, Address } from './styles'
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor='#e7711c'></ReactStars>
            <Address>Rua dos bobos, Nº 0</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt='Foto do Restaurante'/>
    </Restaurant>
);

export default RestaurantCard;