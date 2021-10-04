import {response, Router} from 'express';


const routes = Router();

routes.get('/user', (request, response) => response.json({
    message: "Hello world"
}))


routes.get('/user/nome', (request, response) => {
    const {nome, idade} = request.query
    response.json({
    idade : 35,
    nome: 'Daniel'
    })
})

routes.get('/user/:id/', (request, response) => {
    const {id} = request.params;
    response.json({
    userId: 'Daniel'
    })
})

routes.post('/usuario', (request, response) => {
    const {name, email, password} = request.body
    const user = {
    name: 'Dany',
    email:'daniel@gmail.com',
    password:'xxxxxx'
    }
    return response.json(user);
})

export default routes;