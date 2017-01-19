# nodejs
Este é um exemplo simples de como é possível colocar uma aplicação node em container, gerando uma imagem para isso.
Basta seguir os passos abaixo para criar um imagem Docker baseada em node:

git clone

cd nodejs

docker buid -t "minhaimagem"

Depois da imagem criada, basta criar o container:

docker run -d minhaimagem

Depois basta acessar a pagina web gerada:

http://IPDOHOST:8080
