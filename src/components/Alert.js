import React from 'react'
const capatalize=(word)=>{
    let lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
}
export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert"><strong>{capatalize(props.alert.type)} : {props.alert.msg}</strong>
    </div>
  )
}
