const express = require('express');
const sequelize = require('./database');
const User = require('./models/User');
const Product = require('./models/Product');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully!');
        
        await sequelize.sync({ alter: true });
        console.log('Models synchronized successfully!');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

startServer();