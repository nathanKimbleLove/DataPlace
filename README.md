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
    &ensp; N/A
  - returns: <br />
    &ensp;\[ <br />
    &ensp;&ensp;\[ INT, INT, STR, STR, INT, INT \], <br />
    &ensp;&ensp;\[ . . . \], . . . <br />
    &ensp;\]
- POST to /create-table
  <i> creates a new chart </i>
  - receives data in shape: <br />
      { <br />
        table_name: STR (not null), <br />
        data_type_1: STR, <br />
        data_type_1_units: STR, <br />
        data_type_2: STR, <br />
        data_type_2_units: STR <br />
      }
  - returns:
      { <br />
        id: INT <br />
      }
- POST to /create-datum
  <i> creates a new datapoint </i>
  - receives data in shape: <br />
      { <br />
        chart_id: INT (not null), <br />
        name: STR, <br />
        description: STR, <br />
        variable_1: INT, <br />
        variable_2: INT <br />
      }
  - returns:
      { <br />
        id: INT <br />
      }
- GET to /read-chart/\<chart-id\>
  <i> returns all chart info </i>
  - query /read-chart/\<chart-id\>
  - returns: <br />
      { <br />
        chart: { <br />
          id: INT, <br />
          table_name: STR, <br />
          data_type_1: STR, <br />
          data_type_1_units: STR, <br />
          data_type_2: STR, <br />
          data_type_2_units: STR <br />
        }, <br />
        data-points: \[{ <br />
          id: INT, <br />
          chart_id: INT (not null), <br />
          name: STR, <br />
          description: STR, <br />
          variable_1: INT, <br />
          variable_2: INT <br />
        }, { . . . }, . . .\] <br />
      }
