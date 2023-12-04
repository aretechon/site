
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vagas.com</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="verde"></div>
    <div class="azul">
        <div class="laranja">
            <form method="POST" action="send.php" onsubmit="return check_form()">
                <label>Nome: </label><input type="text" maxlength="40" name="nome" id="nome"><BR>
                <label>Telefone: </label><input type="number" maxlength="12" name="telefone" id="telefone" placeholder="11999999998"><BR>
                <label>Data de Nascimento:</label><input type="date" name="dtNascimento" id="dataNascimento"><BR>
                <label>Gênero: </label><BR>
                    <input type="radio" name="genero" value="Masculino" id="rGenero1"><label> Masculino</label>
                    <input type="radio" name="genero" value="Feminino" id="rGenero2"><label> Feminino</label>
                    <input type="radio" name="genero" value="Outro" id="rGenero3"><label> Outro</label><BR>
                <label>Endereço Completo: </label>
                <input type="text" maxlength="200" name="enderecoCompleto" id="address"><BR>
                <label>Escolha a vaga a se candidatar </label>
                <select name="vaga" id="vaga">
                    <option value="0" selected>Faça sua escolha</option>
                    <option value="1420">Programador Front-End</option>
                    <option value="1580">Programador Back-End</option>
                    <option value="2140">Cientista de Dados</option>
                    <option value="3247">Design UX/UI</option>
                </select><BR>
                <input type="submit" value="Enviar" id="form_button">
            </form>
        </div>
        <div class="rosa">
            <div class="marrom"></div>
            <div class="azul_cinza"></div>
            <div class="violeta"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>