import mongoose from "mongoose";

export default {
  name: "dbstats",
  alias: ["databasestats"],
  category: "database",
  tier: "admin",
  cooldown: 30,
  limit: 0,
  description: "Tampilkan statistik koneksi database",
  usage: ".dbstats",
  execute: async (m, { client, sender }) => {
    const status = mongoose.connection.readyState;
    await client.sendMessage(m.key.remoteJid, { text: `Database connection status: ${status}` });
  }
};
