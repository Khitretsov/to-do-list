/*
import React from "react";

export default function Newfunction(props) {
    // const {article} = props 
    // console.log(article) // undefined
    return (
        <div>
            <h1>{props.blabla.title}</h1>
            <section>{props.blabla.text}</section>
        </div>
    )
} */

import React, {Component} from 'react'

export default class Newfunction extends Component {
    
    // Список каких-то служедных вещей и переменных, которые меняются при взаимодействии
    // пользователя с компонентом.
    constructor(props) {  // Отслеживает изменения
        super(props)

        this.state = {
            isOpen: false // Это свойство объекта задаётся самостоятельно
        }

        this.toggleOpen = this.toggleOpen.bind(this)
    }

    // Что отрисовывается в самом начале (Далее "отрисованное")
    render() {
        const a = this.props
        // console.log(a)
        return (
            <div>
                <h1>{a.blabla.title}</h1>
                <button onClick = {this.toggleOpen}>
                    {this.state.isOpen ? 'Close': 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    // Что будет отрисовываться по причине работы функций, вызываемых из отрисованного
    getBody() {
        if(!this.state.isOpen) return null
        const a = this.props
        return <section>{a.blabla.text}</section>
    }

    // Функции, которые вызываются из отрисованного
    toggleOpen() { // Создаёт изменения
        this.setState({ 
            isOpen: !this.state.isOpen
        }) 
    }    

}
