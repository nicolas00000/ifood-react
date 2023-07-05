import React, { useState } from "react"
import Card from './card'
import './styles.css';

export default function ScrollComidas(){
    const [boxNumber , setBoxNumber] = useState(null)
    const [clicado , setClicado] = useState(false)
    const [pratos, setPratos] = useState([])
    const handleCardClick = (id) => {
        setBoxNumber(id)
    };
    

    const cards = [
        {nome: "feijao ", preco: "14,00", descricao: "lorem alguma coisa escruta como descircao", img:"alt"},
        {nome: "arroz ", preco: "14,00", descricao: "lorem alguma coisa escruta como descircao", img:"alt"},   
        {nome: "carne ", preco: "14,00", descricao: "lorem alguma coisa escruta como descircao", img:"alt"},
        {nome: "batata ", preco: "14,00", descricao: "lorem alguma coisa escruta como descircao", img:"alt"},
        {nome: "feijao ", preco: "14,00", descricao: "lorem alguma coisa escruta como descircao", img:"alt"},
        {nome: "feijao ", preco: "14,00", descricao: "lorem alguma coisa escruta como descircao", img:"alt"},
    ]

    return(
        <div className=" scroll w-full h-80  flex flex-wrap flex-col items-center justify-center overflow-x-scroll">
            {cards.map((card, index) => (
                <Card 
                    id={index} // id fixo do card
                    setarQualCardFoiOClick={() => handleCardClick(index)}
                    isSelected={setBoxNumber}
                    nome={card.nome} 
                    descricao={card.descricao}
                    preco={card.preco}
                    boxNumber={boxNumber} //id do card clicado compartilhado com todos 
                />
            ))}

        </div>
    )
}


