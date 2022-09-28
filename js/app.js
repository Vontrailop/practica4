if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js');
}


//  if(window.caches){
//     console.log("Soportas caché");
//     // Obtiene un cache y si no existe lo crea
//     caches.open("cache-v1");

//     caches.keys().then(keys=>{
//         console.log(keys);
//     })

//     caches.open("cache-v1").then(cache=>{
//         // cache.add('/index.html')
//         // cache.add('/images/jinx.jpg')
//         // cache.add('/css/style.css')

//         cache.addAll([
//             '/index.html',
//             '/pages/page1.html',
//             '/pages/page2.html',
//             '/pages/page3.html',
//             '/pages/page4.html'

//         ]).then(()=>{           
//         })

//     });

    
// }