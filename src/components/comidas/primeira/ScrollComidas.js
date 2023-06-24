import React from "react"
import Card from './card'
import './styles.css';
export default function ScrollComidas(){
    return(
        <div className=" scroll w-full h-80  flex flex-wrap flex-col items-center justify-center overflow-x-scroll">
            
            <Card nome="feijao tropeiro" preco="14,00" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="Virada paulista" preco="12,30" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="Arroz com nozes" preco="22,00" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="Bife acebolada" preco="10,00" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="feijao" preco="10" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="feijao" preco="10" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="feijao" preco="10" descricao="lorem alguma coisa escrita como descricao" img="alt"/>

        </div>
    )
}

