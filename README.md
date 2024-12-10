![image](https://github.com/user-attachments/assets/358e7709-e986-419e-93ca-00662309f9a8)

 # Somnium.

### dream journal

**Somnium** is latin for dream. This journal is not like any other journal, it is made for dreams!! Dreams are a common part of our life, and journaling dreams can not only make those dreams last a long time but it also helps us with our memory and creativity. Thats why I decided to create Somnium, this helps keep track of my dreams ever night.

### Built Using

**Somnium** is built using these technologies:

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo"  />
  <img width="12" />
  <img src="https://www.svgrepo.com/show/374118/tailwind.svg" height="30" alt="tailwind logo"  />
  <img width="12" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" height="30" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp" height="30" alt="express logo"  />
  <img width="12" />
  <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" height="30" alt="mongodb logo"  />
  <img width="12" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chart.js_logo.svg/1024px-Chart.js_logo.svg.png" height="30" alt="chartjs logo"  />
</div>

## Installation

1. Clone the repository

```
git clone https://github.com/Ayessaaa/Somnium
```

2. Go to the directory

```
cd Somnium
```

3. Install dependecies

```
npm install
```

5. Create your own database on MongoDB Atlas

```
Somnium Project -> Sominum DB
```

6. Create 2 clusters on that database (journals and sleeps)

```
journals
sleeps
```

7. Create a folder names `vars`

8. Create you .env file and paste you DBURI

```
DB_URI=
```

9. Start the Nodemon

```
nodemon app
```


## Features
### Home
![image](https://github.com/user-attachments/assets/4464ab4a-8092-46d4-9116-448600d56195)

**Sleep History** - This is a chart JS graph which shows your 7 day previous sleep hours (This works but breaks sometimes, need updating).

**Did you dream prompt** - This card redirects you to the journal entry page of that date if yes is clicked.

**Dream Count** - This is a chart JS graph that shows the total of your dreams that month (This is not yet working, will work on it next update)

### Journal
![image](https://github.com/user-attachments/assets/a10d0093-1134-4016-98ed-74670b526744)

**Date** - This shows that entry's month, date, and day

**Weather** - This shows the weather of that day (Not yet working)

**Sleep** - This shows the hours and minutes of your sleep and is editable

**Title** - Title of your dream (editable)

**Details** - Details of your dream (editable)

**Submit** - To submit your editted journal

### Calendar
![image](https://github.com/user-attachments/assets/87392bed-53e2-41f3-962a-60009589c1ce)

Every date is clickable and you will be redirected to that journal entry date.
The colored date is the current date.

## Contributing

This repo is open for contributions! Just fork the repository, create a new branch and open a pull request.

## License

This project is licensed under the MIT License.
