import { Client } from "pg";

// Manually
// const client = new Client({
//   host: "my.database-server.com",
//   port: 5334,
//   database: "database-name",
//   user: "database-user",
//   password: "secretpassword!!",
// });

// NeonDb
// const client = new Client({
//   connectionString:
//     "postgresql://paydb_owner:pqInweC6WQ8t@ep-cold-lab-a5ankp54.us-east-2.aws.neon.tech/paydb?sslmode=require",
// });
// client.connect();

// docker
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

createUsersTable();
