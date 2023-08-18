const hobbies = ['jogar', 'tocar guitarra', 'desenhar'];
hobbies[0] = 'ler livros';
hobbies.push('cozinhar');
hobbies.pop();
hobbies.indexOf('ler livros');
hobbies.splice(1, 1);
console.log(hobbies);
const hobbiesDoAmigo = ['cantar',
'dançar', 'tocar violão'];
const todosOsHobbies =
hobbies.concat(hobbiesDoAmigo);
console.log(todosOsHobbies);
