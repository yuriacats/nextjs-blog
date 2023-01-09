import React from "react"
import styled from "styled-components"
const ReadTimeDescriber = (props) =>{
    const Description = styled.p`
        text-align:center;
    `
    return(

        <>
            <Description>このテキストは{props.readTimes}分で読めます。</Description>
        </>
    )
}

export default ReadTimeDescriber