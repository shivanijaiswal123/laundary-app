-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 16, 2020 at 12:25 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laundry`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `mobile_no` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address_1` varchar(255) NOT NULL,
  `address_2` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `admin_type` enum('admin','collection_boy','supervisor') NOT NULL COMMENT '''admin'',''collection_boy'',''supervisor''',
  `attribute_1` varchar(255) DEFAULT NULL,
  `attribute_2` varchar(255) DEFAULT NULL,
  `attribute_3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `mobile_no`, `password`, `name`, `address_1`, `address_2`, `city`, `admin_type`, `attribute_1`, `attribute_2`, `attribute_3`) VALUES
(6, '7506542216', '$2a$10$NtJ.Z3X3H3a4U4XLzagHFedJzY1jGDmOOhvRnVFVjrp/TDEjI9ij.', 'OM', 'Mulund Colony', 'Mulund East', 'Mumbai', 'admin', NULL, NULL, NULL),
(7, '7506542210', '$2a$10$lHWtOf03MWqYifaO19.zJ.dcMzxnZhz.FnoJzkUEwLVwtiTwmz0gy', 'samyak', 'Mulund Colony', 'Mulund East', 'Mumbai', 'collection_boy', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `centre`
--

CREATE TABLE `centre` (
  `centre_id` int(11) NOT NULL,
  `centre_name` varchar(255) NOT NULL,
  `centre_pincode` varchar(255) NOT NULL,
  `attribute_1` varchar(255) DEFAULT NULL,
  `attribute_2` varchar(255) DEFAULT NULL,
  `attribute_3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `centre`
--

