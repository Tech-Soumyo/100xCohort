import { Client } from "pg";

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  //   const client = new Client({
  //     connectionString:
  //       "postgresql://paydb_owner:pqInweC6WQ8t@ep-cold-lab-a5ankp54.us-east-2.aws.neon.tech/paydb?sslmode=require",
  //   });
  const client = new Client({
    connectionString:
      "postgresql://postgres:mysecretpassword@localhost/postgres",
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData("user1", "user6@example.com", "753654");
