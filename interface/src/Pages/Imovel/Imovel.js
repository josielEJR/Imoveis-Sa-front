import ImovelPrincipal from '../../components/ImovelPrincipal.js'
const Imovel = () => {

    const url = window.location.href.replace("http://localhost:3000/imovel?id=", "")

    return (
        <>
            <ImovelPrincipal imovelID={url} />
        </>
    )
}

export default Imovel