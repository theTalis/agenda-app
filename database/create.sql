create schema app;

create table app.person (
	id_person serial primary key,
	name text,
    createdat timestamp,
	phone text,
	email text,
	status integer
);

insert into app.person (id_person, name, createdat, phone, email, status) values (1, 'Martin', '2022-03-01', '47 98888-8888', 'martin@gmail.com', 1);
insert into app.person (id_person, name, createdat, phone, email, status) values (2, 'Lucas', '2022-02-01', '47 98888-8889', 'lucas@hotmail.com', 1);
insert into app.person (id_person, name, createdat, phone, email, status) values (3, 'Bob', '2022-02-10', '47 98888-8887', 'bob@gmail.com', 1);
insert into app.person (id_person, name, createdat, phone, email, status) values (4, 'Rick', '2022-01-30', '47 98888-8886', '', 1);
insert into app.person (id_person, name, createdat, phone, email, status) values (5, 'Maria', '2022-03-20', '47 98888-8885', 'maria@bol.com', 1);
insert into app.person (id_person, name, createdat, phone, email, status) values (6, 'Tom', '2022-02-15', '47 98888-8899', 'tom@marvel.com', 1);

create table app.schedule (
	id_schedule serial primary key,
	date timestamp
);

create table app.schedule_item (
	id_schedule integer,
	id_person integer,
	status integer,
	primary key (id_schedule, id_person)
);
