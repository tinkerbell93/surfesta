import React from 'react';
import FavoriteButton from '../../atom/main/FavoriteButton';
import DeleteButton from '../../atom/main/DeleteButton';
import SettingButtons from '../../atom/main/SettingButtons';
import { history } from '../../../index';

export default function CardButtons({ event }) {
  const path = history.location.pathname;
  const main = '/';
  const enlisted = '/my/event/enlisted';
  const hosting = '/my/event/hosting';

  return (
    <div className="cardButtons-wrap">
      {path === main && <FavoriteButton event={event} />}
      {path === enlisted && <DeleteButton event={event} />}
      {path === hosting && <SettingButtons />}
    </div>
  );
}
