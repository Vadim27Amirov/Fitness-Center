const productContent = document.querySelector('.product__content--nojs');
productContent.classList.remove('product__content--nojs');

const productCard = document.querySelectorAll('.product__card--nojs');
productCard.forEach((card) => {
  card.classList.remove('product__card--nojs');
});

document.querySelectorAll('.product__btn').forEach((btn) =>
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    const id = evt.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.product__btn').forEach(
        (child) => child.classList.remove('product__btn--active')
    );
    document.querySelectorAll('.product__card').forEach(
        (child) => child.classList.remove('product__card--active')
    );

    btn.classList.add('product__btn--active');

    document.getElementById(id).classList.add('product__card--active');
  })
);

const product = () => {
  document.querySelector('.product__btn').click();
};

export {product};
