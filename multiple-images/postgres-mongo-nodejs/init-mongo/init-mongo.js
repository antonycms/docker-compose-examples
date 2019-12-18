db.createUser({
  user: "myuser",
  pwd: "mypass",
  roles: [
    {
      role: "readWrite",
      db: "mydatabase"
    }
  ]
})

db.myschema.insert({
  key: "value"
});
