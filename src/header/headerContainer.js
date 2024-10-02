const headerData = {
  image: './assets/top.png',
  shop: { link: '/', text: 'shop' },
  mission: { link: '/', text: 'mission' },
  logoLink: '/',
};

export default function createHeaderContainer() {
  const headerContainer = document.getElementById('headerContainer');
  headerContainer.className = 'header';

  //   create hamburger link
  const hamburger = document.createElement('a');
  hamburger.href = '/';

  //   working with image
  const hamburgerImage = document.createElement('img');
  hamburgerImage.src = headerData.image;
  hamburgerImage.alt = 'menu';
  hamburgerImage.className = 'header__hamburger';

  // create navbar for bigger screen sizes
  const navbar = document.createElement('nav');
  navbar.className = 'header__navbar';

  const shoppingLink = document.createElement('a');
  shoppingLink.className = 'header__navbarLink';
  shoppingLink.href = headerData.shoppingLink;
  shoppingLink.innerText = headerData.shop.text;

  const missionLink = document.createElement('a');
  missionLink.className = 'header__navbarLink';
  missionLink.href = headerData.missionLink;
  missionLink.innerText = headerData.mission.text;

  const logoLink = document.createElement('a');
  logoLink.className = 'header__logo';
  logoLink.href = headerData.logoLink;
  logoLink.innerText = 'LOGO';

  hamburger.appendChild(hamburgerImage);
  headerContainer.appendChild(hamburger);
  headerContainer.appendChild(navbar);
  headerContainer.appendChild(logoLink);
  navbar.appendChild(shoppingLink);
  navbar.appendChild(missionLink);
}
