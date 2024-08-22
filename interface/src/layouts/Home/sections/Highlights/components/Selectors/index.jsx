import { useState } from 'react'

import { Wrapper, SelectorSection, IndexSelector } from './style'

const Selectors = () => {

    const [selected, setSelected] = useState(0)

    return (
        <Wrapper>
            <SelectorSection>
                <IndexSelector
                    onClick={() => {
                        setSelected(0)
                    }}
                    grow={selected === 0 ? "true" : "false"}
                />
                <IndexSelector
                    onClick={() => {
                        setSelected(1)
                    }}
                    grow={selected === 1 ? "true" : "false"}
                />
                <IndexSelector
                    onClick={() => {
                        setSelected(2)
                    }}
                    grow={selected === 2 ? "true" : "false"}
                />
            </SelectorSection>
        </Wrapper>
    )
}

export default Selectors