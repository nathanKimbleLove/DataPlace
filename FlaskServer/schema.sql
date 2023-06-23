-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'charts'
--
-- ---

DROP TABLE IF EXISTS "charts" CASCADE;

CREATE TABLE IF NOT EXISTS charts (
  "id" SERIAL NOT NULL,
  "table_name" VARCHAR NOT NULL DEFAULT NULL,
  "data_type_1" VARCHAR DEFAULT NULL,
  "data_type_1_units" VARCHAR DEFAULT NULL,
  "data_type_2" VARCHAR DEFAULT NULL,
  "data_type_2_units" VARCHAR DEFAULT NULL,
  "data_type_3" VARCHAR DEFAULT NULL,
  "data_type_3_units" VARCHAR DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'data_points'
--
-- ---

DROP TABLE IF EXISTS "data_points";

CREATE TABLE IF NOT EXISTS data_points (
  "id" SERIAL NOT NULL,
  "chart_id" INTEGER NOT NULL DEFAULT NULL,
  "name" VARCHAR DEFAULT NULL,
  "description" VARCHAR NULL DEFAULT NULL,
  "variable_1" FLOAT DEFAULT NULL,
  "variable_2" FLOAT DEFAULT NULL,
  "variable_3" FLOAT DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE "data_points" ADD FOREIGN KEY (chart_id) REFERENCES "charts" ("id");

INSERT INTO charts (table_name, data_type_1, data_type_1_units, data_type_2, data_type_2_units, data_type_3, data_type_3_units)
VALUES ('Mississippi River Stats Over the Years', 'Year', null, 'Average Flow Rate', 'gal/min', 'Maximum Depth', 'm'),
('Average Air Travel Stats Each Year', 'Month', null, 'Peak Day', null, 'Passengers', 'Million'),
('Dinosaur Data Since 1980', 'Year',null, 'Number of Bones Found', null, 'Value of Findings', '$');

INSERT INTO data_points (chart_id, name, description, variable_1, variable_2, variable_3)
VALUES (1, 'first input', null, 2000, 1200, 40),
(1, 'first input', null, 2001, 1200, 42),
(1, 'second input', null, 2002, 1300, 43),
(1, 'third input', null, 2003, 1400, 44),
(1, 'fouth input', null, 2004, 1200, 46),
(1, 'fifth input', 'Katrina hit', 2005, 2000, 58),
(1, null, null, 2006, 1600, 50),
(1, null, null, 2007, 1200, 40),
(1, null, null, 2008, 1000, 43),
(1, null, null, 2009, 1200, 43),
(1, null, null, 2010, 1200, 43),
(2, 'January', 'January', 1, 2, 40),
(2, 'February', 'February', 2, 19, 40),
(2, 'March', 'March', 3, 22, 40),
(2, 'April', 'April', 4, 28, 40),
(2, 'May', 'May', 5, 3, 40),
(2, 'June', 'June', 6, 17, 40),
(2, 'July', 'July', 7, 17, 40),
(2, 'August', 'August', 8, 11, 40),
(2, 'September', 'September', 9, 9, 40),
(2, 'October', 'October', 10, 17, 40),
(2, 'November', 'November', 11, 23, 40),
(2, 'December', 'December', 12, 21, 40),
(3, null, null, 1981, 2200, 40),
(3, null, null, 1982, 2200, 40),
(3, null, null, 1983, 2200, 40);