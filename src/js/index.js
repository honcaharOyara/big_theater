import 'bootstrap/dist/js/bootstrap.bundle';
import refs from './refs';

refs.navCloseBtn.addEventListener('click', () => {
    setTimeout(() => {
        refs.navbar.removeAttribute('style');
    }, 500)
})