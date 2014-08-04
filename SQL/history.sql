create table IF NOT EXISTS history
(
	id serial,
	data text,
	created_date bigint default extract(epoch from now())::int
)
