CREATE TABLE IF NOT EXISTS menu(id INT AUTO_INCREMENT PRIMARY KEY,item_name VARCHAR(100),price DECIMAL(10,2));
CREATE TABLE IF NOT EXISTS orders(id INT AUTO_INCREMENT PRIMARY KEY,customer_name VARCHAR(100),item_name VARCHAR(100),quantity INT,total DECIMAL(10,2));
INSERT INTO menu(item_name,price) VALUES
('Chicken Biryani',250),('Pizza',350),('Burger',150),('Fried Rice',180);
