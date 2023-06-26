<h1 align="center"> Data Place </h1>
<h3 align="center"> A data-entry and chart-display hub </h3> <br>


![init-graph](https://github.com/nathanKimbleLove/DataPlace/assets/115827515/0f1c3b4e-9a78-4f16-ad6b-f29a886db2ec)
![modify](https://github.com/nathanKimbleLove/DataPlace/assets/115827515/2af51cc3-f524-47f7-b9a9-ce0ddc3ec9a2)
![graph-change](https://github.com/nathanKimbleLove/DataPlace/assets/115827515/8b832c87-dffc-41a0-81ec-a2685b862175)


### Built With

- Authorization: 

    <img src="https://user-images.githubusercontent.com/118213399/224507614-d14f07e1-3eaf-407f-afcc-ed4e86c7a573.png" width=30px height=30px> **JSON Web Tokens**
    
- Front End:

    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width=30px height=30px> **React**
  
    <img src="https://github.com/nathanKimbleLove/DataPlace/assets/115827515/40dcae6f-ace2-4a20-ad04-e47d8d3c470b" width=30px height=30px> **Chart.js**
  
   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/chartjs/chartjs.png" width=30px height=30px> **Chart.js**


- Back End:

   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width=30px height=30px> **Python**

   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png" width=30px height=30px> **Flask**
  
   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png" width=30px height=30px> **AWS**

   <img src="https://github.com/nathanKimbleLove/DataPlace/assets/115827515/b02cc3d2-6532-4c63-99ee-a0d79398818b" width=30px height=30px> **RDS**

   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png" width=30px height=30px> **PostgreSQL**


## Features

Here are some of the features of Data Place:

### Chart Creation

The user is able to create a chart that takes in two dimensions of data (e.g. Year and Number of Wins, or Album Number and Number of Sales, etc.). The user can also set what units each dimension will be measured in (e.g. gal/min, kg, etc.).

### Data Point Creation/Deletion/Modification

The user can then insert data points by filling out the form. These points can then be deleted by clicking the trash icon, or modified by editing a/the value(s) and clicking the check icon.

### Data Visualization

The user will then see the data displayed in a dynamic graph. From the drop down menu, the user can choose how they would like their information to be displayed: Scatter Graph, Line Graph, Bar Chart, or Pie Chart.

### Graph Finder

A user can then find a graph they worked on previously by noting the id in the url, and returning to that url (e.g. http://127.0.0.1:5173/chart/4).

### API docs

Click [here](https://docs.google.com/document/d/1zwpWDVITgLHQZDq3KL272EO9QyfHkZ3GXBKNifJJMVc/edit?usp=sharing) to see the API documentation.

## Contributors

Please visit our contributors pages on GitHub:

[Nathan Love](https://github.com/nathanKimbleLove) <br>
[Katy Atchison](https://github.com/katy-atch) <br>


## Build Process

- Clone or download the repo
- PostgreSQL .flaskenv:
    - copy ./FlaskServer/example.flaskenv as ./FlaskServer/.flaskenv
    - fill in each environment variable with your own Postgres credentials, or an AWS RDS instance's Postgres credentials
- From the root repo, in the terminal, run "npm run start"
- Navigate to `http://localhost:5173` to start the app!
