-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 22, 2015 at 12:14 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kyoto`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
`id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `ip` varchar(16) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `ip`) VALUES
(1, 'test', 'test', ''),
(2, 'admin', '%custom%', ''),
(3, 'access', 'test', '');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
`id` int(11) NOT NULL,
  `img_src` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `img_src`) VALUES
(1, 'images/banner/1.jpg'),
(3, '/images/uploads/3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

CREATE TABLE IF NOT EXISTS `contents` (
`id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `title_mn` varchar(255) NOT NULL,
  `img_src` text NOT NULL,
  `description_en` text NOT NULL,
  `description_mn` text NOT NULL,
  `tag_en` text NOT NULL,
  `tag_mn` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contents`
--

INSERT INTO `contents` (`id`, `menu_id`, `title_en`, `title_mn`, `img_src`, `description_en`, `description_mn`, `tag_en`, `tag_mn`) VALUES
(3, 12, 'title en', 'титл монгол', '/images/content/11.jpg', 'Fiction is a form of narrative, one of the four rhetorical modes of discourse. Fiction-writing also has modes for fiction-writing: action, exposition, description, dialogue, summary, and transition (Morrell 2006, p. 127). Author Peter Selgin refers to methods, including action, dialogue, thoughts, summary, scene, and description (Selgin 2007, p. 38). Currently, there is no consensus within the writing community regarding the number and composition of fiction-writing modes and their uses.\r\n\r\nDescription is the fiction-writing mode for transmitting a mental image of the particulars of a story. Together with dialogue, narration, exposition, and summarization, description is one of the most widely recognized of the fiction-writing modes. As stated in Writing from A to Z, edited by Kirk Polking, description is more than the amassing of details; it is bringing something to life by carefully choosing and arranging words and phrases to produce the desired effect (Polking 1990, p. 106). The most appropriate and effective techniques for presenting description are a matter of ongoing discussion among writers and writing coaches.', 'Монгол (1992 оноос хойших үеийг Монгол Улс ) — дорно болон төв Азид оршсон бүрэн эрхт улс .\r\n\r\nХойд талаараа Орос , бусад талаараа Хятад улстай хиллэдэг далайд гарцгүй орон . Нийслэл — Улаанбаатар .\r\n\r\nАлтайн нуруунаас Хянган , Соёноос Говь хүрсэн дэлхийд 19-р том гэдэг 1 сая 566 мянган км 2 уудам нутагтай. 2015 оны эхэнд 3 сая хүнтэй болсон ( 135-р орон ). Үндсэндээ монгол үндэстэн (95 хувь), мөн хасаг , тува хүн байна. 16-р зуунаас нааш буддын шашин, 20-р зуунаас шашингүй байдал дэлгэрсэн ба албан хэрэгт монгол хэлээр харилцана.\r\n\r\nМонголд НТӨ 209 онд Хүннү улс нэгдсэнээс монгол , түрэг угсаатан халалцсаар 1206 онд Чингис хаан Их Монгол улсыг байгуулан Евразийг эзэлсэн гүрэн үүсгэжээ. 17-р зуунд манж Чин улсын мэдэлд орсон ч 1911 онд тусгаар тогтносон бөгөөд 1924 онд байгуулагдсан Бүгд Найрамдах Монгол Ард Улс 1961 онд НҮБ -ын гишүүн болсон. 20-р зуунд ЗХУ -тай дотно байж, нийгэм, эдийн засгийн бат суурь тавигдан 1990 онд ардчилсан дэглэм, зах зээлийн эдийн засагт шилжин оров. Одоо парламентын бүгд найрамдах засагтай, хорин нэгэн аймаг, нэг нийслэлд хуваагддаг нэгдмэл улс юм.\r\n\r\nХөгжиж буй орон. Дотоодын нийт бүтээгдэхүүний хэмжээгээр (26.8 тэрбум ам.доллар ) дэлхийд 111-т жагсаж, нэг хүнд ноогдох хэмжээ 11,882 $ байна. ХАА , малчин уламжлалтай. Зэс экспортлодог. Мөнгөний нэгж — төгрөг .', '', ''),
(4, 12, 'title en', 'титл монгол', '/images/content/11.jpg', 'Fiction is a form of narrative, one of the four rhetorical modes of discourse. Fiction-writing also has modes for fiction-writing: action, exposition, description, dialogue, summary, and transition (Morrell 2006, p. 127). Author Peter Selgin refers to methods, including action, dialogue, thoughts, summary, scene, and description (Selgin 2007, p. 38). Currently, there is no consensus within the writing community regarding the number and composition of fiction-writing modes and their uses.\r\n\r\nDescription is the fiction-writing mode for transmitting a mental image of the particulars of a story. Together with dialogue, narration, exposition, and summarization, description is one of the most widely recognized of the fiction-writing modes. As stated in Writing from A to Z, edited by Kirk Polking, description is more than the amassing of details; it is bringing something to life by carefully choosing and arranging words and phrases to produce the desired effect (Polking 1990, p. 106). The most appropriate and effective techniques for presenting description are a matter of ongoing discussion among writers and writing coaches.', 'тавигдан 1990 онд ардчилсан дэглэм, зах зээлийн эдийн засагт шилжин оров. Одоо парламентын бүгд найрамдах засагтай, хорин нэгэн аймаг, нэг нийслэлд хуваагддаг нэгдмэл улс юм.\r\n\r\nХөгжиж буй орон. Дотоодын нийт бүтээгдэхүүний хэмжээгээр (26.8 тэрбум ам.доллар ) дэлхийд 111-т жагсаж, нэг хүнд ноогдох хэмжээ 11,882 $ байна. ХАА , малчин уламжлалтай. Зэс экспортлодог. Мөнгөний нэгж — төгрөг .', '', ''),
(5, 1, 'dsadsa', 'dsadsa', 'dasdas', 'dasd', 'dasd', 'dsadsa', 'dsadsa');

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE IF NOT EXISTS `faq` (
`id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `report` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `name`, `email`, `report`, `date`) VALUES
(5, 'Ulziiburen', 'ismartdevteam@gmail.com', 'asdasdasd', '2015-09-13 12:56:37');

-- --------------------------------------------------------

--
-- Table structure for table `imageSlider`
--

CREATE TABLE IF NOT EXISTS `imageSlider` (
`id` int(11) NOT NULL,
  `img_src` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `imageSlider`
--

INSERT INTO `imageSlider` (`id`, `img_src`) VALUES
(1, '/images/uploads/0.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
`id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `title_mn` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `img_src` text NOT NULL,
  `sub_en` text NOT NULL,
  `sub_mn` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `menu_id`, `title_mn`, `title_en`, `img_src`, `sub_en`, `sub_mn`) VALUES
(3, 2, 'hehe', 'haha', '/images/uploads/BeFunky Collage.jpg', 'fds', 'sdf'),
(11, 1, 'test', 'test', ' ', 'test', 'test'),
(12, 1, 'trset', 'tse', ' ', 'tset', 'tse'),
(13, 2, 'asda', 'asd', '/images/uploads/Screen Shot 2015-09-06 at 01.53.02.png', 'asd', 'asd'),
(14, 1, 'dsadsa', 'dsadsa', ' ', 'dsadsa', 'dsadsa'),
(15, 2, 'hah', 'hshd', ' ', 'fdhas', 'fasf'),
(16, 2, 'hah', 'hshd', ' ', 'fdhas&fsdf&dfsf', 'fdhas&fsdf&dfsf');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
`id` int(11) NOT NULL,
  `img_src` text NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `title_mn` varchar(255) NOT NULL,
  `desc_en` text NOT NULL,
  `desc_mn` text NOT NULL,
  `price` varchar(25) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `img_src`, `title_en`, `title_mn`, `desc_en`, `desc_mn`, `price`) VALUES
(2, '/images/products/1.jpg', '«La PRECIA Lotion» –- «La PRECIA Лосьон буюу цэвэрлэгч шингэн»', '«La PRECIA Lotion» –- «La PRECIA Лосьон буюу цэвэрлэгч шингэн»', '«La PRECIA Lotion» - «La PRECIA Лосьон» буюу цэвэрлэгч шингэн нь арьсны шингэнийг нөхөх өөрөөр хэлбэл арьсыг чийгшүүлэх үйлчилгээтэй. Энэ нь арьсны цаад төрөлх чийгшлийг гадагшлуулахад голлон анхаарч, арьсыг чийгшүүлэх зорилгоор гаргаж авсан гоо сайхны бүтээгдэхүүн. Орц найрлагад нь эхэс 10% агуулагдахаас гадна протеогликан, маракуйя жимс гэх мэт элементүүд багтсан ба амин дэм (витамин, тэжээл) өгч, шинэ эсүүдийг шинээр бий болгодог давуу талтай. Мөн хэрэггүй элементүүдийг гадагшлуулах үйлчилгээтэй бүтээгдэхүүн. Улмаар арьсны шинж чанарыг хэвийн байлгаж,  арьсыг чангаруулах үйлчилгээтэй гоо сайхны бүтээгдэхүүн', '«La PRECIA Lotion» - «La PRECIA Лосьон» буюу цэвэрлэгч шингэн нь арьсны шингэнийг нөхөх өөрөөр хэлбэл арьсыг чийгшүүлэх үйлчилгээтэй. Энэ нь арьсны цаад төрөлх чийгшлийг гадагшлуулахад голлон анхаарч, арьсыг чийгшүүлэх зорилгоор гаргаж авсан гоо сайхны бүтээгдэхүүн. Орц найрлагад нь эхэс 10% агуулагдахаас гадна протеогликан, маракуйя жимс гэх мэт элементүүд багтсан ба амин дэм (витамин, тэжээл) өгч, шинэ эсүүдийг шинээр бий болгодог давуу талтай. Мөн хэрэггүй элементүүдийг гадагшлуулах үйлчилгээтэй бүтээгдэхүүн. Улмаар арьсны шинж чанарыг хэвийн байлгаж,  арьсыг чангаруулах үйлчилгээтэй гоо сайхны бүтээгдэхүүн', '60.000'),
(3, '/images/uploads/Screen Shot 2015-09-06 at 01.53.02.png', 'sd', 'asd', 'das', 'das', 'asd'),
(4, '/images/uploads/about-us.jpg', 'tse', 'test', 'ste', 'tse', '4234');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
`id` int(11) NOT NULL,
  `content_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `worry`
--

CREATE TABLE IF NOT EXISTS `worry` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contents`
--
ALTER TABLE `contents`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imageSlider`
--
ALTER TABLE `imageSlider`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `worry`
--
ALTER TABLE `worry`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `contents`
--
ALTER TABLE `contents`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `imageSlider`
--
ALTER TABLE `imageSlider`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `worry`
--
ALTER TABLE `worry`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
