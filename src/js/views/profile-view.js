const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

export function getSearchTerm() {
    return inputSearch.value.trim();
}

export function onSearch(callback) {
    btnSearch.addEventListener('click', callback);
    inputSearch.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') callback();
    });
}

export function renderLoading() {
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function renderProfile(user) {
    profileResults.replaceChildren(createProfileCard(user), createCounters(user));
}

export function renderError(message) {
    profileResults.replaceChildren();
    alert(message);
}

function createProfileCard(user) {
    const card = createElement('div', 'profile-card');
    const avatar = document.createElement('img');
    const info = createElement('div', 'profile-info');

    avatar.src = user.avatar_url;
    avatar.alt = `Avatar de ${user.name || user.login}`;
    avatar.className = 'profile-avatar';

    info.append(
        createElement('h2', '', user.name || user.login),
        createElement('p', '', user.bio || 'Não possui bio cadastrada 😥.'),
    );
    card.append(avatar, info);

    return card;
}

function createCounters(user) {
    const counters = createElement('div', 'profile-counters');

    counters.append(
        createCounter('followers', '👥 Seguidores', user.followers),
        createCounter('following', '👥 Seguindo', user.following),
    );

    return counters;
}

function createCounter(className, label, value) {
    const counter = createElement('div', className);
    counter.append(
        createElement('h4', '', label),
        createElement('span', '', String(value)),
    );
    return counter;
}

function createElement(tagName, className, text = '') {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    return element;
}
