CREATE TABLE autor(
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    nacionalidad VARCHAR(50),
)

CREATE TABLE genero(
    id INT PRIMARY KEY,
    nombre VARCHAR(50)
)

CREATE TABLE libro(
    id INT PRIMARY KEY,
    titulo VARCHAR(50),
    autor_id INT,
    genero_id INT,
    data_publication DATE,
    FOREIGN KEY(autor_id) REFERENCES autor(id),
    FOREIGN KEY(genero_id) REFERENCES genero(id)
)

CREATE TABLE persona(
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    emaail VARCHAR(50)
)

CREATE TABLE prestamo( 
    id INT PRIMARY KEY,
    libro_id INT,
    persona_id INT,
    fecha_prestamo DATE,
    fecha_devolucion DATE,
    FOREIGN KEY(libro_id) REFERENCES libro(id),
    FOREIGN KEY(persona_id) REFERENCES persona(id)
)