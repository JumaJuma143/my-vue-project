<template>
    <div class="home-courses">
      <h2 class="section-title">Найпопулярніші курси</h2>
      <div class="course-list">
        <div v-for="course in popularCourses" :key="course.id" class="course-card">
          <img :src="course.photo" :alt="course.name" class="course-image" />
          <div class="course-details">
            <h3 class="course-name">{{ course.name }}</h3>
            <p class="course-duration">{{ course.duration }}</p>
            <p class="course-description">{{ course.description }}</p>
            <p class="course-price">Ціна: {{ course.price }} грн</p>
          </div>
        </div>
      </div>
      <a href="/courses" class="view-all-link">Переглянути всі курси</a>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        popularCourses: [
          {
            id: 1,
            name: 'Курс з вивчення FRONT END',
            duration: '3 місяці',
            price: 9500,
            description: 'Ти знаєш, що кількість веб-сторінок у мережі Інтернет вже близька до двох мільярдів! Це означає, що попит на Front-end – розробників зростає з кожним днем! Незважаючи на вік, стать та освіту, ти можеш легко опанувати цю професію, адже вона під силу кожному! На курсі Front End Web Development ти навчишся створювати веб-сторінки, використовуючи XML і HTML, оформляти їх за допомогою каскадних таблиць стилів CSS. А наприкінці навчання – створиш власний сайт, який стане одним з перших проектів твого професійного портфоліо.',
            photo: 'https://img.freepik.com/premium-vector/front-end-word-concepts-banner-web-applications-programming_106317-84.jpg',
          },
          {
            id: 2,
            name: 'Курс з вивчення BACK END',
            duration: '3.5 місяці',
            price: 12700,
            description: 'Python – проста, популярна та надзвичайно перспективна мова програмування. З її допомогою можна створювати веб-застосунки, відеоігри, займатися аналізом даних, автоматизувати завдання системного адміністрування та багато іншого! Вона працює на всіх популярних платформах: ви можете перенести свої розробки з Windows в Linux або навпаки – і все це без зміни коду. Сьогодні Python є однією із найпопулярніших мов програмування. Ця мова під силу будь-якому початківцеві, саме тому Python – це один з кращих варіантів для знайомства з програмуванням!',
            photo: 'https://qph.cf2.quoracdn.net/main-qimg-c02d737b627c8346adddd33fbcfb442e',
          },
          {
            id: 3,
            name: 'Курс з вивчення DEVOPS',
            duration: '3 місяці',
            price: 10200,
            description: 'Курс DevOps Basic – це навчання, що об’єднує вміння розробника і системного адміністратора. DevOps-фахівець працює на стику цих двох посад і займається автоматизацією життєвого циклу застосунку (включно з проектуванням, розробкою, тестуванням, підтримкою і моніторингом). Сьогодні ця посада є перспективною та затребуваною у сфері ІТ, адже є об’єднувальним фактором між розробниками, операціоністами та бізнесом загалом. Ну а там де є попит на працівника через брак кваліфікованих кадрів, є і гідна оплата праці!',
            photo: 'https://newline.tech/wp-content/uploads/2023/04/DevOps-Engineer-what-is-it-and-what-do-they-do.png',
          },
        ],
      };
    },
  };
</script>
  
<style scoped>
.home-courses {
  padding: 40px 20px;
  text-align: center;
}
.section-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #169da7;
}
.course-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.course-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: left;
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}
.course-image {
  width: 100%;
  height: 250px;
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
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
.course-duration {
  font-size: 18px;
  color: #555;
  margin-top: 10px;
}
.course-description {
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
}
.course-price {
  font-size: 20px;
  color: #00bcd4;
  margin-top: 10px;
}
.view-all-link {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 40px;
  background-color: #007BFF;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 20px;
  transition: background-color 0.3s;
}
.view-all-link:hover {
  background-color: #0056b3;
}
</style>