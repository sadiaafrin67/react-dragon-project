import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSidenav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                // console.log(data)
            })
    }, [])

   

    return (
        <div className="p-4 space-y-3 mb-6">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => 
                    <Link 
                    className="block ml-e tex-xl font-semibold" 
                    to={`/category/${category.id}`}
                    key={category.id}>
                    {category.name}
                    </Link>
                )
            }
        </div>
    );
};

export default LeftSidenav;