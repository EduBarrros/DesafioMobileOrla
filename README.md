# Desafio Mobile - Orla

Este é um projeto desenvolvido como parte do Desafio Mobile para a empresa Orla.

## Descrição

O Desafio Mobile consiste em criar um aplicativo móvel usando React Native para atender aos requisitos específicos fornecidos pela Orla.

### Requisitos:

* A lista de dicas deve ser gerada consumindo a API disponível no site: [API Advice Slip](https://api.adviceslip.com/#endpoint-random)
  
* Ao clicar no botão de adicionar, deve procurar uma dica da API e adicionar um cartão com a mesma.

* Caso a dica já esteja na lista, deve ser mostrado um toast de que a dica já existe.

* A barra de pesquisa deve procurar por dicas que contenham o texto digitado.

* A header deve conter o título do app e um botão para alterar a ordem em que os elementos aparecem na lista.

* Para trabalhar com o visual da página, utilize a biblioteca do Styled Components: [styled-components](https://styled-components.com/)

* Deve ser feito em React Native.

### Opcional:

* Implementar testes unitários.


## Instalação

Siga estas instruções para configurar e executar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/EduBarrros/DesafioMobileOrla.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd DesafioMobileOrla
   ```

3. Instale as dependências usando o Yarn:

   ```bash
   yarn
   ```

   Ou, se preferir usar o npm:

   ```bash
   npm install
   ```

4. Inicie o aplicativo com o Expo:

   ```bash
   expo start
   ```

   Certifique-se de ter o Expo CLI instalado globalmente (`npm install -g expo-cli`).

   Use o aplicativo Expo Go no seu dispositivo móvel ou um emulador para visualizar o aplicativo.

## Testes

Para rodar os testes execute:

* Yarn:

```bash
yarn test
```

* NPM:

```bash
npm test
```
   
---
Desenvolvido por Eduardo Barros - eduardodeoliveirabarros@gmail.com - www.linkedin.com/in/eduardo-de-oliveira-barros-b5a2491b5
