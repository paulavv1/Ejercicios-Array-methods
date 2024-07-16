'use strict'
/* 1. Escribir una función que reciba como parámetros un array de nombres y 
un nombre a buscar, muestre en pantalla si el nombre esta en lista o no.*/
let student = ['James', 'Samuel', 'Sergio', 'Darwin', 'Ian'];

// Función para verificar si un nombre está en la lista

function buscarNombreEnLista(nombres, nombreABuscar) {
    if (nombres.includes(nombreABuscar)) {
        alert(`El nombre: ${nombreABuscar} está en la lista.`);
    } else {
        alert(`El nombre: ${nombreABuscar} no está en la lista.`);
    }
}

// Ejemplo de uso:
let nombreBuscado = 'Samuel';
buscarNombreEnLista(student, nombreBuscado);  // Output esperado: El nombre Carlos está en la lista.

nombreBuscado = 'Pedro';
buscarNombreEnLista(student, nombreBuscado);  // Output esperado: El nombre Pedro no está en la lista.




/////////////

/* 2. Escribir una función que reciba como parámetro una frase. 
Separar por palabras y devolver el numero de palabras que tiene 
la frase:*/ 

function contarPalabrasYMostrar(frase) {
    // Utilizamos split() para dividir la frase en palabras
    let palabras = frase.split(".");
    
    // Contamos el número de palabras
    let numeroPalabras = palabras.length;
    
    // Mostramos el mensaje con el número de palabras usando alert
    alert(`La frase tiene ${numeroPalabras} palabras.`);
}

// Ejemplo de uso:
let frase2 = "El tiempo es oro y lo cura todo";

contarPalabrasYMostrar(frase2);


///////////////////


/* 3. Escribir una función que reciba como parámetro una frase, separar
 por palabras y devolver en un array las palabras que tengan mas de 
 3 letras.*/ 

 function palabrasTresLetras(frase) {
    // Dividir la frase en palabras usando split
    let palabras = frase.split(" ");
    
    // Filtrar las palabras que tienen más de 3 letras
    let palabrasMasLargas = palabras.filter(palabra => palabra.length > 3);
    
    // Devolver el array con las palabras que cumplen la condición
    return palabrasMasLargas;
}


let frase = "El tiempo es oro y cura todo";
let palabrasFiltradas = palabrasTresLetras(frase);

alert("Las Palabras con más de 3 letras son: " + palabrasFiltradas.join(", "));



///////////////////////


/*4. Escribir una función que reciba como parámetros el siguiente array y un string
 con el nombre de una tecnología. Devolver una lista de los libros asociados a la tecnología.*/

 const librosportec = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
  ];

   // Función que devuelve una lista de libros asociados a una tecnología
   function getBooksByTechnology(books, technology) {
    // Filtramos los libros que contienen el nombre de la tecnología (ignorando mayúsculas y minúsculas)
    let filteredBooks = books.filter(book => book.toLowerCase().includes(technology.toLowerCase()));
  
    // Retornamos el array de libros filtrados
    return filteredBooks;
  }

  let technology = 'Java';
  let booksForJava = getBooksByTechnology(programmingBooks, technology);
  
 alert( booksForJava );


 let libros = [
    { id: 1, title: "JavaScript: The Good Parts" },
    { id: 2, title: "Clean Code: A Handbook of Agile Software Craftsmanship" },
    { id: 3, title: "Code Complete: A Practical Handbook of Software Construction" },
    { id: 4, title: "Design Patterns: Elements of Reusable Object-Oriented Software" },
    { id: 5, title: "The Pragmatic Programmer: Your Journey to Mastery" },
    { id: 6, title: "Eloquent JavaScript: A Modern Introduction to Programming" },
    { id: 7, title: "You Don't Know JS" },
    { id: 8, title: "Python Crash Course" },
    { id: 9, title: "Learning Python" },
    { id: 10, title: "Java: The Complete Reference" },
    { id: 11, title: "Head First Java" },
    { id: 12, title: "C# in Depth" },
    { id: 13, title: "The Go Programming Language" },
    { id: 14, title: "Programming in Scala" },
    { id: 15, title: "Effective Java" },
    { id: 16, title: "Ruby on Rails Tutorial: Learn Web Development with Rails" },
    { id: 17, title: "Node.js Design Patterns" },
    { id: 18, title: "Angular Up and Running" },
    { id: 19, title: "React: Up and Running" },
    { id: 20, title: "Vue.js: Up and Running" },
    { id: 21, title: "Django for Beginners" },
    { id: 22, title: "Flask Web Development" },
    { id: 23, title: "Full Stack Development with Spring Boot and React" },
    { id: 24, title: "Machine Learning Yearning" },
    { id: 25, title: "Data Science for Business" },
    { id: 26, title: "Artificial Intelligence: A Modern Approach" },
    { id: 27, title: "Introduction to Algorithms" },
    { id: 28, title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design" },
    { id: 29, title: "Domain-Driven Design: Tackling Complexity in the Heart of Software" },
    { id: 30, title: "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation" },
    { id: 31, title: "Refactoring: Improving the Design of Existing Code" },
    { id: 32, title: "The Mythical Man-Month: Essays on Software Engineering" },
    { id: 33, title: "DevOps Handbook" },
    { id: 34, title: "Git Pro" },
    { id: 35, title: "The Docker Book: Containerization is the New Virtualization" },
    { id: 36, title: "Site Reliability Engineering: How Google Runs Production Systems" },
    { id: 37, title: "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win" },
    { id: 38, title: "Accelerate: The Science of Lean Software and DevOps" },
    { id: 39, title: "Code: The Hidden Language of Computer Hardware and Software" },
    { id: 40, title: "The C Programming Language" },
    { id: 41, title: "Effective Python: 90 Specific Ways to Write Better Python" },
    { id: 42, title: "Programming Rust" },
    { id: 43, title: "Rust in Action" },
    { id: 44, title: "Go in Practice" },
    { id: 45, title: "Pro Git" },
    { id: 46, title: "Java Concurrency in Practice" },
    { id: 47, title: "The Rust Programming Language" },
    { id: 48, title: "Java How to Program" },
    { id: 49, title: "Learning JavaScript Design Patterns" },
    { id: 50, title: "Python for Data Analysis" },
    { id: 51, title: "Scala for the Impatient" },
    { id: 52, title: "Vue.js 2 Cookbook" },
    { id: 53, title: "Flask Web Development: Developing Web Applications with Python" },
    { id: 54, title: "Spring in Action" },
    { id: 55, title: "Machine Learning: A Probabilistic Perspective" },
    { id: 56, title: "Data Mining: Concepts and Techniques" },
    { id: 57, title: "The Elements of Statistical Learning: Data Mining, Inference, and Prediction" },
    { id: 58, title: "Pattern Recognition and Machine Learning" }
];

function agregarLibroYDevolverId(libros, nuevoTitulo) {

    let siguienteId = libros.length + 1;

    let nuevoLibro = {
        id: siguienteId,
        title: nuevoTitulo
    };

    libros.push(nuevoLibro);

    return siguienteId;
}

let tituloBuscado = 'Python for Data Analysis';
let idLibro = buscarIdPorTitulo(libros, tituloBuscado);
alert("El ID del libro " + ${tituloBuscado} +" es: " + ${idLibro});

function buscarIdPorTitulo(libros, titulo) {
    
    let libroEncontrado = libros.find(libro => libro.title === titulo);

    return libroEncontrado ? libroEncontrado.id : null;
}