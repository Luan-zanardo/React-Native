import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

const Opcao = styled.li`
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    padding: 0 5px;
    font-size: 16px;
    min-width: 120px;
    cursor: pointer;
}
`
const Opcoes = styled.ul`
  display: flex;
`

function OpcoesHeader(){
    return(
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;