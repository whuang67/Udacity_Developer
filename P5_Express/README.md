## Contents
- app1: basic `express` package
- app2: basic `express` package with JS
- app3: `express` package with EJS
- app4: post request
- app5: movie search application

## Code

Please install package `express` before running the applications here. 

```bash
npm init
npm install --save express ejs body-parser request
node app1.js
```

## MongoDB Instructions
*(skip this section and see below for MySQL Instructions if coming from MySQL course)*

- Enter `touch mongodb-org-3.6.repo` into the terminal
- Now open the **mongodb-org-3.6.repo** file in your code editor (select it from the left-hand file menu) and paste the following into it then save the file:

```
[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
```

- Now run the following in your terminal:



```
sudo mv mongodb-org-3.6.repo /etc/yum.repos.d
sudo yum install -y mongodb-org
```
- Close the **mongodb-org-3.6.repo** file and press **Close tab** when prompted
- Now start the mongo daemon with: `sudo service mongod start`
	- This will replace the `./mongod` command from before
- The terminal will return `Starting mongod: [  OK  ]`
- Now open the shell with: `mongo`
- When done working exit with `ctrl + d` and stop the service by entering the following into the terminal: `sudo service mongod stop`
- Test your install by creating a file in **~/environment** named **cats.js** and pasting the following code into the file:

```
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});
```

- Save the file, install mongoose with `npm i mongoose` then run it from the terminal with `node cats.js`
- You should get the following output:

```
{ __v: 0,
  name: 'Snow White',
  age: 15,
  temperament: 'Bland',
  _id: 5a2e9d6ce6352614fd77c181 }
```
- Now use `ctrl + c` to exit node and get back to your bash terminal
- If you want to disable journaling to save disk space then create a file named **mongod.conf** in ~/environment and paste the following code into it:

```
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

# Where and how to store data.
storage:
  dbPath: /var/lib/mongo
  journal:
    enabled: false
#  engine:
#  mmapv1:
#  wiredTiger:

# how the process runs
processManagement:
  fork: true  # fork and run in background
  pidFilePath: /var/run/mongodb/mongod.pid  # location of pidfile
  timeZoneInfo: /usr/share/zoneinfo

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1  # Listen to local interface only, comment to listen on all interfaces.


#security:

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options

#auditLog:

#snmp:
```

- Now save the file and enter `sudo mv mongod.conf /etc/mongod.conf` in the terminal
