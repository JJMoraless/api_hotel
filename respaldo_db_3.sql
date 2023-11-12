-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: db_api_hotel_3
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `db_api_hotel_3`
--

/*!40000 DROP DATABASE IF EXISTS `db_api_hotel_3`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_api_hotel_3` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `db_api_hotel_3`;

--
-- Table structure for table `assistance`
--

DROP TABLE IF EXISTS `assistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assistance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `login_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `logout_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `assistance_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assistance`
--

LOCK TABLES `assistance` WRITE;
/*!40000 ALTER TABLE `assistance` DISABLE KEYS */;
INSERT INTO `assistance` VALUES (24,14,'2023-11-08 07:06:52','2023-11-08 07:06:55'),(25,14,'2023-11-08 07:06:57','2023-11-08 07:07:09'),(26,14,'2023-11-08 07:07:10','2023-11-08 07:08:54'),(27,14,'2023-11-08 07:09:04',NULL),(28,17,'2023-11-08 21:42:39',NULL),(29,14,'2023-11-08 22:29:26','2023-11-08 22:31:14'),(30,14,'2023-11-09 07:28:30',NULL),(31,14,'2023-11-09 07:28:41','2023-11-09 10:39:47'),(32,14,'2023-11-11 16:31:39','2023-11-11 17:20:54'),(33,14,'2023-11-11 16:31:41','2023-11-11 16:31:46'),(34,14,'2023-11-11 16:31:52','2023-11-11 16:34:08'),(35,19,'2023-11-11 17:35:54',NULL),(36,19,'2023-11-11 18:14:18',NULL),(37,14,'2023-11-11 18:14:23','2023-11-11 18:14:26'),(38,14,'2023-11-11 18:14:30','2023-11-11 18:14:33'),(39,19,'2023-11-11 18:15:27','2023-11-11 21:52:27'),(40,19,'2023-11-11 21:52:29',NULL);
/*!40000 ALTER TABLE `assistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `host`
--

DROP TABLE IF EXISTS `host`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `host` (
  `document` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthday_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `addres` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `number_phone` varchar(255) NOT NULL,
  `occupation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `document_type` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`document`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `host`
--

LOCK TABLES `host` WRITE;
/*!40000 ALTER TABLE `host` DISABLE KEYS */;
INSERT INTO `host` VALUES ('1','pepe','1981-10-30 00:00:00','aaa@gmail.com','asasadawdaw','ciudad','pais','2023-09-17 18:17:53','121212','veterinaria','MisChanguitos','cc'),('10000','pepe','2023-10-17 00:00:00','asss@g1mail.com','asasadawdaw','ciudad','Colombia','2023-10-25 01:40:29','3054260928','aaaa','xxx brazer','cc'),('1005324449','jhon jairo morales garcia',NULL,'jjmorales.dev@gmail.com',NULL,NULL,NULL,'2023-11-08 08:05:07','121219999',NULL,NULL,NULL),('1098793683','brayan crispin ',NULL,'crispin@gmail.com',NULL,NULL,NULL,'2023-10-27 15:18:51','3054260934',NULL,NULL,NULL),('1143115983','pedro jose pastrana marin ',NULL,'ppastrana@sena.edu.co',NULL,NULL,NULL,'2023-10-27 15:13:37','3245895148',NULL,NULL,NULL),('2','Willis','1987-06-13 08:13:27','Casimer_Runolfsdottir@yahoo.com',NULL,'ciudad','pais','2023-09-17 18:17:53','12121212121','Group',NULL,NULL),('2121212','pepe','2001-08-23 00:00:00','3@gmail.com','carrera13','china','aa','2023-09-25 00:48:11','121212','aaaa',NULL,NULL),('23423423423423','pepe','2023-10-17 00:00:00','aasdass@g1mail.com','asasadaw','ciudad','Colombia','2023-10-25 02:20:58','3054260928','aaaa','xxx brazer','cc'),('3','Betty','2004-01-13 21:36:53','Arjun77@hotmail.com',NULL,NULL,NULL,'2023-09-17 18:17:53','121212','Infrastructure',NULL,NULL),('32323','sdsd',NULL,'admin@gmail.com',NULL,NULL,NULL,'2023-10-16 17:35:09','012121212121',NULL,NULL,NULL),('343453','jhon',NULL,'jjmorgar.co@gmail.com',NULL,NULL,NULL,'2023-09-25 02:06:01','4534534',NULL,NULL,NULL),('3534534','xxxxxxx',NULL,'jjmorgar.co@gmail.co',NULL,NULL,NULL,'2023-09-25 02:08:20','2233423',NULL,NULL,NULL),('4','Araceli','1957-09-27 10:18:20','Brooklyn_Weissnat27@gmail.com',NULL,NULL,NULL,'2023-09-17 18:17:53','3','Division',NULL,NULL);
/*!40000 ALTER TABLE `host` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `room_number` int NOT NULL,
  `amount` int DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `room_number` (`room_number`),
  CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`room_number`) REFERENCES `rooms` (`number`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (112,86,501,NULL,'2023-10-28 00:47:39'),(113,87,501,2,'2023-10-28 01:31:30'),(114,88,501,3,'2023-10-28 01:32:15'),(115,89,501,1,'2023-10-28 01:33:26'),(116,90,501,1,'2023-10-28 01:34:32'),(117,91,501,1,'2023-10-28 01:37:05'),(118,86,502,1,'2023-10-28 01:41:02'),(119,87,502,1,'2023-10-28 01:41:04'),(120,88,502,1,'2023-10-28 01:41:05'),(121,92,501,NULL,'2023-10-28 01:59:56'),(122,93,501,NULL,'2023-10-28 02:01:04'),(123,94,501,NULL,'2023-11-12 09:31:46');
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `register_id` int NOT NULL,
  `method` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `register_id` (`register_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`register_id`) REFERENCES `registers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=209 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (178,85,'efectivo',1,'2023-11-07 22:21:05','2023-11-07 22:21:05'),(179,85,'efectivo',0,'2023-11-07 22:37:53','2023-11-07 22:37:53'),(180,85,'efectivo',0,'2023-11-07 23:37:30','2023-11-07 23:37:30'),(181,85,'debito',100,'2023-11-08 07:35:21','2023-11-08 07:35:21'),(182,85,'efectivo',1000,'2023-11-08 10:35:28','2023-11-08 10:35:28'),(183,85,'efectivo',1000,'2023-11-08 10:35:33','2023-11-08 10:35:33'),(184,85,'efectivo',1000,'2023-11-08 10:35:36','2023-11-08 10:35:36'),(185,88,'debito',100,'2023-11-12 09:48:24','2023-11-12 09:48:24'),(186,88,'efectivo',122,'2023-11-12 09:48:53','2023-11-12 09:48:53'),(187,88,'efectivo',122,'2023-11-12 09:48:55','2023-11-12 09:48:55'),(188,88,'efectivo',122,'2023-11-12 10:25:54','2023-11-12 10:25:54'),(189,88,'efectivo',122,'2023-11-12 10:25:59','2023-11-12 10:25:59'),(190,88,'efectivo',122,'2023-11-12 10:25:59','2023-11-12 10:25:59'),(191,88,'efectivo',122,'2023-11-12 10:26:00','2023-11-12 10:26:00'),(192,88,'efectivo',122,'2023-11-12 10:26:00','2023-11-12 10:26:00'),(193,88,'efectivo',122,'2023-11-12 10:26:00','2023-11-12 10:26:00'),(194,88,'efectivo',122,'2023-11-12 10:26:00','2023-11-12 10:26:00'),(195,88,'efectivo',122,'2023-11-12 10:26:01','2023-11-12 10:26:01'),(196,88,'efectivo',122,'2023-11-12 10:26:01','2023-11-12 10:26:01'),(197,88,'efectivo',122,'2023-11-12 10:26:01','2023-11-12 10:26:01'),(198,88,'efectivo',122,'2023-11-12 10:26:01','2023-11-12 10:26:01'),(199,88,'efectivo',122,'2023-11-12 10:26:01','2023-11-12 10:26:01'),(200,88,'efectivo',122,'2023-11-12 10:26:02','2023-11-12 10:26:02'),(201,88,'efectivo',122,'2023-11-12 10:26:02','2023-11-12 10:26:02'),(202,88,'efectivo',122,'2023-11-12 10:26:02','2023-11-12 10:26:02'),(203,88,'efectivo',122,'2023-11-12 10:26:02','2023-11-12 10:26:02'),(204,88,'efectivo',122,'2023-11-12 10:26:02','2023-11-12 10:26:02'),(205,88,'efectivo',122,'2023-11-12 10:26:02','2023-11-12 10:26:02'),(206,88,'efectivo',122,'2023-11-12 10:26:03','2023-11-12 10:26:03'),(207,88,'efectivo',3640,'2023-11-12 10:26:06','2023-11-12 10:26:06'),(208,90,'efectivo',1,'2023-11-12 14:05:49','2023-11-12 14:05:49');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (86,'pepinillo x2','consumable','2023-10-28 00:43:06',1000),(87,'choco cono','consumable','2023-10-28 01:31:29',2001),(88,'almuerzo','consumable','2023-10-28 01:32:11',2000),(89,'desayuno','consumable','2023-10-28 01:33:19',1000),(90,'desayuno xxl','consumable','2023-10-28 01:34:27',30000),(91,'panela xxl','consumable','2023-10-28 01:36:59',1000),(92,'super panela','consumable','2023-10-28 01:50:11',1000),(93,'mega panela','consumable','2023-10-28 02:01:01',100),(94,'Jhon Jairo Morales Garcia','consumable','2023-11-12 09:31:42',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rates`
--

DROP TABLE IF EXISTS `rates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rates`
--

LOCK TABLES `rates` WRITE;
/*!40000 ALTER TABLE `rates` DISABLE KEYS */;
INSERT INTO `rates` VALUES (2,'ejecutivo',10000),(3,'regular',10000);
/*!40000 ALTER TABLE `rates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register_companion`
--

DROP TABLE IF EXISTS `register_companion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register_companion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `register_id` int NOT NULL,
  `companion_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `register_id` (`register_id`),
  KEY `companion_id` (`companion_id`),
  CONSTRAINT `register_companion_ibfk_1` FOREIGN KEY (`register_id`) REFERENCES `registers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `register_companion_ibfk_2` FOREIGN KEY (`companion_id`) REFERENCES `host` (`document`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register_companion`
--

LOCK TABLES `register_companion` WRITE;
/*!40000 ALTER TABLE `register_companion` DISABLE KEYS */;
/*!40000 ALTER TABLE `register_companion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register_product`
--

DROP TABLE IF EXISTS `register_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `register_id` int NOT NULL,
  `product_id` int NOT NULL,
  `amount` int NOT NULL,
  `price` int NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `register_id` (`register_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `register_product_ibfk_1` FOREIGN KEY (`register_id`) REFERENCES `registers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `register_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register_product`
--

LOCK TABLES `register_product` WRITE;
/*!40000 ALTER TABLE `register_product` DISABLE KEYS */;
INSERT INTO `register_product` VALUES (70,85,86,6,1000,'2023-11-07 22:20:17'),(71,85,87,12,2001,'2023-11-07 22:20:18'),(72,85,88,1,2000,'2023-11-07 22:20:19'),(73,85,90,2,10000,'2023-11-07 22:20:20'),(74,86,87,2,2001,'2023-11-08 07:53:17'),(75,86,86,1,1000,'2023-11-08 19:05:08'),(76,88,86,2,1000,'2023-11-11 22:05:54'),(77,88,88,2,2000,'2023-11-11 23:17:35'),(78,88,93,1,100,'2023-11-11 23:21:34'),(79,88,94,2,1,'2023-11-12 09:31:51'),(80,90,86,1,1000,'2023-11-12 14:05:40'),(81,90,87,1,2001,'2023-11-12 14:05:41');
/*!40000 ALTER TABLE `register_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registers`
--

DROP TABLE IF EXISTS `registers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `reservation_id` int NOT NULL,
  `is_check_out` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `travel_reason` varchar(100) DEFAULT NULL,
  `rate_id` int DEFAULT NULL,
  `discount` int DEFAULT '0',
  `regular_price` int DEFAULT NULL,
  `executive_price` int DEFAULT NULL,
  `price_selected` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reservation_id` (`reservation_id`),
  KEY `user_id` (`user_id`),
  KEY `registers_rate_id_foreign_idx` (`rate_id`),
  CONSTRAINT `registers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `registers_ibfk_2` FOREIGN KEY (`reservation_id`) REFERENCES `reservations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `registers_rate_id_foreign_idx` FOREIGN KEY (`rate_id`) REFERENCES `rates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registers`
--

LOCK TABLES `registers` WRITE;
/*!40000 ALTER TABLE `registers` DISABLE KEYS */;
INSERT INTO `registers` VALUES (85,1,338,0,'2023-11-07 22:19:40','2023-11-08 08:21:13','negocios',2,10,10000,10000,'ejecutico'),(86,1,345,0,'2023-11-08 07:40:52','2023-11-08 07:40:52','a',NULL,0,10000,10000,NULL),(87,1,349,0,'2023-11-08 09:04:35','2023-11-08 09:04:35','j',NULL,0,10000,10000,NULL),(88,1,339,0,'2023-11-11 22:05:46','2023-11-12 09:49:22','123',NULL,12,10000,10000,'ejecutico'),(89,1,355,0,'2023-11-12 14:04:32','2023-11-12 14:04:32','asas',NULL,0,10000,10000,NULL),(90,1,356,0,'2023-11-12 14:05:27','2023-11-12 14:05:27','sdsd',NULL,0,10000,10000,NULL);
/*!40000 ALTER TABLE `registers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_number` int NOT NULL,
  `priceRoom` int NOT NULL,
  `user_id` int NOT NULL,
  `host_document` varchar(255) NOT NULL,
  `date_entry` datetime NOT NULL,
  `date_output` datetime NOT NULL,
  `num_childres` int DEFAULT NULL,
  `num_adults` int DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `note` varchar(100) DEFAULT NULL,
  `regular_price` int DEFAULT NULL,
  `executive_price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room_number` (`room_number`),
  KEY `user_id` (`user_id`),
  KEY `host_document` (`host_document`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`room_number`) REFERENCES `rooms` (`number`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reservations_ibfk_3` FOREIGN KEY (`host_document`) REFERENCES `host` (`document`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=362 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (338,501,100,1,'1','2023-11-06 19:00:00','2023-11-10 18:59:00',0,0,'checkIn','2023-11-07 22:19:03','asdasdas',10000,10000),(339,501,100,1,'1','2023-11-10 19:00:00','2023-11-12 18:59:00',0,0,'checkIn','2023-11-08 07:05:03',NULL,10000,10000),(342,501,100,1,'1','2023-11-12 19:00:00','2023-11-14 18:59:00',0,0,'reservada','2023-11-08 07:05:20','wuwuwuu ww',10000,10000),(343,502,893,1,'1','2023-11-12 19:00:00','2023-11-14 18:59:00',0,0,'reservada','2023-11-08 07:05:21',NULL,10000,10000),(344,503,40,1,'1','2023-11-12 19:00:00','2023-11-14 18:59:00',0,0,'reservada','2023-11-08 07:05:22',NULL,10000,10000),(345,502,893,1,'1','2023-11-07 19:00:00','2023-11-10 18:59:00',0,0,'checkIn','2023-11-08 07:37:24',NULL,10000,10000),(348,503,40,1,'1','2023-11-07 19:00:00','2023-11-10 18:59:00',0,0,'reservada','2023-11-08 08:55:53',NULL,10000,10000),(349,501,100,1,'1','2023-11-27 19:00:00','2023-11-30 18:59:00',0,0,'checkIn','2023-11-08 08:57:18','aaa',10000,10000),(350,502,893,1,'1','2023-11-28 19:00:00','2023-11-30 18:59:00',0,1,'reservada','2023-11-09 09:50:44',NULL,10000,10000),(351,501,100,1,'1','2023-11-14 19:00:00','2023-11-16 18:59:00',0,0,'reservada','2023-11-09 09:56:44',NULL,10000,10000),(352,501,100,1,'1','2023-11-16 19:00:00','2023-11-18 18:59:00',0,0,'reservada','2023-11-11 22:22:02',NULL,10000,10000),(353,501,100,1,'1','2023-11-18 19:00:00','2023-11-20 18:59:00',0,0,'reservada','2023-11-11 23:12:02',NULL,10000,10000),(354,501,100,1,'1','2023-11-20 19:00:00','2023-11-24 18:59:00',0,0,'reservada','2023-11-11 23:19:05',NULL,10000,10000),(355,501,100,1,'1','2023-11-24 19:00:00','2023-11-26 18:59:00',0,0,'checkIn','2023-11-12 09:30:03',NULL,10000,10000),(356,502,893,1,'1','2023-11-11 19:00:00','2023-11-12 18:59:00',0,0,'checkIn','2023-11-12 14:05:05',NULL,10000,10000),(357,503,40,1,'1','2023-11-11 19:00:00','2023-11-12 18:59:00',0,0,'reservada','2023-11-12 14:05:06',NULL,10000,10000),(358,502,893,1,'1','2023-11-14 19:00:00','2023-11-16 18:59:00',0,0,'reservada','2023-11-12 14:44:19',NULL,10000,10000),(359,503,40,1,'1','2023-11-14 19:00:00','2023-11-16 18:59:00',0,0,'reservada','2023-11-12 14:44:20',NULL,10000,10000),(360,502,893,1,'1','2023-11-16 19:00:00','2023-11-18 18:59:00',0,0,'reservada','2023-11-12 14:44:36',NULL,10000,10000),(361,503,40,1,'1','2023-11-16 19:00:00','2023-11-18 18:59:00',0,0,'reservada','2023-11-12 14:44:37',NULL,10000,10000);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `number` int NOT NULL,
  `price_per_night` int NOT NULL,
  `floor` int NOT NULL,
  `type` varchar(50) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `description` text NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (501,100,5,'ejecutivo',0,'habitacion tipo ejecutiva muy cara, para genete fufi ','https://picsum.photos/seed/zPnhOHH7k/640/480','2024-09-07 01:02:43'),(502,893,5,'pequeña',0,'Laborum quis eaque. Doloribus dignissimos nisi eveniet nulla animi. Delectus numquam quia soluta inventore asperiores aliquam porro.','https://picsum.photos/seed/1BUx1/640/480','2024-08-24 05:43:39'),(503,40,5,'familiar',1,'Iure unde autem. Aspernatur ullam dicta mollitia voluptate eaque sequi quos nobis aut. Necessitatibus ullam explicabo.','https://loremflickr.com/640/480?lock=473064785575936','2023-11-02 18:55:51');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230911004018-create-user.cjs'),('20230911041426-create-room.cjs'),('20230911141833-create-host.cjs'),('20230913024051-create-reservation.cjs'),('20230917013657-create-register.cjs'),('20230917025139-create-products.cjs'),('20230919132851-create-register-product.cjs'),('20230920162044-create-inventory.cjs'),('20231008211210-create-payment.cjs'),('20231011221338-create-todos.cjs'),('20231019125430-register_companion.cjs'),('20231103020021-create_assistance.cjs'),('20231107014057-create_rate.cjs'),('20231107023544-add_column_rate-id.cjs');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `check` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES (4,'algo para ahacer',0),(5,'algo para ahacer',0),(6,'algo para ahacer',0),(7,'algo para ahacer',0),(8,'algo para ahacer',0),(9,'algo para ahacer',0),(10,'algo para ahacer',0);
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `number_phone` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `addres` varchar(100) NOT NULL,
  `ficha` varchar(40) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `document` varchar(100) DEFAULT NULL,
  `code_reset` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `users_unique_document` (`document`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'aaaaaaaaaaaaa@gmail.com','asasaasasassasasas','aprendiz','$2b$10$iVYAP9vZawfwql13AP5hIeRwllSw1djp9zHV1lON0v/ZqccLU130e','2023-09-11 03:32:37','asasadawdaw','1','rosamelano','Activo','121219999',NULL),(4,'ass@gmail.com','asasaasasassasasas','admin','$2b$10$tlcmR6YRgCvsrr7EK0OMne12EEmK5QzxHVYs7DnZ7.sPrB7hgngRK','2023-09-11 03:34:18','wwwwwwww','1999','aaaaaaaaaaaaa','Inactivo','111111111111',NULL),(6,'232323@gmail.com','asasaasasassasasas','admin','$2b$10$lh/NaWFkR7eNEOr34hKzXu3S2.cdvxUUM4ew3/Ha50zmo4Bf1VNAO','2023-09-11 03:44:48','asasadawdaw','1999','aaaaaaaaaaaaa','Activo','12121212121212121',NULL),(7,'ashjjs@gmail.com','asasaasasassasasas','admin','$2b$10$aXHYgEE4Y.Xt/mcYIcXCVOx735ejnNc3olaFHjgVVk7Q3JeHlU/Ia','2023-09-11 05:40:14','wwwwwwww','1999','aaaaaaaaaaaaa','Activo','111111111',NULL),(8,'00001@1.com','asasaasasassasasas','admin','$2b$10$TJV7xaJEehy/IluSjbvuxu.N8UhWAQFXxzNuytpE4ag1bZDBQCRMK','2023-09-16 21:57:07','asdasda','121231312','pepe','Activo','8889898000909',NULL),(9,'2@1.com','asasaasasassasasas','admin','$2b$10$itA5d/gGlSgldwf5OgSdi.VHqTS5UkknL1z4070gRlGRRsjTJioPa','2023-09-17 04:22:41','asdasda','121231312','pepe','Inactivo','2342342423',NULL),(10,'admin@gmail.com','4534534','aprendiz','$2b$10$0wwNJGyXnQRwl6c3yAoMkepDIbPWGoORIoRBWqeTIJgnS89b/5FQK','2023-10-12 02:36:13','asasa','1212','jhon',NULL,NULL,NULL),(11,'admsasain@gmail.com','4534534','aprendiz','$2b$10$Ey/GxLi1SqSmikigRsB2q.C2MWMOCoKxQIeh2W13IlTz7kfNuqS76','2023-10-12 04:47:04','asasdasda','232323','jhon',NULL,NULL,NULL),(12,'adsasasdamin@gmail.com','4534534','aprendiz','$2b$10$NWxT1TTwiTe9K4WeXVpQq.PYiI5TEf7EW/LvKWPv21NV0K9Ly2HFi','2023-10-12 04:50:21','asasdasda','23232','jhon',NULL,NULL,NULL),(13,'666@gmail.com','23442318','aprendiz','$2b$10$O98S12a4sjjMRW3b9IrDwesSIZhvYOza4S1rRPZLWWcrXfaLgSqSO','2023-10-12 05:11:38','CALLE 27 #2-119','1','jhon',NULL,NULL,NULL),(14,'111@gmail.com','123332','aprendiz','$2b$10$Y8ihiKGniqyOjeA15veKE.P252q3p6WyFxgiWATM7aBxu84yd4VWa','2023-10-20 13:35:25','CALLE 27 #2-119','1234','jhon',NULL,NULL,NULL),(15,'555@gmail.com','2342342','aprendiz','$2b$10$cDoIU0tflWUNTBbEUVjUxe0jjHWqPq2Twk3JfTlE5pWmuR8WKTiaG','2023-10-20 16:31:05','calle 2 xxxx','11111111','jhon',NULL,NULL,NULL),(16,'aasa@1.com','asasaasasassasasas','admin','$2b$10$5eBZO5By5Jiv3sL8sNij2.qvb7fUC7fnjfsmQ9ky5g0pAlC7xgYE6','2023-10-22 18:56:54','asdasda','121231312','pepe','Activo','2323232323',NULL),(17,'000@gmail.com','3423423423','aprendiz','$2b$10$0mWF3QPEqz3PzPJLiqPECOfAM12OLy2.GaU2J2lNYj6z0BVhDTCgO','2023-10-31 13:37:13','asdasdasdas','12312312','pepinillo','active','15023423423',NULL),(18,'jjmorales.dev@gmail.com','3134757734','aprendiz','$2b$10$jUxfXtch4XsdYKzG33EqmOc6R8WBYxsTCm1nrBfEFnRNK8yMnu1tm','2023-11-08 23:04:33','asdasdasdas','11212121','asas','active','123456789',NULL),(19,'jhonmorales0089@gmail.com','122222222','aprendiz','$2b$10$tOKmeO.cXkS8uyJ37d9IMO.mHDi8fsDiWtAmFBKQ3tRWZq7HFrnG.','2023-11-08 23:19:53','asdasdasdas','23234232','aaaa','active','23423423423423',NULL),(20,'bacrispin@misena.edu.co','3054260928','aprendiz','$2b$10$vwJmCSSOwXVKyXTZoGSanOXkyYRvFmlKCe41PMpSjrJ5Fn8KNxzta','2023-11-09 11:15:50','asasadawdaw','23423423423','juancho','active','23131231231',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-12 16:30:43
