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
  -- "data_type_3" VARCHAR DEFAULT NULL,
  -- "data_type_3_units" VARCHAR DEFAULT NULL,
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
  -- "name" VARCHAR DEFAULT NULL,
  "variable_1" FLOAT DEFAULT NULL,
  "variable_2" FLOAT DEFAULT NULL,
  -- "variable_3" FLOAT DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE "data_points" ADD FOREIGN KEY (chart_id) REFERENCES "charts" ("id");

-- ---
-- Indexes
-- ---

CREATE INDEX chart_id_index ON  data_points (chart_id);

-- ---
-- Insert default values
-- ---

INSERT INTO charts (table_name, data_type_1, data_type_1_units, data_type_2, data_type_2_units)
VALUES ('Mississippi River Stats Over the Years', 'Year', null, 'Average Flow Rate', 'gal/min'),
('Average Air Travel Stats Each Year', 'Month', null, 'Peak Day', null),
('Dinosaur Data Since 1980', 'Year',null, 'Number of Bones Found', null);

INSERT INTO data_points (chart_id, variable_1, variable_2)
VALUES (1, 2000, 1200),
(1, 2001, 1200),
(1, 2002, 1300),
(1, 2003, 1400),
(1, 2004, 1200),
(1, 2005, 2000),
(1, 2006, 1600),
(1, 2007, 1200),
(1, 2008, 1000),
(1, 2009, 1200),
(1, 2010, 1200),
(2, 1, 2),
(2, 2, 19),
(2, 3, 22),
(2, 4, 28),
(2, 5, 3),
(2, 6, 17),
(2, 7, 17),
(2, 8, 11),
(2, 9, 9),
(2, 10, 17),
(2, 11, 23),
(2, 12, 21),
(3, 1981, 2200),
(3, 1982, 2200),
(3, 1983, 2200);