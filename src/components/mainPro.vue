<template>
  <section class="homepage-section">
    <div class="content">
      <h1 class="social-text-h1">Навчайтесь з нами та ставайте частиною нашою команди</h1>
      <p class="social-text">Наші соцмережі, щоб приєднатись до нас...</p>
      <div class="social-icons">
        <a href="https://www.facebook.com" target="_blank" class="icon-link">
          <i class="fab fa-facebook-f"></i>
          <span class="social-text">Facebook</span>
        </a>
        <a href="https://twitter.com" target="_blank" class="icon-link">
          <i class="fab fa-twitter"></i>
          <span class="social-text">Twitter</span>
        </a>
      </div>
    </div>
    <div class="image">
      <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg" alt="Main Photo" />
    </div>
  </section>
  <coursesMain />
  <section>
    <div class="about-us">
      <h1 class="about-us-title">Про Нас</h1>
      <img src="https://www.analyticsinsight.net/wp-content/uploads/2023/08/10-Facts-About-Coding-and-programming-languages.jpg" alt="">
      <p class="about-us-description">
        Ми - команда фахівців, які вірять у силу освіти та створюють найкращі умови для вашого навчання. 
        Наша місія - надихати та підтримувати вас на шляху до знань та професійного росту.
        Ми пропонуємо якісні курси з найсучасніших областей інформаційних технологій, де кожен студент 
        має можливість отримати найкращу освіту та розвинути свій потенціал. Наша команда викладачів 
        та спеціалістів готова поділитися своїм досвідом та знаннями, допомагаючи вам досягти 
        професійного успіху. Приєднуйтесь до нас та почніть свій шлях до нових можливостей та досягнень!
      </p>
    </div>
  </section>
  <reviewsMain />
</template>

<script>
import coursesMain from './main/coursesMain.vue';
import reviewsMain from './main/reviewsMain.vue';

export default {
  components: {
    coursesMain,
    reviewsMain
  }
};
</script>

<style scoped>
.about-us {
  margin: 0 auto;
  text-align: center;
}
.about-us-title {
  font-size: 28px;
  color: #169da7;
  font-weight: bold;
}
.about-us-description {
  font-size: 25px;
  width: 850px;
  margin: 20px auto;
}
.homepage-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  padding: 50px;
  background-color: #f2f2f2;
}
.content {
  flex: 1;
}
.content h1 {
  font-size: 36px;
  text-transform: uppercase;
}
.content p {
  font-size: 16px;
}
.social-icons {
  margin-top: 20px;
}
.icon-link {
  display: inline-block;
  margin-right: 20px;
}
.social-text-h1 {
  font-family: 'Roboto', sans-serif; 
  font-size: 16px; 
  color: #169da7;
}
.icon-link img {
  width: 32px;
  height: 32px;
}
.social-icons {
  display: flex;
  flex-direction: column; 
  list-style: none;
  padding: 0;
  width: 160px;
}
.icon-link {
  background-color: #333;
  border-radius: 10px; 
  padding: 10px;
  color: #fff; 
  text-decoration: none;
  transition: background-color 0.3s;
  display: flex;
  align-items: center; 
  margin-bottom: 10px;
}
.icon-link i {
  font-size: 24px;
  margin-right: 10px; 
}
.icon-link:hover {
  background-color: #00bcd4;
}
.social-text {
  font-size: 18px;
  font-family: 'Roboto', sans-serif; 
}
</style>