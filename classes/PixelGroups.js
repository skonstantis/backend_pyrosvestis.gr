/* Author: Sotiris Konstantis */

const Pixel = require("./Pixel");
const PixelGroup = require("./PixelGroup");

class PixelGroups {
  constructor() {
    this.items = new Map();
    this.addItem(0, [
      new Pixel(887, 227),
      new Pixel(534, 138),
      new Pixel(539, 126),
      new Pixel(503, 113),
      new Pixel(509, 113),
    ]);

    this.addItem(1, [
      new Pixel(869, 285),
      new Pixel(521, 175),
      new Pixel(529, 159),
      new Pixel(494, 147),
      new Pixel(499, 148),
    ]);

    this.addItem(2, [
      new Pixel(841, 312),
      new Pixel(506, 190),
      new Pixel(511, 174),
      new Pixel(478, 161),
      new Pixel(484, 162),
    ]);

    this.addItem(3, [
      new Pixel(782, 291),
      new Pixel(468, 175),
      new Pixel(473, 157),
      new Pixel(448, 148),
      new Pixel(447, 145),
    ]);

    this.addItem(4, [
      new Pixel(714, 285),
      new Pixel(429, 169),
      new Pixel(432, 163),
      new Pixel(406, 150),
      new Pixel(412, 142),
    ]);

    this.addItem(5, [
      new Pixel(687, 269),
      new Pixel(412, 161),
      new Pixel(415, 144),
      new Pixel(391, 135),
      new Pixel(395, 135),
    ]);

    this.addItem(6, [
      new Pixel(667, 302),
      new Pixel(400, 181),
      new Pixel(406, 164),
      new Pixel(382, 153),
      new Pixel(387, 152),
    ]);

    this.addItem(7, [
      new Pixel(635, 268),
      new Pixel(373, 165),
      new Pixel(387, 142),
      new Pixel(358, 138),
      new Pixel(367, 134),
    ]);

    this.addItem(8, [
      new Pixel(582, 252),
      new Pixel(347, 153),
      new Pixel(352, 135),
      new Pixel(332, 126),
      new Pixel(335, 127),
    ]);

    this.addItem(9, [
      new Pixel(569, 302),
      new Pixel(337, 178),
      new Pixel(341, 163),
      new Pixel(318, 151),
      new Pixel(325, 150),
    ]);

    this.addItem(10, [
      new Pixel(511, 268),
      new Pixel(306, 163),
      new Pixel(309, 144),
      new Pixel(292, 135),
      new Pixel(297, 135),
    ]);

    this.addItem(11, [
      new Pixel(555, 331),
      new Pixel(334, 199),
      new Pixel(339, 182),
      new Pixel(317, 169),
      new Pixel(320, 170),
    ]);

    this.addItem(12, [
      new Pixel(459, 305),
      new Pixel(277, 181),
      new Pixel(278, 167),
      new Pixel(265, 158),
      new Pixel(268, 154),
    ]);

    this.addItem(13, [
      new Pixel(505, 345),
      new Pixel(302, 207),
      new Pixel(304, 190),
      new Pixel(290, 175),
      new Pixel(292, 176),
    ]);

    this.addItem(14, [
      new Pixel(546, 358),
      new Pixel(327, 216),
      new Pixel(330, 198),
      new Pixel(312, 185),
      new Pixel(316, 185),
    ]);

    this.addItem(15, [
      new Pixel(562, 390),
      new Pixel(338, 234),
      new Pixel(341, 219),
      new Pixel(322, 203),
      new Pixel(326, 202),
    ]);

    this.addItem(16, [
      new Pixel(613, 418),
      new Pixel(370, 253),
      new Pixel(373, 236),
      new Pixel(348, 219),
      new Pixel(354, 219),
    ]);

    this.addItem(17, [
      new Pixel(523, 406),
      new Pixel(317, 247),
      new Pixel(319, 229),
      new Pixel(299, 213),
      new Pixel(302, 215),
    ]);

    this.addItem(18, [
      new Pixel(531, 467),
      new Pixel(318, 281),
      new Pixel(322, 266),
      new Pixel(303, 246),
      new Pixel(307, 246),
    ]);

    this.addItem(19, [
      new Pixel(448, 355),
      new Pixel(270, 216),
      new Pixel(270, 198),
      new Pixel(257, 186),
      new Pixel(261, 185),
    ]);

    this.addItem(20, [
      new Pixel(412, 309),
      new Pixel(246, 187),
      new Pixel(247, 169),
      new Pixel(237, 157),
      new Pixel(242, 158),
    ]);

    this.addItem(21, [
      new Pixel(366, 305),
      new Pixel(218, 184),
      new Pixel(221, 165),
      new Pixel(212, 155),
      new Pixel(213, 154),
    ]);

    this.addItem(22, [
      new Pixel(392, 339),
      new Pixel(227, 206),
      new Pixel(238, 189),
      new Pixel(224, 176),
      new Pixel(227, 175),
    ]);

    this.addItem(23, [
      new Pixel(359, 369),
      new Pixel(214, 222),
      new Pixel(214, 206),
      new Pixel(206, 192),
      new Pixel(212, 190),
    ]);

    this.addItem(24, [
      new Pixel(388, 389),
      new Pixel(228, 232),
      new Pixel(231, 219),
      new Pixel(221, 201),
      new Pixel(226, 200),
    ]);

    this.addItem(25, [
      new Pixel(410, 428),
      new Pixel(245, 255),
      new Pixel(248, 241),
      new Pixel(236, 223),
      new Pixel(240, 222),
    ]);

    this.addItem(26, [
      new Pixel(304, 351),
      new Pixel(180, 210),
      new Pixel(178, 193),
      new Pixel(175, 179),
      new Pixel(178, 178),
    ]);

    this.addItem(27, [
      new Pixel(334, 411),
      new Pixel(198, 249),
      new Pixel(202, 233),
      new Pixel(195, 217),
      new Pixel(200, 217),
    ]);

    this.addItem(28, [
      new Pixel(372, 474),
      new Pixel(221, 284),
      new Pixel(223, 270),
      new Pixel(213, 251),
      new Pixel(220, 250),
    ]);

    this.addItem(29, [
      new Pixel(408, 530),
      new Pixel(244, 320),
      new Pixel(244, 299),
      new Pixel(237, 283),
      new Pixel(238, 279),
    ]);

    this.addItem(30, [
      new Pixel(452, 522),
      new Pixel(272, 315),
      new Pixel(274, 299),
      new Pixel(260, 277),
      new Pixel(264, 277),
    ]);

    this.addItem(31, [
      new Pixel(465, 562),
      new Pixel(277, 338),
      new Pixel(278, 324),
      new Pixel(263, 300),
      new Pixel(271, 297),
    ]);

    this.addItem(32, [
      new Pixel(254, 387),
      new Pixel(148, 232),
      new Pixel(148, 216),
      new Pixel(146, 203),
      new Pixel(151, 201),
    ]);

    this.addItem(33, [
      new Pixel(273, 419),
      new Pixel(166, 250),
      new Pixel(154, 239),
      new Pixel(151, 221),
      new Pixel(160, 219),
    ]);

    this.addItem(34, [
      new Pixel(281, 462),
      new Pixel(167, 278),
      new Pixel(165, 259),
      new Pixel(163, 243),
      new Pixel(167, 243),
    ]);

    this.addItem(35, [
      new Pixel(291, 509),
      new Pixel(170, 305),
      new Pixel(175, 291),
      new Pixel(170, 269),
      new Pixel(174, 269),
    ]);

    this.addItem(36, [
      new Pixel(272, 550),
      new Pixel(167, 331),
      new Pixel(164, 317),
      new Pixel(159, 293),
      new Pixel(202, 282),
    ]);

    this.addItem(37, [
      new Pixel(347, 578),
      new Pixel(208, 347),
      new Pixel(209, 333),
      new Pixel(200, 310),
      new Pixel(204, 310),
    ]);

    this.addItem(38, [
      new Pixel(291, 577),
      new Pixel(175, 348),
      new Pixel(176, 334),
      new Pixel(169, 308),
      new Pixel(174, 308),
    ]);

    this.addItem(39, [
      new Pixel(304, 626),
      new Pixel(180, 376),
      new Pixel(179, 359),
      new Pixel(175, 335),
      new Pixel(179, 334),
    ]);

    this.addItem(40, [
      new Pixel(330, 620),
      new Pixel(198, 372),
      new Pixel(198, 359),
      new Pixel(191, 332),
      new Pixel(195, 332),
    ]);

    this.addItem(41, [
      new Pixel(355, 644),
      new Pixel(211, 386),
      new Pixel(213, 373),
      new Pixel(205, 344),
      new Pixel(209, 345),
    ]);

    this.addItem(42, [
      new Pixel(398, 645),
      new Pixel(239, 388),
      new Pixel(242, 373),
      new Pixel(233, 345),
      new Pixel(234, 346),
    ]);

    this.addItem(43, [
      new Pixel(207, 441),
      new Pixel(126, 266),
      new Pixel(122, 248),
      new Pixel(122, 231),
      new Pixel(127, 233),
    ]);

    this.addItem(44, [
      new Pixel(240, 496),
      new Pixel(144, 299),
      new Pixel(145, 287),
      new Pixel(140, 264),
      new Pixel(146, 264),
    ]);

    this.addItem(45, [
      new Pixel(198, 517),
      new Pixel(117, 308),
      new Pixel(115, 294),
      new Pixel(117, 269),
      new Pixel(123, 271),
    ]);

    this.addItem(46, [
      new Pixel(152, 541),
      new Pixel(88, 319),
      new Pixel(88, 311),
      new Pixel(92, 291),
      new Pixel(97, 290),
    ]);

    this.addItem(47, [
      new Pixel(187, 592),
      new Pixel(111, 356),
      new Pixel(111, 342),
      new Pixel(111, 317),
      new Pixel(116, 316),
    ]);

    this.addItem(48, [
      new Pixel(241, 584),
      new Pixel(144, 353),
      new Pixel(148, 337),
      new Pixel(142, 312),
      new Pixel(145, 310),
    ]);

    this.addItem(49, [
      new Pixel(241, 668),
      new Pixel(139, 399),
      new Pixel(146, 389),
      new Pixel(140, 360),
      new Pixel(146, 358),
    ]);

    this.addItem(50, [
      new Pixel(287, 685),
      new Pixel(172, 409),
      new Pixel(173, 397),
      new Pixel(166, 367),
      new Pixel(169, 365),
    ]);

    this.addItem(51, [
      new Pixel(283, 714),
      new Pixel(172, 409),
      new Pixel(169, 417),
      new Pixel(164, 385),
      new Pixel(170, 386),
    ]);

    this.addItem(52, [
      new Pixel(331, 702),
      new Pixel(199, 422),
      new Pixel(197, 410),
      new Pixel(191, 377),
      new Pixel(196, 376),
    ]);

    this.addItem(53, [
      new Pixel(363, 709),
      new Pixel(218, 425),
      new Pixel(219, 415),
      new Pixel(209, 381),
      new Pixel(215, 383),
    ]);

    this.addItem(54, [
      new Pixel(401, 702),
      new Pixel(238, 417),
      new Pixel(240, 404),
      new Pixel(229, 373),
      new Pixel(233, 375),
    ]);

    this.addItem(55, [
      new Pixel(465, 687),
      new Pixel(278, 412),
      new Pixel(283, 400),
      new Pixel(267, 368),
      new Pixel(271, 369),
    ]);

    this.addItem(56, [
      new Pixel(456, 725),
      new Pixel(273, 434),
      new Pixel(275, 422),
      new Pixel(261, 391),
      new Pixel(267, 390),
    ]);

    this.addItem(57, [
      new Pixel(573, 701),
      new Pixel(340, 419),
      new Pixel(345, 409),
      new Pixel(325, 377),
      new Pixel(331, 377),
    ]);

    this.addItem(58, [
      new Pixel(515, 739),
      new Pixel(303, 446),
      new Pixel(308, 432),
      new Pixel(289, 400),
      new Pixel(295, 400),
    ]);

    this.addItem(59, [
      new Pixel(448, 815),
      new Pixel(262, 487),
      new Pixel(270, 479),
      new Pixel(255, 442),
      new Pixel(261, 441),
    ]);

    this.addItem(60, [
      new Pixel(507, 788),
      new Pixel(304, 473),
      new Pixel(306, 462),
      new Pixel(290, 427),
      new Pixel(295, 426),
    ]);

    this.addItem(61, [
      new Pixel(532, 777),
      new Pixel(316, 465),
      new Pixel(323, 456),
      new Pixel(300, 416),
      new Pixel(311, 421),
    ]);

    this.addItem(62, [
      new Pixel(567, 771),
      new Pixel(340, 462),
      new Pixel(342, 453),
      new Pixel(323, 417),
      new Pixel(327, 418),
    ]);

    this.addItem(63, [
      new Pixel(587, 757),
      new Pixel(350, 453),
      new Pixel(356, 443),
      new Pixel(335, 409),
      new Pixel(339, 409),
    ]);

    this.addItem(64, [
      new Pixel(592, 787),
      new Pixel(353, 472),
      new Pixel(356, 460),
      new Pixel(334, 424),
      new Pixel(341, 429),
    ]);

    this.addItem(65, [
      new Pixel(582, 808),
      new Pixel(349, 485),
      new Pixel(352, 475),
      new Pixel(332, 438),
      new Pixel(329, 431),
    ]);

    this.addItem(66, [
      new Pixel(536, 836),
      new Pixel(322, 502),
      new Pixel(325, 492),
      new Pixel(306, 453),
      new Pixel(311, 453),
    ]);

    this.addItem(67, [
      new Pixel(601, 828),
      new Pixel(360, 498),
      new Pixel(363, 489),
      new Pixel(340, 450),
      new Pixel(346, 451),
    ]);

    this.addItem(68, [
      new Pixel(497, 643),
      new Pixel(299, 385),
      new Pixel(301, 374),
      new Pixel(286, 344),
      new Pixel(289, 344),
    ]);

    this.addItem(69, [
      new Pixel(526, 665),
      new Pixel(317, 401),
      new Pixel(318, 389),
      new Pixel(301, 357),
      new Pixel(305, 357),
    ]);

    this.addItem(70, [
      new Pixel(610, 712),
      new Pixel(365, 429),
      new Pixel(371, 417),
      new Pixel(348, 384),
      new Pixel(354, 386),
    ]);

    this.addItem(71, [
      new Pixel(403, 790),
      new Pixel(243, 473),
      new Pixel(245, 461),
      new Pixel(234, 426),
      new Pixel(237, 428),
    ]);

    this.addItem(72, [
      new Pixel(383, 775),
      new Pixel(230, 467),
      new Pixel(231, 455),
      new Pixel(220, 421),
      new Pixel(225, 420),
    ]);

    this.addItem(73, [
      new Pixel(308, 781),
      new Pixel(182, 470),
      new Pixel(186, 459),
      new Pixel(175, 424),
      new Pixel(187, 420),
    ]);

    this.addItem(74, [
      new Pixel(262, 807),
      new Pixel(156, 487),
      new Pixel(156, 473),
      new Pixel(153, 437),
      new Pixel(157, 437),
    ]);

    this.addItem(75, [
      new Pixel(291, 834),
      new Pixel(180, 501),
      new Pixel(180, 490),
      new Pixel(173, 453),
      new Pixel(177, 453),
    ]);

    this.addItem(76, [
      new Pixel(353, 799),
      new Pixel(209, 481),
      new Pixel(211, 468),
      new Pixel(204, 432),
      new Pixel(206, 433),
    ]);

    this.addItem(77, [
      new Pixel(356, 843),
      new Pixel(214, 508),
      new Pixel(210, 497),
      new Pixel(205, 457),
      new Pixel(210, 458),
    ]);

    this.addItem(78, [
      new Pixel(309, 869),
      new Pixel(188, 523),
      new Pixel(185, 512),
      new Pixel(181, 472),
      new Pixel(185, 472),
    ]);

    this.addItem(79, [
      new Pixel(300, 924),
      new Pixel(189, 541),
      new Pixel(189, 533),
      new Pixel(184, 493),
      new Pixel(186, 495),
    ]);

    this.addItem(80, [
      new Pixel(339, 934),
      new Pixel(206, 557),
      new Pixel(207, 550),
      new Pixel(195, 507),
      new Pixel(202, 508),
    ]);

    this.addItem(81, [
      new Pixel(375, 891),
      new Pixel(227, 534),
      new Pixel(226, 525),
      new Pixel(215, 485),
      new Pixel(224, 483),
    ]);

    this.addItem(82, [
      new Pixel(405, 941),
      new Pixel(247, 570),
      new Pixel(248, 557),
      new Pixel(235, 515),
      new Pixel(239, 514),
    ]);

    this.addItem(83, [
      new Pixel(401, 996),
      new Pixel(241, 598),
      new Pixel(242, 589),
      new Pixel(231, 541),
      new Pixel(235, 542),
    ]);

    this.addItem(84, [
      new Pixel(462, 984),
      new Pixel(275, 588),
      new Pixel(276, 582),
      new Pixel(265, 534),
      new Pixel(269, 536),
    ]);

    this.addItem(85, [
      new Pixel(438, 916),
      new Pixel(264, 550),
      new Pixel(263, 535),
      new Pixel(253, 498),
      new Pixel(256, 497),
    ]);

    this.addItem(86, [
      new Pixel(427, 848),
      new Pixel(256, 509),
      new Pixel(258, 499),
      new Pixel(245, 460),
      new Pixel(258, 459),
    ]);

    this.addItem(87, [
      new Pixel(520, 857),
      new Pixel(312, 515),
      new Pixel(315, 505),
      new Pixel(298, 465),
      new Pixel(302, 465),
    ]);

    this.addItem(88, [
      new Pixel(583, 1215),
      new Pixel(351, 730),
      new Pixel(353, 724),
      new Pixel(335, 666),
      new Pixel(340, 666),
    ]);

    this.addItem(89, [
      new Pixel(682, 1235),
      new Pixel(406, 744),
      new Pixel(410, 736),
      new Pixel(387, 677),
      new Pixel(394, 676),
    ]);

    this.addItem(90, [
      new Pixel(750, 1254),
      new Pixel(453, 754),
      new Pixel(457, 746),
      new Pixel(426, 685),
      new Pixel(433, 686),
    ]);

    this.addItem(91, [
      new Pixel(810, 1252),
      new Pixel(485, 751),
      new Pixel(494, 749),
      new Pixel(462, 687),
      new Pixel(466, 686),
    ]);

    this.addItem(92, [
      new Pixel(74, 501),
      new Pixel(43, 302),
      new Pixel(41, 287),
      new Pixel(47, 266),
      new Pixel(52, 266),
    ]);

    this.addItem(93, [
      new Pixel(177, 670),
      new Pixel(106, 403),
      new Pixel(104, 392),
      new Pixel(106, 360),
      new Pixel(110, 360),
    ]);

    this.addItem(94, [
      new Pixel(165, 753),
      new Pixel(100, 452),
      new Pixel(99, 442),
      new Pixel(100, 407),
      new Pixel(105, 407),
    ]);

    this.addItem(95, [
      new Pixel(190, 824),
      new Pixel(115, 495),
      new Pixel(113, 485),
      new Pixel(114, 447),
      new Pixel(119, 447),
    ]);

    this.addItem(96, [
      new Pixel(903, 1023),
      new Pixel(542, 615),
      new Pixel(549, 607),
      new Pixel(512, 558),
      new Pixel(517, 558),
    ]);

    this.addItem(97, [
      new Pixel(792, 944),
      new Pixel(476, 565),
      new Pixel(482, 559),
      new Pixel(451, 514),
      new Pixel(455, 514),
    ]);

    this.addItem(98, [
      new Pixel(859, 711),
      new Pixel(515, 426),
      new Pixel(521, 416),
      new Pixel(485, 381),
      new Pixel(491, 383),
    ]);

    this.addItem(99, [
      new Pixel(682, 361),
      new Pixel(410, 215),
      new Pixel(412, 202),
      new Pixel(388, 186),
      new Pixel(393, 187),
    ]);

    this.addItem(100, [
      new Pixel(852, 596),
      new Pixel(512, 360),
      new Pixel(544, 358),
      new Pixel(508, 329),
      new Pixel(507, 312),
    ]);

    this.addItem(101, [
      new Pixel(563, 613),
      new Pixel(338, 368),
      new Pixel(341, 355),
      new Pixel(321, 328),
      new Pixel(326, 328),
    ]);

    this.addItem(102, [
      new Pixel(438, 607),
      new Pixel(263, 364),
      new Pixel(264, 353),
      new Pixel(251, 326),
      new Pixel(256, 326),
    ]);

    this.addItem(103, [
      new Pixel(963, 832),
      new Pixel(577, 498),
      new Pixel(584, 489),
      new Pixel(545, 450),
      new Pixel(548, 450),
    ]);

    this.addItem(104, [
      new Pixel(236, 331),
      new Pixel(142, 201),
      new Pixel(141, 184),
      new Pixel(139, 171),
      new Pixel(144, 171),
    ]);

    this.addItem(105, [
      new Pixel(457, 266),
      new Pixel(275, 159),
      new Pixel(276, 143),
      new Pixel(262, 133),
      new Pixel(266, 134),
    ]);

    this.addItem(106, [
      new Pixel(798, 397),
      new Pixel(478, 238),
      new Pixel(484, 222),
      new Pixel(454, 208),
      new Pixel(458, 207),
    ]);

    this.addItem(107, [
      new Pixel(744, 480),
      new Pixel(446, 289),
      new Pixel(451, 273),
      new Pixel(423, 255),
      new Pixel(428, 253),
    ]);

    this.addItem(108, [
      new Pixel(729, 547),
      new Pixel(436, 330),
      new Pixel(442, 316),
      new Pixel(414, 291),
      new Pixel(419, 292),
    ]);

    this.addItem(109, [
      new Pixel(668, 648),
      new Pixel(400, 388),
      new Pixel(404, 378),
      new Pixel(381, 348),
      new Pixel(385, 347),
    ]);

    this.addItem(110, [
      new Pixel(535, 603),
      new Pixel(321, 363),
      new Pixel(323, 350),
      new Pixel(305, 323),
      new Pixel(311, 322),
    ]);

    this.addItem(111, [
      new Pixel(590, 600),
      new Pixel(353, 361),
      new Pixel(357, 348),
      new Pixel(336, 321),
      new Pixel(341, 321),
    ]);

    this.addItem(112, [
      new Pixel(802, 699),
      new Pixel(481, 420),
      new Pixel(488, 408),
      new Pixel(456, 376),
      new Pixel(460, 377),
    ]);

    this.addItem(113, [
      new Pixel(872, 856),
      new Pixel(523, 515),
      new Pixel(530, 504),
      new Pixel(495, 465),
      new Pixel(501, 464),
    ]);

    this.addItem(114, [
      new Pixel(1003, 979),
      new Pixel(604, 586),
      new Pixel(611, 579),
      new Pixel(569, 533),
      new Pixel(574, 533),
    ]);

    this.addItem(115, [
      new Pixel(1114, 1075),
      new Pixel(670, 646),
      new Pixel(679, 641),
      new Pixel(631, 586),
      new Pixel(636, 587),
    ]);

    this.addItem(116, [
      new Pixel(1016, 1185),
      new Pixel(611, 712),
      new Pixel(619, 706),
      new Pixel(576, 649),
      new Pixel(581, 649),
    ]);

    this.addItem(117, [
      new Pixel(469, 1077),
      new Pixel(281, 647),
      new Pixel(283, 638),
      new Pixel(268, 589),
      new Pixel(273, 588),
    ]);
  }

  addItem(id, pixels) {
    this.items.set(id, new PixelGroup(id, pixels));
  }
}

module.exports = PixelGroups;
