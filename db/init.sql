CREATE DATABASE IF NOT EXISTS tienda_perritos;
USE tienda_perritos;
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(10,2)
);
INSERT INTO productos (nombre, precio) VALUES
  ('Collar rojo', 5990),
  ('Pelota de goma', 2990),
  ('Cama para perro', 19990);
-- trigger
-- retry
