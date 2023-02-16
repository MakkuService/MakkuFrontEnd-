import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import useUser from '../../../hook/useUser';
import Paths from '../../../utils/paths';

import { setCredentials } from '../../../store';

export default function Navigation({ menu }) {
  const userData = useUser();
  const dispatch = useDispatch();

  const onClickSignOut = async () => {
    localStorage.removeItem('mkk-jwt');
    await dispatch(setCredentials(null));
  }; 

  return (
    <ul className={`navigation ${menu.style}`}>
      {menu.links.map((link, index) => (
        <li key={index}>
          <NavLink className={`links__item ${link.style}`} to={link.url}>
            {link.label}
          </NavLink>
        </li>
      ))}
      {!userData
        ? <>
            <li>
              <NavLink className={`links__item`} to={Paths.SIGN.IN}>
                Вход
              </NavLink>
            </li>
            <li>
              <NavLink className={`links__item`} to={Paths.SIGN.UP}>
                Регистрация
              </NavLink>
            </li>
          </>
        :
        <>
          <li>
            <NavLink className={`links__item`} to={Paths.PROFILE}>
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`links__item`}
              onClick={onClickSignOut}
              to={Paths.MAIN}
            >
              Выйти
            </NavLink>
          </li>
          </>
      }
    </ul>
  );
}
