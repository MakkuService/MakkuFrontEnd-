import React from 'react';

export default function MainSection() {
  return (
    <section className="section section_main">
      <h2 className="title title_main">
        <span>Благотворительный</span>
        <span>агрегатор для помощи</span>
        <span>бездомным</span>
        <span>животным</span>
      </h2>

      <div className="content">
        <p className="content__paragraph">
          MAKKU предоставляет платформу для приютов,
          где каждая организация может рассказать о
          своих питомцах и потребностях приюта.
        </p>

        <p className="content__paragraph">
          Пользователи MAKKU,в свою очередь, могут
          выбрать себе нового друга из приюта,
          пожертвовать средства нуждающимся питомцам
          или помочь кормом, медикаментами, игрушками.
        </p>

        <p className="content__paragraph">
          Команда проекта MAKKU привлекает к сервису
          спонсорскую помощь от крупных бизнес-ритейлеров,
          чтобы помочь содержать животных в приютах,
          пока они не обретут новый любящий дом.
        </p>
      </div>

    </section>
  );
}
