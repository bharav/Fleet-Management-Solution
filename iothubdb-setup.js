conn = new Mongo();
db = conn.getDB("iothubdb");

db.trucks.remove({});