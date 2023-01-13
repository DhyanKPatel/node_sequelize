-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2023 at 01:15 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo-3`
--

-- --------------------------------------------------------

--
-- Table structure for table `addressbook`
--

CREATE TABLE `addressbook` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `addressLine1` varchar(255) DEFAULT NULL,
  `addressLine2` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `pinCode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addressbook`
--

INSERT INTO `addressbook` (`id`, `title`, `addressLine1`, `addressLine2`, `country`, `state`, `city`, `pinCode`) VALUES
(1, 'Dhyan', 'nandanvan', 'township', 'india', 'gujrat', 'unjha', '384151');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `gender`, `profile`) VALUES
(1, 'paresh', 'paresh@gmail.com', '$2b$10$RbkpfJQ7Mxnzfv1aisIq2eqGZfq1IlRwfzNjtUu8bNcZCBegRZTYu', 'paresh123', '1673585788225Capture.PNG'),
(2, 'magan', 'magan@gmail.com', '$2b$10$dSZuBdwGOON.fL6Ip39foOEADpetvfI.RY.10GYTmFGp7gZACeFg.', 'male', '1673597409960Screenshot (53).png'),
(3, 'hiren', 'hiren@gmail.com', '$2b$10$w1iIMHsXBBlWi0r7nrdzN.vBGJnY75tdoPqj5ReEPnpvQKFFED5S2', 'male', '1673589161972Capture.PNG'),
(4, 'ravi', 'ravi@gmail.com', '$2b$10$AcEsPi7syiGM/GhJmVZw5uzLSlKEKVzX4veyqzU4qR6aasjA2MBOO', 'male', '1673589945809Capture.PNG'),
(5, 'check', 'check@gmail.com', '$2b$10$iKTFkHG99LFDRr2gHxU3JOqPn1zAWBhABVC9PGv9h.zZU4UNug2jW', 'male', '1673590486946Capture.PNG'),
(6, 'check', 'check000@gmail.com', '$2b$10$JrlP1gKCgTdJa65hZtrGZu0MRPAb8o9b2b5F40QUjlhc2XKm1kquS', 'male', '1673591337511Capture.PNG'),
(7, 'checkaab', 'checkaavb@gmail.com', '$2b$10$neC5qSd05I4dOQdWV1JIguGmOkjvnnsUgPE4JPR5KL5mgK5PvJLvm', 'male', '1673592378741Capture.PNG'),
(8, 'chagan', 'chaganchtari@gmail.com', '$2b$10$sychSKEF.Xr21srfBRoehOCGOYUcHBTkA.injNgUU3aDABwOmTVO2', 'male', '1673592508665Screenshot (54).png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addressbook`
--
ALTER TABLE `addressbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addressbook`
--
ALTER TABLE `addressbook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
