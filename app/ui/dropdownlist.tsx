'use client'

import { useState } from "react"

export default function DropDownList() {
    const [foodList] = useState([
        {name: 'Apple'},
        {name: 'Banana'},
        {name: 'Coconut'},
        {name: 'Mango'}
    ]);

    const [food, setFood] = useState("Apple");

    return(
        <>
            <select onChange={(e) => setFood(e.target.value)} >
                {foodList.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <option value={item.name}>{item.name}</option>
                ))}
            </select>
            <div>Food Selected {food}</div>
        </>
    );
}







// 'use client'

// import { useState } from "react"

// export default function DropDownList() {
//     const [food, setFood] = useState('Apple');

//     return(
//         <>
//             <select onChange={(e) => setFood(e.target.value)}>
//                 <option value="Apple"></option>
//                 <option value="Mango"></option>
//                 <option value="Banana"></option>
//             </select>

//             <div>Food Selected {food}</div>
//         </>
//     );
// }