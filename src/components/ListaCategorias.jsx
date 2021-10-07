import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'



const ListaPost = ({ url }) => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias`, setCategorias)
    }, [url])

    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria) => (
                    <Link to={`/categoria/${categoria.id}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListaPost