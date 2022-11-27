import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
  user: "cesarhilario",
  password: "",
  host: "localhost",
  port: 5432,
  database: "clean_arch_example",
  idleTimeoutMillis: 100,
});

export default db;
