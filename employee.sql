ALTER TABLE employee
DROP COLUMN DepartmentNo

SELECT * FROM employee

ALTER TABLE employee
ADD CONSTRAINT pk_EmpID PRIMARY KEY(EmpNo)

ALTER TABLE employee
ADD COLUMN ManagerId int


ALTER TABLE employee
ADD COLUMN Manager varchar(55)

ALTER TABLE employee
ADD CONSTRAINT fk_managerId
FOREIGN KEY (ManagerId)
REFERENCES employee(EmpNo)

