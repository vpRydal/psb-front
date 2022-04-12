import React, { FC } from "react";

import css from './Info.module.scss'

interface IProps {

}
const Info: FC<IProps> = () => {

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Заголовок</h1>
      <h2 className={css.subtitle}>Подзаголовок</h2>
    </div>
  )
}

export default Info;
