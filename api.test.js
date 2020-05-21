const apiKey = 'cGFyYWJlbnM6dGFkZXUK';
const testRequest = require('./testUtils');
const baseUrl = `https://software-life.herokuapp.com/api/v1`;

// ROTAS

// Aluno

// POST
test('TP: Incluir um aluno', async () => {

    const response = await testRequest.httpPost(`${baseUrl}/students?apikey=${apiKey}`, {
        name: 'Victor Fernandes dos Santos',
        disciplines: [21]
    });

    expect(JSON.parse(response.body).name)
        .toEqual('victor fernandes dos santos');

});

test('TN: Incluir um aluno', async () => {

    const response = await testRequest.httpPost(`${baseUrl}/students?apikey=${apiKey}`, {
        disciplines: [21]
    });

    expect(JSON.parse(response.body))
        .toEqual({ error: "Missing fields. Please, fill in all required fields" });

});

// GET
test('TP: Obter alunos', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/students?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toBeGreaterThanOrEqual(1);

});

test('TN: Obter alunos', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/students?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toEqual(0);

});

// GET By Id

test('TP: Obter aluno por Id', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/students/183?apikey=${apiKey}`);

    expect(JSON.parse(response.body).name)
        .toEqual('allan cardoso');

});

test('TN: Obter aluno por Id', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/students/1?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toEqual(0);

});

// PUT

test('TP: Alterar um aluno', async () => {

    const response = await testRequest.httpPut(`${baseUrl}/students/2?apikey=${apiKey}`, {
        name: 'Victor Fernandes'
    });

    expect(JSON.parse(response.body).name)
        .toEqual('Victor Fernandes');

});

test('TN: Alterar um aluno', async () => {

    const response = await testRequest.httpPut(`${baseUrl}/students?apikey=${apiKey}`, {
        disciplines: [22]
    });

    expect(JSON.parse(response.body))
        .toEqual({ error: "id was not sent" });

});

// DELETE

test('TP: Deletar um aluno', async () => {

    const response = await testRequest.httpDelete(`${baseUrl}/students/3?apikey=${apiKey}`);

    expect(JSON.parse(response.body).statusCode)
        .toEqual(204);

});

test('TN: Deletar um aluno', async () => {

    const response = await testRequest.httpDelete(`${baseUrl}/students?apikey=${apiKey}`);

    expect(JSON.parse(response.body))
        .toEqual({ error: "id was not sent" });

});

// Professor

// POST
test('TP: Incluir um professor', async () => {

    const response = await testRequest.httpPost(`${baseUrl}/teachers?apikey=${apiKey}`, {
        name: 'Erick Cândido Leite',
        discipline: 54
    });

    expect(JSON.parse(response.body).name)
        .toEqual('Erick Cândido Leite');

});

test('TN: Incluir um professor', async () => {

    const response = await testRequest.httpPost(`${baseUrl}/teachers?apikey=${apiKey}`, {
        discipline: 54
    });

    expect(JSON.parse(response.body))
        .toEqual({ error: "Missing fields. Please, fill in all required fields" });

});

// GET
test('TP: Obter professores', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/teachers?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toBeGreaterThanOrEqual(1);

});

test('TN: Obter professores', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/teachers?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toEqual(0);

});

// GET By Id

test('TP: Obter professor por Id', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/teachers/49?apikey=${apiKey}`);

    expect(JSON.parse(response.body).name)
        .toEqual('Filipe Alexandre');

});

test('TN: Obter professor por Id', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/teachers/1?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toEqual(0);

});

// PUT

test('TP: Alterar um professor', async () => {

    const response = await testRequest.httpPut(`${baseUrl}/teachers/2?apikey=${apiKey}`, {
        name: 'Victor Fernandes'
    });

    expect(JSON.parse(response.body).name)
        .toEqual('Victor Fernandes');

});

test('TN: Alterar um professor', async () => {

    const response = await testRequest.httpPut(`${baseUrl}/teachers?apikey=${apiKey}`, {
        disciplines: [22]
    });

    expect(JSON.parse(response.body))
        .toEqual({ error: "id was not sent" });

});

// DELETE

test('TP: Deletar um professor', async () => {

    const response = await testRequest.httpDelete(`${baseUrl}/teachers/3?apikey=${apiKey}`);

    expect(JSON.parse(response.body).statusCode)
        .toEqual(204);

});

test('TN: Deletar um professor', async () => {

    const response = await testRequest.httpDelete(`${baseUrl}/teachers?apikey=${apiKey}`);

    expect(JSON.parse(response.body))
        .toEqual({ error: "id was not sent" });

});

// Disciplina

// POST
test('TP: Incluir uma disciplina', async () => {

    const response = await testRequest.httpPost(`${baseUrl}/disciplines?apikey=${apiKey}`, {
        name: 'Banco de Dados',
        workload: 80
    });

    expect(JSON.parse(response.body).name)
        .toEqual('Banco de Dados');

});

test('TN: Incluir uma disciplina', async () => {

    const response = await testRequest.httpPost(`${baseUrl}/disciplines?apikey=${apiKey}`, {
        name: 'Banco de Dados'
    });

    expect(JSON.parse(response.body))
        .toEqual({ error: "Missing fields. Please, fill in all required fields" });

});

// GET
test('TP: Obter disciplinas', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/disciplines?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toBeGreaterThanOrEqual(1);

});

test('TN: Obter disciplinas', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/disciplines?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toEqual(0);

});

// GET By Id

test('TP: Obter disciplina por Id', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/disciplines/21?apikey=${apiKey}`);

    expect(JSON.parse(response.body).name)
        .toEqual('Filipe Alexandre');

});

test('TN: Obter disciplina por Id', async () => {

    const response = await testRequest.httpGet(`${baseUrl}/disciplines/1?apikey=${apiKey}`);

    expect(JSON.parse(response.body).length)
        .toEqual(0);

});

// PUT

test('TP: Alterar uma disciplina', async () => {

    const response = await testRequest.httpPut(`${baseUrl}/disciplines/2?apikey=${apiKey}`, {
        name: 'Banco de Dados NoSQL'
    });

    expect(JSON.parse(response.body).name)
        .toEqual('Banco de Dados NoSQL');

});

test('TN: Alterar uma disciplina', async () => {

    const response = await testRequest.httpPut(`${baseUrl}/disciplines?apikey=${apiKey}`, {
        name: 'Banco de Dados NoSQL'
    });

    expect(JSON.parse(response.body))
        .toEqual({ error: "id was not sent" });

});

// DELETE

test('TP: Deletar uma disciplina', async () => {

    const response = await testRequest.httpDelete(`${baseUrl}/disciplines/3?apikey=${apiKey}`);

    expect(JSON.parse(response.body).statusCode)
        .toEqual(204);

});

test('TN: Deletar uma disciplina', async () => {

    const response = await testRequest.httpDelete(`${baseUrl}/disciplines?apikey=${apiKey}`);

    expect(JSON.parse(response.body))
        .toEqual({ error: "id was not sent" });

});