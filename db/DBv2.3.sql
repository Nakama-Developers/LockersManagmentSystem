-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2016 at 04:40 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lockersystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `Admin_ID` int(3) NOT NULL,
  `Admin_Pass` varchar(40) NOT NULL,
  `Name` varchar(125) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`Admin_ID`, `Admin_Pass`, `Name`) VALUES
(216, 'reachdasky', 'FisrtAdmin');

-- --------------------------------------------------------

--
-- Table structure for table `lockers`
--

CREATE TABLE `lockers` (
  `Locker_Num` int(3) NOT NULL,
  `Owner` int(9) DEFAULT NULL,
  `Type` varchar(15) DEFAULT NULL,
  `Locker_Status` varchar(25) DEFAULT 'Available',
  `comment` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lockers`
--

INSERT INTO `lockers` (`Locker_Num`, `Owner`, `Type`, `Locker_Status`, `comment`) VALUES
(1, 212110562, 'Metal', 'Reserved ', NULL),
(2, 213113563, 'Woord', 'Reserved ', NULL),
(3, NULL, 'Metal', 'available', '25 SAR fees'),
(4, NULL, 'Metal', 'Available', '25 SAR fees'),
(5, NULL, 'Wood', 'Under maintenance', 'Call 911'),
(6, NULL, 'Wood', 'Available ', '20 SAR fees'),
(10, 213110265, 'Wood', 'Reserved', NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `lockers_owners`
--
CREATE TABLE `lockers_owners` (
`Student_ID` int(9)
,`Locker_Num` int(3)
,`Name` varchar(60)
,`Phone` int(10)
,`Email` varchar(320)
);

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `Request_Num` int(4) NOT NULL,
  `Student_ID` int(9) NOT NULL,
  `Request_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`Request_Num`, `Student_ID`, `Request_Date`) VALUES
(11, 212110562, '2016-09-30'),
(12, 213113563, '2016-10-08');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `Student_ID` int(9) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Phone` int(10) NOT NULL,
  `Email` varchar(320) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`Student_ID`, `Name`, `Phone`, `Email`) VALUES
(212110562, 'Ala''a Ezzidden', 551111111, 'squarehead@gmail.com'),
(213110265, 'Mohammed Ahmed', 551111113, 'email.email.eamil@gmail.com'),
(213113563, 'Omar Mk', 551111112, 'OmomMk@gmail.com');

-- --------------------------------------------------------

--
-- Structure for view `lockers_owners`
--
DROP TABLE IF EXISTS `lockers_owners`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `lockers_owners`  AS  select `students`.`Student_ID` AS `Student_ID`,`lockers`.`Locker_Num` AS `Locker_Num`,`students`.`Name` AS `Name`,`students`.`Phone` AS `Phone`,`students`.`Email` AS `Email` from (`students` join `lockers` on((`students`.`Student_ID` = `lockers`.`Owner`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`Admin_ID`);

--
-- Indexes for table `lockers`
--
ALTER TABLE `lockers`
  ADD PRIMARY KEY (`Locker_Num`),
  ADD KEY `Occupation` (`Owner`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`Request_Num`),
  ADD KEY `Student_ID` (`Student_ID`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`Student_ID`),
  ADD UNIQUE KEY `Phone` (`Phone`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lockers`
--
ALTER TABLE `lockers`
  ADD CONSTRAINT `lockers_ibfk_1` FOREIGN KEY (`Owner`) REFERENCES `students` (`Student_ID`);

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`Student_ID`) REFERENCES `students` (`Student_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
