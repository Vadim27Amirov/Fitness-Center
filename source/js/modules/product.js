const productBtnBox = document.querySelector('.product__btn-box');
const productBox = document.querySelectorAll('.product__card');
const productBtn = document.querySelectorAll('.product__btn');

const switchProduct = () => {
  productBtnBox.addEventListener('click', (evt) => {
    const currentButton = evt.target.dataset.number;
    if (currentButton) {
      productBox.forEach((el) => el.classList.remove('is-open'));
      const currentList = (document.querySelector(`[data-tab='${currentButton}']`));
      currentList.classList.add('is-open');

      productBtn.forEach((btn) => {
        if (btn.dataset.number === currentButton) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });
    }
  });
};

export {switchProduct};
