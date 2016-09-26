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
  `Locker_Status` varchar(25) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lockers`
--

INSERT INTO `lockers` (`Locker_Num`, `Owner`, `Type`, `Locker_Status`, `comment`) VALUES
(1, 212110562, 'Metal', 'Reserved ', 'No comment'),
(2, 213113563, 'Woord', 'Reserved ', 'No Comment'),
(3, NULL, 'Metal', 'available', '25 SAR fees'),
(4, NULL, 'Metal', 'Available', '25 SAR fees'),
(5, NULL, 'Wood', 'Under maintenance', 'Call 911'),
(6, NULL, 'Wood', 'Available ', '20 SAR fees');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `Reservation_Num` int(4) NOT NULL,
  `Student_ID` int(9) NOT NULL,
  `Reservation_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`Reservation_Num`, `Student_ID`, `Reservation_Date`) VALUES
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
(213113563, 'Omar Mk', 551111112, 'OmomMk@gmail.com');

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
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`Reservation_Num`),
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
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`Student_ID`) REFERENCES `students` (`Student_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
