<template>
    <div class="course-container">
      <h1 class="course-title">Доступні курси</h1>
      <div class="course-list">
        <div
          v-for="(course, index) in courses"
          :key="course.id"
          :class="['course-card', index % 2 === 0 ? 'even' : 'odd']"
        >
          <img :src="course.image" :alt="course.name" class="course-image" />
          <div class="course-details">
            <h2 class="course-name">{{ course.name }}</h2>
            <p class="course-duration">{{ course.duration }}</p>
            <p class="course-description">{{ course.description }}</p>
            <p class="course-price">Ціна: {{ course.price }} грн</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
    return {
        courses: [
          {
              id: 1,
              name: 'Курс з вивчення FRONT END',
              duration: '3 місяці',
              price: 9500,
              description: 'Ти знаєш, що кількість веб-сторінок у мережі Інтернет вже близька до двох мільярдів! Це означає, що попит на Front-end – розробників зростає з кожним днем! Незважаючи на вік, стать та освіту, ти можеш легко опанувати цю професію, адже вона під силу кожному! На курсі Front End Web Development ти навчишся створювати веб-сторінки, використовуючи XML і HTML, оформляти їх за допомогою каскадних таблиць стилів CSS. А наприкінці навчання – створиш власний сайт, який стане одним з перших проектів твого професійного портфоліо.',
              image: 'https://img.freepik.com/premium-vector/front-end-word-concepts-banner-web-applications-programming_106317-84.jpg',
          },
          {
              id: 2,
              name: 'Курс з вивчення BACK END',
              duration: '3.5 місяці',
              price: 12700,
              description: 'Python – проста, популярна та надзвичайно перспективна мова програмування. З її допомогою можна створювати веб-застосунки, відеоігри, займатися аналізом даних, автоматизувати завдання системного адміністрування та багато іншого! Вона працює на всіх популярних платформах: ви можете перенести свої розробки з Windows в Linux або навпаки – і все це без зміни коду. Сьогодні Python є однією із найпопулярніших мов програмування. Ця мова під силу будь-якому початківцеві, саме тому Python – це один з кращих варіантів для знайомства з програмуванням!',
              image: 'https://qph.cf2.quoracdn.net/main-qimg-c02d737b627c8346adddd33fbcfb442e',
          },
          {
              id: 3,
              name: 'Курс з вивчення DEVOPS',
              duration: '3 місяці',
              price: 10200,
              description: 'Курс DevOps Basic – це навчання, що об’єднує вміння розробника і системного адміністратора. DevOps-фахівець працює на стику цих двох посад і займається автоматизацією життєвого циклу застосунку (включно з проектуванням, розробкою, тестуванням, підтримкою і моніторингом). Сьогодні ця посада є перспективною та затребуваною у сфері ІТ, адже є об’єднувальним фактором між розробниками, операціоністами та бізнесом загалом. Ну а там де є попит на працівника через брак кваліфікованих кадрів, є і гідна оплата праці!',
              image: 'https://newline.tech/wp-content/uploads/2023/04/DevOps-Engineer-what-is-it-and-what-do-they-do.png',
          },
          {
              id: 4,
              name: 'Курс з вивчення QA',
              duration: '3 місяці',
              price: 9200,
              description: 'Курс Automation Testing – це ґрунтовна підготовка Test Automation Engineers, які можуть самостійно побудувати систему автоматизованого тестування практично в будь-якому проекті з нуля. Вивчення автоматизованого тестування – це новий тренд в сфері ІТ, адже цей вид тестування має велику кількість переваг у порівнянні з мануальним. Automation Testing – це ефективний спосіб пришвидшити реліз проекту, скоротити бюджет, а також, – це розвиток, що забезпечить більшу зарплату та роботу в цікавих проектах. На курсі ти дізнаєшся, що таке автоматизоване тестування застосунків, розроблених на мові Java, та як застосовувати його у роботі.',
              image: 'https://www.newspostonline.com/wp-content/uploads/2020/03/qa-tester.png',
          },
          {
              id: 5,
              name: 'Курс з вивчення веб-дизайну',
              duration: '2.5 місяці',
              price: 8900,
              description: 'Курс Веб-дизайну - це докладна підготовка для майбутніх веб-дизайнерів, які можуть створити і вдосконалити веб-сайти з нуля. Вивчення веб-дизайну - це важливий тренд у світі веб-розробки та графічного дизайну. Цей курс надає безліч переваг, порівняно з іншими методами розробки веб-інтерфейсів. Веб-дизайн дозволяє швидше створювати інноваційні веб-проекти, реалізовувати креативні ідеї та отримувати високооплачувану роботу над захоплюючими проектами. На цьому курсі ви навчитеся принципам веб-дизайну, використовуючи сучасні інструменти і технології для створення ефективних і красивих веб-сайтів.',
              image: 'https://www.internetacademy.co.in/_assets/img/job-description-and-future-of-web-designer.jpg',
          },
          {
              id: 6,
              name: 'Курс для проджект менеджерів',
              duration: '2 місяці',
              price: 8000,
              description: 'Сформувати команду, зібрати і проаналізувати вимоги до проекту, домовитися зі стейкхолдерами, вкластися в терміни і дотриматись бюджету. Менеджер проекту – той, хто втілює ідею замовника в реальність, тому компанії так дорожать кваліфікованими працівниками. Курс розрахований на новачків і не вимагає технічних знань з програмування чи дизайну. Ти дізнаєшся про найдієвіші інструменти управління проектами, зрозумієш особливості IT-галузі та проживеш життєвий цикл одного проекту.',
              image: 'https://web-dev-goit.s3.eu-north-1.amazonaws.com/app/uploads/2023/03/10224854/project-manager.png',
          },
        ],
    };
    },

};
</script>
  
<style scoped>
.course-container {
  width: 1000px;
  margin: 120px auto 0;
  padding: 0 20px 40px;
  text-align: center;
}
.course-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #169da7;
}
.course-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.course-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex; 
  flex-direction: column;
}
.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}
.course-image {
  width: 1000px;
  height: 450px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.course-details {
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
.course-name {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
.course-duration {
  font-size: 25px;
  color: #555;
  margin-top: 15px;
  text-align: center;
}
.course-description {
  font-size: 20px;
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
}
.course-price {
  font-size: 25px;
  color: #00bcd4;
  margin-top: 15px;
  text-align: center;
}
</style>