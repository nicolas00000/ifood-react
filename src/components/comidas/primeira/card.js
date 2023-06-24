import './styles.css'
export default function Card(props){
    const {nome, img, preco, descricao} = props 
    return(
        <div className=" rounded-md w-44 h-56 inline-block p-3 m-3   bg-white shadow-md cursor-pointer clicado">
            <img className="h-20 w-full object-cover rounded " src="https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?size=626&ext=jpg"></img>
            <strong>{nome}</strong>
            <br></br>
            <desc> {descricao} </desc>
            <div className="flex flex-row justify-between">
                <strong> R$: {preco} </strong>
                <div className="flex flex-row w-12 bg-white justify-between">
                    <p>-</p>
                    <p>0</p>
                    <p>+</p>
                </div>
            </div>
        </div>
    )
}