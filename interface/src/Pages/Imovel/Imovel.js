import ImovelLayout from '../../layouts/Imovel/index.jsx'

const Imovel = () => {

    const url = window.location.href.replace("http://localhost:3000/imovel?id=", "")

    return (
        <>
            <ImovelLayout imovelID={url} />
        </>
    )
}

export default Imovel