import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    
    const onAddCategory = (nuevaCategoria) => {
        if(categories.includes(nuevaCategoria)) return;
        setCategories([nuevaCategoria, ...categories]);
        //setCategories(c => [...c, 'Nuevo']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory}/>

            <ol>
                {
                    categories.map((category) => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
        
    )
}
