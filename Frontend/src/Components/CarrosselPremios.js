import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import premiosData from './premios.json'; 

const PremiosCarousel = () => {
    const settings = {
        dots: false, // Sem pontos de navegação
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // Intervalo de tempo para mudança automática
        arrows: false, // Sem setas de navegação
    };

    return (
        <Slider {...settings}>
            {Object.values(premiosData).map((premio, index) => (
                index < 24 && ( // Limita a exibir apenas as primeiras 24 imagens
                    <div key={premio.id}>
                        <img src={premio.img_src} alt={premio.nome} style={{ width: '100%' }} />
                    </div>
                )
            ))}
        </Slider>
    );
};

export default PremiosCarousel;
