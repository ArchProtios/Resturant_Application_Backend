import app from './app'

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT} port`);
})