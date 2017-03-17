var host =  process.env.RDS_HOSTNAME || 'localhost';
var user =  process.env.RDS_USERNAME || 'root';
var password = process.env.RDS_PASSWORD || '1234';
var port = process.env.RDS_PORT || '3306';
var path = require('path');


var knex = require('knex')({
  client: 'mysql',
  connection: {
    host,
    user,
    password,
    port,
    database: 'smartfolio'
  }
});
module.exports = knex;

// create database smartfolio;
// use smartfolio;


// CREATE TABLE `smartfolio`.`users` (
//   `idusers` INT NOT NULL AUTO_INCREMENT,
//   `username` VARCHAR(45) NOT NULL,
//   `password` TEXT NOT NULL,
//   PRIMARY KEY (`idusers`),
//   UNIQUE INDEX `username_UNIQUE` (`username` ASC));

// CREATE TABLE `smartfolio`.`images` (
//   `idimages` INT NOT NULL AUTO_INCREMENT,
//   `imgname` TEXT NOT NULL,
//   `imghash` TEXT NOT NULL,
//   `description` LONGTEXT NULL,
//   `albumname` TEXT NULL,
//   `backimgname` TEXT NOT NULL,
//   `backimghash` TEXT NOT NULL,
//   `userid` INT NOT NULL,
//   PRIMARY KEY (`idimages`));
//
//  CREATE TABLE `smartfolio`.`tags` (
//    `id` INT NOT NULL AUTO_INCREMENT,
//    `idimages` INT NULL,
//    `tag` TEXT NULL,
//     PRIMARY KEY (`id`));
//
//   ALTER TABLE `smartfolio`.`images`
// ADD INDEX `iduser_idx` (`userid` ASC);
// ALTER TABLE `smartfolio`.`images`
// ADD CONSTRAINT `iduser`
//   FOREIGN KEY (`userid`)
//   REFERENCES `smartfolio`.`users` (`idusers`)
//   ON DELETE NO ACTION
//   ON UPDATE NO ACTION;

// CREATE TABLE `albums` (
//   `idalbums` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `name` longtext,
//   `description` longtext,
//   `userid` int(11) DEFAULT NULL,
//   PRIMARY KEY (`idalbums`),
//   KEY `userid` (`userid`),
//   CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `users` (`idusers`)
// ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

// CREATE TABLE `albumsImages` (
//   `idalbumsImages` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `imageId` int(11) DEFAULT NULL,
//   `albumId` int(11) unsigned DEFAULT NULL,
//   PRIMARY KEY (`idalbumsImages`),
//   KEY `imageId` (`imageId`),
//   KEY `albumId` (`albumId`),
//   CONSTRAINT `albumId` FOREIGN KEY (`albumId`) REFERENCES `albums` (`idalbums`) ON DELETE NO ACTION ON UPDATE NO ACTION,
//   CONSTRAINT `imageId` FOREIGN KEY (`imageId`) REFERENCES `images` (`idimages`) ON DELETE NO ACTION ON UPDATE NO ACTION
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;




// CREATE TABLE `smartfolio`.`shared` (
//   `idshared` INT UNSIGNED NOT NULL AUTO_INCREMENT,
//   `ownerid` INT(11) NULL,
//   `albumid` INT(10) UNSIGNED NULL,
//   `shareUserid` INT(11) NULL,
//   `permission` TEXT NULL,
//   PRIMARY KEY (`idshared`),
//   INDEX `idusers_idx` (`ownerid` ASC),
//   INDEX `idalbums_idx` (`albumid` ASC),
//   CONSTRAINT `idusers`
//     FOREIGN KEY (`ownerid`)
//     REFERENCES `smartfolio`.`users` (`idusers`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION,
//   CONSTRAINT `idalbums`
//     FOREIGN KEY (`albumid`)
//     REFERENCES `smartfolio`.`albums` (`idalbums`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION);
