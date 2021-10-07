import React from 'react';
import { useParams } from 'react-router';
import ListaPost from '../components/ListaPost';

const SubCategoria = () => {
    const { subcategoria } = useParams();
    return (
        <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    );
}

export default SubCategoria;