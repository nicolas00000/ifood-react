import React from "react"
import Card from './card'
import './styles.css';
export default function ScrollComidas(){
    return(
        <div className="scroll w-full h-80 flex flex-wrap flex-col items-center justify-center overflow-x-scroll">
            
            <Card nome="Coca cola" preco="14,00" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="Fanta Laranja" preco="12,30" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="Peps" preco="22,00" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="Sprite" preco="10,00" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="feijao" preco="10" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="feijao" preco="10" descricao="lorem alguma coisa escrita como descricao" img="alt"/>
            <Card nome="feijao" preco="10" descricao="lorem alguma coisa escrita como descricao" img="alt"/>

        </div>
    )
}

