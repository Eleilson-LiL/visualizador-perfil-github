import { getUserProfile } from './services/github-api.js';
import {
    getSearchTerm,
    onSearch,
    renderError,
    renderLoading,
    renderProfile,
} from './views/profile-view.js';

async function searchProfile() {
    const userName = getSearchTerm();

    if (!userName) {
        renderError('Por favor, digite o nome do usuário do GitHub.');
        return;
    }

    renderLoading();

    try {
        const user = await getUserProfile(userName);
        renderProfile(user);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        renderError(error.message);
    }
}

onSearch(searchProfile);
