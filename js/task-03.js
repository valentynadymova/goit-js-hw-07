const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const galleryList = document.querySelector('#gallery');

galleryList.classList.add('list');

const listItemsMarkUp = images.map(({ url, alt }) =>
    `<li class="list-item">
    <img class="image" src="${url}" alt="${alt}" /></li>`,).join('');

galleryList.insertAdjacentHTML('beforeend', listItemsMarkUp);



document.querySelector('style').insertAdjacentHTML('beforeend',
  `
.image {
  display: block;
  width: 360px;
  border-radius: 5px;
}
.list {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}
.list-item:not(:last-child) {
  padding-bottom: 10px;
}
`,
);