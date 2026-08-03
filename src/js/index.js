const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

        try {
            // Aqui você pode adicionar a lógica para usar o valor do input
            const response = await fetch(`${BASE_URL}/users/${userName}`);

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                return;
            }

            const userData = await response.json();
            console.log(userData); // Apenas para verificar se os dados foram obtidos corretamente

        profileResults.innerHTML = `
        <div class="profile-card">
           <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}"
           class="profile-avatar">
            <div class="profile-info">
               <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada😥.'}</p>
            </div>
        </div>`;


        } catch (error) {
            console.log('Erro ao buscar o perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. por favor, tente novamente mais tarde.');
        }

    } else {
        alert('Por favor, digite o nome do usuário do GitHub');
    }
});

