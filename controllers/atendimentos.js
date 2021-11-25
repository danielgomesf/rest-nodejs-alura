
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('servidor rodando') )

    app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    res.send('teste')
    })
}