INSERT INTO `centre` (`centre_id`, `centre_name`, `centre_pincode`, `attribute_1`, `attribute_2`, `attribute_3`) VALUES
(1, 'Bhandup West', '400042', NULL, NULL, NULL),
(2, 'Mulund East', '400078', NULL, NULL, NULL),
(3, 'Bhandup East', '400042', NULL, NULL, NULL),
(4, 'Bhandup', '400042', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cloth_type`
--

CREATE TABLE `cloth_type` (
  `cloth_type_id` int(30) NOT NULL,
  `cloth_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cloth_type`
--

INSERT INTO `cloth_type` (`cloth_type_id`, `cloth_type`) VALUES
(1, 'Shirt'),
(2, 'Jeans'),
(3, 'Top'),
(4, 'Saree'),
(5, 'Woolens'),
(6, 'Suit'),
(7, 'Polo shirt'),
(8, 'Formal shirt');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` varchar(255) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `society_id` int(11) NOT NULL,
  `wings_id` int(11) NOT NULL,
  `flat_no` int(11) NOT NULL,
  `phone` varchar(22) NOT NULL,
  `attr1` varchar(255) DEFAULT NULL,
  `attr2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `society_id`, `wings_id`, `flat_no`, `phone`, `attr1`, `attr2`) VALUES
('1', 'Satyam', 2, 3, 10, '9898989898', NULL, NULL),
('2', 'Samyak', 2, 3, 11, '9898989898', NULL, NULL),
('3', 'Sam', 2, 3, 11, '9898989898', NULL, NULL),
('4', 'bunty', 2, 3, 1, '9898989898', NULL, NULL),
('5', 'yala', 1, 2, 12, '9898989898', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer_prefrence`
--

CREATE TABLE `customer_prefrence` (
  `customer_id` int(11) NOT NULL,
  `time_from` time(6) DEFAULT NULL,
  `time_to` time(6) DEFAULT NULL,
  `attr1` varchar(255) DEFAULT NULL,
  `attr2` varchar(255) DEFAULT NULL,
  `attr3` varchar(255) DEFAULT NULL,
  `attr4` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `help`
--

CREATE TABLE `help` (
  `help_id` int(11) NOT NULL,
  `customerid` int(11) NOT NULL,
  `helptype` int(11) DEFAULT NULL,
  `helpbrief` varchar(255) NOT NULL,
  `attribute_1` int(255) DEFAULT NULL,
  `attribute_2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `help`
--

INSERT INTO `help` (`help_id`, `customerid`, `helptype`, `helpbrief`, `attribute_1`, `attribute_2`) VALUES
(1, 1, NULL, ' I want a help regarding clothes', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mapping_collectionboy`
--

CREATE TABLE `mapping_collectionboy` (
  `map_coll_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `centre_id` int(11) NOT NULL,
  `date_from` datetime NOT NULL DEFAULT current_timestamp(),
  `date_to` date NOT NULL,
  `attribute_1` varchar(255) DEFAULT NULL,
  `attribute_2` varchar(255) DEFAULT NULL,
  `attribute_3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mapping_collectionboy`
--

INSERT INTO `mapping_collectionboy` (`map_coll_id`, `admin_id`, `centre_id`, `date_from`, `date_to`, `attribute_1`, `attribute_2`, `attribute_3`) VALUES
(2, 7, 1, '2020-01-11 00:00:00', '2020-01-15', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mapping_supervisor`
--

CREATE TABLE `mapping_supervisor` (
  `map_sup_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `centre_id` int(11) NOT NULL,
  `date_from` datetime NOT NULL DEFAULT current_timestamp(),
  `date_to` date DEFAULT NULL,
  `attribute_1` varchar(255) DEFAULT NULL,
  `attribute_2` varchar(255) DEFAULT NULL,
  `attribute_3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mapping_supervisor`
--

INSERT INTO `mapping_supervisor` (`map_sup_id`, `admin_id`, `centre_id`, `date_from`, `date_to`, `attribute_1`, `attribute_2`, `attribute_3`) VALUES
(1, 6, 1, '2019-12-26 00:00:00', '2020-06-24', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` varchar(255) NOT NULL,
  `total_count` int(11) DEFAULT NULL,
  `status` int(10) NOT NULL DEFAULT 0,
  `picked_date` date DEFAULT NULL,
  `delivery_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `total_count`, `status`, `picked_date`, `delivery_date`) VALUES
(1, '1', 20, 0, '2020-01-02', '2020-01-16'),
(2, '1', 23, 14, '2020-01-07', '2020-01-15'),
(3, '5', 12, 6, '2020-01-07', '2020-01-08'),
(4, '4', 32, 2, NULL, NULL),
(5, '5', NULL, 0, '2020-01-02', NULL),
(7, '5', NULL, 1, '2020-01-07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `detail_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `cloth_type_id` int(30) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`detail_id`, `order_id`, `cloth_type_id`, `count`) VALUES
(1, 1, 1, 20),
(2, 1, 2, 11),
(3, 3, 1, 21),
(4, 3, 2, 1),
(5, 2, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `customer_id` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `customer_id`, `amount`, `start_date`, `end_date`, `order_id`, `status`) VALUES
(0, '1', 321, '2020-01-08', '2020-01-10', 3, 14),
(1, '1', 200, '2020-01-07', '2020-01-10', 1, 13),
(2, '1', 250, '2020-01-08', '2020-01-12', 2, 14);

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `rate_id` int(11) NOT NULL,
  `cloth_type_id` int(30) NOT NULL,
  `society_id` int(11) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `attr1` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`rate_id`, `cloth_type_id`, `society_id`, `rate`, `attr1`) VALUES
(1, 1, 2, '50', NULL),
(2, 2, 1, '15', NULL),
(3, 1, 2, '50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `society`
--

CREATE TABLE `society` (
  `society_id` int(11) NOT NULL,
  `society_name` varchar(255) NOT NULL,
  `centre_id` int(11) NOT NULL,
  `attribute_1` varchar(255) DEFAULT NULL,
  `attribute_2` varchar(255) DEFAULT NULL,
  `attribute_3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `society`
--

INSERT INTO `society` (`society_id`, `society_name`, `centre_id`, `attribute_1`, `attribute_2`, `attribute_3`) VALUES
(1, 'Mahavir Gaurav', 1, NULL, NULL, NULL),
(2, 'Kirtida', 1, NULL, NULL, NULL),
(3, 'Imperial', 2, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `status_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`status_id`, `status_desc`) VALUES
(0, 'ORDER INITIATED'),
(1, 'ALERT ACCEPTED'),
(2, 'ORDER PICKED UP'),
(3, 'REACHED COLLECTION CENTER'),
(4, 'REACHED VAN'),
(5, 'RECIEVED BY MANAGER'),
(6, 'COUNTED BY MANAGER AND GIVEN FOR IRON'),
(7, 'RECIEVED FROM IRON'),
(8, 'IN VAN TO COLLECTION CENTER'),
(9, 'RECIEVED AT COLLECTION CENTER'),
(10, 'REQUESTED BY CUSTOMER FOR DELIVERY'),
(11, 'ACCEPTED BY COLLECTION BOY TO DELIVER '),
(12, 'DELIVERED SUCCESSFULLY'),
(13, 'INVOICE GENEREATED'),
(14, 'PAYMENT RECIEVED'),
(15, 'PENDING REQUEST'),
(16, 'POINTS ADDED FOR THIS PAYMENT'),
(17, 'CALLED FOR DELIVERY'),
(18, 'TRANSACTION FAILED');

-- --------------------------------------------------------

--
-- Table structure for table `time`
--

CREATE TABLE `time` (
  `time_id` int(20) NOT NULL,
  `order_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `timestamp` datetime(6) NOT NULL,
  `t_id` int(11) DEFAULT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `time`
--

INSERT INTO `time` (`time_id`, `order_id`, `status_id`, `timestamp`, `t_id`, `customer_id`) VALUES
(14, 1, 13, '2020-00-05 19:02:08.000000', NULL, 1),
(19, 1, 14, '2020-01-22 00:00:00.000000', NULL, 1),
(20, 4, 0, '2020-01-16 00:00:00.000000', NULL, 1),
(21, 3, 14, '2020-01-12 00:00:00.000000', NULL, 1),
(39, 5, 0, '2020-01-09 00:00:00.000000', NULL, 0),
(40, 7, 1, '2020-01-15 08:34:09.430181', NULL, 0),
(41, 1, 14, '2020-01-12 17:29:47.000000', NULL, 0),
(42, 2, 14, '2020-01-12 17:29:47.000000', NULL, 0),
(43, 1, 18, '2020-01-12 17:40:17.000000', NULL, 0),
(44, 2, 18, '2020-01-12 17:40:17.000000', NULL, 0),
(45, 1, 18, '2020-01-12 17:41:13.000000', NULL, 0),
(46, 2, 18, '2020-01-12 17:41:13.000000', NULL, 0),
(47, 1, 18, '2020-01-12 17:41:25.000000', NULL, 0),
(48, 2, 18, '2020-01-12 17:41:25.000000', NULL, 0),
(49, 1, 18, '2020-01-12 17:41:46.000000', NULL, 0),
(50, 2, 18, '2020-01-12 17:41:46.000000', NULL, 0),
(51, 1, 18, '2020-01-12 17:42:04.000000', NULL, 0),
(52, 2, 18, '2020-01-12 17:42:04.000000', NULL, 0),
(53, 1, 18, '2020-01-12 17:44:01.000000', NULL, 0),
(54, 2, 18, '2020-01-12 17:44:01.000000', NULL, 0),
(55, 1, 18, '2020-01-12 17:44:19.000000', NULL, 0),
(56, 2, 18, '2020-01-12 17:44:19.000000', NULL, 0),
(57, 1, 18, '2020-01-12 17:44:37.000000', NULL, 0),
(58, 2, 18, '2020-01-12 17:44:37.000000', NULL, 0),
(59, 1, 18, '2020-01-12 17:56:47.000000', NULL, 0),
(60, 2, 18, '2020-01-12 17:56:47.000000', NULL, 0),
(61, 1, 18, '2020-01-12 17:57:45.000000', NULL, 0),
(62, 2, 18, '2020-01-12 17:57:45.000000', NULL, 0),
(63, 1, 18, '2020-01-12 17:58:05.000000', NULL, 0),
(64, 2, 18, '2020-01-12 17:58:05.000000', NULL, 0),
(65, 1, 18, '2020-01-13 00:24:23.000000', NULL, 0),
(66, 2, 18, '2020-01-13 00:24:23.000000', NULL, 0),
(67, 3, 16, '2020-01-14 14:45:36.000000', NULL, 0),
(68, 1, 16, '2020-01-14 14:45:36.000000', NULL, 0),
(69, 2, 16, '2020-01-14 14:45:36.000000', NULL, 0),
(70, 1, 16, '2020-01-14 14:49:45.000000', NULL, 0),
(71, 1, 16, '2020-01-14 14:52:25.000000', NULL, 0),
(72, 1, 16, '2020-01-14 14:53:08.000000', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `t_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `transaction_id` varchar(255) NOT NULL,
  `attr1` varchar(255) DEFAULT NULL,
  `attr2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`t_id`, `payment_id`, `transaction_id`, `attr1`, `attr2`) VALUES
(3, 1, 'jdcjhdvjcvhds', NULL, NULL),
(4, 1, 'dkbvdbv', NULL, NULL),
(5, 2, 'dffvfvkbvdbv', NULL, NULL),
(6, 1, 'dkbvdbv', NULL, NULL),
(7, 2, 'dffvfvkbvdbv', NULL, NULL),
(8, 1, 'dbfjkdsbkv', NULL, NULL),
(9, 2, 'dbfjkdsbkv', NULL, NULL),
(10, 1, 'dbfjkdsbkv', NULL, NULL),
(11, 2, 'dbfjkdsbkv', NULL, NULL),
(12, 1, 'dbfjkdsbkv', NULL, NULL),
(13, 2, 'dbfjkdsbkv', NULL, NULL),
(14, 1, 'dbfjkdsbkv', NULL, NULL),
(15, 2, 'dbfjkdsbkv', NULL, NULL),
(16, 1, 'dbfjkdsbkv', NULL, NULL),
(17, 2, 'dbfjkdsbkv', NULL, NULL),
(18, 1, 'dbfjkdsbkv', NULL, NULL),
(19, 2, 'dbfjkdsbkv', NULL, NULL),
(20, 1, 'dbfjkdsbkv', NULL, NULL),
(21, 2, 'dbfjkdsbkv', NULL, NULL),
(22, 1, 'dbfjkdsbkv', NULL, NULL),
(23, 2, 'dbfjkdsbkv', NULL, NULL),
(24, 1, 'dbfjkdsbkv', NULL, NULL),
(25, 2, 'dbfjkdsbkv', NULL, NULL),
(26, 1, 'dbfjkdsbkv', NULL, NULL),
(27, 2, 'dbfjkdsbkv', NULL, NULL),
(28, 1, 'dbfjkdsbkv', NULL, NULL),
(29, 2, 'dbfjkdsbkv', NULL, NULL),
(30, 1, 'dbfjkdsbkv', NULL, NULL),
(31, 2, 'dbfjkdsbkv', NULL, NULL);

--
-- Triggers `transaction`
--
DELIMITER $$
CREATE TRIGGER `pay` AFTER INSERT ON `transaction` FOR EACH ROW BEGIN
UPDATE orders SET status='14' WHERE order_id=(SELECT order_id FROM payment WHERE payment_id=new.payment_id);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `wings`
--

CREATE TABLE `wings` (
  `wings_id` int(11) NOT NULL,
  `wings_name` varchar(255) NOT NULL,
  `society_id` int(11) NOT NULL,
  `attribute_1` varchar(255) DEFAULT NULL,
  `attribute_2` varchar(255) DEFAULT NULL,
  `attribute_3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wings`
--

INSERT INTO `wings` (`wings_id`, `wings_name`, `society_id`, `attribute_1`, `attribute_2`, `attribute_3`) VALUES
(1, 'B', 1, NULL, NULL, NULL),
(2, 'A', 1, NULL, NULL, NULL),
(3, 'C', 2, NULL, NULL, NULL),
(4, 'C', 3, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `centre`
--
ALTER TABLE `centre`
  ADD PRIMARY KEY (`centre_id`);

--
-- Indexes for table `cloth_type`
--
ALTER TABLE `cloth_type`
  ADD PRIMARY KEY (`cloth_type_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `society_id` (`society_id`),
  ADD KEY `wings_id` (`wings_id`);

--
-- Indexes for table `help`
--
ALTER TABLE `help`
  ADD PRIMARY KEY (`help_id`);

--
-- Indexes for table `mapping_collectionboy`
--
ALTER TABLE `mapping_collectionboy`
  ADD PRIMARY KEY (`map_coll_id`);

--
-- Indexes for table `mapping_supervisor`
--
ALTER TABLE `mapping_supervisor`
  ADD PRIMARY KEY (`map_sup_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`detail_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `cloth_type_id` (`cloth_type_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`rate_id`),
  ADD KEY `society_id` (`society_id`),
  ADD KEY `cloth_type_id` (`cloth_type_id`);

--
-- Indexes for table `society`
--
ALTER TABLE `society`
  ADD PRIMARY KEY (`society_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD UNIQUE KEY `status_id` (`status_id`);

--
-- Indexes for table `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`time_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`t_id`),
  ADD KEY `payment_id` (`payment_id`);

--
-- Indexes for table `wings`
--
ALTER TABLE `wings`
  ADD PRIMARY KEY (`wings_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `centre`
--
ALTER TABLE `centre`
  MODIFY `centre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cloth_type`
--
ALTER TABLE `cloth_type`
  MODIFY `cloth_type_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `help`
--
ALTER TABLE `help`
  MODIFY `help_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mapping_collectionboy`
--
ALTER TABLE `mapping_collectionboy`
  MODIFY `map_coll_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mapping_supervisor`
--
ALTER TABLE `mapping_supervisor`
  MODIFY `map_sup_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `rate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `society`
--
ALTER TABLE `society`
  MODIFY `society_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `time`
--
ALTER TABLE `time`
  MODIFY `time_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `t_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `wings`
--
ALTER TABLE `wings`
  MODIFY `wings_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`society_id`) REFERENCES `society` (`society_id`),
  ADD CONSTRAINT `customer_ibfk_2` FOREIGN KEY (`wings_id`) REFERENCES `wings` (`wings_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`status`) REFERENCES `status` (`status_id`);

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`cloth_type_id`) REFERENCES `cloth_type` (`cloth_type_id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `payment_ibfk_3` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `payment_ibfk_4` FOREIGN KEY (`status`) REFERENCES `status` (`status_id`);

--
-- Constraints for table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`society_id`) REFERENCES `society` (`society_id`),
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`cloth_type_id`) REFERENCES `cloth_type` (`cloth_type_id`);

--
-- Constraints for table `time`
--
ALTER TABLE `time`
  ADD CONSTRAINT `time_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `time_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `time_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`),
  ADD CONSTRAINT `time_ibfk_4` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`payment_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
