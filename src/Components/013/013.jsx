// import { useEffect, useRef, useState } from 'react';
// import './App.scss';
// import rand from './Functions/rand';

// function App() {

//     const [kv, setKv] = useState(null);

//     // PIRMAS KROVIMAS
//     useEffect(() => {
//         setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
//     }, []);

//     // UZSAUGOS POKYCIUS
//     useEffect(() => {
//         if (null === kv) {
//             return;
//         }
//         localStorage.setItem('kv', JSON.stringify(kv));
//     }, [kv]);


//     const prideti = () => {
//         const kiekis = rand(5, 10);
//         const kvadratukai = [];
//         for (let i = 0; i < kiekis; i++) {
//             kvadratukai.push('^_^');
//         }
//         setKv(k => null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
//     }


//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>PRAKTIKUMAS</h1>
//                     <div className="kvc">
//                         {
//                             kv ? kv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
//                         }
//                     </div>

//                 <button onClick={prideti}>Pridėti</button>
//             </header>
//         </div>
//     );
// }

// export default App;



// //