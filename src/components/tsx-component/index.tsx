import React from 'react'
import "./index.css"

interface IProps {
    content: string
    children?: React.ReactNode
}

export const TSXComponent = (props: IProps) => {
    return <div className="test-css">{props.content}</div>
}