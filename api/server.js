require('dotenv').config();

const createApp = require('./app.js');

const app = createApp(process.env);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});