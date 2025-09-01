import { useSearchParams } from 'react-router-dom'
import ImovelLayout from '../../layouts/Imovel/index.jsx'

const Imovel = () => {
    const [searchParams] = useSearchParams()
    const imovelID = searchParams.get('id')
    
    console.log('=== DEBUG IMOVEL ===')
    console.log('URL atual:', window.location.href)
    console.log('SearchParams:', searchParams.toString())
    console.log('imovelID extraído:', imovelID)
    console.log('Tipo do imovelID:', typeof imovelID)
    console.log('====================')

    return (
        <>
            <ImovelLayout imovelID={imovelID} />
        </>
    )
}

export default Imovel