const BASE_URL = 'https://api.github.com';

export async function getUserProfile(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);

    if (response.status === 404) {
        throw new Error('Usuário não encontrado. Verifique o nome e tente novamente.');
    }

    if (!response.ok) {
        throw new Error('Não foi possível buscar o perfil. Tente novamente mais tarde.');
    }

    return response.json();
}
