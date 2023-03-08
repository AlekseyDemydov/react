import s from "../../StyleBox.module.scss";
import { Copy } from "../../../utils/Test";
import {
  data1,
  data10,
  data11,
  data12,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
} from "./data/P5";
import { HealthyBox } from "../../../utils/HealthyBox";
export const P5 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h2>Разметка текста</h2>
        <br />
        <h3>Абзац</h3>
        <br />
        <p>
          Тег <span className={s.tag}>&lt;p&gt;</span> - универсальный контейнер
          для группировки мелких фразовых элементов, отделения их друг от друга,
          и дальнейшей стилизации. По умолчанию абзац это блочный элемент, то
          есть он начинается с новой строки и имеет вертикальные отступы,
          которые можно будет изменить в CSS.
        </p>
        <br />
        <Copy text={data1} />
        <br />
        <p>
          Часто необходимо заполнить тег текстом-болванкой, когда самого текста,
          который будет размещаться на сайте, ещё нет. Для этого используют
          специальный заполнитель (текст-рыба).
        </p>
        <br />
        <HealthyBox  title={'ВАЖНО'} text={data2} link="" />
        <br />
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-01-headings"
          src="https://codepen.io/goit-academy/embed/mdVZepj?default-tab=html%2Cresult"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <br />
        <br />
        <p>
          Тег <span className={s.tag}>&lt;h1&gt;</span> чаще всего используется
          только один раз, как основной заголовок страницы. Остальные заголовки
          могут использоваться сколько угодно раз, но их всегда следует
          применять правильно, придерживаясь иерархии.
        </p>
        <br />
        <HealthyBox title={'ВАЖНО'} 
          text={`Поисковые системы обращают особое внимание на заголовки, поэтому корректное использование этой группы тегов крайне важно. Не определяйте уровень заголовка по размеру текста на макете. Не весь большой текст - заголовки. Заголовок это то, что по смыслу оглавляет секцию контента.`}
        />
        <br />
        <h2>Списки</h2>
        <br />
        <p>
          Списки позволяют упорядочить коллекции и представить их в наглядном и
          удобном для пользователя виде. Список это контейнер, детьми которого
          могут быть только элементы списка, теги{" "}
          <span className={s.tag}>&lt;li&gt;</span>.
        </p>
        <br />
        <p>
          Тег <span className={s.tag}>&lt;ol&gt;</span> - создаёт нумерованный
          (упорядоченный) список, то есть каждый элемент списка пронумерован.
          Браузер нумерует элементы по порядку автоматически, и если удалить
          один или несколько элементов такого списка, остальные номера будут
          автоматически пересчитаны. Нумерацией элементов можно управлять при
          помощи специальных атрибутов списка.
        </p>
        <br />
        <p>
          Используется для перечисления действий в определенном порядке,
          например рецепт.
        </p>
        <br />
        <Copy text={data3} />
        <br />
        <p>
          Тег <span className={s.tag}>&lt;ul&gt;</span> - создаёт маркированный
          (неупорядоченный) список, каждый элемент которого начинается с
          небольшого символа (маркера). При помощи CSS маркер можно будет убрать
          или заменить.
        </p>
        <br />
        <p>
          Используется для перечисления набора в произвольном порядке, например
          список курортов.
        </p>
        <br />
        <Copy text={data4} />
        <br />
        <HealthyBox  title={'ВАЖНО'} text={data5} />
        <br />
        <h2>Вложенные списки</h2>
        <br />
        <p>
          Сделать многоуровневый список просто - вкладываем в элемент списка еще
          один список. Это часто применяется для создания многоуровневых меню.
        </p>
        <br />
        <Copy text={data6} />
        <br />
        <h2>Ссылка</h2>
        <br />
        <p>
          Тег <span className={s.tag}>&lt;a&gt;</span> - предназначен для
          создания ссылок, текста, при клике по которому переходим на другую
          страницу, скачиваем файл и т. п. Текст ссылки отображается в браузере
          с подчёркиванием, цвет шрифта синий, при наведении на ссылку курсор
          мыши меняет вид.
        </p>
        <br />
        <p>
          Адрес ссылки задается в обязательном атрибуте{" "}
          <span className={s.tag}>&lt;href="адрес"&gt;</span>. Адрес это
          <span className={s.tag}>URL</span>, который может указывать на
          страницу, файл, любой ресурс.
        </p>
        <br />
        <Copy text={data7} />
        <br />
        <h2>
          Атрибуты <span className={s.tag}>target</span> и{" "}
          <span className={s.tag}>rel</span>
        </h2>
        <p className={s.font}>
          По умолчанию ссылка открывается в текущей вкладке браузера. Атрибут{" "}
          <span className={s.tag}>target="значение"</span> определяет то, в
          какой вкладке должен открываться документ, к которому ведёт ссылка.
          При значении <span className={s.tag}>_blank</span> страница
          открывается в новой вкладке браузера.
        </p>

        <p className={s.font}>
          Атрибут <span className={s.tag}>rel</span> дополняет атрибут{" "}
          <span className={s.tag}>href</span> информацией об отношении между
          текущим и связанным документом и используется в паре с{" "}
          <span className={s.tag}>target="_blank"</span>.
        </p>
        <Copy text={data8} />
        <br />
        <h2>
          Атрибут <span className={s.tag}>download</span>
        </h2>
        <br />
        <p>
          Если в <span className={s.tag}>href</span> ссылки указан путь к файлу,
          браузер попытается его открыть в текущем окне, если умеет обрабатывать
          файлы этого типа. Обычно так происходит с изображениями и PDF-файлами.
        </p>
        <br />
        <p>
          Атрибут <span className={s.tag}>download="имя файла"</span> сообщает
          браузеру, что указанный ресурс должен быть не открыт, а загружен в
          момент, когда пользователь кликнет по ссылке. Значение атрибута задаёт
          имя загружаемого файла, то есть можно изменить имя во время загрузки.
          Атрибут можно использовать без указания значения, тогда будет
          использовано имя оригинального файла.
        </p>
        <Copy text={data9} />
        <br />
        <h2>
          Специальные значения <span className={s.tag}>href</span>
        </h2>
        <br />
        <p>
          У ссылок есть возможность не только переходить на другие страницы и
          скачивать файлы, но и совершать звонки на телефоны, отправлять
          сообщения или звонить по скайпу.
        </p>
        <Copy text={data10} />
        <h2>Ссылка-якорь</h2>
        <br />
        <p>
          Ссылка с якорем используется для создания навигации по текущей
          странице. Например, для быстрого перехода к какой-то секции (как в
          этих материалах). При клике по такой ссылке браузер проскролит
          страницу до якоря без её перезагрузки.
        </p>
        <br />
        <p>
          Для создания якоря необходимо добавить тегу, до которого мы хотим
          проскролить страницу, атрибут <span className={s.tag}>id</span> -
          уникальный идентификатор. А атрибуту{" "}
          <span className={s.tag}>href</span> у ссылки задать значение
          начинающееся с символа <span className={s.tag}>#</span>, после
          которого указан идентификатор элемента.
        </p>
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-01-anchor-links"
          src="https://codepen.io/goit-academy/embed/WNrqQzV?default-tab=html%2Cresult"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <h2>Кнопка</h2>

        <p>
          Интерактивный элемент, который оживляется при помощи JavaScript.
          Например, кнопка открытия и закрытия всплывающего окна, переключения
          мобильного меню или отправки формы. Необходимо явно указывать атрибут
          <span className={s.tag}>type</span>. Его значение по умолчанию -{" "}
          <span className={s.tag}>submit</span>, но чаще всего нужно значение
          <span className={s.tag}>button</span>. Да, кнопка типа «кнопка», такая
          особенность.
        </p>
        <Copy text={data11} />
        <HealthyBox  title={'ВАЖНО'}
          text={`Важно не путать ссылку и кнопку. Если при клике в элемент интерфейса происходит переход по какому-то адресу, то есть href, то это ссылка. Если же при клике происходит что-то без перезагрузки или перенаправления страницы, то это гарантированно кнопка.`}
        />
        <br />
        <h2>
          Атрибут <span className={s.tag}>lang</span>
        </h2>
        <p>
          Если на странице есть текст на разных языках, для того, чтобы сделать
          её более доступной для ассистивных технологий, можно задавать атрибут{" "}
          <span className={s.tag}>lang</span> не только всему документу, но и
          отдельным тегам.
        </p>
        <Copy text={data12} />
        <HealthyBox title={'ВНИМАНИЕ'}
          text={`Это возможность, рекомендация, а не обязательное требование. Вёрстка с учётом поддержки ассистивных технологий выполняется только по требованию заказчика.`}
        />
      </div>
    </>
  );
};