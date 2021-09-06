import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/itemDetailContainer'
import { useParams } from 'react-router-dom';

export default function ItemDetailView() {

    const { id } = useParams()

    return (
        <div>
            <ItemDetailContainer id={id} />
        </div>
    )
}
