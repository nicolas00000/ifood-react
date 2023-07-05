import React, { useState } from "react"
import './styles.css'
export default function Card(props){
    const {nome, preco, descricao, id, setarQualCardFoiOClick, boxNumber} = props 
    const [clicado , setClicado] = useState(null)
    const [quantidade, setQuantidade] = useState(1)

    function selecionado(){
        // setarQualCardFoiOClick(id)
        setClicado(true)
    }

    function add(){
        setQuantidade(quantidade+1)
    }

    function remove(){
        setQuantidade(quantidade-1)
    }

    return(                                                         //para selecionar apenas 1 ${boxNumber === id ? "border-green-700" : ""}
        <div onClick={() => selecionado()} className={`${clicado  ? "border-green-700" : ""} relative rounded-md w-44 h-56 inline-block p-3 m-3  border-2  bg-white shadow-md cursor-pointer ` } >
            {/* {boxNumber} id {id} */}
            
            <img className="h-20 w-full object-cover rounded " src="https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?size=626&ext=jpg"></img>
            <strong>{nome}</strong>
            <br></br>
            <desc> {descricao} </desc>
            <div className="flex flex-row justify-between">
                <strong> R$: {preco} </strong>
                <div className={`${clicado  ? "" : "hidden"} flex flex-row w-16 h-12 bg-gray-400 justify-between p-3  z-10 `}>
                    <p onClick={remove}>-</p>
                    <p>{quantidade}</p>
                    <p className="text-amber-500" onClick={add}>+</p>
                </div>
            </div>
        </div>
    )
}