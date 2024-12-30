const CountryInfo = [
	{ code: 'AD', label: 'Andorra', phone: '376', phoneLength: 6 },
	{ code: 'AE', label: 'United Arab Emirates', phone: '971', phoneLength: 9 },
	{ code: 'AF', label: 'Afghanistan', phone: '93', phoneLength: 9 },
	{ code: 'AG', label: 'Antigua and Barbuda', phone: '1-268', phoneLength: 10 },
	{ code: 'AI', label: 'Anguilla', phone: '1-264', phoneLength: 10 },
	{ code: 'AL', label: 'Albania', phone: '355', phoneLength: 9 },
	{ code: 'AM', label: 'Armenia', phone: '374', phoneLength: 6 },
	{ code: 'AO', label: 'Angola', phone: '244', phoneLength: 9 },
	{ code: 'AQ', label: 'Antarctica', phone: '672', phoneLength: 6 },
	{ code: 'AR', label: 'Argentina', phone: '54', phoneLength: [6, 7, 8,10] },
	{ code: 'AS', label: 'American Samoa', phone: '1-684', phoneLength: 10 },
	{ code: 'AT', label: 'Austria', phone: '43', phoneLength: [10, 11] },
	{ code: 'AU', label: 'Australia', phone: '61', phoneLength: 9 },
	{ code: 'AW', label: 'Aruba', phone: '297', phoneLength: 7 },
	{ code: 'AX', label: 'Alland Islands', phone: '358', phoneLength: [7, 8, 9, 10] },
	{ code: 'AZ', label: 'Azerbaijan', phone: '994', phoneLength: 9 },
	{ code: 'BA', label: 'Bosnia and Herzegovina', phone: '387', phoneLength: 8 },
	{ code: 'BB', label: 'Barbados', phone: '1-246', phoneLength: 10 },
	{ code: 'BD', label: 'Bangladesh', phone: '880', phoneLength: [10,11] },
	{ code: 'BE', label: 'Belgium', phone: '32', phoneLength: 9 },
	{ code: 'BF', label: 'Burkina Faso', phone: '226', phoneLength: 8 },
	{ code: 'BG', label: 'Bulgaria', phone: '359', phoneLength: 9 },
	{ code: 'BH', label: 'Bahrain', phone: '973', phoneLength: 8 },
	{ code: 'BI', label: 'Burundi', phone: '257', phoneLength: 8 },
	{ code: 'BJ', label: 'Benin', phone: '229', phoneLength: 8 },
	{ code: 'BL', label: 'Saint Barthelemy', phone: '590', phoneLength: 9 },
	{ code: 'BM', label: 'Bermuda', phone: '1-441', phoneLength: 10 },
	{ code: 'BN', label: 'Brunei Darussalam', phone: '673', phoneLength: 7 },
	{ code: 'BO', label: 'Bolivia', phone: '591', phoneLength: [8,9] },
	{ code: 'BR', label: 'Brazil', phone: '55', phoneLength: 11 },
	{ code: 'BS', label: 'Bahamas', phone: '1-242', phoneLength: 10 },
	{ code: 'BT', label: 'Bhutan', phone: '975', phoneLength: 7 },
	{ code: 'BV', label: 'Bouvet Island', phone: '47', phoneLength: 10 },
	{ code: 'BW', label: 'Botswana', phone: '267', phoneLength: 7 },
	{ code: 'BY', label: 'Belarus', phone: '375', phoneLength: 9 },
	{ code: 'BZ', label: 'Belize', phone: '501', phoneLength: 7 },
	{ code: 'CA', label: 'Canada', phone: '1', phoneLength: 10 },
	{ code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61', phoneLength: 10 },
	{ code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243', phoneLength: 7 },
	{ code: 'CF', label: 'Central African Republic', phone: '236', phoneLength: 8 },
	{ code: 'CG', label: 'Congo, Republic of the', phone: '242', phoneLength: 9 },
	{ code: 'CH', label: 'Switzerland', phone: '41', phoneLength: 9 },
	{ code: 'CI', label: "Cote d'Ivoire", phone: '225', phoneLength: [8,10] },
	{ code: 'CK', label: 'Cook Islands', phone: '682', phoneLength: 5 },
	{ code: 'CL', label: 'Chile', phone: '56', phoneLength: 9 },
	{ code: 'CM', label: 'Cameroon', phone: '237', phoneLength: 9 },
	{ code: 'CN', label: 'China', phone: '86', phoneLength: 11 },
	{ code: 'CO', label: 'Colombia', phone: '57', phoneLength: 10 },
	{ code: 'CR', label: 'Costa Rica', phone: '506', phoneLength: 8 },
	{ code: 'CU', label: 'Cuba', phone: '53', phoneLength: 8 },
	{ code: 'CV', label: 'Cape Verde', phone: '238', phoneLength: 7 },
	{ code: 'CW', label: 'Curacao', phone: '599', phoneLength: 7 },
	{ code: 'CX', label: 'Christmas Island', phone: '61', phoneLength: 9 },
	{ code: 'CY', label: 'Cyprus', phone: '357', phoneLength: 8 },
	{ code: 'CZ', label: 'Czech Republic', phone: '420', phoneLength: 9 },
	{ code: 'DE', label: 'Germany', phone: '49', phoneLength: [10,11] },
	{ code: 'DJ', label: 'Djibouti', phone: '253', phoneLength: 10 },
	{ code: 'DK', label: 'Denmark', phone: '45', phoneLength: 8 },
	{ code: 'DM', label: 'Dominica', phone: '1-767', phoneLength: 10 },
	{ code: 'DO', label: 'Dominican Republic', phone: '1-809', phoneLength: 10 },
	{ code: 'DZ', label: 'Algeria', phone: '213', phoneLength: 9 },
	{ code: 'EC', label: 'Ecuador', phone: '593', phoneLength: 9 },
	{ code: 'EE', label: 'Estonia', phone: '372', phoneLength: 8 },
	{ code: 'EG', label: 'Egypt', phone: '20', phoneLength: 10 },
	{ code: 'EH', label: 'Western Sahara', phone: '212', phoneLength: 9 },
	{ code: 'ER', label: 'Eritrea', phone: '291', phoneLength: 7 },
	{ code: 'ES', label: 'Spain', phone: '34', phoneLength: 9 },
	{ code: 'ET', label: 'Ethiopia', phone: '251', phoneLength: 9 },
	{ code: 'FI', label: 'Finland', phone: '358', phoneLength: [9, 10, 11] },
	{ code: 'FJ', label: 'Fiji', phone: '679', phoneLength: 7 },
	{ code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500', phoneLength: 5 },
	{ code: 'FM', label: 'Micronesia, Federated States of', phone: '691', phoneLength: 7 },
	{ code: 'FO', label: 'Faroe Islands', phone: '298', phoneLength: 5 },
	{ code: 'FR', label: 'France', phone: '33', phoneLength: 9 },
	{ code: 'GA', label: 'Gabon', phone: '241', phoneLength: 7 },
	{ code: 'GB', label: 'United Kingdom', phone: '44', phoneLength: 10 },
	{ code: 'GD', label: 'Grenada', phone: '1-473', phoneLength: 10 },
	{ code: 'GE', label: 'Georgia', phone: '995', phoneLength: 9 },
	{ code: 'GF', label: 'French Guiana', phone: '594', phoneLength: 9 },
	{ code: 'GG', label: 'Guernsey', phone: '44', phoneLength: 10 },
	{ code: 'GH', label: 'Ghana', phone: '233', phoneLength: 9 },
	{ code: 'GI', label: 'Gibraltar', phone: '350', phoneLength: 8 },
	{ code: 'GL', label: 'Greenland', phone: '299', phoneLength: 6 },
	{ code: 'GM', label: 'Gambia', phone: '220', phoneLength: 7 },
	{ code: 'GN', label: 'Guinea', phone: '224', phoneLength: 9 },
	{ code: 'GP', label: 'Guadeloupe', phone: '590', phoneLength: 9 },
	{ code: 'GQ', label: 'Equatorial Guinea', phone: '240', phoneLength: 9 },
	{ code: 'GR', label: 'Greece', phone: '30', phoneLength: 10 },
	{ code: 'GS', label: 'South Georgia and the South Sandwich Islands', phone: '500', phoneLength: 5 },
	{ code: 'GT', label: 'Guatemala', phone: '502', phoneLength: 8 },
	{ code: 'GU', label: 'Guam', phone: '1-671', phoneLength: 10 },
	{ code: 'GW', label: 'Guinea-Bissau', phone: '245', phoneLength: 9 },
	{ code: 'GY', label: 'Guyana', phone: '592', phoneLength: 7 },
	{ code: 'HK', label: 'Hong Kong', phone: '852', phoneLength: 8 },
	{ code: 'HM', label: 'Heard Island and McDonald Islands', phone: '672', phoneLength: 10 },
	{ code: 'HN', label: 'Honduras', phone: '504', phoneLength: 8 },
	{ code: 'HR', label: 'Croatia', phone: '385', phoneLength: 9 },
	{ code: 'HT', label: 'Haiti', phone: '509', phoneLength: 8 },
	{ code: 'HU', label: 'Hungary', phone: '36', phoneLength: 9 },
	{ code: 'ID', label: 'Indonesia', phone: '62', phoneLength: [9,10,11,12] },
	{ code: 'IE', label: 'Ireland', phone: '353', phoneLength: 9 },
	{ code: 'IL', label: 'Israel', phone: '972', phoneLength: 9 },
	{ code: 'IM', label: 'Isle of Man', phone: '44', phoneLength: 10 },
	{ code: 'IN', label: 'India', phone: '91', phoneLength: 10 },
	{ code: 'IO', label: 'British Indian Ocean Territory', phone: '246', phoneLength: 7 },
	{ code: 'IQ', label: 'Iraq', phone: '964', phoneLength: 10 },
	{ code: 'IR', label: 'Iran, Islamic Republic of', phone: '98', phoneLength: [10,11] },
	{ code: 'IS', label: 'Iceland', phone: '354', phoneLength: 7 },
	{ code: 'IT', label: 'Italy', phone: '39', phoneLength: 10 },
	{ code: 'JE', label: 'Jersey', phone: '44', phoneLength: 10 },
	{ code: 'JM', label: 'Jamaica', phone: '1-876', phoneLength: 10 },
	{ code: 'JO', label: 'Jordan', phone: '962', phoneLength: [8, 9] },
	{ code: 'JP', label: 'Japan', phone: '81', phoneLength: 10 },
	{ code: 'KE', label: 'Kenya', phone: '254', phoneLength: [9,10] },
	{ code: 'KG', label: 'Kyrgyzstan', phone: '996', phoneLength: 9 },
	{ code: 'KH', label: 'Cambodia', phone: '855', phoneLength: 9 },
	{ code: 'KI', label: 'Kiribati', phone: '686', phoneLength: 8 },
	{ code: 'KM', label: 'Comoros', phone: '269', phoneLength: 7 },
	{ code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869', phoneLength: 10 },
	{ code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850', phoneLength: [4, 6, 7, 13] },
	{ code: 'KR', label: 'Korea, Republic of', phone: '82', phoneLength: [7, 8,10] },
	{ code: 'KW', label: 'Kuwait', phone: '965', phoneLength: 8 },
	{ code: 'KY', label: 'Cayman Islands', phone: '1-345', phoneLength: 7 },
	{ code: 'KZ', label: 'Kazakhstan', phone: '7', phoneLength: 10 },
	{ code: 'LA', label: "Lao People's Democratic Republic", phone: '856', phoneLength: [8, 9,10] },
	{ code: 'LB', label: 'Lebanon', phone: '961', phoneLength: [7, 8] },
	{ code: 'LC', label: 'Saint Lucia', phone: '1-758', phoneLength: 7 },
	{ code: 'LI', label: 'Liechtenstein', phone: '423', phoneLength: 7 },
	{ code: 'LK', label: 'Sri Lanka', phone: '94', phoneLength: [7,9] },
	{ code: 'LR', label: 'Liberia', phone: '231', phoneLength: [8, 9] },
	{ code: 'LS', label: 'Lesotho', phone: '266', phoneLength: 8 },
	{ code: 'LT', label: 'Lithuania', phone: '370', phoneLength: 8 },
	{ code: 'LU', label: 'Luxembourg', phone: '352', phoneLength: 9 },
	{ code: 'LV', label: 'Latvia', phone: '371', phoneLength: 8 },
	{ code: 'LY', label: 'Libya', phone: '218', phoneLength: 9 },
	{ code: 'MA', label: 'Morocco', phone: '212', phoneLength: 9 },
	{ code: 'MC', label: 'Monaco', phone: '377', phoneLength: 8 },
	{ code: 'MD', label: 'Moldova, Republic of', phone: '373', phoneLength: 8 },
	{ code: 'ME', label: 'Montenegro', phone: '382', phoneLength: 8 },
	{ code: 'MF', label: 'Saint Martin (French part)', phone: '590', phoneLength: 6 },
	{ code: 'MG', label: 'Madagascar', phone: '261', phoneLength: 9 },
	{ code: 'MH', label: 'Marshall Islands', phone: '692', phoneLength: 7 },
	{ code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', phone: '389', phoneLength: 8 },
	{ code: 'ML', label: 'Mali', phone: '223', phoneLength: 8 },
	{ code: 'MM', label: 'Myanmar', phone: '95', phoneLength: [7, 8, 9, 10] },
	{ code: 'MN', label: 'Mongolia', phone: '976', phoneLength: 8 },
	{ code: 'MO', label: 'Macao', phone: '853', phoneLength: 8 },
	{ code: 'MP', label: 'Northern Mariana Islands', phone: '1-670', phoneLength: 7 },
	{ code: 'MQ', label: 'Martinique', phone: '596', phoneLength: 9 },
	{ code: 'MR', label: 'Mauritania', phone: '222', phoneLength: 8 },
	{ code: 'MS', label: 'Montserrat', phone: '1-664', phoneLength: 10 },
	{ code: 'MT', label: 'Malta', phone: '356', phoneLength: 8 },
	{ code: 'MU', label: 'Mauritius', phone: '230', phoneLength: 8 },
	{ code: 'MV', label: 'Maldives', phone: '960', phoneLength: 7 },
	{ code: 'MW', label: 'Malawi', phone: '265', phoneLength: [7, 8, 9] },
	{ code: 'MX', label: 'Mexico', phone: '52', phoneLength: 10 },
	{ code: 'MY', label: 'Malaysia', phone: '60', phoneLength: [7,8,9,10] },
	{ code: 'MZ', label: 'Mozambique', phone: '258', phoneLength: 12 },
	{ code: 'NA', label: 'Namibia', phone: '264', phoneLength: 7 },
	{ code: 'NC', label: 'New Caledonia', phone: '687', phoneLength: 6 },
	{ code: 'NE', label: 'Niger', phone: '227', phoneLength: 8 },
	{ code: 'NF', label: 'Norfolk Island', phone: '672', phoneLength: 6 },
	{ code: 'NG', label: 'Nigeria', phone: '234', phoneLength: [8,10] },
	{ code: 'NI', label: 'Nicaragua', phone: '505', phoneLength: 8 },
	{ code: 'NL', label: 'Netherlands', phone: '31', phoneLength: 9 },
	{ code: 'NO', label: 'Norway', phone: '47', phoneLength: 8 },
	{ code: 'NP', label: 'Nepal', phone: '977', phoneLength: 10 },
	{ code: 'NR', label: 'Nauru', phone: '674', phoneLength: 7 },
	{ code: 'NU', label: 'Niue', phone: '683', phoneLength: 4 },
	{ code: 'NZ', label: 'New Zealand', phone: '64', phoneLength: [8, 9] },
	{ code: 'OM', label: 'Oman', phone: '968', phoneLength: 8 },
	{ code: 'PA', label: 'Panama', phone: '507', phoneLength: 8 },
	{ code: 'PE', label: 'Peru', phone: '51', phoneLength: 9 },
	{ code: 'PF', label: 'French Polynesia', phone: '689', phoneLength: 8 },
	{ code: 'PG', label: 'Papua New Guinea', phone: '675', phoneLength: 8 },
	{ code: 'PH', label: 'Philippines', phone: '63', phoneLength: 10 },
	{ code: 'PK', label: 'Pakistan', phone: '92', phoneLength: 10 },
	{ code: 'PL', label: 'Poland', phone: '48', phoneLength: 9 },
	{ code: 'PM', label: 'Saint Pierre and Miquelon', phone: '508', phoneLength: 6 },
	{ code: 'PN', label: 'Pitcairn', phone: '870', phoneLength: 9 },
	{ code: 'PR', label: 'Puerto Rico', phone: '1', phoneLength: 10 },
	{ code: 'PS', label: 'Palestine, State of', phone: '970', phoneLength: 9 },
	{ code: 'PT', label: 'Portugal', phone: '351', phoneLength: 9 },
	{ code: 'PW', label: 'Palau', phone: '680', phoneLength: 7 },
	{ code: 'PY', label: 'Paraguay', phone: '595', phoneLength: 9 },
	{ code: 'QA', label: 'Qatar', phone: '974', phoneLength: 8 },
	{ code: 'RE', label: 'Reunion', phone: '262', phoneLength: 10 },
	{ code: 'RO', label: 'Romania', phone: '40', phoneLength: 9 },
	{ code: 'RS', label: 'Serbia', phone: '381', phoneLength: 9 },
	{ code: 'RU', label: 'Russian Federation', phone: '7', phoneLength: 10 },
	{ code: 'RW', label: 'Rwanda', phone: '250', phoneLength: 9 },
	{ code: 'SA', label: 'Saudi Arabia', phone: '966', phoneLength: 9 },
	{ code: 'SB', label: 'Solomon Islands', phone: '677', phoneLength: 7 },
	{ code: 'SC', label: 'Seychelles', phone: '248', phoneLength: 7 },
	{ code: 'SD', label: 'Sudan', phone: '249', phoneLength: 9 },
	{ code: 'SE', label: 'Sweden', phone: '46', phoneLength: 7 },
	{ code: 'SG', label: 'Singapore', phone: '65', phoneLength: 8 },
	{ code: 'SH', label: 'Saint Helena', phone: '290', phoneLength: 4 },
	{ code: 'SI', label: 'Slovenia', phone: '386', phoneLength: [7,8,9] },
	{ code: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47', phoneLength: 8 },
	{ code: 'SK', label: 'Slovakia', phone: '421', phoneLength: 9 },
	{ code: 'SL', label: 'Sierra Leone', phone: '232', phoneLength: 8 },
	{ code: 'SM', label: 'San Marino', phone: '378', phoneLength: 10 },
	{ code: 'SN', label: 'Senegal', phone: '221', phoneLength: 9 },
	{ code: 'SO', label: 'Somalia', phone: '252', phoneLength: [8, 9] },
	{ code: 'SR', label: 'Suriname', phone: '597', phoneLength: [6, 7] },
	{ code: 'SS', label: 'South Sudan', phone: '211', phoneLength: 7 },
	{ code: 'ST', label: 'Sao Tome and Principe', phone: '239', phoneLength: 7 },
	{ code: 'SV', label: 'El Salvador', phone: '503', phoneLength: 8 },
	{ code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721', phoneLength: 10 },
	{ code: 'SY', label: 'Syrian Arab Republic', phone: '963', phoneLength: [7,9] },
	{ code: 'SZ', label: 'Swaziland', phone: '268', phoneLength: 8 },
	{ code: 'TC', label: 'Turks and Caicos Islands', phone: '1-649', phoneLength: 10 },
	{ code: 'TD', label: 'Chad', phone: '235', phoneLength: 6 },
	{ code: 'TF', label: 'French Southern Territories', phone: '262', phoneLength: 10 },
	{ code: 'TG', label: 'Togo', phone: '228', phoneLength: 8 },
	{ code: 'TH', label: 'Thailand', phone: '66', phoneLength: 9 },
	{ code: 'TJ', label: 'Tajikistan', phone: '992', phoneLength: 9 },
	{ code: 'TK', label: 'Tokelau', phone: '690', phoneLength: 5 },
	{ code: 'TL', label: 'Timor-Leste', phone: '670', phoneLength: 7 },
	{ code: 'TM', label: 'Turkmenistan', phone: '993', phoneLength: 8 },
	{ code: 'TN', label: 'Tunisia', phone: '216', phoneLength: 8 },
	{ code: 'TO', label: 'Tonga', phone: '676', phoneLength: 5 },
	{ code: 'TR', label: 'Turkey', phone: '90', phoneLength: [10,11] },
	{ code: 'TT', label: 'Trinidad and Tobago', phone: '1-868', phoneLength: 7 },
	{ code: 'TV', label: 'Tuvalu', phone: '688', phoneLength: 5 },
	{ code: 'TW', label: 'Taiwan, Province of China', phone: '886', phoneLength: 9 },
	{ code: 'TZ', label: 'United Republic of Tanzania', phone: '255', phoneLength: [7,9] },
	{ code: 'UA', label: 'Ukraine', phone: '380', phoneLength: 9 },
	{ code: 'UG', label: 'Uganda', phone: '256', phoneLength: [7,9] },
	{ code: 'US', label: 'United States', phone: '1', phoneLength: 10 },
	{ code: 'UY', label: 'Uruguay', phone: '598', phoneLength: 8 },
	{ code: 'UZ', label: 'Uzbekistan', phone: '998', phoneLength: 9 },
	{ code: 'VA', label: 'Holy See (Vatican City State)', phone: '379', phoneLength: 10 },
	{ code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784', phoneLength: 7 },
	{ code: 'VE', label: 'Venezuela', phone: '58', phoneLength: [7,10] },
	{ code: 'VG', label: 'British Virgin Islands', phone: '1-284', phoneLength: 7 },
	{ code: 'VI', label: 'US Virgin Islands', phone: '1-340', phoneLength: 10 },
	{ code: 'VN', label: 'Vietnam', phone: '84', phoneLength: 9 },
	{ code: 'VU', label: 'Vanuatu', phone: '678', phoneLength: 5 },
	{ code: 'WF', label: 'Wallis and Futuna', phone: '681', phoneLength: 6 },
	{ code: 'WS', label: 'Samoa', phone: '685', phoneLength: [5, 6, 7] },
	{ code: 'XK', label: 'Kosovo', phone: '383', phoneLength: 8 },
	{ code: 'YE', label: 'Yemen', phone: '967', phoneLength: 9 },
	{ code: 'YT', label: 'Mayotte', phone: '262', phoneLength: 9 },
	{ code: 'ZA', label: 'South Africa', phone: '27', phoneLength: 9 },
	{ code: 'ZM', label: 'Zambia', phone: '260', phoneLength: 9 },
	{ code: 'ZW', label: 'Zimbabwe', phone: '263', phoneLength: 9 },
];

function isNull(data) {
	if (data == null || data == undefined) return true;
	return false;
};

function removePrependingZero(teststring) {
	if (isNull(teststring)) return teststring;
	return teststring.replace(/^0+/, '');
};
function clearalphasymbols(teststring) {
	if (isNull(teststring)) return teststring;
	return teststring.replace(/[^0-9]/g, '');
};

function validatenumber(_countrycode, _mobilenumber) {
	let countrycode = removePrependingZero(clearalphasymbols(_countrycode));
	let mobilenumber = clearalphasymbols(_mobilenumber);
	let data = {};
	data.status = false;
	if (isNull(mobilenumber) || isNull(countrycode)) {
		return data;
	}
	else {
		let _index = CountryInfo.findIndex((e) => { return (clearalphasymbols(e.phone) == clearalphasymbols(countrycode)) });
		if (_index != -1) {
			data.info = { ...CountryInfo[_index] };
			if (!Array.isArray(data.info.phoneLength))
				data.info.accepetedLength = [CountryInfo[_index].phoneLength];
			else
				data.info.accepetedLength = CountryInfo[_index].phoneLength;
			data.status = data.info.accepetedLength.findIndex((e) => { return e == clearalphasymbols(mobilenumber).length; }) >= 0 ? true : false;
			if (data.status) {
				data.info.countrycode = data.info.phone;
				data.info.nationalnumber = mobilenumber;
				const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
				const _number = phoneUtil.parseAndKeepRawInput("+"+countrycode+""+mobilenumber);
				let modes = {'0': 'FIXED_LINE','1': 'MOBILE','2': 'FIXED_LINE_OR_MOBILE','3': 'TOLL_FREE','4': 'PREMIUM_RATE','5': 'SHARED_COST','6': 'VOIP','7': 'PERSONAL_NUMBER','8': 'PAGER','9': 'UAN','10': 'VOICEMAIL','-1': 'UNKNOWN'};
				data.info.devicetype=modes[phoneUtil.getNumberType(_number)];
				delete data.info.phoneLength;
				delete data.info.phone;
			}
			else {
				delete data.info;
			}
		}
		return data;
	}
};

function validatesinglenumber(_mobilenumber) {
	let mobilenumber = removePrependingZero(clearalphasymbols(_mobilenumber));
	let data = {};
	data.status = false;

	if (mobilenumber.length <= 6)
		return data;
	else if (isNull(_mobilenumber)) {
		return data;
	}
	else {
		for (loopvar = 4; (loopvar > 0) && (data.status == false); loopvar--) {

			data = validatenumber(mobilenumber.substring(0, loopvar), mobilenumber.substring(loopvar));
		}
		return data;
	}
};

function getCountryInfo(_countrycode) {
	let countrycode = removePrependingZero(clearalphasymbols(_countrycode));
	let data = {};
	if (isNull(countrycode)) {
		return null;
	}
	else {
		let _index = CountryInfo.findIndex((e) => { return (clearalphasymbols(e.phone) == clearalphasymbols(countrycode)) });
		if (_index != -1) {
			data = { ...CountryInfo[_index] };
			if (!Array.isArray(data.phoneLength))
				data.maxlength = CountryInfo[_index].phoneLength;
			else
				data.maxlength = Math.max(...CountryInfo[_index].phoneLength);
			data.countrycode = data.phone;
			delete data.phoneLength;
			delete data.phone;
			return data;
		}
		else {
			return null;
		}
	}
}

function getCountryInfoISO(countrycode) {
	let data = {};
	if (isNull(countrycode)) {
		return null;
	}
	else {
		let _index = CountryInfo.findIndex((e) => { return (e.code.toUpperCase() == (countrycode + "").toUpperCase()) });
		if (_index != -1) {
			data = { ...CountryInfo[_index] };
			if (!Array.isArray(data.phoneLength))
				data.maxlength = CountryInfo[_index].phoneLength;
			else
				data.maxlength = Math.max(...CountryInfo[_index].phoneLength);
			data.countrycode = data.phone;
			delete data.phoneLength;
			delete data.phone;
			return data;
		}
		else {
			return null;
		}
	}
}

module.exports = { validatenumber, validatesinglenumber, getCountryInfo, getCountryInfoISO }