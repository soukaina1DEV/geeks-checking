CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO recipes (title, ingredients, instructions, category)
VALUES (
    'Chocolate Cake',
    'Flour, Sugar, Cocoa, Eggs, Butter',
    'Mix ingredients, bake for 30 min',
    'Dessert'
),
(
    'Caesar Salad',
    'Lettuce, Croutons, Parmesan, Caesar Dressing',
    'Mix all together and serve fresh',
    'Salad'
),
(
    'Spaghetti Bolognese',
    'Spaghetti, Ground Beef, Onion, Garlic, Tomato Sauce, Olive Oil, Salt, Pepper',
    'Cook spaghetti. In another pan, sauté onion and garlic, add beef until browned, then add tomato sauce. Mix with pasta.',
    'Main Course'
),
(
    'Pancakes',
    'Flour, Milk, Eggs, Sugar, Baking Powder, Butter',
    'Mix ingredients, pour batter onto hot pan, cook until bubbles form, flip and cook the other side.',
    'Breakfast'
),
(
    'Greek Salad',
    'Tomatoes, Cucumbers, Red Onion, Feta Cheese, Olives, Olive Oil, Lemon Juice',
    'Chop vegetables, mix with feta and olives, drizzle with olive oil and lemon juice.',
    'Salad'
),
(
    'Apple Pie',
    'Apples, Flour, Sugar, Butter, Cinnamon, Nutmeg',
    'Prepare dough, fill with apple mixture, bake until golden brown.',
    'Dessert'
),
(
    'Chicken Curry',
    'Chicken, Onion, Garlic, Ginger, Curry Powder, Coconut Milk, Tomatoes',
    'Sauté onion, garlic, and ginger. Add chicken and curry powder, stir. Add coconut milk and tomatoes, simmer until cooked.',
    'Main Course'
),
(
    'French Toast',
    'Bread, Eggs, Milk, Sugar, Cinnamon, Butter',
    'Whisk eggs, milk, sugar, and cinnamon. Dip bread slices, fry with butter until golden brown.',
    'Breakfast'
),
(
    'Guacamole',
    'Avocados, Onion, Tomato, Lime, Cilantro, Salt',
    'Mash avocados, mix with chopped onion, tomato, lime juice, cilantro, and salt.',
    'Appetizer'
),
(
    'Margarita Pizza',
    'Pizza Dough, Tomato Sauce, Mozzarella Cheese, Basil, Olive Oil',
    'Spread sauce on dough, add cheese and basil, bake until crust is crispy.',
    'Main Course'
);

ALTER TABLE recipes ADD COLUMN views INT DEFAULT 0;

CREATE TABLE IF NOT EXISTS search_logs (
    id SERIAL PRIMARY KEY,
    query VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


select * from recipes


