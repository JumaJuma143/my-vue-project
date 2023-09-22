<template>
  <div class="teachers-page">
    <h1 class="page-title">Наші викладачі</h1>
    <div class="teachers-list">
      <div v-for="teacher in teachers" :key="teacher.id" class="teacher-card">
        <div class="teacher-photo-container">
          <img :src="teacher.photo" :alt="teacher.name" class="teacher-photo" />
        </div>
        <h2 class="teacher-name">{{ teacher.name }}</h2>
        <p class="teacher-experience">{{ teacher.experience }}</p>
        <p class="teacher-teaches">Викладає: {{ teacher.teaches }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        teachers: [
          {
            id: 1,
            name: 'Михайло Шевченко',
            experience: '8 років досвіду',
            teaches: 'Курс фронтенду та бекенду',
            photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
          },
          {
            id: 2,
            name: 'Олексій Манздюк',
            experience: '7 років досвіду',
            teaches: 'Курс бекенду та девопсу',
            photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
          },
          {
            id: 3,
            name: 'Наталія Дрогомирецька',
            experience: '6 років досвіду',
            teaches: 'Курс тестування та девопсу',
            photo: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B',
          },
          {
            id: 4,
            name: 'Іванна Савчук',
            experience: '5 років досвіду',
            teaches: 'Курс для веб-дизайнерів',
            photo: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
          },
          {
            id: 5,
            name: 'Володимир Бойчик',
            experience: '9 років досвіду',
            teaches: 'Курс тестування',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg',
          },
          {
            id: 6,
            name: 'Андрій Лопатенко',
            experience: '10 років досвіду',
            teaches: 'Курс для проджект менеджерів',
            photo: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
          },
          {
            id: 7,
            name: 'Ольга Луцька',
            experience: '3 роки досвіду',
            teaches: 'Курс фронтенду',
            photo: 'https://architecture.ou.edu/wp-content/uploads/2018/07/ANGELAPERSON-1447-300x300.jpg',
          },
        ],
      };
    },
  };
</script>
  
<style scoped>
.teachers-page {
  margin-top: 120px;
}
.page-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #169da7;
  text-align: center;
}
.teachers-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.teacher-card {
  width: calc(33.33% - 20px);
  border: 1px solid #ccc;
  margin: 20px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}
.teacher-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.teacher-photo-container {
  border-radius: 15px 15px 0 0;
  overflow: hidden; 
}
.teacher-photo {
  width: 100%;
  height: 400px; 
  object-fit: cover;
  object-position: center 25%;
}
.teacher-name {
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
}
.teacher-experience {
  font-style: italic;
  font-size: 18px;
  color: #666;
  margin-bottom: 5px;
}
.teacher-teaches {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}
</style>
