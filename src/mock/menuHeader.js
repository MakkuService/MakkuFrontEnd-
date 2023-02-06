import Paths from '../utils/paths';

const menuHeader = {
  style: 'links_header',
  links: [
    {
      style: '',
      label: 'Найти питомца',
      url: Paths.FIND.PETS,
    },
    {
      style: '',
      label: 'Найти приют',
      url: Paths.FIND.SHELTERS,
    },
    {
      style: '',
      label: 'Информация о приютах',
      url: Paths.INFO,
    },
    {
      style: '',
      label: 'Войти',
      url: Paths.SIGN.IN,
    },
    {
      style: '',
      label: 'Регистрация',
      url: Paths.SIGN.UP,
    },
  ],
};

export default menuHeader;
