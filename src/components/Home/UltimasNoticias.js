import React from "react";
import Card from "./Card";

const UltimasNoticias = () =>{
    return (
        <section className="col-12 col-lg-6">
            <h3>Ultimas Noticias</h3>
            <Card 
            titulo= {'Noticia #1'}
            imagen = 'https://picsum.photos/id/237/300/100'
            />
            <Card
            titulo= {'Noticia #1'}
            imagen = 'https://picsum.photos/id/237/300/100'
            />
        </section>
    );
}
export default UltimasNoticias;