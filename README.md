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
  - receives data in shape: <br />
    &ensp;&ensp; N/A
  - returns: <br />
    &ensp;&ensp;\[ <br />
    &ensp;&ensp;&ensp;&ensp;\[ INT, INT, STR, STR, INT, INT \], <br />
    &ensp;&ensp;&ensp;&ensp;\[ . . . \], . . . <br />
    &ensp;&ensp;\]
- POST to /create-table
  <i> creates a new chart </i>
  - receives data in shape: <br />
    &ensp;&ensp;{ <br />
    &ensp;&ensp;&ensp;&ensp;table_name: STR (not null), <br />
    &ensp;&ensp;&ensp;&ensp;data_type_1: STR, <br />
    &ensp;&ensp;&ensp;&ensp;data_type_1_units: STR, <br />
    &ensp;&ensp;&ensp;&ensp;data_type_2: STR, <br />
    &ensp;&ensp;&ensp;&ensp;data_type_2_units: STR <br />
    &ensp;}
  - returns:
    &ensp;&ensp;{ <br />
    &ensp;&ensp;&ensp;&ensp;id: INT <br />
    &ensp;&ensp;}
- POST to /create-datum
  <i> creates a new datapoint </i>
  - receives data in shape: <br />
    &ensp;&ensp;{ <br />
    &ensp;&ensp;&ensp;&ensp;chart_id: INT (not null), <br />
    &ensp;&ensp;&ensp;&ensp;name: STR, <br />
    &ensp;&ensp;&ensp;&ensp;description: STR, <br />
    &ensp;&ensp;&ensp;&ensp;variable_1: INT, <br />
    &ensp;&ensp;&ensp;&ensp;variable_2: INT <br />
    &ensp;&ensp;}
  - returns:
    &ensp;&ensp;{ <br />
    &ensp;&ensp;&ensp;&ensp;id: INT <br />
    &ensp;&ensp;}
- GET to /read-chart/\<chart-id\>
  <i> returns all chart info </i>
  - query /read-chart/\<chart-id\>
  - returns: <br />
    &ensp;&ensp;{ <br />
    &ensp;&ensp;&ensp;&ensp;chart: { <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;id: INT, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;table_name: STR, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;data_type_1: STR, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;data_type_1_units: STR, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;data_type_2: STR, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;data_type_2_units: STR <br />
    &ensp;&ensp;&ensp;&ensp;}, <br />
    &ensp;&ensp;&ensp;&ensp;data-points: \[{ <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;id: INT, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;chart_id: INT (not null), <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;name: STR, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;description: STR, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;variable_1: INT, <br />
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;variable_2: INT <br />
    &ensp;&ensp;&ensp;&ensp;}, { . . . }, . . . <br />
    &ensp;&ensp;&ensp;&ensp;\] <br />
    &ensp;&ensp;}
