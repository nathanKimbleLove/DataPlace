# Data Place

To run:
  - idk these aren't the most helpful instructions but I'll do my best.
  - I also don't know how to make a .md file look good
  - lol
  - from root
    - cd FlaskServer
    - source bin/activate
    - pip3 install -r requirements
    - flask run
  - from root again
    - cd client
    - npm run dev

API endpoints documentation:
- GET to /test
  <i> ensures that the connection to the api can be established </i>
  - receives data in shape: N/A
  - returns: "testing testing 1 2 3"
- GET to /pg-test
  <i> ensures that the connection to the api and postgres can be established </i>
  - receives data in shape: 
     N/A
  - returns: 
    \[ 
    \[ INT, INT, STR, STR, INT, INT \], 
    \[ . . . \], . . . 
    \]
- POST to /create-table
  <i> creates a new chart </i>
  - receives data in shape: 
    { 
    table_name: STR (not null), 
    data_type_1: STR, 
    data_type_1_units: STR, 
    data_type_2: STR, 
    data_type_2_units: STR 
    }
  - returns:
    { 
    id: INT 
    }
- POST to /create-datum
  <i> creates a new datapoint </i>
  - receives data in shape: 
    { 
    chart_id: INT (not null), 
    name: STR, 
    description: STR, 
    variable_1: INT, 
    variable_2: INT 
    }
  - returns:
    { 
    id: INT 
    }
- GET to /read-chart/\<chart-id\>
  <i> returns all chart info </i>
  - query /read-chart/\<chart-id\>
  - returns: 
    { 
    chart: { 
    id: INT, 
    table_name: STR, 
    data_type_1: STR, 
    data_type_1_units: STR, 
    data_type_2: STR, 
    data_type_2_units: STR 
    }, 
    data-points: \[{ 
    id: INT, 
    chart_id: INT (not null), 
    name: STR, 
    description: STR, 
    variable_1: INT, 
    variable_2: INT 
    }, { . . . }, . . . 
    \] 
    }
